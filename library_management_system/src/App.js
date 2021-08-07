
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="Body">
      <Row>
        <Col className="text_align_center top_padding_3"><h1>Library Management System..</h1></Col>
      </Row>
      <Row>
        <Col lg="6" className="top_padding_3 align_center">
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title className="text_align_center">Add New Books In Library</Card.Title>
              <hr></hr>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Save</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
