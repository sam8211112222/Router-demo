import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movies from './components/Movies';
import Home from './components/Home';
import Manage from './components/Manage';
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Categories from './components/Categories';
import OneMovie from './components/OneMovie';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-categories">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/manage">Manage</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/by-categories">
                <CategoryPage />
              </Route>
              <Route
                exact
                path="/by-categories/drama"
                render={(props) => <Categories {...props} tittle={`Drama`} />}
              />
              <Route
                exact
                path="/by-categories/comedy"
                render={(props) => <Categories {...props} tittle={`Comedy`} />}
              />

              <Route path="/movies/:id" component={OneMovie} />

              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/manage">
                <Manage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Movie() {
  let { id } = useParams();
  return <h2>Move id {id} </h2>;
}

function CategoryPage() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to={`${path}/comedy`}>Comedy</Link>
        </li>
        <li>
          <Link to={`${path}/drama`}>Drama</Link>
        </li>
      </ul>
    </div>
  );
}
