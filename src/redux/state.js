
let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Петя', avatar: 'https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg'},
        {id: 2, name: 'Марина', avatar: 'https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg'},
        {id: 3, name: 'Света', avatar: 'https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg'},
        {id: 4, name: 'Валера', avatar: 'https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg'}
      ],
      messagesData: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'Show'},
        {id: 3, text: 'Whats off?'},
        {id: 4, text: 'Here you are'}
      ],
      
    },
    profilePage: {
      postsData: [
        {id: 1, text: 'Yo', likesCount: 2},
        {id: 2, text: 'Yo', likesCount: 1}
      ],
      newPostText: ''
    }
  },

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('wait')
  },

  addPost() {
    let message = {
      id: 5,
      text: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.postsData.push(message)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updatePostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer // паттерн наблюдатель
  }
}

export default store
window.store = store