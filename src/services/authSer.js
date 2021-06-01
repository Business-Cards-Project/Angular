import { API_URL, doApiMethod } from "./apiSer"



//Check The Token
export const checkIfUser = async () => {
  if (!localStorage["tok"]) {
    return { err: "No Token" }
  }
  try {
    let url = API_URL + "/users/authUser";
    let data = await doApiMethod(url, "GET");
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}