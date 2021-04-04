import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocuments } from "./firebase/firebase.utils";

import UserActionTypes from "./redux/user/user.types";
import { setCurrentUser } from "./redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Subscription that keeps track of the user currently logged into this instance through firebase
    var subscription = auth.onAuthStateChanged(async (userAuth) => {
      // If userAuth is null it means the user signed out
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    // Equivalent of componentWillUnmount - cleaning up the subscription to prevent memory leaks
    return function authSubscriptionCleanup() {
      console.log("auth subscription cleaned up");

      subscription = null;
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
