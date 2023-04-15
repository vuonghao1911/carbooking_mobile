//actions

export const SET_PHONENUMBER = "set_phoneNumber";
export const SET_USER = "set_User";
export const SET_VETIFICATIONID = "Set_VetificationId";
export const SET_CHECKLOGIN = "set_CheckLogin";
export const SET_ROUTEVEHICAL = "set_RouteVehicle";
export const SET_LISTCHAIRS = "set_ListChairs";
export const SET_PLACEFROM = "set_PlaceFrom";
export const SET_PLACETO = "set_PlaceTo";
export const SET_BUSSTATION = "set_BusStation";
export const SET_TICKETUSERINFO = "set_TicketUserInfo";
export const SET_TICKET = "set_Ticket";
export const SET_NAVIGATION = "set_Navigation";
export const SET_CHECKFORGOTPASSWORD = "set_ForgotPassword";
export const SET_PROMOTIONS = "set_Promotions";
export const SET_CLICK = "set_Click";

export const SetPhoneNumber = (payload) => {
  return {
    type: SET_PHONENUMBER,
    payload,
  };
};

export const SetTicket = (payload) => {
  return {
    type: SET_TICKET,
    payload,
  };
};

export const SetTicketUserInfo = (payload) => {
  return {
    type: SET_TICKETUSERINFO,
    payload,
  };
};

export const SetUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};
export const SetVetificaitonId = (payload) => {
  return {
    type: SET_VETIFICATIONID,
    payload,
  };
};
export const SetCheckLogin = (payload) => {
  return {
    type: SET_CHECKLOGIN,
    payload,
  };
};
export const SetRouteVehicle = (payload) => {
  return {
    type: SET_ROUTEVEHICAL,
    payload,
  };
};

export const SetListChairs = (payload) => {
  return {
    type: SET_LISTCHAIRS,
    payload,
  };
};

export const SetPlaceFrom = (payload) => {
  return {
    type: SET_PLACEFROM,
    payload,
  };
};

export const SetPlaceTo = (payload) => {
  return {
    type: SET_PLACETO,
    payload,
  };
};

export const SetBusStation = (payload) => {
  return {
    type: SET_BUSSTATION,
    payload,
  };
};
export const SetNavigation = (payload) => {
  return {
    type: SET_NAVIGATION,
    payload,
  };
};

export const SetCheckForgotPassword = (payload) => {
  return {
    type: SET_CHECKFORGOTPASSWORD,
    payload,
  };
};

export const SetPromotions = (payload) => {
  return {
    type: SET_PROMOTIONS,
    payload,
  };
};
export const SetClick = (payload) => {
  return {
    type: SET_CLICK,
    payload,
  };
};
