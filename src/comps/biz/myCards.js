import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiMethod } from '../../services/apiSer';
import PageHeader from '../common/pageHeader';

function MyCards(props) {

  let [cards_ar, setCardsAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/cards/userCardsAdded"
    let data = await doApiMethod(url, "GET");
    data.reverse();
    setCardsAr(data);
  }

  const delCard = async (_id) => {
    if (window.confirm("Are You Sure?")) {
      let url = API_URL + "/cards/" + _id;
      let data = await doApiMethod(url, "DELETE");
      if (data.n == 1) {
        doApi();
        toast.warning("Card Deleted");
      }
    }
  }

  return (
    <div className="container">
      <PageHeader title="Your Biz Cards:" />
      <NavLink to="/addCard" className="btn btn-success">Add Card</NavLink>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Edit/Del</th>
          </tr>
        </thead>
        <tbody>
          {cards_ar.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.bizName}</td>
                <td>{item.bizDescription}</td>
                <td>{item.bizAddress}</td>
                <td>{item.bizPhone}</td>
                <td>
                  <NavLink to={`/editCard/${item._id}`} className="btn btn-warning p-1"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></NavLink>
                  <button onClick={() => {
                    delCard(item._id)
                  }} className="btn btn-danger p-1 ms-1"><i className="fa fa-minus-square" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div >
  )
}

export default MyCards