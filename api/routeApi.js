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
    const url = `/places/all/getPlace`;
    return axiosClient.get(url);
  },
};

export default routeApi;
