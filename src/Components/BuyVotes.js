import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const BuyVotes = (props) => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Enter Number of Votes</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter number of votes you would like to purchase'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Buy
        </Button>
      </Form>
    </Container>
  );
};

export default BuyVotes;
