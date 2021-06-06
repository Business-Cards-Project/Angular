import React from 'react';
import { Route, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { checkIfUser } from '../../services/authSer';
import { getUserData } from '../../services/userSer';

function ProtectedRoute(props) {
  let history = useHistory();
  //Check If User Is login And Giving Permission.

  const checkTokenUser = async () => {
    let data = await checkIfUser();
    console.log(data);

    if (props.bizRoute) {
      let user = getUserData();
      if (!user.biz) {
        toast.warning("You Must Be Business User");
        history.push("/");
      }
    }

    if (!data.status) {
      toast.error("Please Log In Again");
      localStorage.removeItem("tok");
      history.push("/login");
    }
  }

  return (
    <Route exact path={props.path} render={() => {
      checkTokenUser();
      return (<props.comp {...props} />);
    }} />
  )
}

export default ProtectedRoute
