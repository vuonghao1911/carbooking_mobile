import {
  SET_CHECKLOGIN,
  SET_USER,
  SET_PHONENUMBER,
  SET_ROUTEVEHICAL,
  SET_LISTCHAIRS,
  SET_PLACEFROM,
  SET_VETIFICATIONID,
  SET_PLACETO,
  SET_BUSSTATION,
  SET_TICKETUSERINFO,
  SET_TICKET,
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
  listChairs: [],
  placeFrom: null,
  ticketUserInfo: null,

  //user is searching
  // userSearched: null,
  userSearched: [],
  placeTo: null,

  // state searching currently
  busStation: null,

  //0: tab message
  //1: tab friend
  //2: something
  ticket: null,

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
    case SET_LISTCHAIRS:
      return {
        ...state,
        listChairs: action.payload,
      };
    case SET_PLACEFROM:
      return {
        ...state,
        placeFrom: action.payload,
      };
    case SET_VETIFICATIONID:
      return {
        ...state,
        vetificationId: action.payload,
      };
    case SET_PLACETO:
      return {
        ...state,
        placeTo: action.payload,
      };
    case SET_BUSSTATION:
      return {
        ...state,
        busStation: action.payload,
      };
    case SET_TICKETUSERINFO:
      return {
        ...state,
        ticketUserInfo: action.payload,
      };
    case SET_TICKET:
      return {
        ...state,
        ticket: action.payload,
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
