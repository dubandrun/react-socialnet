
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

  switch(action.type) {

    case ADD_POST:
      let message = {
        id: 5,
        text: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(message)
      state.newPostText = ''
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state
      
    default:
      return state
  }
}

// action creators
export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
})

export default profileReducer