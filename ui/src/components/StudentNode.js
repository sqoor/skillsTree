import React, { Component } from 'react';
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class StudentNode extends Component {
    getColor(percentage) {
        return percentage < 34 ? 'orange' : percentage < 67 ? 'green' : '';
    }
    
    getTotalLevel = () => {
        let totalLevel = 0;

        const totalCompLevel = this.props.comp.reduce((result, elem) => {
            let levelsCount = 0;
            levelsCount += elem.level.one ? 1 : 0;
            levelsCount += elem.level.two ? 1 : 0;
            levelsCount += elem.level.three ? 1 : 0;
            
            const totalLevel = Math.round((elem.level.one + elem.level.two + elem.level.three) / levelsCount)
            
            return result + totalLevel;
        }, 0)
        
        totalLevel = Math.floor(totalCompLevel / this.props.comp.length);
        return totalLevel;
    }

    render() {
        const {getColor, getTotalLevel} = this;
        const { student, comp } = this.props;
        const totalLevel = getTotalLevel();
        const color = getColor(totalLevel);

        return (
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
