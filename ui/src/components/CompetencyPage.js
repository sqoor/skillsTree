import React, { Component } from 'react'
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyPage extends Component {
    state = {
        compsRealNames: [
            'Format an application',
            'Produce a static and adaptable web user interface',
            'Develop a dynamic web user Interface',
            'Produce a user interface with a content management or e-commerce solution',
            'Create a database',
            'Develop data access components',
            'Develop the back-end part of a web or mobile web application',
            'Devise and implement components in a content management or e-commerce solution',
        ]
    }

    getColor(percentage) {
        const color = percentage < 34 ? 'orange' : percentage < 67 ? 'green' : '';
        return color;
    }

    render() {
        const { id, name, level, student } = this.props.location.state;
        const { compsRealNames } = this.state;
        const { getColor } = this;

        return (
            <div className="container mt-5 text-muted">
                <div className="row">
                    <div className="col-6">
                        <p>Competency Page</p>
                        <p>Competency Inforamtion</p>
                        <p>{compsRealNames[id - 1]}</p>
                    </div>
                    <div>
                        <p>Imitate</p>
                        <PercentageCircle
                            name={'level 1'}
                            totalLevel={level.one}
                            size={''}
                            color={getColor(level.one)}
                        />
                        <p>Adapt</p>
                        <PercentageCircle
                            name={'level 2'}
                            totalLevel={level.two}
                            size={''}
                            color={getColor(level.two)}
                        />
                        <p>Implement</p>
                        <PercentageCircle
                            name={'level 3'}
                            totalLevel={level.three}
                            size={''}
                            color={getColor(level.three)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CompetencyPage
