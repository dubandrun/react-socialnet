import React from 'react';
// import classes from './ProfileInfo.module.css'
// import Preloader from '../../common/Preloader/Preloader';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  activateEditMode = () => {
    //setState асинхронный
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    //setState асинхронный
    this.setState({
      editMode: false
    })
    this.props.updateUserStatusThunkCreator(this.state.status)
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  render() {
    return (
      <div>

        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          </div>
        }

        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
          </div>
        }

      </div>
    )
  }
}

export default ProfileStatus;