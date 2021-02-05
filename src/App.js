import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contacts from './Components/Contacts/Contacts';
import AddContacts from './Components/AddContacts/AddContacts';
import FourOhFour from './Components/FourOhFour/FourOhFour';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container ml-5 mr-5">
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/addContacts" exact component={AddContacts} />
            {/* <FourOhFour /> */}
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
