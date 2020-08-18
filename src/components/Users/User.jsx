import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './Users.module.css'

import userPhoto from '../../assets/images/avatar.jpg'

const Users = ({user, followingProgress, unfollowThunkCreator, followThunkCreator}) => {
  return (
    <div>
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
                disabled={followingProgress.some(id => id === user.id)} 
                onClick={() => unfollowThunkCreator(user.id)}
              >Unfollow</button>
            : <button 
                disabled={followingProgress.some(id => id === user.id)} 
                onClick={() => followThunkCreator(user.id)}
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
  )
}

export default Users