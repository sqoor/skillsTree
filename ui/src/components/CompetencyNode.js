import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PercentageCircle from './PercentageCircles/PercentageCircle';

export class CompetencyNode extends Component {

    getTotalLevel = () => {
        if(!this.props.comp) return '';
        if(!(this.props.comp.imitate || this.props.comp.adapt || this.props.comp.implement)) return '';
        
        let levelsCount = 0;
        levelsCount += this.props.comp.imitate ? 1 : 0;
        levelsCount += this.props.comp.adapt ? 1 : 0;
        levelsCount += this.props.comp.implement ? 1 : 0;

        const totalLevel = Math.round((this.props.comp.imitate + this.props.comp.adapt + this.props.comp.implement) / levelsCount)
        
        return totalLevel;
    }

    getColor(percentage) {
        return percentage < 34 ? 'orange' : percentage < 67 ? 'green' : '';
    }

    render() {
        const { getColor, getTotalLevel} = this;
        const { studentName, compName } = this.props;
        const totalLevel = getTotalLevel();
        const color = getColor(totalLevel);

        return (
            <div className="m-4">
                <Link to={{ pathname: `/student/${studentName}/${compName}`, state: this.props }}>
                    <p className="text-muted">{compName}</p>
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
