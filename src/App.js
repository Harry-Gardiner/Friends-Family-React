import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contacts from './Components/Contacts/Contacts';
import AddContacts from './Components/AddContacts/AddContacts';
import EditContacts from './Components/EditContacts/EditContacts';
import FourOhFour from './Components/FourOhFour/FourOhFour';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/addContacts" exact component={AddContacts} />
            <Route path="/edit/:id" exact component={EditContacts} />
            <FourOhFour />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
