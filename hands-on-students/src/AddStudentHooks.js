import React, { useState, useContext } from 'react';
import StudentContext from './StudentContext';

export default function AddStudentHooks() {
    const [newStudent, setNewStudent] = useState({
        name: "",
        student_number: "",
        year: "",
        gender: "male",
        graduated: "false"
    })

    const studentContext = useContext(StudentContext);

    const updateFormField = (e) => {
        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value
        })
    }

    const addStudent = () => {
        // studentContext.addStudent(newStudent.name, newStudent.student_number,  newStudent.year, newStudent.gender, newStudent.graduated);
        studentContext.addStudent(newStudent)
    }

    return (
        <React.Fragment>
            <div>
                <h1>New Student</h1>
                
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={newStudent.name} onChange={updateFormField} />
                </div>
                <div>
                    <label>Student number</label>
                    <input type='text' name='student_number' value={newStudent.student_number} onChange={updateFormField} />
                </div>
                <div>
                    <label>Year of study</label>
                    <input type='text' name='year' value={newStudent.year} onChange={updateFormField} />
                </div>
                <div>
                    <div>
                        <label>Gender: </label>
                    </div>
                    <label>Male</label>
                    <input type="radio" name="gender"
                        value="male" onChange={updateFormField}
                        checked={newStudent.gender === "male"} />
                    <label>Female</label>
                    <input type="radio" name="gender"
                        value="female" onChange={updateFormField}
                        checked={newStudent.gender === "female"} />
                </div>
                <div>
                    <div>
                        <label>Graduated: </label>
                    </div>
                    <label>Yes</label>
                    <input type="radio" name="graduated"
                        value={true} onChange={updateFormField}
                        checked={newStudent.graduated === 'true'} />
                    <label>No</label>
                    <input type="radio" name="graduated"
                        value={false} onChange={updateFormField}
                        checked={newStudent.graduated === 'false'} />
                    {/* <label>Graduated</label>
                    <input type='text' name='graduated' value={newStudent.graduated} onChange={updateFormField}/> */}
                </div>
                <button onClick={addStudent}>add</button>
            </div>
        </React.Fragment>
    )
}