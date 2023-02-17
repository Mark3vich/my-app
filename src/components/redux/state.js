const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 20 },
      ],
      newPostText: "wolf",
    },
    massagesPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Good" },
        { id: 4, message: "GoodGame" },
        { id: 5, message: "Graps" },
      ],
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Greg" },
        { id: 3, name: "Fedor1" },
        { id: 4, name: "Fedor2" },
        { id: 5, name: "Git" },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // patern "observer" addEventListener
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.post.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatchEvent(action) {
    // {type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

window.store = store;
export default store;

// store - ООП
