import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  setCurrentPage,
  requestUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/users-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getLoading,
  getFollowingProgress,
} from "../../redux/user-selectors";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

// 2 контейнерные компоненты - одна с коннектом общая для общения со стором, 2ая для обертки Users(чтобы отделить аякс-запрос)
class UsersContainer extends React.Component {
  // если кроме пропсов никаких данных не приходит, конструктор создавать не обязательно с super(props), т.к. это делается автоматически
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsersThunkCreator(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsersThunkCreator(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingProgress={this.props.followingProgress}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followThunkCreator={this.props.followThunkCreator}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isLoading: state.usersPage.isLoading,
//     followingProgress: state.usersPage.followingProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getLoading(state),
    followingProgress: getFollowingProgress(state),
  };
};

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

const mapDispatchToProps = {
  setCurrentPage,
  requestUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
};

//упрощенная передача диспатча + сделал через константу для наглядности
//упрощенная обертка в hoc
// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  // withAuthRedirect// вызовется 1ой, примет
)(UsersContainer);
