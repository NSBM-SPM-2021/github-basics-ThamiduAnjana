
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const [txt_bookid, setbookid] = useState("");
  const [txt_isbnno, setisbnno] = useState("");
  const [txt_booktitle, setbooktitle] = useState("");
  const [txt_author, setauthor] = useState("");
  const [txt_publishdate, setpublishdate] = useState("");
  const [txt_addingdate, setaddingdate] = useState("");
  const [txt_pages, setpages] = useState("");
  const [txt_price, setprice] = useState("");
  const [txt_source, setsource] = useState("");
  const [txt_remarks, setremarks] = useState("");

  return (
    <Container fluid className="Body">
      <Row>
        <Col className="text_align_center top_padding_5"><h1>Library Management System..</h1></Col>
      </Row>
      <Row>
        <Col lg="8" className="top_padding_1 align_center">
          <Card style={{ width: '100%', padding: '15px' }}>
            <Form>
              <Card.Body>
                <Card.Title className="text_align_center">Add New Books In Library</Card.Title>
                <hr></hr>
                <Card.Text>
                  <Row>
                    <Col>
                      <Form.Group controlId="bookid">
                        <Form.Label>Book ID :</Form.Label>
                        <Form.Control type="text" name="txt_bookid" placeholder="Enter Book ID"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="isbnno">
                        <Form.Label>ISBN NO :</Form.Label>
                        <Form.Control type="text" name="txt_isbnno" placeholder="Enter ISBN NO"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="booktitle">
                        <Form.Label>Book Title :</Form.Label>
                        <Form.Control type="text" name="txt_booktitle" placeholder="Enter Book Title"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="author">
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" name="txt_author" placeholder="Enter Author"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="publishdate">
                        <Form.Label>Publish Date :</Form.Label>
                        <Form.Control type="date" name="txt_publishdate" placeholder="Enter Publish Date"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="addingdate">
                        <Form.Label>Adding Date :</Form.Label>
                        <Form.Control type="date" name="txt_addingdate" placeholder="Enter Adding Date"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="pages">
                        <Form.Label>Pages :</Form.Label>
                        <Form.Control type="text" name="txt_pages" placeholder="Enter Pages"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="price">
                        <Form.Label>Price :</Form.Label>
                        <Form.Control type="text" name="txt_price" placeholder="Enter Price"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="source">
                        <Form.Label>Source :</Form.Label>
                        <Form.Control as="textarea" name="txt_source" rows={3} placeholder="Enter Source"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="remark">
                        <Form.Label>Remark :</Form.Label>
                        <Form.Control as="textarea" name="txt_remarks" rows={3} placeholder="Enter Remark"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Text>
                <div className="buttom_align_right">
                  <Button variant="primary" name="btn_save" className="button_style">Save Book</Button>
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
