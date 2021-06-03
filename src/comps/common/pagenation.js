import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, doApiGet, PER_PAGE } from '../../services/apiSer';

function Pagenation(props) {

  let [countPage, setCountPage] = useState(0);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + props.urlOfItemNum;
    let data = await doApiGet(url);
    console.log(data.count);
    setCountPage(Math.ceil(data.count / PER_PAGE))
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-2 d-flex justify-content-between">
        {
          [...Array(countPage)].map((item, i) => {
            return (
              <Link to={props.linkTo + (i + 1)} key={i + 1} className={"btn me-1" + (i == props.page ? ' btn-danger' : ' btn-dark')} > { i + 1}</Link>
            )
          })
        }
      </div>
    </div >
  )
}

export default Pagenation