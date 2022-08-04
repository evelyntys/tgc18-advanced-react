import React from 'react';
import StudentContext from './StudentContext';

export default class AddStudent extends React.Component{
    state = {
        year: '',
        gender: '',
        graduated: false,
    }

    static contextType = StudentContext;

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addStudent = () => {
        this.context.addStudent(
            this.state.year,
            this.state.gender,
            this.state.graduated
            )
    }

    render(){
        return(
            <React.Fragment>
                {/* <div>
                    <label>Student name</label>
                    <input type='text' name='student_name' value={this.state.student_name} onChange={this.updateFormField}/>
                </div> */}
                <div>
                    <label>Year of study</label>
                    <input type='text' name='year' value={this.state.year} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type='text' name='gender' value={this.state.gender} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Graduated</label>
                    <input type='text' name='graduated' value={this.state.graduated} onChange={this.updateFormField}/>
                </div>
                <button onClick={this.addStudent}>add</button>
            </React.Fragment>
        )
    }
}