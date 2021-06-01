import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiSer';
import PageHeader from './common/pageHeader';

function UserInfo(props) {

  let [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/users/userInfo"
    let data = await doApiMethod(url, "GET");
    console.log(data);
    // userInfo.dateCreated = new Date(userInfo.createdAt).toDateString();
    data.dateCreated = data.createdAt.substr(0, data.createdAt.indexOf("T"));
    setUserInfo(data)
  }

  return (
    <div>
      <PageHeader></PageHeader>
      <div>
        <h4>Name: {userInfo.name}</h4>
        <h4>Email: {userInfo.email}</h4>
        <h4>Sign Up Date: {userInfo.dateCreated}</h4>
      </div>
    </div>
  )
}

export default UserInfo