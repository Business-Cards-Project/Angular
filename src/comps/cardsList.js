import React from 'react';
import '../css_comps/cards.css';

function CardsList(props) {
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
              </article>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default CardsList
