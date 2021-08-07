
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="Body">
      <Row>
        <Col className="text_align_center top_padding_3"><h1>Library Management System..</h1></Col>
      </Row>
      <Row>
        <Col lg="8" className="top_padding_3 align_center">
          <Card style={{ width: '100%',padding:'15px'}}>
            <Form>
              <Card.Body>
                <Card.Title className="text_align_center">Add New Books In Library</Card.Title>
                <hr></hr>
                <Card.Text>
                  <Row>
                    <Col>
                      <Form.Group controlId="bookid">
                        <Form.Label>Book ID :</Form.Label>
                        <Form.Control type="text" placeholder="Enter Book ID"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="isbnno">
                        <Form.Label>ISBN NO :</Form.Label>
                        <Form.Control type="text" placeholder="Enter ISBN NO"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Text>
                <div className="buttom_align_right">
                  <Button variant="primary" className="button_style">Save Book</Button>
                </div>
              </Card.Body>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
