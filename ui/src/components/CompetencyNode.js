import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyNode extends Component {

    getTotalLevel(level) {
        let levelsCount = 0;
        levelsCount += level.one ? 1 : 0;
        levelsCount += level.two ? 1 : 0;
        levelsCount += level.three ? 1 : 0;

        const totalLevel = Math.round((level.one + level.two + level.three) / levelsCount)
        
        return totalLevel;
    }

    getColor(percentage) {
        return percentage < 34 ? 'orange' : percentage < 67 ? 'green' : '';
    }

    render() {
        const { getColor, getTotalLevel} = this;
        const { id, name, level, student } = this.props;
        const totalLevel = getTotalLevel(level);
        const color = getColor(totalLevel);

        return (
            <div className="m-1">
                <p>{name}</p>
                <Link to={{ pathname: `/student/${student.name}/${name}`, state: this.props }}>
                    <PercentageCircle
                        name={'total comptency score'}
                        totalLevel={totalLevel}
                        size={''}
                        color={color}
                    />
                </Link>
            </div>
        )
    }
}

export default CompetencyNode
