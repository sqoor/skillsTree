import React from "react";
import Modal from "react-modal";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      student: defaultStudent
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.selectCompHandler = this.selectCompHandler.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement("body");
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  initDefaultStudent() {
    if (!this.props.defaultStudent) return;

    this.setState({ student: this.props.defaultStudent });

    const imitate = document.getElementById("imitate");
    const adapt = document.getElementById("adapt");
    const implement = document.getElementById("implement");

    imitate.value = this.props.defaultStudent.comp1.imitate;
    adapt.value = this.props.defaultStudent.comp1.adapt;
    implement.value = this.props.defaultStudent.comp1.implement;
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
    this.initDefaultStudent();
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.resetStudent();
  }

  changeHandler(e) {
    if (e.target.name === "name") {
      const nameValue = e.target.value.trim();
      this.setState(prevState => ({
        student: {
          ...prevState.student,
          name: nameValue
        }
      }));
      return;
    }

    const compX = this.compInput.value;
    const levelName = e.target.name;
    const levelValue = e.target.value;

    this.setState(prevState => ({
      student: {
        ...prevState.student,
        [compX]: {
          ...prevState.student[compX],
          [levelName]: levelValue
        }
      }
    }));
  }

  selectCompHandler(e) {
    const compX = this.compInput.value;
    const imitate = document.getElementById("imitate");
    const adapt = document.getElementById("adapt");
    const implement = document.getElementById("implement");

    imitate.value = this.state.student[compX].imitate;
    adapt.value = this.state.student[compX].adapt;
    implement.value = this.state.student[compX].implement;
  }

  resetStudent() {
    this.setState({ student: defaultStudent });
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.addStudent(this.state.student);
    this.closeModal();
    this.resetStudent();
  }

  render() {
    const { title, defaultStudent, styleClasses } = this.props;
    const { submitHandler, changeHandler, selectCompHandler } = this;
    return (
      <div>
        <button className={styleClasses} onClick={this.openModal}>
          {title}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {title}: {defaultStudent ? defaultStudent.name : null}
            <button
              className="btn btn-outline-danger float-right"
              onClick={this.closeModal}
            >
              close
            </button>
          </h2>

          <form onSubmit={submitHandler} className="mt-5">
            <div className="form-group font-weight-bold">
              <label htmlFor="name">Student Name</label>
              <input
                onChange={changeHandler}
                value={this.state.student.name}
                id="name"
                name="name"
                type="text"
                className="form-control"
                aria-describedby="namelHelp"
                placeholder="Enter student name"
              />
            </div>
            <div className="form-group font-weight-bold">
              <label htmlFor="competencies">Competencies</label>
              <select
                onChange={selectCompHandler}
                ref={elem => (this.compInput = elem)}
                name="competencies"
                className="form-control"
                id="competencies"
              >
                <option value="comp1">1. Format an application</option>
                <option value="comp2">
                  2. Produce a static and adaptable web user interface
                </option>
                <option value="comp3">
                  3. Develop a dynamic web user Interface
                </option>
                <option value="comp4">
                  4. Produce a user interface with a content management or
                  e-commerce solution
                </option>
                <option value="comp5">5. Create a database</option>
                <option value="comp6">6. Develop data access components</option>
                <option value="comp7">
                  7. Develop the back-end part of a web or mobile web
                  application
                </option>
                <option value="comp8">
                  8. Devise and implement components in a content management or
                  e-commerce solution
                </option>
              </select>
            </div>

            <div className="mt-4 d-flex justify-content-around">
              <div className="form-group font-weight-bold">
                <label htmlFor="imitate">Imitate</label>
                <input
                  onChange={changeHandler}
                  name="imitate"
                  type="number"
                  min="1"
                  max="100"
                  className="form-control font-weight-bold"
                  id="imitate"
                  // placeholder="0 - 100"
                />
              </div>
              <div className="form-group font-weight-bold">
                <label htmlFor="adapt">Adapt</label>
                <input
                  onChange={changeHandler}
                  name="adapt"
                  type="number"
                  min="1"
                  max="100"
                  className="form-control font-weight-bold"
                  id="adapt"
                  // placeholder="0 - 100"
                />
              </div>
              <div className="form-group font-weight-bold">
                <label htmlFor="implement">Implement</label>
                <input
                  onChange={changeHandler}
                  name="implement"
                  type="number"
                  min="1"
                  max="100"
                  className="form-control"
                  id="implement"
                  // placeholder="0 - 100"
                />
              </div>
            </div>

            <button className="btn btn-primary">Save</button>
          </form>
        </Modal>
      </div>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

let defaultStudent = {
  name: "",
  comp1: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp2: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp3: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp4: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp5: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp6: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp7: {
    imitate: null,
    adapt: null,
    implement: null
  },
  comp8: {
    imitate: null,
    adapt: null,
    implement: null
  }
};
