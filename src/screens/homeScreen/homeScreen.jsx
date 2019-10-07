import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles.css';
import Header from '../../shared/components/header';
import FormPlayer from '../../shared/components/formPlayer';

const HomeScreen = () => {
  const [name, setName] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <div className="backgroundGame col-sm-10">
      <Header />
      <div className="content">
        <div className="containerText">
          <h3>Enter the names of the players</h3>
        </div>
        <div className="formPlayer">
          <FormPlayer onSubmit={handleSubmit} number="1" />
          <FormPlayer
            onSubmit={handleSubmit}
            onChange={e => setName(e.target.value)}
            number="2"
          />
          <div className="mainBtn col-centered col-sm-5">
            <Button type="submit" variant="primary" size="lg" block>
              <Link to="/game">START</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
