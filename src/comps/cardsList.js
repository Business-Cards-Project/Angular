import React, { useEffect, useState } from 'react';
import '../css_comps/cards.css';
import { getUserData, removeFavorite, updateFavorites } from '../services/userSer';

function CardsList(props) {

  let [userData, setUserData] = useState();
  let [update, forceUpdate] = useState(1);

  useEffect(() => {
    setUserData(getUserData());
  }, [])

  const showFavBtn = (item) => {
    if (!userData.cards.includes(item)) {
      return (
        <button onClick={() => {
          addToFav(item);
        }} className="btn btn-success">+ fav</button>
      )
    } else {
      return (
        <button onClick={() => {
          removeCardFromFavorite(item)
        }} className="btn btn-warning">- fav</button>
      )
    }
  }

  const addToFav = async (item) => {
    await updateFavorites(item);
    forceUpdate(update + 1);
  }

  const removeCardFromFavorite = async (_bizNumber) => {
    await removeFavorite(_bizNumber);
    forceUpdate(update + 1);
  }

  return (
    <div className="row">
      {props.ar.map(item => {
        let bg = item.bizImage?.length > 2 ? item.bizImage : '/images/default.jpeg';
        return (
          <div key={item._id} className="col-lg-4 p-3">
            <div className="border">
              <div className="biz_img" style={{ backgroundImage: `url(${bg})` }} >

              </div>
              <article className="p-3">
                <h2>{item.bizName}</h2>
                <p>{item.bizDescription}</p>
                <hr />
                <div><strong>Phone:</strong> {item.bizPhone}</div>
                <div><strong>Address:</strong> {item.bizAddress}</div>
                <div><strong>Biz Number:</strong> {item.bizNumber}</div>
                {userData._id
                  ?
                  showFavBtn(item.bizNumber)
                  :
                  <small className="text text-danger">* log in to add to favorite</small>}
              </article>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default CardsList
