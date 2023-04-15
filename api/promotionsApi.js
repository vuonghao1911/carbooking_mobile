import axiosClient from "./axiosClient";

const promotionsApi = {
  getAllPromotions: (amount) => {
    const url = `/promotions/all/getPromotionCurrenDate`;
    return axiosClient.get(url);
  },
};

export default promotionsApi;
