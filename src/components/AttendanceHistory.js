// AttendanceHistory.js
import React, { useState, useEffect } from 'react';


function AttendanceHistory() {
  

  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // State to manage the current filter
  useEffect(() => {
    // Replace 'your-api-endpoint-here' with the actual API endpoint to fetch attendance data
    fetch('http://localhost:3001/students')
      .then((response) => response.json())
      .then((data) => {
        setAttendanceData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  
     // Filter functions
     const showAll = () => {
        setFilter('all');
        setFilteredData(attendanceData);
      };
    
      const showPresent = () => {
        setFilter('present');
        const presentStudents = attendanceData.filter((student) => student.status === 'Present');
        setFilteredData(presentStudents);
      };
    
      const showAbsent = () => {
        setFilter('absent');
        const absentStudents = attendanceData.filter((student) => student.status === 'Absent');
        setFilteredData(absentStudents);
      };

  return (
    <div>
        <h4>.</h4>
      <h2>Attendance History</h2>
      <h3>.</h3>
      <div className="filter-buttons">
        <button onClick={showAll}>Show All</button>
        <button onClick={showPresent}>Show Present</button>
        <button onClick={showAbsent}>Show Absent</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceHistory;
