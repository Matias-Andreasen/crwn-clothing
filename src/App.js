import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Subscription that keeps track of the user currently logged into this instance through firebase
    var subscription = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(currentUser);
    });

    // Equivalent of componentWillUnmount - cleaning up the subscription to prevent memory leaks
    return function authSubscriptionCleanup() {
      console.log("auth subscription cleaned up");

      subscription = null;
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
};

export default App;
