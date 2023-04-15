import axiosClient from "./axiosClient";

const ticketApi = {
  getListTicket: (userId) => {
    const url = `/tickets/${userId}`;
    return axiosClient.get(url);
  },
  payment: (amount) => {
    const url = `/payments/zalopay`;
    return axiosClient.post(url, {
      totalMoney: amount,
    });
  },
  getListTicketRefund: (userId) => {
    const url = `/tickets/refund/${userId}`;
    return axiosClient.get(url);
  },
  getStatusPayment: (appTransId, appTime, ticket) => {
    const url = `/payments/getStatus`;
    return axiosClient.post(url, {
      appTransId: appTransId,
      appTime: appTime,
      ticket: ticket,
    });
  },
};

export default ticketApi;
