import React from "react";
import { connect } from "react-redux";
import { buyCookie } from "../redux/cookie/cookieActions";

const CookieContainer = props => {
  return (
    <div>
      <h2>Number Of Cookies: {props.numOfCookies}</h2>
      <button onClick={props.buyCookie}>Buy Cookie</button>
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
    buyCookie: () => dispatch(buyCookie())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer);
