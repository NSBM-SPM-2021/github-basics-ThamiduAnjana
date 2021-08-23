
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';

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

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((response) => {
      setBookList(response.data);
    });
  }, []);


  const submitBook = () => {
    Axios.post("http://localhost:3002/api/insert", {
      bookid: txt_bookid,
      isbnno: txt_isbnno,
      booktitle: txt_booktitle,
      author: txt_author,
      publishdate: txt_publishdate,
      addingdate: txt_addingdate,
      pages: txt_pages,
      price: txt_price,
      source: txt_source,
      remarks: txt_remarks
    });
    alert("Successful insert..!");
  };



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
                        <Form.Control type="text" name="txt_bookid" placeholder="Enter Book ID"
                          onChange={(e) => {
                            setbookid(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="isbnno">
                        <Form.Label>ISBN NO :</Form.Label>
                        <Form.Control type="text" name="txt_isbnno" placeholder="Enter ISBN NO"
                          onChange={(e) => {
                            setisbnno(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="booktitle">
                        <Form.Label>Book Title :</Form.Label>
                        <Form.Control type="text" name="txt_booktitle" placeholder="Enter Book Title"
                          onChange={(e) => {
                            setbooktitle(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="author">
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" name="txt_author" placeholder="Enter Author"
                          onChange={(e) => {
                            setauthor(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="publishdate">
                        <Form.Label>Publish Date :</Form.Label>
                        <Form.Control type="date" name="txt_publishdate" placeholder="Enter Publish Date"
                          onChange={(e) => {
                            setpublishdate(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="addingdate">
                        <Form.Label>Adding Date :</Form.Label>
                        <Form.Control type="date" name="txt_addingdate" placeholder="Enter Adding Date"
                          onChange={(e) => {
                            setaddingdate(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="pages">
                        <Form.Label>Pages :</Form.Label>
                        <Form.Control type="text" name="txt_pages" placeholder="Enter Pages"
                          onChange={(e) => {
                            setpages(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="price">
                        <Form.Label>Price :</Form.Label>
                        <Form.Control type="text" name="txt_price" placeholder="Enter Price"
                          onChange={(e) => {
                            setprice(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="source">
                        <Form.Label>Source :</Form.Label>
                        <Form.Control as="textarea" name="txt_source" rows={3} placeholder="Enter Source"
                          onChange={(e) => {
                            setsource(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="remark">
                        <Form.Label>Remark :</Form.Label>
                        <Form.Control as="textarea" name="txt_remarks" rows={3} placeholder="Enter Remark"
                          onChange={(e) => {
                            setremarks(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Text>
                <div className="buttom_align_right">
                  <Button variant="primary" name="btn_save" className="button_style"
                    onClick={submitBook}
                  >Save Book</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button type="reset" variant="danger" name="btn_reset" className="button_style">Clear</Button>
                </div>
                <br />
                <Card.Title className="text_align_center">Books Details</Card.Title>
                <hr></hr>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ISBN NO</th>
                      <th>Book Title</th>
                      <th>Author</th>
                      <th>Publish Date</th>
                      <th>Adding Date</th>
                      <th>Pages</th>
                      <th>Price</th>
                      <th>Source</th>
                      <th>Remarks</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button variant="success">Success</Button>
                        &nbsp;
                        <Button variant="danger">Danger</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>

              </Card.Body>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
