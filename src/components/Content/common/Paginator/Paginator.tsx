import React from 'react'
import s from "./Paginator.module.css";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (b: number) => void
}

let Paginator: React.FC<PropsType> = props => {

  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged
  } = props

  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pagesButtonSwitcher = [];
  pagesButtonSwitcher.push(1)
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 3) {
      pagesButtonSwitcher.push(2, 3, 4, 5, 6)
      break;
    } else if (i > pagesCount - 3) {
      pagesButtonSwitcher.push(pagesCount - 2)
      pagesButtonSwitcher.push(pagesCount - 1)
      break;
    } else {
      pagesButtonSwitcher.push(i)
    }
  }
  pagesButtonSwitcher.push(pagesCount)

  return (
    <div>
      {pagesButtonSwitcher.map(b =>
        <button
          className={currentPage === b ? s.selectedPage : s.nonSelectedPage}
          onClick={(e) => {
            onPageChanged(b)
          }}>{b}</button>
      )}
    </div>
  )
}

export default Paginator