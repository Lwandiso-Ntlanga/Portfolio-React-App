import React from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Technical from '../components/Technical';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contacts from '../components/Contacts';

function NavHeader() {
    return (
        <Router>
            <div>
                <Navbar collapseOnSelect bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"}>[ Lwandiso <img src={'./logo.png'} width='20px' hieght='30px' /> Ntlanga ]</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>    
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>                            
                                <Nav.Link as={Link} to={"/technical"}>Skills</Nav.Link>
                                <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
                                <Nav.Link as={Link} to={"/experience"}>Experience</Nav.Link>
                                <Nav.Link as={Link} to={"/education"}>Education</Nav.Link>
                                <Nav.Link as={Link} to={"/Contacts"}>Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Routes>
                    <Route path="/home" element={< Home />}></Route>
                    <Route path="/about" element={< About />}></Route>                    
                    <Route path="/technical" element={< Technical />}></Route>
                    <Route path="/projects" element={< Projects />}></Route>
                    <Route path="/experience" element={< Experience />}></Route>                    
                    <Route path="/education" element={< Education />}></Route>                    
                    <Route path="/Contacts" element={< Contacts />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default NavHeader;