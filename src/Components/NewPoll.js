import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Container, Form, Button } from "react-bootstrap";

const NewPoll = (props) => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();
  const candidateName1URL = useRef();
  const candidateName2URL = useRef();
  const candidateName1Description = useRef();
  const candidateName2Description = useRef();
  const promptRef = useRef();

  const sendToBlockChain = async () => {
    console.log(candidateName1.current.value);
    await window.contract.addURl({
      name: candidateName1.current.value,
      url: candidateName1URL.current.value,
    });
    await window.contract.addURl({
      name: candidateName2.current.value,
      url: candidateName2URL.current.value,
    });
    await window.contract.addDescription({
      name: candidateName1.current.value,
      description: candidateName1URL.current.value,
    });
    await window.contract.addDescription({
      name: candidateName2.current.value,
      description: candidateName2URL.current.value,
    });
    await window.contract.addCandidatePair({
      prompt: promptRef.current.value,
      name1: candidateName1.current.value,
      name2: candidateName2.current.value,
    });

    await window.contract.addToPromptArray({ prompt: promptRef.current.value });
  };

  return (
    <Container style={{ marginTop: "10px" }}>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Candidate 1 Name </Form.Label>
          <Form.Control
            ref={candidateName1}
            placeholder='Enter Candidate Name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Candidate 1 Image URL </Form.Label>
          <Form.Control ref={candidateName1URL} placeholder='Enter Image URL' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Candidate 1 Description</Form.Label>
          <Form.Control
            ref={candidateName1Description}
            placeholder='Enter Description'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Candidate 2 Name </Form.Label>
          <Form.Control
            ref={candidateName2}
            placeholder='Enter Candidate Name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Candidate 2 Image URL </Form.Label>
          <Form.Control ref={candidateName2URL} placeholder='Enter Image URL' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Candidate 2 Description</Form.Label>
          <Form.Control
            ref={candidateName2Description}
            placeholder='Enter Description'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Prompt</Form.Label>
          <Form.Control ref={promptRef} placeholder='Add Prompt' />
        </Form.Group>

        <Button onClick={sendToBlockChain} variant='primary'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

NewPoll.propTypes = {};

export default NewPoll;
