import React, { Component } from "react";
import { Link } from "react-router-dom";
import PercentageCircle from "./PercentageCircles/PercentageCircle";

export class StudentNode extends Component {
  getColor(percentage) {
    return percentage < 34 ? "orange" : percentage < 67 ? "green" : "";
  }

  getTotalLevel = () => {
    const entries = Object.entries(this.props.student);
    let totalCompsLevel = 0;
    let totalCompsCount = 0;

    for (const [key, value] of entries) {
      if (key !== "__v" && key !== "_id" && key !== "name")
        if (value.imitate || value.adapt || value.implement) {
          let levelsCount = 0;
          levelsCount += value.imitate ? 1 : 0;
          levelsCount += value.adapt ? 1 : 0;
          levelsCount += value.implement ? 1 : 0;

          const totalLevel = Math.round(
            (value.imitate + value.adapt + value.implement) / levelsCount
          );

          totalCompsLevel += totalLevel;
          totalCompsCount++;
        }
    }

    return Math.round(totalCompsLevel / totalCompsCount);
  };

  render() {
    const { getColor, getTotalLevel } = this;
    const { student } = this.props;
    const totalLevel = getTotalLevel();
    const color = getColor(totalLevel);

    return (
      <div className="m-1 text-center">
        <Link
          to={{
            pathname: `/student/${student.name}`,
            state: { student }
          }}
        >
          <p style={styles.p}>{student.name}</p>
          <PercentageCircle
            name={"total comptencies score"}
            totalLevel={totalLevel}
            size={"big"}
            color={color}
          />
        </Link>
      </div>
    );
  }
}

export default StudentNode;

const styles = {
  p: {
    color: "#aaa",
    textAlign: "center",
    fontSize: "1.5rem"
  },
  circle: {
    height: "200px",
    width: "200px",
    backgroundColor: "#aaa",
    borderRadius: "50%",
    position: "relative",
    margin: "2px",
    "&:hover": {
      height: "250px",
      width: "250px"
    }
  },
  content: {
    position: "absolute",
    left: "24%",
    top: "44%",
    cursor: "pointer"
  }
};
