import React, { useEffect, useState } from 'react';
import { API_URL, doApiGet } from '../services/apiSer';
import CardsList from './cardsList';
import PageHeader from './common/pageHeader';
import Pagenation from './common/pagenation';

function Home(props) {

  let [cards_ar, setCardsAr] = useState([]);
  let [page, setPage] = useState();

  useEffect(() => {
    console.log(window.location.search);
    const quries = new URLSearchParams(window.location.search);
    page = quries.get("page") ? quries.get("page") - 1 : 0;
    setPage(page);
    let url = API_URL + "/cards?page=" + page;
    doApi(url);
  }, [props.location])

  const doApi = async (_url) => {
    let data = await doApiGet(_url);
    setCardsAr(data);
  }

  return (
    <div>
      <PageHeader title="Welcome To Home Page" />
      <CardsList ar={cards_ar} />
      <Pagenation urlOfItemNum="/cards/totalCards" linkTo="/?page=" page={page} />
    </div>
  )
}

export default Home