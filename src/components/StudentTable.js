// StudentTable.js
import React from 'react';
import StudentRow from './StudentRow';
import './Styles.css';

function StudentTable({ studentData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Number</th>
          <th>City</th>
          <th>Roll No.</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((student, index) => (
          <StudentRow key={index} student={student} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
