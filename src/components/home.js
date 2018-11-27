import React from 'react';

import App from './app';
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

