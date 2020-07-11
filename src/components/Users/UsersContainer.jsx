import React from "react";
import { connect } from 'react-redux'

import * as axios from 'axios'

import { 
  follow, 
  unfollow, 
  setUsers, 
  setCurrentPage,
  setUsersTotalCount,
  setPreloader
} from '../../redux/users-reducer';

import Users from './Users'

import Preloader from "../common/Preloader/Preloader";

// 2 контейнерные компоненты - одна с коннектом общая для общения со стором, 2ая для обертки Users(чтобы отделить аякс-запрос)
class UsersContainer extends React.Component {
  // если кроме пропсов никаких данных не приходит, конструктор создавать не обязательно с super(props), т.к. это делается автоматически
  
    componentDidMount() {
      this.props.setPreloader(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setPreloader(false)
        return (
          this.props.setUsers(res.data.items),
          this.props.setUsersTotalCount(res.data.totalCount)
        )
      })
    }
  
    onPageChanged = (pageNumber) => {
      this.props.setPreloader(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setPreloader(false)
        this.props.setUsers(res.data.items)
      })
    }
  
    render() {
      return <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
        />
      </>
    }
  }

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollow(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPage(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCount(totalCount))
//     },
//     setPreloader: (toggle) => {
//       dispatch(setPreloaderActionCreadtor(toggle))
//     }
//   }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

let mapDispatchToProps = {
  follow, 
  unfollow, 
  setUsers,
  setCurrentPage, 
  setUsersTotalCount, 
  setPreloader
}
//упрощенная передача диспатча
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)





