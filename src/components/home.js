import React from 'react';

import ReactDOM from 'react-dom';
import App from './app';
import AddForm from './form';
import NavigationBar from './navbar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import EventFinder from './event-finder';

export default class Home extends React.Component {
	render() {

		return(
				<Router>
              <div className="app">
                    <NavigationBar/>
                <main>
                    <Route exact path="/" component={App} />
              			<Route exact path="/Event-finder" component={EventFinder} />
                </main>
              </div>    
				</Router>
			);
	}
}

