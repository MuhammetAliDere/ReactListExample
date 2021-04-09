import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import Header from './components/Header'
import List  from './pages/ListPage'
import Form from './pages/FormPage'
import AppProvider from './providers/AppProvider';
import Popup from './components/Popup';
import Toaster from './components/Toaster';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Popup/>
        <Toaster/>
        <Header />
        <Router> 
          <Switch>
            <Route path="/add-new">
              <Form />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App
