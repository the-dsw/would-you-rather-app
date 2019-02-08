import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Vote from './Vote'
import LeaderBoard from './LeaderBoard'
import NoMatch from './NoMatch'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Router>
          <Fragment>
             <LoadingBar style={{ backgroundColor: '#69A425' }}/>
              <div className="container">
               <Nav />
                {this.props.loading === true
                      ? null
                      : <Switch>
                            <Route exact path="/" component={Login} />
                            <PrivateRoute path="/dashboard" component={Dashboard} />
                            <PrivateRoute path="/question/:id" component={Vote} />
                            <PrivateRoute path="/add" component={NewQuestion} />
                            <PrivateRoute path="/leaderboard" component={LeaderBoard} />
                            <Route component={NoMatch} />
                        </Switch>
                }
              </div>
          </Fragment>
         </Router>

    );
  }
}

function mapStateToProps ({ loadingBar }) {
  return {
    loading: loadingBar > 0
  }
}

export default connect(mapStateToProps)(App);
