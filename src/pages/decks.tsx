import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'
import { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } from '@/services/base-api'

type propsType = {
  currentPage: number
  maxCardsCount: number
  minCardsCount: number
  name: string
}

export const Decks = ({ currentPage, maxCardsCount, minCardsCount, name }: propsType) => {
  const { data } = useGetDecksQuery({
    currentPage,
    maxCardsCount,
    minCardsCount,
    name,
  })
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clpuyvj1o01y0ry2xjr6yeuny' })
  const [createDeck, { isLoading: is }] = useCreateDeckMutation()

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Updated</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
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
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
