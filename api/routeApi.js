import axiosClient from "./axiosClient";

const routeApi = {
  getCar: (id) => {
    const url = `/cars/${id}`;
    return axiosClient.get(url);
  },
  login: (passWord, phoneNumber) => {
    return axiosClient.post(`/login`, {
      passWord: passWord,
      phoneNumber: phoneNumber,
    });
  },
  register: (customer) => {
    return axiosClient.post(`/register`, customer);
  },
  getListPlace: () => {
    const url = `/places/all/getPlace?page=0&size=50`;
    return axiosClient.get(url);
  },
  searchRoute: (departure, destination, startDate) => {
    return axiosClient.post(`/routes/searchRoute`, {
      departure: departure,
      destination: destination,
      startDate: startDate,
    });
  },
  bookingTicket: (ticket) => {
    return axiosClient.post(`/tickets/booking`, ticket);
  },
};

export default routeApi;
