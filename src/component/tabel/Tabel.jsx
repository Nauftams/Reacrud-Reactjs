import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ total }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {total.map((totals, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{totals.title}</td>
                <td>{totals.description}</td>
                <td>{totals.username}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
