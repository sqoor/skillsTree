import React, { Component } from 'react'

export class StudentNode extends Component {
    render() {
        const { student, comp } = this.props;

        return (
            <div
                style={style.circle}
                className="student-node text-light font-weight-bold p-3 text-center"
            >
                <p style={style.content}>
                    {student.name}
                </p>
            </div>
        )
    }
}

export default StudentNode


const style = {
    circle: {
        height: '200px',
        width: '200px',
        backgroundColor: '#aaa',
        borderRadius: '50%',
        position: 'relative',
        margin: '2px',
        '&:hover': {
            height: '250px',
            width: '250px',
        }
    },

    content: {
        position: 'absolute',
        left: '24%',
        top: '44%',
        cursor: 'pointer'
    }
}
