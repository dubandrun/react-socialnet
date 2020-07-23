import React from "react";
import { connect } from 'react-redux'

import { 
  setCurrentPage,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator
} from '../../redux/users-reducer';

import Users from './Users'

import Preloader from "../common/Preloader/Preloader";


// 2 контейнерные компоненты - одна с коннектом общая для общения со стором, 2ая для обертки Users(чтобы отделить аякс-запрос)
class UsersContainer extends React.Component {
  // если кроме пропсов никаких данных не приходит, конструктор создавать не обязательно с super(props), т.к. это делается автоматически
  
    componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
  
    onPageChanged = (pageNumber) => {
      // this.props.setCurrentPage(pageNumber)
      this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }
  
    render() {
      return <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingProgress={this.props.followingProgress}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followThunkCreator={this.props.followThunkCreator}
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
    isLoading: state.usersPage.isLoading,
    followingProgress: state.usersPage.followingProgress
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
  setCurrentPage, 
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
}
//упрощенная передача диспатча + сделал через константу для наглядности
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



