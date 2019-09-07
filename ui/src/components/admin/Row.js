import React, { Component } from 'react'

export class Row extends Component {
    render() {
        const {number, student, comp} = this.props; 
        return (
            <tr>
                <th scope="row">{number}</th>
                <td>{student.name}</td>
                <td>{comp[0] ? comp[0].level.one : null}</td>
                <td>{comp[0] ? comp[0].level.two : null}</td>
                <td>{comp[0] ? comp[0].level.three : null}</td>
                <td>{comp[1] ? comp[1].level.one : null}</td>
                <td>{comp[1] ? comp[1].level.two : null}</td>
                <td>{comp[1] ? comp[1].level.three : null}</td>
                <td>{comp[2] ? comp[2].level.one : null}</td>
                <td>{comp[2] ? comp[2].level.two : null}</td>
                <td>{comp[2] ? comp[2].level.three : null}</td>
                <td>{comp[3] ? comp[3].level.one : null}</td>
                <td>{comp[3] ? comp[3].level.two : null}</td>
                <td>{comp[3] ? comp[3].level.three : null}</td>
                <td>{comp[4] ? comp[4].level.one : null}</td>
                <td>{comp[4] ? comp[4].level.two : null}</td>
                <td>{comp[4] ? comp[4].level.three : null}</td>
                <td>{comp[5] ? comp[5].level.one : null}</td>
                <td>{comp[5] ? comp[5].level.two : null}</td>
                <td>{comp[5] ? comp[5].level.three : null}</td>
                <td>{comp[6] ? comp[6].level.one : null}</td>
                <td>{comp[6] ? comp[6].level.two : null}</td>
                <td>{comp[6] ? comp[6].level.three : null}</td>
                <td>{comp[7] ? comp[7].level.one : null}</td>
                <td>{comp[7] ? comp[7].level.two : null}</td>
                <td>{comp[7] ? comp[7].level.three : null}</td>
            </tr>
        )
    }
}

export default Row
