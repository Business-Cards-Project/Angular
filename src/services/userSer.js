import { API_URL, doApiMethod } from "./apiSer";
import { checkIfUser } from "./authSer";

let user = {};

export const getUserDataFromApi = async () => {
  try {
    let url = API_URL + "/users/userInfo";
    let data = await doApiMethod(url, "GET");
    console.log(data);
    user = data;
  } catch (err) {
    console.log(err);
    user = {};
  }
}

export const checkUser = async () => {
  if (localStorage["tok"]) {
    let dataUser = await checkIfUser();
    if (!dataUser.status) {
      localStorage.removeItem("tok");
      window.location.href = "/login";
    } else {
      getUserDataFromApi();
    }
  }
}

export const getUserData = () => {
  return user;
}