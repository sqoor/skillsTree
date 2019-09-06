import React, { Component } from 'react'
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyPage extends Component {
    render() {
        const { id, name, level, student } = this.props;
        const totalLevel = (level.one + level.two + level.three) / 3;
        const color = totalLevel < 34 ? 'orange' : totalLevel < 67 ? 'green' : '';

        return (
            <div>
                Competency Page
                <p>Competency Inforamtion</p>
                <PercentageCircle
                        name={'level 1'}
                        totalLevel={totalLevel}
                        size={'small'}
                        color={color}
                    />
                    <PercentageCircle
                        name={'level 2'}
                        totalLevel={totalLevel}
                        size={'small'}
                        color={color}
                    />
                    <PercentageCircle
                        name={'level 3'}
                        totalLevel={totalLevel}
                        size={'small'}
                        color={color}
                    />
            </div>
        )
    }
}

export default CompetencyPage
