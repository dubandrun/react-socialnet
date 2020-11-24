const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Петя",
      avatar:
        "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",
    },
    {
      id: 2,
      name: "Марина",
      avatar:
        "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",
    },
    {
      id: 3,
      name: "Света",
      avatar:
        "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",
    },
    {
      id: 4,
      name: "Валера",
      avatar:
        "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",
    },
  ],
  messagesData: [
    { id: 1, text: "Hi" },
    { id: 2, text: "Show" },
    { id: 3, text: "Whats off?" },
    { id: 4, text: "Here you are" },
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
   
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        //добавление объекта через запятую будет эквивалентно .push({ id: 6, text: body }
        messagesData: [...state.messagesData, {id: 6, text: body}]
      }
    }

    default:
      return state
  }
}

// action creators
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody
})

export default dialogsReducer