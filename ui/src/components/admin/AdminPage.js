import React, { Component } from "react";
import Axios from "axios";
import Row from "./Row";
import Form from "./Form";

export class AdminPage extends Component {
  state = {
    students: [],
    editMode: true,
    deleteMode: true
  };

  componentDidMount() {
    Axios.get("/students")
      .then(res => this.setState({ students: res.data }))
      .catch(err => console.log(err));
  }

  toggleOptions = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  toggleDelete = () => {
    this.setState({ deleteMode: !this.state.deleteMode });
  };

  addStudent = newStudent => {
    Axios.post("/students", newStudent)
      .then(res =>
        this.setState({ students: [...this.state.students, res.data] })
      )
      .catch(err => console.log(err));
  };

  deleteStudent = studentId => {
    Axios.delete(`/students/${studentId}`)
      .then(res => {
        const deleteStudentId = res.data;
        if (deleteStudentId)
          this.setState({
            students: this.state.students.filter(
              student => student._id !== deleteStudentId
            )
          });
        else {
          console.log(deleteStudentId);
        }
      })
      .catch(err => console.log(err));
  };

  updateStudent = (studentId, updatedStudent) => {
    Axios.put(`/students/${studentId}`, updatedStudent)
      .then(res => {
        if (res.data) this.setState({ students: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { addStudent, updateStudent, deleteStudent } = this;
    const { students, editMode, deleteMode } = this.state;

    return (
      <div className="container-fluid">
        <button
          className="btn btn-outline-dark my-3"
          onClick={this.toggleDelete}
        >
          {deleteMode ? "Show Delete" : "Hide Delete"}
        </button>
        <button
          className="btn btn-outline-dark my-3"
          onClick={this.toggleOptions}
        >
          {editMode ? "Show Options" : "Hide Options"}
        </button>

        <div className="mt-5">
          <table className="table table-striped table-bordered">
            <caption>
              Students Scores
              <div
                className="add-student my-2"
                style={{ visibility: editMode ? "hidden" : "visible" }}
              >
                <Form
                  addStudent={addStudent}
                  title="Add Student"
                  styleClasses="btn btn-dark"
                  editMode={editMode}
                />
              </div>
            </caption>
            <thead>
              <tr>
                <th
                  style={{ display: deleteMode ? "none" : "table-cell" }}
                  scope="col"
                  rowSpan="2"
                >
                  Delete
                </th>
                <th
                  style={{ display: editMode ? "none" : "table-cell" }}
                  scope="col"
                  rowSpan="2"
                >
                  Update
                </th>
                <th scope="col" rowSpan="2">
                  #
                </th>
                <th scope="col" rowSpan="2">
                  Student Name
                </th>
                <th scope="col" colSpan="3">
                  1. Format an application{" "}
                </th>
                <th scope="col" colSpan="3">
                  2. Produce a static and adaptable web user interface
                </th>
                <th scope="col" colSpan="3">
                  3. Develop a dynamic web user Interface
                </th>
                <th scope="col" colSpan="3">
                  4. Produce a user interface with a content management or
                  e-commerce solution
                </th>
                <th scope="col" colSpan="3">
                  5. Create a database
                </th>
                <th scope="col" colSpan="3">
                  6. Develop data access components
                </th>
                <th scope="col" colSpan="3">
                  7. Develop the back-end part of a web or mobile web
                  application
                </th>
                <th scope="col" colSpan="3">
                  8. Devise and implement components in a content management or
                  e-commerce solution
                </th>
              </tr>
              <tr>
                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>

                <th scope="col">Imitate</th>
                <th scope="col">Adapt</th>
                <th scope="col">Implement</th>
              </tr>
            </thead>
            <tbody className="">
              {students.map((student, i) => {
                return (
                  <Row
                    key={student._id}
                    number={i + 1}
                    student={student}
                    deleteStudent={deleteStudent}
                    updateStudent={updateStudent}
                    editMode={editMode}
                    deleteMode={deleteMode}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdminPage;
