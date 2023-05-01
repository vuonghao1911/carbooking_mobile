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
  SET_NAVIGATION,
  SET_CHECKFORGOTPASSWORD,
  SET_PROMOTIONS,
  SET_CLICK,
  SET_CLICK_2,
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

  //
  checkForgotPassword: false,
  placeTo: null,

  // state searching currently
  busStation: null,

  ticket: null,

  //set navigation for options
  navigation: null,
  //info promotion
  promotions: null,

  // vetificationId for otp
  vetificationId: null,

  click: true,
  click2: true,
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
    case SET_NAVIGATION:
      return {
        ...state,
        navigation: action.payload,
      };
    case SET_CHECKFORGOTPASSWORD:
      return {
        ...state,
        checkForgotPassword: action.payload,
      };
    case SET_PROMOTIONS:
      return {
        ...state,
        promotions: action.payload,
      };
    case SET_CLICK:
      return {
        ...state,
        click: action.payload,
      };
    case SET_CLICK_2:
      return {
        ...state,
        click2: action.payload,
      };
  }
};

export { initState };
export default Reducer;
