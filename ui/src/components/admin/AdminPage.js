import React, { Component } from 'react'
import Axios from 'axios';
import Row from './Row';
import AddNew from './AddNew';

export class AdminPage extends Component {
    state = {
        data: [],
        wantAddNew: false
    }

    componentDidMount() {
        Axios.get('/data')
            .then(res => {
                this.setState({ data: res.data })
            })
            .catch(err => console.log(err));
    }

    toggleAddNew = () => {
        console.log('toggle add new button');
        this.setState({ wantAddNew: !this.state.wantAddNew })
    }



    render() {
        const { data, wantAddNew } = this.state;

        return (
            <div className="container-fluid">
                Admin Page Component
                <div className="mt-5">
                    <table className="table table-striped table-bordered">
                        <caption>
                            <button
                                className="btn btn-outline-dark"
                                onClick={this.toggleAddNew}
                            >
                                {wantAddNew ? 'Show Add New Student' : 'Hide Add New Student'}
                            </button>
                        </caption>
                        <thead className="">
                            <tr>
                                <th scope="col" rowSpan="2">#</th>
                                <th scope="col" rowSpan="2">Student Name</th>
                                <th scope="col" colSpan="3">1. Format an application </th>
                                <th scope="col" colSpan="3" >2. Produce a static and adaptable web user interface</th>
                                <th scope="col" colSpan="3" >3. Develop a dynamic web user Interface</th>
                                <th scope="col" colSpan="3" >4. Produce a user interface with a content management or e-commerce solution</th>
                                <th scope="col" colSpan="3" >5. Create a database</th>
                                <th scope="col" colSpan="3" >6. Develop data access components</th>
                                <th scope="col" colSpan="3" >7. Develop the back-end part of a web or mobile web application</th>
                                <th scope="col" colSpan="3" >8. Devise and implement components in a content management or e-commerce solution</th>
                                <th scope="col" rowSpan="2">Edit</th>
                            </tr>
                            <tr>
                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>

                                <th scope="col">Imitate</th>
                                <th scope="col">Adapt</th>
                                <th scope="col">Implement</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* {data.length ? 
                                data.map((obj, i) => (
                                    <Row
                                        key={obj.student.id}
                                        number={i + 1}
                                        student={obj.student}
                                        comp={obj.comp}
                                    />))
                                :
                                null
                            } */}
                            <AddNew hidden={wantAddNew} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdminPage
