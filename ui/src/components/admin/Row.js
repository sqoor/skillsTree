import React, { Component } from "react";
import Form from "./Form";

export class Row extends Component {
  updateStudent = updatedStudent => {
    const studentId = this.props.student._id;
    this.props.updateStudent(studentId, updatedStudent);
  };

  deleteHandle = (student) => {
    if(window.confirm(`Delete ${student.name}`))
      this.props.deleteStudent(student._id)
  }

  render() {
    const { number, student, editMode, deleteMode } = this.props;

    return (
      <tr>
        <th style={{ display: deleteMode ? "none" : "table-cell" }} scope="row">
          <button
            onClick={this.deleteHandle.bind(this, student)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </th>
        <th style={{ display: editMode ? "none" : "table-cell" }} scope="row">
          <Form
            addStudent={this.updateStudent}
            title="Update"
            defaultStudent={student}
            styleClasses="btn btn-warning"
          />
        </th>
        <th scope="row">{number}</th>
        <td>{student.name}</td>
        <td>{student.comp1 ? student.comp1.imitate : null}</td>
        <td>{student.comp1 ? student.comp1.adapt : null}</td>
        <td>{student.comp1 ? student.comp1.implement : null}</td>
        <td>{student.comp2 ? student.comp2.imitate : null}</td>
        <td>{student.comp2 ? student.comp2.adapt : null}</td>
        <td>{student.comp2 ? student.comp2.implement : null}</td>
        <td>{student.comp3 ? student.comp3.imitate : null}</td>
        <td>{student.comp3 ? student.comp3.adapt : null}</td>
        <td>{student.comp3 ? student.comp3.implement : null}</td>
        <td>{student.comp4 ? student.comp4.imitate : null}</td>
        <td>{student.comp4 ? student.comp4.adapt : null}</td>
        <td>{student.comp4 ? student.comp4.implement : null}</td>
        <td>{student.comp5 ? student.comp5.imitate : null}</td>
        <td>{student.comp5 ? student.comp5.adapt : null}</td>
        <td>{student.comp5 ? student.comp5.implement : null}</td>
        <td>{student.comp6 ? student.comp6.imitate : null}</td>
        <td>{student.comp6 ? student.comp6.adapt : null}</td>
        <td>{student.comp6 ? student.comp6.implement : null}</td>
        <td>{student.comp7 ? student.comp7.imitate : null}</td>
        <td>{student.comp7 ? student.comp7.adapt : null}</td>
        <td>{student.comp7 ? student.comp7.implement : null}</td>
        <td>{student.comp8 ? student.comp8.imitate : null}</td>
        <td>{student.comp8 ? student.comp8.adapt : null}</td>
        <td>{student.comp8 ? student.comp8.implement : null}</td>
      </tr>
    );
  }
}

export default Row;
