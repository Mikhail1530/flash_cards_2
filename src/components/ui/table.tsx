import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cx from 'clsx'

import s from './table.module.scss'
export const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    return <table className={cx(className, s.table)} {...rest} ref={ref} />
  }
)
export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    return <thead className={cx(className, s.tableHead)} {...rest} ref={ref} />
  }
)
export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref} />
  }
)
export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ ...rest }, ref) => {
    return <th {...rest} ref={ref} />
  }
)
export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    return <td className={cx(className, s.tableCell)} {...rest} ref={ref} />
  }
)
