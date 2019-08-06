import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import AccountActivation from './Pages/AccountActivation';
import Settings from './Pages/Settings';

import Alerts from './Pages/Alerts';
import Emergency from './Pages/Emergency';
import Feed from './Pages/Feed';
import Location from './Pages/Location';
import PeopleList from './Pages/PeopleList';

const Router = () =>  {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* When user click activate account in email */}
          <Route path="/account-activation" component={AccountActivation} />

          <Route path="/settings" component={Settings} />

          <Route path="/location" component={Location} />
          <Route path="/emergency" component={Emergency} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/people-list" component={PeopleList} />
          {/* Inbound Communication (news, announcements) */}
          <Route path="/feed" component={Feed} />

        </Switch>
      </BrowserRouter>
    );
  }

  export default Router;