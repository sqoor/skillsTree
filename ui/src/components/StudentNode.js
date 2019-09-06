import React, { Component } from 'react';
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class StudentNode extends Component {
    render() {
        const { student, comp } = this.props;
        const totalLevel = 10;
        const color = totalLevel < 34 ? 'orange' : totalLevel < 67 ? 'green' : '';

        return (
            // <div
            //     style={style.circle}
            //     className="student-node text-light font-weight-bold p-3 text-center"
            // >
            //     <p style={style.content}>
            //         {student.name}
            //     </p>
            // </div>

            <div className="m-1 text-center">
                <p style={{ color: '#aaa', textAlign: 'center', fontSize: '1.5rem' }}>{student.name}</p>
                <PercentageCircle
                    name={'total comptencies score'}
                    totalLevel={totalLevel}
                    size={'big'}
                    color={color}
                />
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
