import React from 'react'

import User from './User'
import Pagination from '../common/Pagination/Pagination';

const Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
  return (
    <div>
      
      <Pagination 
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        currentPage={currentPage} 
        onPageChanged={onPageChanged}
      />

      <div>
        { 
          users.map((user) => <User 
            key={user.id} 
            user={user} 
            followingProgress={props.followingProgress}
            followThunkCreator={props.followThunkCreator} 
            unfollowThunkCreator={props.unfollowThunkCreator}
          />)
        } 
      </div>

    </div>
  )
}

export default Users