import { toast } from "react-toastify";
import { API_URL, doApiMethod } from "./apiSer";

let user = {};


export const updateUserData = async () => {
  if (localStorage["tok"]) {
    let url = API_URL + "/users/userInfo";
    try {
      let data = await doApiMethod(url, "GET");
      if (data._id) {
        user = data;
      }
      else {
        localStorage.removeItem("tok");
        user = {};
      }
      return user;
    }
    catch (err) {
      localStorage.removeItem("tok");
      user = {};
      return user;
    }
  }
  else {
    user = {};
    return user;
  }
}


export const getUserData = () => {
  return user;
}

export const updateFavorites = async (_bizCardNum) => {
  try {
    let temp_ar = [...user.cards, _bizCardNum]
    temp_ar = new Set(temp_ar);
    user.cards.splice(0, user.cards.length, ...temp_ar);
    let url = API_URL + "/users/cards"
    let data = await doApiMethod(url, "PATCH", { cards: user.cards });
    toast.success("Card Added To Favorites")
    return data;
  } catch (err) {
    toast.error("Something gone wrong, Please Try Again")
    throw err;
  }
}

export const removeFavorite = async (_bizNumber) => {
  try {
    let temp_ar = user.cards.filter(item => item != _bizNumber);
    user.cards.splice(0, user.cards.length, ...temp_ar);
    let url = API_URL + "/users/cards"
    let data = await doApiMethod(url, "PATCH", { cards: user.cards });
    toast.success("Card Removed From Favorites")
    return data;
  } catch (err) {
    toast.error("Something gone wrong, Please Try Again")
    throw err;
  }
}