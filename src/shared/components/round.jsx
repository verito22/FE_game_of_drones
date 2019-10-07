import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

const Round = () => {
  return (
    <div className="content">
      <div className="containerText">
        <h3>Round 1</h3>
      </div>
      <div className="player">
        <p>Player Name</p>
      </div>
      <div className="moveSelected">
        <p className="moveText">Select a move: </p>
        <DropdownButton id="dropdown-basic-button" size="sm" title="Pick one">
          <Dropdown.Item href="#/action-1">Rock</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Paper</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Scissors</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="mainBtn col-centered col-sm-3">
        <Button type="submit" variant="primary" size="lg" block>
          <Link to="/game">OK</Link>
        </Button>
      </div>
    </div>
  );
};

export default Round;
