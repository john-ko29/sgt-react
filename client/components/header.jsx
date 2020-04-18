import React from 'react';

function Header(props) {
  return (
    <div className="header d-flex justify-content-around align-items-center">
      <h1>Student Grade Table</h1>
      <h3>Average Grade <span className='badge badge-secondary'>{props.average}</span></h3>
    </div>
  );
}

export default Header;
