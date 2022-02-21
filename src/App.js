

import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>

      <Navbar bg="dark" variant="dark">
        <Container>

          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link >About</Nav.Link>
            </LinkContainer>

          </Nav>
        </Container>
      </Navbar>

      <Container>
        <header className=" pt-3 pb-3">
          <img className="logo" src="../Images/fcww.png" />
        </header>
      </Container>
      <hr />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route exact path="/about" element={<About />}></Route>


        </Routes>
      </Container>
      <footer class="footer fixed-bottom mt-auto py-3 bg-light">
        <div class="container">
          <span class="text-muted">Falling Cones Woodworking &copy;</span>
        </div>
      </footer>

    </Router>

  );
}

export default App;
