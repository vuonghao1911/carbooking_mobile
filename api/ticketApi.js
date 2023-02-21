import axiosClient from "./axiosClient";

const ticketApi = {
  getListTicket: (userId) => {
    const url = `/tickets/${userId}`;
    return axiosClient.get(url);
  },
};

export default ticketApi;
