import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ total, editData, deleteData }) => {
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{totals.title}</td>
                <td>{totals.description}</td>
                <td>{totals.username}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => editData(totals.id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteData(totals.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
