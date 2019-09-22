import React, { Component } from "react";
import CompetencyNode from "./CompetencyNode";

export class Competencies extends Component {
  state = {
    student: {}
  };

  componentDidMount() {
    try {
      const { student } = this.props.history.location.state;
      this.setState({ student });
    } catch (e) {
      this.props.history.push("/");
    }
  }

  render() {
    const { student } = this.state;

    return (
      <div className="competencies">
        <div style={style.p} className="col bg-dark text-light text-center">
          <h3>{student.name}</h3>
        </div>
        <div>
          <h4 className="text-center mt-4">Competencies</h4>
          <div>
            {/* {Array.isArray(comp) ? comp.map(c => <CompetencyNode key={c.id} student={student} {...c} />) : null} */}
            <CompetencyNode
              studentName={student.name}
              comp={student.comp1}
              compName="Format an application"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp2}
              compName="Produce a static and adaptable web user interface"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp3}
              compName="Develop a dynamic web user Interface"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp4}
              compName="Produce a user interface with a content management or e-commerce solution"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp5}
              compName="Create a database"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp6}
              compName="Develop data access components"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp7}
              compName="Develop the back-end part of a web or mobile web application"
            />
            <CompetencyNode
              studentName={student.name}
              comp={student.comp8}
              compName="Devise and implement components in a content management or e-commerce solution"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Competencies;

const style = {
  p: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: "50%"
  }
};
