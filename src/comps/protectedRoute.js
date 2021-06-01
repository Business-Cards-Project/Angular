import React from 'react';
import { Route, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { checkIfUser } from '../services/authSer';

function ProtectedRoute(props) {
  let history = useHistory();
  //Check If User Is login And Giving Permission.

  return (
    <Route exact path={props.path} render={() => {
      checkIfUser()
        .then(data => {
          console.log(data);
          if (!data.status) {
            toast.error("Please Log In Again");
            localStorage.removeItem("tok");
            history.push("/login");
          }
        })
      return (<props.comp />);
    }
    } />
  )
}

export default ProtectedRoute
