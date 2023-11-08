import instance from "./api";

// export const wish = async (filter, id, isWished) => {
//   return await instance
//     .patch(`/userinfo/wishlist`, {
//       filter,
//       id,
//       isWished,
//     })
//     .then((response) => {
//       return {
//         isSuccess: true,
//         result: response.data.response,
//       };
//     })
//     .catch((error) => Promise.reject(error));
// };

export const addWish = async (id) => {
  return await instance
    .post(`/wishlist/${id}`)
    .then((response) => ({
      isSuccess: true,
      message: response.data.message,
    }))
    .catch((error) => Promise.reject(error));
};

export const deleteWish = async (id) => {
  return await instance
    .delete(`/wishlist/${id}`)
    .then((response) => ({
      isSuccess: true,
      message: response.data.message,
    }))
    .catch((error) => Promise.reject(error));
};

export const getWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist`)
    .then((response) => {
      return {
        isSuccess: true,
        result: response.data.response,
      };
    })
    .catch((error) => Promise.reject(error));
};
