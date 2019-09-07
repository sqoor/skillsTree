import React, { Component } from 'react'
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyPage extends Component {
    getColor(percentage) {
        const color = percentage < 34 ? 'orange' : percentage < 67 ? 'green' : '';
        return color;
    }

    render() {
        const { id, name, level, student } = this.props.location.state;
        const { getColor } = this;

        return (
            <div className="d-flex justify-content-center">
                <div>
                    <p>Competency Page</p>
                    <p>Competency Inforamtion</p>
                    <p>{name}</p>
                </div>
                <div>
                <p>Level One</p>
                <PercentageCircle
                        name={'level 1'}
                        totalLevel={level.one}
                        size={''}
                        color={getColor(level.one)}
                    />
                    <p>Level Two</p>
                    <PercentageCircle
                        name={'level 2'}
                        totalLevel={level.two}
                        size={''}
                        color={getColor(level.two)}
                    />
                    <p>Level Three</p>
                    <PercentageCircle
                        name={'level 3'}
                        totalLevel={level.three}
                        size={''}
                        color={getColor(level.three)}
                    />
                    </div>
            </div>
        )
    }
}

export default CompetencyPage
