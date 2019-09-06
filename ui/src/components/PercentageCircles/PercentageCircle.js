import React from 'react';
import './css/circle.css';

function PercentageCircle(props) {
    const { name, totalLevel, color, size } = props;

    return (
        <div>
            <abbr title={name} style={abbrStyle}>
                <div className={`c100 p${totalLevel} ${color} ${size}`}>
                    <span>
                        {totalLevel}%
                </span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
            </abbr>
        </div >
    )
}

export default PercentageCircle

const abbrStyle = {
    borderBottom: 'none !important',
    cursor: 'pointer !important',
    textDecoration: 'none !important'
}
