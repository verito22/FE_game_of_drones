import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './styles.css';
import Header from '../../shared/components/header';
import Round from '../../shared/components/round';

const GameScreen = () => {
  return (
    <div className="backgroundGame col-sm-10">
      <Header />
      <Round />
    </div>
  );
};

export default GameScreen;
