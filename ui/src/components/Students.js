import React, { Component } from "react";
import Axios from "axios";
import StudentNode from "./StudentNode";
import "./Students.css";

export class Students extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    Axios.get("/students")
      .then(res => this.setState({ students: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { students } = this.state;

    return (
      <div className="students" style={divStyle}>
        {students.map(student =>
          student ? <StudentNode key={student._id} student={student} /> : null
        )}
      </div>
    );
  }
}

export default Students;

const divStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: ".7%"
};
