import React, { useContext } from 'react';
import AddStudent from './AddStudent';
import AddStudentHooks from './AddStudentHooks';
import StudentContext from './StudentContext';

export default function StudentList() {
    const studentContext = useContext(StudentContext);

    // const deleteStudent = () => {
    //     studentContext.deleteStudent(id)
    // }
    return (
        <React.Fragment>
            <h1>list of students</h1>
            <table>
                <tr>
                    <td>student number</td>
                    <td>name</td>
                    <td>year of study</td>
                    <td>gender</td>
                    <td>graduated</td>
                    <td>delete</td>
                </tr>
                {studentContext.getStudents().map(each => {
                    return(
                    <tr>
                    <td>{each.student_number}</td>
                    <td>{each.name}</td>
                    <td>{each.year}</td>
                    <td>{each.gender}</td>
                    <td>{each.graduated==='true'? 'graduated': 'still studying'}</td>
                    <td><button onClick={() => {studentContext.deleteStudent(each.id)}}>delete</button></td>
                </tr>
                    )
                })}
            </table>
            {/* {
                // console.log(studentContext.getStudents())
                studentContext.getStudents().map(each => {
                   return( <div>
                        <h4>student_number: {each.student_number}</h4>
                        <h4>year of study: {each.year}</h4>
                        <h4>gender: {each.gender}</h4>
                        <h4>graduated: {each.graduated ? "graduated": "still studying"}</h4>
                    </div>)
                })
            } */}
            {/* <AddStudent/> */}
            <AddStudentHooks/>
        </React.Fragment>
    )
}