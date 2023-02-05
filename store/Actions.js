//actions

export const SET_PHONENUMBER = "set_phoneNumber";
export const SET_USER = "set_User";
export const SET_VETIFICATIONID = "Set_VetificationId";
export const SET_CHECKLOGIN = "set_CheckLogin";
export const SET_ROUTEVEHICAL = "set_RouteVehicle";
export const SET_LISTCHAIRS = "set_ListChairs";
export const SET_SHOWTABHISTORYSEARH = "set_ShowTabHistorySearch";
export const SET_LOADINGSEARCHFUNC = "set_LoadingSearchFunc";
export const SET_SEARCHINGSTATUS = "set_SearchStatus";
export const SET_SHOWTABINFO = "set_ShowTabInfo";
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

export const SetShowTabInfo = (payload) => {
  return {
    type: SET_SHOWTABINFO,
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

export const SetShowTabHistorySearch = (payload) => {
  return {
    type: SET_SHOWTABHISTORYSEARH,
    payload,
  };
};

export const SetLoadingSearchFunc = (payload) => {
  return {
    type: SET_LOADINGSEARCHFUNC,
    payload,
  };
};

export const SetSearchingStatus = (payload) => {
  return {
    type: SET_SEARCHINGSTATUS,
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
