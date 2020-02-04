import React from "react";
//Store
import store from "./store";
//Provider
import { Provider } from "react-redux";
//React-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Header from './components/Header';
import Libros from './components/Libros';
import EditarLibro from './components/EditarLibro';
import NuevoLibro from './components/NuevoLibro';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='container-fluid'>
          <Header/>
          <div className='container'>
          <Switch>
            <Route path='/libros/editar/:id' render={() => (<EditarLibro/>)}/>
            <Route path='/libros/nuevo' render={() => (<NuevoLibro />)}/>
            <Route path='/' render={() => (<Libros/>)}/>
          </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
