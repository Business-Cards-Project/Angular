import './App.css';
import './css_comps/header_nav.css'
import NavBar from './comps/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './comps/home';
import About from './comps/about';
import Page404 from './comps/page404';
import SignUpClient from './comps/signup';
import Login from './comps/login';
import Footer from './comps/footer';

function App() {
  return (
    <Router>
      <header className="container-fluid shadow-sm">
        <NavBar></NavBar>
      </header>
      <main style={{ minHeight: "90vh" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUpClient} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Page404} />
        </Switch>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </Router>

  );
}

export default App;