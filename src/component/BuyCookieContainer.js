import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCookie } from "../redux/cookie/cookieActions";

const BuyCookieContainer = props => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number Of Cookies: {props.numOfCookies}</h2>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCookie(number)}>
        Buy {number} Cookie
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCookies: state.cookie.numOfCookies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyCookie: number => dispatch(buyCookie(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCookieContainer);
