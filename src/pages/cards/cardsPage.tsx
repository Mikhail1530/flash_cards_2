import { useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { useGetCardsQuery } from '@/services/cards/cards.servies'
import { RootState } from '@/services/store'

import s from '@/pages/desksPage/desksPage.module.scss'

export type cardType = {
  author: CardTypeAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  shots: number
  updated: string
  userId: string
}
export type CardTypeAuthor = { id: string; name: string }
const CardsPage = () => {
  const id = useSelector<RootState, string>(state => state.app.decksId)
  const { data } = useGetCardsQuery(id ?? '')

  console.log(data)

  return (
    <div>
      <Button onClick={() => {}}>lern</Button>
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
                <TableCell>{el.questionImg && <img src={el.questionImg} />}</TableCell>
                <TableCell>{el.question}</TableCell>
                <TableCell>{el.answerImg && <img src={el.answerImg} />}</TableCell>
                <TableCell>{el.answer}</TableCell>
                <TableCell>{new Date(el.created).toLocaleDateString()}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default CardsPage
