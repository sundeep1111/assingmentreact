import React from 'react';
import './App.css';
import {Container, Row, Col, fluid} from 'react-bootstrap'
import TopNavbar from './Component/TopNavbar';
import MainWrap from './Component/MainWrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Container>
    <TopNavbar/>
    <MainWrap/>
    </Container>
    </div>
  );
}

export default App;
