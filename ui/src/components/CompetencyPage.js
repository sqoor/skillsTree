import React, { Component } from 'react'
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyPage extends Component {
    getColor(percentage) {
        const color = percentage < 34 ? 'orange' : percentage < 67 ? 'green' : '';
        return color;
    }

    render() {
        const { compName, comp } = this.props.location.state;
        const { getColor } = this;

        return (
            <div className="container mt-5 text-muted">
                <div className="row">
                    <div className="col-6">
                        <h3>{compName}</h3>
                    </div>
                    <div>
                        <p>Imitate</p>
                        <PercentageCircle
                            name={'level 1'}
                            totalLevel={comp.imitate}
                            size={''}
                            color={getColor(comp.imitate)}
                        />
                        <p>Adapt</p>
                        <PercentageCircle
                            name={'level 2'}
                            totalLevel={comp.adapt}
                            size={''}
                            color={getColor(comp.adapt)}
                        />
                        <p>Implement</p>
                        <PercentageCircle
                            name={'level 3'}
                            totalLevel={comp.implement}
                            size={''}
                            color={getColor(comp.implement)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CompetencyPage
