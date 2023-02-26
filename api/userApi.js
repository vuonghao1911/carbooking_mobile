import axiosClient from "./axiosClient";

const userApi = {
  login: (passWord, phoneNumber) => {
    return axiosClient.post(`/login`, {
      passWord: passWord,
      phoneNumber: phoneNumber,
    });
  },
  register: (customer) => {
    return axiosClient.post(`/register`, customer);
  },

  changeInfo: (newInfo) => {
    return axiosClient.post(`/customers/update`, newInfo);
  },
  changePassWord: (phoneNumber, passWord, oldPass) => {
    return axiosClient.post(`/changePass`, {
      newPass: passWord,
      phoneNumber: phoneNumber,
      oldPass: oldPass,
    });
  },
  forgotPassWord: (phoneNumber, passWord) => {
    return axiosClient.post(`/forgot`, {
      newPass: passWord,
      phoneNumber: phoneNumber,
    });
  },
};

export default userApi;
