import "regenerator-runtime/runtime";
import React, { useState } from "react";
import { login, logout } from "./utils";
import "./global.css";
import "./sass/App.scss";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import BlockVoteLogo from "./assets/blockvotelogo.svg";

import getConfig from "./config";

import Home from "./Components/Home";
import PollingStation from "./Components/PollingStation";
import BuyVotes from "./Components/BuyVotes";
import NewPoll from "./Components/NewPoll";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  const [candidatePair, changeCandidatePair] = useState(["--", "--"]);

  const changeCandidatesFunction = async (prompt) => {
    console.log(prompt);
    let namePair = await window.contract.getCandidatePair({ prompt: prompt });
    console.log(namePair);
    localStorage.setItem("Candidate1", namePair[0]);
    localStorage.setItem("Candidate2", namePair[1]);
    window.location.replace(window.location.href + "PollingStation");
  };

  return (
    <Router>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={BlockVoteLogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link href='/BuyVotes'>Buy Votes</Nav.Link>
              <Nav.Link href='/NewPoll'>New Poll</Nav.Link>
              <Nav.Link onClick={window.accountId === "" ? login : logout}>
                {window.accountId === "" ? "Login" : window.accountId}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <Home changeCandidates={changeCandidatesFunction} />
        </Route>
        <Route exact path='/PollingStation'>
          <PollingStation />
        </Route>
        <Route exact path='/BuyVotes'>
          <BuyVotes />
        </Route>
        <Route>
          <NewPoll />
        </Route>
      </Switch>
    </Router>
  );
}
