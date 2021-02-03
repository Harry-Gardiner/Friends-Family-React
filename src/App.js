import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contacts from './Components/Contacts/Contacts';
import AddContacts from './Components/AddContacts/AddContacts';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/addContacts" exact component={AddContacts} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
