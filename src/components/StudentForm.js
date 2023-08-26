// StudentForm.js
import React, { useState } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentObj = {
      name,
      number,
      city,
      rollNo,
    };

    addStudent(studentObj);

    // Reset input fields
    setName('');
    setNumber('');
    setCity('');
    setRollNo('');
  };
  const navigate = useNavigate(); // intialize useNavigate
  
  return (
    <div className="studentData">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-warning" value="Add Student" />
        <button onClick={() => navigate('/attendance-history')} className="btn btn-info">
          View Attendance History
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
