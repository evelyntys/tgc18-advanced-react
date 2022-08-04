import React, { useState } from 'react';
import AddStudent from './AddStudent';
import StudentContext from './StudentContext';
import StudentList from './StudentList';

function App() {

  const [students, setStudents] = useState(
    [
      {
        student_number: '1',
        year: 3,
        gender: 'male',
        graduated: false
      },
      {
        student_number: '2',
        year: 5,
        gender: 'female',
        graduated: true,
      },
      {
        student_number: '3',
        year: 1,
        gender: 'male',
        graduated: false
      }
    ]
  )

  const context = {
    getStudents: () => {
      return students;
    },
    addStudent: (year, gender, graduated) => {
      const cloned = [...students, {
        student_number: Math.floor((Math.random() * 10000) + 1000),
        year: year,
        gender: gender,
        graduated: graduated
      }]
      setStudents(cloned)
    },
    deleteStudent: (id) => {
      let student_index = students.findIndex(s => s.student_number === id);
      let modified = [...students.slice(0, student_index),
      ...students.slice(student_index+1)]
      setStudents(modified)
  }
  }

  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <StudentList/>
        {/* <AddStudent/> */}
      </StudentContext.Provider>
    </React.Fragment>
  );
}

export default App;
