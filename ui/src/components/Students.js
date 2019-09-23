import React, { Component } from "react";
import Axios from "axios";
import StudentNode from "./StudentNode";
import "./Students.css";
import Loader from "./Loader";

export class Students extends Component {
  state = {
    students: [],
    isLoading: true
  };

  componentDidMount() {
    Axios.get("/students")
      .then(res => {
        setTimeout(() => {
          this.setState({ students: res.data, isLoading: false })
        }, 3000);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { students, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="students">
          <div style={divStyle}>
            {students.map(student =>
              student ? (
                <StudentNode key={student._id} student={student} />
              ) : null
            )}
          </div>
          </div>
        )}
      </div>
    );
  }
}

export default Students;

const divStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: ".7%",
  width: "70%",
  margin: "auto"
};
