import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyNode extends Component {

    render() {
        const { id, name, level, student } = this.props;
        // const totalLevel = (level.one + level.two + level.three) / 3;
        const totalLevel = 52;
        const color = totalLevel < 34 ? 'orange' : totalLevel < 67 ? 'green' : '';

        return (
            <div className="m-1">
                <p style={{ color: '#aaa' }}>{name}</p>
                <Link to={{ pathname: `/student/${student.name}/${name}`, state: this.props }}>
                    <PercentageCircle
                        name={'total comptency score'}
                        totalLevel={totalLevel}
                        size={'small'}
                        color={color}
                    />
                    <PercentageCircle
                        name={'total comptency score'}
                        totalLevel={totalLevel}
                        size={'small'}
                        color={color}
                    />
                    <PercentageCircle
                        name={'total comptency score'}
                        totalLevel={totalLevel}
                        size={'small'}
                        color={color}
                    />
                </Link>
            </div>
        )
    }
}

export default CompetencyNode
