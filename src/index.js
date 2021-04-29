import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Shop from './Shop';
import About from './About';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const routing = (
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
