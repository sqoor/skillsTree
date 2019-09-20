/* import React, { Component } from 'react'

export class Edit extends Component {
    state = {
        student: {
            // id: '',
            // name: ''
        },
        comp: [
            // {
            //     id: 0,
            //     name: '',
            //     level: {
            //         one: '',
            //         two: '',
            //         three: ''
            //     }
            // }
        ]
    }

    componentDidMount() {
        const { student, comp } = this.props;
        this.setState({ student, comp })
    }

    changeHandler = (e) => {
        const input = e.target;
        const inputValue = e.target.value;
        const inputName = input.name.split(' ');

        if (inputName.length === 1 && inputName[0] === 'name') {
            this.setState({ student: { name: inputValue } });
            return;
        }

        const newComp = {
            id: inputName[1],
            name: inputName[0],
            level: {
                one: inputName[3] === 'one' ? inputValue : null,
                two: inputName[3] === 'two' ? inputValue : null,
                three: inputName[3] === 'three' ? inputValue : null
            }
        }

        const compExists = this.state.comp.reduce((result, existedComp) => {
            if (existedComp.id === newComp.id) return result + 1;
            return result + 0;
        }, 0)

        if (compExists) {
            this.setState({
                comp: this.state.comp.map(comp => {
                    if (comp.id === newComp.id) {
                        comp.level.one = inputName[3] === 'one' ? inputValue : comp.level.one;
                        comp.level.two = inputName[3] === 'two' ? inputValue : comp.level.two;
                        comp.level.three = inputName[3] === 'three' ? inputValue : comp.level.three;
                    }
                    return comp
                })
            });

            return;
        }

        this.setState({
            comp: [...this.state.comp, newComp]
        })
    }

    submitHandler = (e) => {
        const pressedEnter = e.type === 'keyup' && e.keyCode === 13

        if (!pressedEnter) return;



        // this.props.submitStudent(this.state);
    }

    render() {
        const { changeHandler, submitHandler } = this;
        const { student, comp } = this.state;
        const { number}  = this.props; 

        return (
            <tr>
                <th scope="row">{number}</th>
                <td>
                    <input
                        value={student ? student.name : ''}
                        name="name"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="text"
                        required
                    />
                </td>
                <td>
                    <input
                        value={comp[0] && comp[0].level.one ? comp[0].level.one : ''}
                        name="comp1 1 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[0] && comp[0].level.two ? comp[0].level.two : ''}
                        name="comp1 1 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[0] && comp[0].level.three ? comp[0].level.three : ''}
                        name="comp1 1 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[1] && comp[1].level.one ? comp[1].level.one : ''}
                        name="comp2 2 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[1] && comp[1].level.two ? comp[1].level.two : ''}
                        name="comp2 2 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[1] && comp[1].level.three ? comp[1].level.three : ''}
                        name="comp2 2 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[2] && comp[2].level.one ? comp[2].level.one : ''}
                        name="comp3 3 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[2] && comp[2].level.two ? comp[2].level.two : ''}
                        name="comp3 3 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[2] && comp[2].level.three ? comp[2].level.three : ''}
                        name="comp3 3 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[3] && comp[3].level.one ? comp[3].level.one : ''}
                        name="comp4 4 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[3] && comp[3].level.two ? comp[3].level.two : ''}
                        name="comp4 4 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[3] && comp[3].level.three ? comp[3].level.three : ''}
                        name="comp4 4 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[4] && comp[4].level.one ? comp[4].level.one : ''}
                        name="comp5 5 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[4] && comp[4].level.two ? comp[4].level.two : ''}
                        name="comp5 5 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[4] && comp[4].level.three ? comp[4].level.three : ''}
                        name="comp5 5 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[5] && comp[5].level.one ? comp[5].level.one : ''}
                        name="comp6 6 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[5] && comp[5].level.two ? comp[5].level.two : ''}
                        name="comp6 6 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[5] && comp[5].level.three ? comp[5].level.three : ''}
                        name="comp6 6 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[6] && comp[6].level.one ? comp[6].level.one : ''}
                        name="comp7 7 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[6] && comp[6].level.two ? comp[6].level.two : ''}
                        name="comp7 7 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[7] && comp[6].level.three ? comp[6].level.three : ''}
                        name="comp7 7 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[7] && comp[7].level.one ? comp[7].level.one : ''}
                        name="comp8 8 level one"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[7] && comp[7].level.two ? comp[7].level.two : ''}
                        name="comp8 8 level two"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        value={comp[7] && comp[7].level.three ? comp[7].level.three : ''}
                        name="comp8 8 level three"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="number"
                        min="0"
                        max="100"
                    />
                </td>
                <td>
                    <input
                        onClick={submitHandler}
                        className="btn btn-sm btn-outline-danger"
                        type="button"
                        value="Edit"
                    />
                </td>
            </tr>
        )
    }
}

export default Edit
 */