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
export const SET_INDEXTAB = "set_IndexTab";
export const SET_USERCHATTING = "set_UserChatting";
export const SET_SEARCHEDUSERS = "set_SearchUsers";
export const SET_IDCONVERSATION = "set_IdConversation";
export const SET_SOCKET = "set_Socket";

export const SetPhoneNumber = (payload) => {
  return {
    type: SET_PHONENUMBER,
    payload,
  };
};

export const SetIndexTab = (payload) => {
  return {
    type: SET_INDEXTAB,
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
export const SetUserChatting = (payload) => {
  return {
    type: SET_USERCHATTING,
    payload,
  };
};

export const SetSearchedUser = (payload) => {
  return {
    type: SET_SEARCHEDUSERS,
    payload,
  };
};

export const SetIdConversation = (payload) => {
  return {
    type: SET_IDCONVERSATION,
    payload,
  };
};
export const SetSocket = (payload) => {
  return {
    type: SET_SOCKET,
    payload,
  };
};
