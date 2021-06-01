import React, { useEffect, useState } from 'react';
import { API_URL, doApiGet, doApiMethod } from '../services/apiSer';
import CardsList from './cardsList';
import PageHeader from './common/pageHeader';

function Home(props) {

  let [cards_ar, setCardsAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/cards";
    let data = await doApiGet(url);
    setCardsAr(data);
  }

  return (
    <div>
      <PageHeader title="Welcome To Home Page" />
      <CardsList ar={cards_ar} />
    </div>
  )
}

export default Home