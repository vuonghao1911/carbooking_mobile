import {
  SET_CHECKLOGIN,
  SET_USER,
  SET_PHONENUMBER,
  SET_ROUTEVEHICAL,
  SET_SHOWALERT,
  SET_SHOWTABHISTORYSEARH,
  SET_VETIFICATIONID,
  SET_LOADINGSEARCHFUNC,
  SET_SEARCHINGSTATUS,
  SET_SHOWTABINFO,
  SET_INDEXTAB,
  SET_USERCHATTING,
  SET_SEARCHEDUSERS,
  SET_IDCONVERSATION,
  SET_SOCKET,
} from "./Actions";

//innite state
const initState = {
  user: null,
  phoneNumber: null,
  checkLogin: false,
  routeVehical: null,
  //////
  showAlert: false,
  showTabHistorySearch: false,
  showTabInfo: false,

  //user is searching
  // userSearched: null,
  userSearched: [],
  loadingSearchFunc: true,

  // state searching currently
  searchingStatus: false,

  //0: tab message
  //1: tab friend
  //2: something
  indexTab: 0,

  //user is chatting
  userChatting: null,
  //id cua cuoc hoi thoai dang chat
  idConversation: null,

  //list of searched users
  vetificationId: null,

  socket: null,
};

//depatch
const Reducer = (state, action) => {
  switch (action.type) {
    case SET_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case SET_CHECKLOGIN:
      return {
        ...state,
        checkLogin: action.payload,
      };
    case SET_ROUTEVEHICAL:
      return {
        ...state,
        routeVehical: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_SHOWALERT:
      return {
        ...state,
        showAlert: action.payload,
      };
    case SET_SHOWTABHISTORYSEARH:
      return {
        ...state,
        showTabHistorySearch: action.payload,
      };
    case SET_VETIFICATIONID:
      return {
        ...state,
        vetificationId: action.payload,
      };
    case SET_LOADINGSEARCHFUNC:
      return {
        ...state,
        loadingSearchFunc: action.payload,
      };
    case SET_SEARCHINGSTATUS:
      return {
        ...state,
        searchingStatus: action.payload,
      };
    case SET_SHOWTABINFO:
      return {
        ...state,
        showTabInfo: action.payload,
      };
    case SET_INDEXTAB:
      return {
        ...state,
        indexTab: action.payload,
      };
    case SET_USERCHATTING:
      return {
        ...state,
        userChatting: action.payload,
      };
    case SET_SEARCHEDUSERS:
      return {
        ...state,
        searchedUsers: action.payload,
      };
    case SET_IDCONVERSATION:
      return {
        ...state,
        idConversation: action.payload,
      };
    case SET_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
  }
};

export { initState };
export default Reducer;
