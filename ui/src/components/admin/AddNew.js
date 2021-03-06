import React, { Component } from 'react'

export class AddNew extends Component {
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

        this.props.submitStudent(this.state);
    }

    render() {
        const { changeHandler, submitHandler } = this;
        const { hidden } = this.props;
        const visibility = hidden ? 'hidden' : 'visible';
        return (
            <tr style={{ visibility }}>
                <th scope="row">#</th>
                <td>
                    <input
                        name="name"
                        onKeyUp={submitHandler}
                        onChange={changeHandler}
                        type="text"
                        required
                    />
                </td>
                <td>
                    <input
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
                        value="Add New Student"
                    />
                </td>
            </tr>
        )
    }
}

export default AddNew
