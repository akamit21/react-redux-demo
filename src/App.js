import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeContainer from "./component/HooksCakeContainer";
import BuyCookieContainer from "./component/BuyCookieContainer";
import CookieContainer from "./component/CookieContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <CookieContainer />
        <BuyCookieContainer />
      </div>
    </Provider>
  );
}

export default App;
