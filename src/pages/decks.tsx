import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'
import {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRemoveDeckMutation,
} from '@/services/decks/decks.servies'

import s from './desksPage/desksPage.module.scss'
import { appAC } from '@/services/app.slice'
import { PATH } from '@/router'
import TrashIcon from '@/assets/icons/trashIcon'
import EditIcon from '@/assets/icons/editIcon'
import PlayIcon from '@/assets/icons/playIcon'

type propsType = {
  currentPage: number
  maxCardsCount: number
  minCardsCount: number
  name: string
  userId: string
}
//refetch-обновить данные, новый запрос
export const Decks = ({ currentPage, maxCardsCount, minCardsCount, name, userId }: propsType) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, error, refetch } = useGetDecksQuery({
    currentPage,
    maxCardsCount,
    minCardsCount,
    name,
  })
  // const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clpuyvj1o01y0ry2xjr6yeuny' })
  const { data: userDecks, error: userDecksErr } = useGetDeckByIdQuery({
    maxCardsCount,
    minCardsCount,
    name,
    userId,
  })
  const [createDeck, { isLoading: is }] = useCreateDeckMutation()
  // const [data, error] = useRemoveDeckMutation()
  const [removeDeck, { isLoading: isRemoved }] = useRemoveDeckMutation()

  // const [updateDeck, { isLoading: isUpdating }] = useUpdatePostMutation()
  console.log('userDecks, userDecksErr', userDecks, userDecksErr)
  // if( error ){
  //   return <h2>{error.data.message}</h2>
  //   // return <h2>{JSON.stringify(error)}</h2>
  // }

  const getCards = (el: any) => {
    console.log(el)
    dispatch(appAC.setDecksId(el.id))
    dispatch(appAC.setDecksName(el.name))
    dispatch(appAC.setDecksImg(el.cover))
    navigate(PATH.cards)
  }

  return (
    <>
      <Table>
        <TableHead className={s.tableHead}>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(el => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.cardsCount}</TableCell>
                <TableCell>{new Date(el.updated).toLocaleDateString()}</TableCell>
                <TableCell>{el.author.name}</TableCell>
                <TableCell>
                  <Button onClick={() => getCards(el)} title={'play'}>
                    <PlayIcon colorFill={'#fff'} />
                  </Button>
                  <Button title={'edit cards'}>
                    <EditIcon colorFill={'#fff'} />
                  </Button>
                  <Button onClick={() => removeDeck(el)} title={'delete cards'}>
                    <TrashIcon colorFill={'#fff'} />
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
