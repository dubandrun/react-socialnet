import React from 'react'

import styles from './Pagination.module.css'

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  
  for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
  } 

  return (
    <div>
      {pages.slice(0, 3).map( page => {
        return <span 
          className={currentPage === page ? styles.selectedPage : null}
          onClick={(event) => {onPageChanged(page)}}>
          {page}
        </span>
      })}
    </div>
  )
}

export default Pagination