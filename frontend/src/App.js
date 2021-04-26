import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './scss/style.scss';
// import TheLayout from './containers/TheLayout';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const login = JSON.parse(sessionStorage.getItem("isLoggedIn"));

class App extends Component {

  // render(){

    //   if(login){
      //     return (
  //       <Router>
  //         <Redirect to='/dashboard' />
  //         {/* <Route path="/dashboard" component={TheLayout}></Route> */}
  //         <Route path="/dashboard" name="Home" render={props => <TheLayout {...props}/>} />
  //       </Router>
  //     )
  //   }
  // }

  render() {
    if (login){
    return (
      <Router>
      {/* <HashRouter> */}
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              <Route path="/dashboard" name="Dashboard" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      {/* </HashRouter> */}
      </Router>
    );
  }
  return (
    <Router>
      <React.Suspense fallback={loading}>
      <Redirect exact from='/' to='/login' />
      <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
      <Route path="/dashboard" name="Dashboard" render={props => <TheLayout {...props}/>} />
      </React.Suspense>
    </Router>
    )
}
}

export default App;
