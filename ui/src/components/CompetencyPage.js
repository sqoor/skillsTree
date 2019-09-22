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
            <div className="competency">
                <div className="row">
                    <div className="col-6">
                        <h3 className="text-muted font-weight-bold">{compName}</h3>
                    </div>
                    <div>
                        <p className="text-center text-muted">Imitate</p>
                        <PercentageCircle
                            name={'level 1'}
                            totalLevel={comp.imitate}
                            size={''}
                            color={getColor(comp.imitate)}
                        />
                        <p className="text-center text-muted">Adapt</p>
                        <PercentageCircle
                            name={'level 2'}
                            totalLevel={comp.adapt}
                            size={''}
                            color={getColor(comp.adapt)}
                        />
                        <p className="text-center text-muted">Implement</p>
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
