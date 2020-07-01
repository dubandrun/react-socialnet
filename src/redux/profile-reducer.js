
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  postsData: [
    { id: 1, text: "Yo", likesCount: 2 },
    { id: 2, text: "Yo", likesCount: 1 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        text: state.newPostText,
        likesCount: 12,
      };
      let stateCopy = {...state}
      //делаем глубокое копирование, т.к. мы изменяем массив postData
      //далее делаем копию массива! а не объекта
      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state}
      //не делаем глубокое копирование, т.к. мы изменяем только примитив(строку), массивы и т.д. не трогаем, поэтому нет необходимости
      stateCopy.newPostText = action.newText;
      return stateCopy
    }  
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