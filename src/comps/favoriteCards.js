import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiSer';
import CardsList from './cardsList';
import PageHeader from './common/pageHeader';

function FavoriteCards(props) {
  let [cards_ar, setCardsAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    try {
      let url = API_URL + "/users/userFavoritesCards";
      let data = await doApiMethod(url, "GET");
      console.log(data);
      setCardsAr(data);
    } catch (err) {
      console.log(err);

    }
  }

  return (
    <div>
      <PageHeader title="Your Favorite Cards" />
      <CardsList ar={cards_ar} />
    </div>
  )
}

export default FavoriteCards