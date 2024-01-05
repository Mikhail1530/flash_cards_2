import { useEffect, useState } from 'react'

import TrashIcon from '@/assets/icons/trashIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { Decks } from '@/pages/decks'

import s from './desksPage.module.scss'

const DesksPage = () => {
  const [sliderValue, setSliderValue] = useState([0, 100])
  const [currentPage, setCurrentPage] = useState(4)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setCurrentPage(1)
  }, [sliderValue])
  const clearFilterHandler = () => {
    setCurrentPage(1)
    setSliderValue([0, 100])
    setSearchValue('')
  }
  const searchValueHandler = (e: any) => {
    setSearchValue(e.currentTarget.value)
  }
  const clearInputHandler = () => {
    setSearchValue('')
  }

  return (
    <div className={s.container}>
      <div className={`${s.flexBox}  ${s.pageHeader}`}>
        <h2 className={s.pageTitle}>Packs list</h2>
        <Button className={s.btn} onClick={clearFilterHandler}>
          Add New Pack
        </Button>
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
          buttonsName={['My Cards', 'All Cards']}
          className={s.tabSwitcherWrap}
          title={'Show packs cards'}
        />
        <div className={s.wrapSlider}>
          <h4>Number of cards</h4>
          <Slider setSliderValue={setSliderValue} sliderValue={sliderValue} />
        </div>
        <Button className={s.clierFilterBtn}>
          <TrashIcon colorFill={'#fff'} />
          Clear Filter
        </Button>
      </div>

      <Decks
        currentPage={currentPage}
        maxCardsCount={sliderValue[1]}
        minCardsCount={sliderValue[0]}
        name={searchValue}
      />
    </div>
  )
}

export default DesksPage
