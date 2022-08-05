import React, { useState } from 'react';
// can just import React and use useState as React.useState
import AddStudent from './AddStudent';
import StudentContext from './StudentContext';
import StudentList from './StudentList';

function App() {

  const [students, setStudents] = useState(
    [
      {
        id:  Math.floor((Math.random() * 10000) + 1000),
        student_number: '1',
        name: 'john',
        year: 2021,
        gender: 'male',
        graduated: 'false'
      },
      {
        id:  Math.floor((Math.random() * 10000) + 1000),
        student_number: '2',
        name: 'mary',
        year: 2013,
        gender: 'female',
        graduated: 'true',
      },
      {
        id:  Math.floor((Math.random() * 10000) + 1000),
        student_number: '3',
        name: 'manny',
        year: 2020,
        gender: 'male',
        graduated: 'false'
      }
    ]
  )

  const context = {
    getStudents: () => {
      return students;
    },
    // addStudent: (name, student_number, year, gender, graduated) => {
    //   const cloned = [...students, {
    //     id: Math.floor((Math.random() * 10000) + 1000),
    //     name: name,
    //     student_number: student_number,
    //     year: year,
    //     gender: gender,
    //     graduated: graduated
    //   }]
    //   setStudents(cloned)
    // }

    // if doing mongo or myswl, must use the restful api to add the
    // new student to the database
    // then the response of the API must include the new ID

    // mongo can get newID in react then send back to mongo
    // can do the same for mysql?

    addStudent(newStudent){
      const cloned = [...students, {
        ...newStudent,
        id: Math.floor((Math.random()* 10000) + 1000)
      }]
      setStudents(cloned)
      console.log(cloned)
    }
    ,
    deleteStudent: (id) => {
      let student_index = students.findIndex(s => s.id === id);
      let modified = [...students.slice(0, student_index),
      ...students.slice(student_index + 1)]
      setStudents(modified)
    }
  }

  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <StudentList />
        {/* <AddStudent/> */}
      </StudentContext.Provider>
    </React.Fragment>
  );
}

export default App;
