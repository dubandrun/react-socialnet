import React, { useState } from 'react'

import styles from './Pagination.module.css'
import cn from 'classnames'

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  
  for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
  } 

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && 
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}

      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map( page => {
          return (
            <span 
              className={cn({
                [styles.selectedPage] : currentPage === page
              }, 
                styles.pageNumber
              )}
              key={page}
              onClick={(event) => {onPageChanged(page)}}
            >{page}</span>
          )
      })}

      {portionCount > portionNumber && 
      <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
  )
}

export default Pagination