import { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { TrashIcon } from '@/assets'
import AddNewDeckBody from '@/components/addNewDeckBody/addNewDeckBody'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/pagination'
import Portal from '@/components/ui/portal/portal'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher, TabSwitcherBtnType } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import { Decks } from '@/pages/desksPage/decks'
import { useGetDecksQuery } from '@/services/decks/decks.servies'
import { RootStateType } from '@/services/store'

import s from './desksPage.module.scss'

const DesksPage = () => {
  const userId = useSelector<RootStateType, string>(state => state.app.user.id)

  const [sliderValue, setSliderValue] = useState([0, 100])
  const [searchValue, setSearchValue] = useState('')
  const [tabSwitcherValue, setTabSwitcherValue] = useState('all')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const selectOptions = ['10', '20', '50', '100']
  const { data: decksData, error } = useGetDecksQuery({
    currentPage,
    itemsPerPage,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: searchValue,
    ...(tabSwitcherValue !== 'all' ? { authorId: userId } : {}),
  })

  useEffect(() => decksData && setCurrentPage(decksData.pagination.currentPage), [decksData])
  const arrBtnTabSwitcher = [
    { name: 'My Cards', value: 'me' },
    { name: 'All Cards', value: 'all' },
  ]

  useEffect(() => {
    setCurrentPage(1)
  }, [sliderValue, searchValue])
  const clearFilterHandler = () => {
    setCurrentPage(1)
    setSliderValue([0, 100])
    clearInputHandler()
  }
  const searchValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value)
  const clearInputHandler = () => setSearchValue('')
  const tabSwitcherHandler = (dataBtn: TabSwitcherBtnType) => setTabSwitcherValue(dataBtn.value)
  const isOpenHandler = (isOpenValue: boolean) => setIsOpen(isOpenValue)

  // isLoading - первая загрузка, когда нет данных
  // isFetching - обновление данных, например при возвращении на вкладку
  // Иными словами isLoading === true только при изначальной загрузке, а isFetching - при любом запросе
  //
  // При isLoading мы показываем крутилки/скелетоны, при isFetching дизейблим пагинацию, как пример

  return (
    <>
      <div className={`${s.flexBox}  ${s.pageHeader}`}>
        <Typography as={'h2'} className={s.pageTitle}>
          Packs list
        </Typography>
        <Portal
          children={<AddNewDeckBody isOpenHandler={isOpenHandler} />}
          isOpen={isOpen}
          portalWrapClass={s.portalWrapClass}
          textBtnOpen={'Add New Pack'}
          title={'Add New Deck'}
        />
      </div>
      <div className={`${s.flexBox} ${s.filterWrap}`}>
        <Input
          className={s.search}
          clearInput={clearInputHandler}
          onChange={searchValueHandler}
          placeholder={'Input search'}
          type={'search'}
          value={searchValue}
        />
        <TabSwitcher
          activeBtn={tabSwitcherValue}
          buttonsData={arrBtnTabSwitcher}
          className={s.tabSwitcherWrap}
          onChange={tabSwitcherHandler}
          title={'Show packs cards'}
        />
        <div className={s.wrapSlider}>
          <h4>Number of cards</h4>
          <Slider setSliderValue={setSliderValue} sliderValue={sliderValue} />
        </div>
        <Button className={s.clierFilterBtn} onClick={clearFilterHandler}>
          <TrashIcon colorFill={'#fff'} />
          Clear Filter
        </Button>
      </div>
      {error && <p>useGetDecksQuery: {error.toString()}</p>}
      {decksData && <Decks items={decksData.items} userId={userId} />}
      <Pagination
        currentPage={currentPage}
        handlePageChange={(pageNumber: number) => setCurrentPage(pageNumber)}
        handleSetItemsPerPage={(numItemsPerPage: number) => setItemsPerPage(numItemsPerPage)}
        itemsPerPage={itemsPerPage}
        selectOptions={selectOptions}
        totalCount={decksData?.maxCardsCount}
        totalPages={decksData?.pagination.totalPages}
      />
    </>
  )
}

export default DesksPage
