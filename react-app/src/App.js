import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LoginFormModal from './components/LoginFormModal';
import SignUpFormModal from './components/SignUpFormModal';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import LeftSideBar from './components/LeftSideBar';
import Explore from './components/Explore';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      {/* <NavBar /> */}
      <Switch>
        {/* <Route path='/' exact={true}>
          <WelcomePage />
        </Route> */}
        <Route path='/login' exact={true}>
          {/* <LoginFormModal /> */}
          <WelcomePage />
        </Route>
        {/* <Route path='/sign-up' exact={true}>
          <SignUpFormModal />
        </Route> */}
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <LeftSideBar />
        </ProtectedRoute>
        <ProtectedRoute path='/explore-wilds' exact={true} >
          <Explore />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
