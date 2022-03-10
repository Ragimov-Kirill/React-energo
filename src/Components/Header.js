import React, {Component} from 'react';
import {Navbar,NavDropdown,Nav,FormControl,Container,Form,Button} from 'react-bootstrap';
import logo from './gre2.png';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import Management from '../Pages/Management';

export default class Header extends Component {
  render() {
     return (
       <>
       <Navbar sticky="top" collapseOnSelect expand="md" bg="primary" variant= "dark">
          <Container>
              <Navbar.Brand href = "/">
                <img
                    src={logo}
                    height="30"
                    width="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
              </Navbar.Brand>
              <Navbar className= "mr-auto" variant="primary" bg="primary">
                <Container fluid>
                  <Navbar.Brand href="/">Главная</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbar-dark-example" />
                  <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="О предприятии"
                        menuVariant="primary"
                      >
                        <NavDropdown.Item href="/about">Структура</NavDropdown.Item>
                        <NavDropdown.Item href="/management">Руководство</NavDropdown.Item>

                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="О предприятии"
                        menuVariant="primary"
                      >
                        <NavDropdown.Item href="/contacts">Контакты</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Реквизиты</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Режим работы</NavDropdown.Item>

                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>


                    <Form className = "d-flex">
                      <FormControl
                          type="text"
                          placeholder="Что ищем?"
                          className="me-2"
                      />
                          <Button  variant ="outline-info">Поиск</Button>
                      </Form>



            </Container>
          </Navbar>
          <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contacts" element={<Contacts/>}/>
                <Route exact path="/blog" element={<Blog/>}/>
                <Route exact path="/management"element={<Management/>}/>
            </Routes>
          </Router>
        </>

    );
  }
}
