import StudentForm from './components/StudentForm';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import './components/Styles.css';
import AttendanceHistory from './components/AttendanceHistory';

function App() {
  const [studentData, setStudentData] = useState([]);

  const addStudent = (studentObj) => {
    setStudentData([...studentData, studentObj]);
  };

  return (
    <div className="App">
      <br></br>
      <h1>Student Attendance Management</h1><br></br>
      <Router>
      <Routes>
        
          <Route path="/" element={<StudentForm addStudent={addStudent} />} />
          <Route path="/attendance-history" element={<AttendanceHistory />} />
          <Route
            path="*"
            element={<Navigate to="/" />} // Redirect to the home page if the route doesn't match
          />
          
        </Routes>
        </Router>
      <StudentTable studentData={studentData} />
    </div>
  );
}

export default App;
