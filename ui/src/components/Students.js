import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import StudentNode from './StudentNode';
import './Students.css'

export class Students extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        Axios.get('/data')
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { data } = this.state;

        return (
            <div style={divStyle}>
                {
                    data.map(obj => (
                        <Link
                            key={obj.student.name} 
                            to={{ pathname: `/student/${obj.student.name}`,
                            state: {obj, studentName: obj.student.name} }}  
                        >
                            <StudentNode {...obj} />
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default Students

const divStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '.7%'
}
