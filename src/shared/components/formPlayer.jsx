import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row } from 'react-bootstrap';
// import './styles.css';

const FormPlayer = ({ number }) => {
  return (
    <div className="formPlayer">
      <Form>
        <Form.Group
          as={Row}
          className="justify-content-center"
          controlId="formPlayerHorizontal"
        >
          <Form.Label sm={2}>Player {number}</Form.Label>
          <Col sm={4}>
            <Form.Control type="player" placeholder="Name" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormPlayer;

FormPlayer.propTypes = {
  number: PropTypes.string.isRequired
};
