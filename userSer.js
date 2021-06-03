import { API_URL, doApiMethod } from "./apiSer";

let user = {};


export const updateUserData = async () => {
  if (localStorage["tok"]) {
    // אם יש טוקן מנסים להוציא את המידע
    // של המשתמש במידה והטוקן לא תקין
    // נשלח אותו ללוג אין
    let url = API_URL + "/users/userInfo";
    try {
      let data = await doApiMethod(url, "GET");
      if (data._id) {
        user = data
      }
      else {
        localStorage.removeItem("tok");
        user = {}
      }
      return user
    }
    catch (err) {
      localStorage.removeItem("tok");
      user = {};
      return user
    }
  }
  else {
    user = {}
    return user;
  }
}


export const getUserData = () => {
  return user;
}