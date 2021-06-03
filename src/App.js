import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './css_comps/header_nav.css'
import "react-toastify/dist/ReactToastify.css"
import NavBar from './comps/navbar';
import Home from './comps/home';
import About from './comps/about';
import Page404 from './comps/page404';
import SignUpClient from './comps/signup';
import Login from './comps/login';
import Footer from './comps/footer';
import UserInfo from './comps/userInfo';
import ProtectedRoute from './comps/common/protectedRoute';
import { useEffect, useState } from 'react';
import { updateUserData } from './services/userSer';
import FavoriteCards from './comps/favoriteCards';

function App() {

  let [user, setUser] = useState(null);

  useEffect(() => {
    ifUserLogin();
  }, [])

  const ifUserLogin = async () => {
    let userData = await updateUserData();
    setUser(userData);
  }

  return (
    <Router>
      <header className="container-fluid shadow-sm">
        <Route path="/" component={NavBar} />
      </header>
      { user &&
        <main style={{ minHeight: "90vh" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUpClient} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/favoriteCards" component={FavoriteCards} />
            <ProtectedRoute exact path="/userInfo" comp={UserInfo} />
            <Route path="/" component={Page404} />
          </Switch>
        </main>
      }
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </Router>
  );
}

export default App;