import React, { Component } from 'react'

export class Row extends Component {
    render() {
        const {number, student, comp} = this.props; 
        return (
            <tr>
                <th scope="row">{number}</th>
                <td>{student.name}</td>
                <td>{comp[0].level.one}</td>
                <td>{comp[0].level.two}</td>
                <td>{comp[0].level.three}</td>
                <td>{comp[1].level.one}</td>
                <td>{comp[1].level.two}</td>
                <td>{comp[1].level.three}</td>
                <td>{comp[2].level.one}</td>
                <td>{comp[2].level.two}</td>
                <td>{comp[2].level.three}</td>
                <td>{comp[3].level.one}</td>
                <td>{comp[3].level.two}</td>
                <td>{comp[3].level.three}</td>
                <td>{comp[4].level.one}</td>
                <td>{comp[4].level.two}</td>
                <td>{comp[4].level.three}</td>
                <td>{comp[5].level.one}</td>
                <td>{comp[5].level.two}</td>
                <td>{comp[5].level.three}</td>
                <td>{comp[6].level.one}</td>
                <td>{comp[6].level.two}</td>
                <td>{comp[6].level.three}</td>
                <td>{comp[7].level.one}</td>
                <td>{comp[7].level.two}</td>
                <td>{comp[7].level.three}</td>
            </tr>
        )
    }
}

export default Row
