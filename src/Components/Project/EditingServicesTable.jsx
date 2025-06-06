import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import './EditingServicesTable.css';

const EditingServicesTable = ({ headers, rows }) => {

   return (
    <Table bordered responsive className="editing-table">
      <thead>
        <tr>
          {headers.map((col, i) => (
            <th key={i} className="text-center align-top header-box package-content">
              <h6 className="fw-bold cs_fs_20" style={{textAlign:"left"}} >{col.icon}  {col.title} </h6>
              <p className="description">{col.description}</p>
              {col.button && (
                <Button className="btn-light btn btn-primary btn-sm">
                  {col.button}
                </Button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
{rows.map((row, i) => (
  <tr key={i} className={i % 2 === 0 ? 'row-light' : 'row-dark'}>
    {row.data.map((cell, j) => (
      <td key={j} className="cell-content">
        <div className="cell-inner">
          {cell.icon && <span className="check-icon">✔</span>}
          <span className="cell-text">{cell.text}</span>
        </div>
      </td>
    ))}
  </tr>
))}
      </tbody>
    </Table>
  );
};

export default EditingServicesTable;
