import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {Button,Container,Row,Col} from 'react-bootstrap';

function App() {
  return (
    <Container fluid className ="Body">
      <Row>
        <Col><h1>Hello World</h1></Col>
      </Row>
    </Container>
  );
}

export default App;
