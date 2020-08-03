import React, {useEffect} from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router , Route, Link, Switch,useHistory } from 'react-router-dom';
import './App.css'
import Sidebar from './components/sidebar'
import MyTab from './components/tab'
import { parserOptions } from '../../.eslintrc';
import Auth from "./views/auth/Auth";
import {ALERT_STATUS_ERROR, dismissAlert, receiveAlert} from "./actions/alerts";
import {authenticateFromLocalStorage, signOut} from "./actions/auth";
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import { types } from '@babel/core';

const App = props => {

  const history = useHistory();
  
  useEffect(() => {
    props.authenticateFromLocalStorage()
    .then(res=>{
      console.log("login successs");
      history.push("/");
    })
    .catch(error => {
      error ? props.receiveAlert(ALERT_STATUS_ERROR, error.message) : undefined;
      history.push("/auth");
      // history.push("/")
    });
  }, [])
  return (
    <Router>
        <Switch>
          <Route path="/" exact={true} component={MyTab} />
          <Route path="/auth" component={Auth} />
        </Switch>
    </Router>
  );
}
const mapStateToProps = state => ({alerts: state.alerts, isAuthenticated: state.auth.isValid});
const mapDispatchToProps = {authenticateFromLocalStorage, dismissAlert, receiveAlert, signOut};
export default connect(mapStateToProps, mapDispatchToProps)(hot(App))
