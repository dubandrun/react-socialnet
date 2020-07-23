import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './Users.module.css'

import userPhoto from '../../assets/images/avatar.jpg'

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
  } 

  return (
    <div>
      <div>
        {pages.slice(0, 3).map( page => {
          return <span 
            className={props.currentPage === page ? styles.selectedPage : null}
            onClick={(event) => {props.onPageChanged(page)}}>
              {page}
          </span>
        })}
      </div>
      {
        props.users.map((user) => {return ( 
          <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img className={styles.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
              </NavLink>
            </div>
            <div>
              {
              user.following 
                ? <button 
                    disabled={props.followingProgress.some(id => id === user.id)} 
                    onClick={() => props.unfollowThunkCreator(user.id)}
                  >Unfollow</button>

                : <button 
                    disabled={props.followingProgress.some(id => id === user.id)} 
                    onClick={() => props.followThunkCreator(user.id)}
                  >Follow</button>
              }
            </div>
          </span>

          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </span>
          </span>
        </div>
        )})
    }
  </div>
  )
}

export default Users