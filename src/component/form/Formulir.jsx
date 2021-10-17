import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const Formulir = ({ handleSubmit, title, handleChange, description, username, id }) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h2>{id ? "Edit Post" : "Add Post"}</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" type="text" placeholder="Enter title" value={title} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" as="textarea" rows={3} value={description} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>username</Form.Label>
              <Form.Control name="username" type="text" placeholder="Who post this" value={username} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
