import React from 'react';

function PageHeader(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
    </React.Fragment>
  )
}

export default PageHeader