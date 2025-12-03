const initialState = {
    favorites : {
        content:[]
    }
}

const mainReducer = (currentState = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_FAVORITES" : return{
        ...currentState,
        favorites : {
            ...currentState.favorites,
            content : currentState.favorites.content.concat(action.payload)
        }
      }
      default : return currentState
    }
}

export default mainReducer