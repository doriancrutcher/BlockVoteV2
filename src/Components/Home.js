import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Container, Row, Button } from "react-bootstrap";

const Home = (props) => {
  const [pollArray, changePollArray] = useState(["--"]);

  useEffect(() => {
    const getPrompts = async () => {
      let promptArray = await window.contract.getAllPrompts();

      changePollArray(promptArray);
    };

    getPrompts();
  }, []);

  return (
    <Container>
      <Table style={{ marginTop: "5vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
          </tr>
        </thead>
        <tbody>
          {pollArray.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pollArray[index]}</td>
                <td>
                  <Button onClick={() => props.changeCandidates(el)}>
                    Go To Polls
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
