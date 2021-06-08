import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";

import Pikachu from "../assets/pikachu.jpeg";
import Kirby from "../assets/kirby.png";

const PollingStation = (props) => {
  const [userVoted, changeUserVoted] = useState(false);
  const [showResults, changeShowReults] = useState(false);
  const [Candidate1Result, changeCandidate1Result] = useState(3);
  const [Candidate2Result, changeCandidate2Result] = useState(5);
  const [candidate1URL, change1Url] = useState(
    "https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Pikachu_SSBU.png"
  );
  const [candidate2URL, change2Url] = useState(
    "data:image/jpeg;base64,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"
  );

  useEffect(() => {
    console.log(localStorage.getItem("Candidate2"));
  }, []);

  let messagePrompt = "Which Character Would Win in Smash?";
  return (
    <Container>
      <Row>
        <Col className='justify-content-center d-flex'>
          <Container>
            <Row
              style={{ marginTop: "5vh", backgroundColor: "#c4c4c4" }}
              className='justify-content-center d-flex'
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{ height: "35vh", width: "20vw" }}
                  src={candidate1URL}
                ></img>
              </div>
            </Row>
            {showResults ? (
              <Row className='justify-content-center d-flex'>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "8vw",
                    padding: "10px",
                    backgroundColor: "#c4c4c4",
                  }}
                >
                  {" "}
                  {Candidate1Result}
                </div>
              </Row>
            ) : null}
            <Row
              style={{ marginTop: "5vh" }}
              className='justify-content-center d-flex'
            >
              <Button>Vote</Button>
            </Row>
          </Container>
        </Col>
        <Col className='justify-content-center d-flex align-items-center'>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#c4c4c4",
              height: "20vh",
              alignItems: "center",
              padding: "2vw",
              textAlign: "center",
            }}
          >
            {messagePrompt}
          </div>
        </Col>
        <Col className='justify-content-center d-flex'>
          <Container>
            <Row
              style={{ marginTop: "5vh", backgroundColor: "#c4c4c4" }}
              className='justify-content-center d-flex'
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{ height: "35vh", width: "20vw" }}
                  src={candidate2URL}
                ></img>
              </div>
            </Row>
            {showResults ? (
              <Row className='justify-content-center d-flex'>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "8vw",
                    padding: "10px",
                    backgroundColor: "#c4c4c4",
                  }}
                >
                  {" "}
                  {Candidate2Result}
                </div>
              </Row>
            ) : null}
            <Row
              style={{ marginTop: "5vh" }}
              className='justify-content-center d-flex'
            >
              <Button>Vote</Button>
            </Row>
          </Container>
        </Col>
      </Row>
      {userVoted ? (
        <Row style={{ marginTop: "5vh" }}>
          <Container>
            <Row className='justify-content-center d-flex'>
              {" "}
              <Button>See Results </Button>
            </Row>
          </Container>
        </Row>
      ) : null}
    </Container>
  );
};

PollingStation.propTypes = {};

export default PollingStation;
