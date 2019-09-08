import React, { Component } from 'react'
import CompetencyNode from './CompetencyNode';

export class Competencies extends Component {
    state = {
        student: {},
        comp: {}
    }

    componentDidMount() {
        if (this.props.history.location.state) {
            const { student, comp } = this.props.history.location.state.obj;
            this.setState({ student, comp })
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        const { student, comp } = this.state;
        return (
            <div>
                <div
                    style={style.p}
                    className="col bg-dark text-light text-center"
                >
                    <h3>{student.name}</h3>
                </div>
                <div>
                    <h4 className="text-center mt-4">Competencies</h4>
                    <ul>
                        {Array.isArray(comp) ? comp.map(c => <CompetencyNode key={c.id} student={student} {...c} />) : null}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Competencies


const style = {
    p: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: '50%'

    }
}

