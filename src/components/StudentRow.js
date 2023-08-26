// StudentRow.js
import React, { useState } from 'react';
import './Styles.css';

function StudentRow({ student, index }) {
  const [attendance, setAttendance] = useState('');

  const handlePresent = () => {
    setAttendance('Present');
  };

  const handleAbsent = () => {
    setAttendance('Absent');
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.number}</td>
      <td>{student.city}</td>
      <td>{student.rollNo}</td>
      <td>
        {attendance ? (
          <button disabled>{attendance}</button>
        ) : (
          <div>
            <button onClick={handlePresent}>P</button>
            <button onClick={handleAbsent}>A</button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default StudentRow;
