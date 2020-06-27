import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Петя",
          avatar:
            "https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg",
        },
        {
          id: 2,
          name: "Марина",
          avatar:
            "https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg",
        },
        {
          id: 3,
          name: "Света",
          avatar:
            "https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg",
        },
        {
          id: 4,
          name: "Валера",
          avatar:
            "https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg",
        },
      ],
      messagesData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "Show" },
        { id: 3, text: "Whats off?" },
        { id: 4, text: "Here you are" },
      ],
      newMessageBody: ''
    },
    profilePage: {
      postsData: [
        { id: 1, text: "Yo", likesCount: 2 },
        { id: 2, text: "Yo", likesCount: 1 },
      ],
      newPostText: "",
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("wait");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
    
  }
};


export default store;
window.store = store;
