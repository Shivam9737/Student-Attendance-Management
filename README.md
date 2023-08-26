Student Management System
Overview
The Student Management System is a web application that allows users to manage and track student information, including names, phone numbers, cities, and roll numbers. It also provides an attendance history feature to track student attendance.

Features
Add Students: Users can add student information, including name, phone number, city, and roll number, using a web form.

Display Students: The application displays a table with student information, including a roll number, name, phone number, city, and an option to mark attendance.

Attendance History: Users can view the attendance history of students, filter students by attendance status (Present, Absent, or All), and navigate through the attendance records.

Navigation: Users can navigate between the student management and attendance history pages.

Technologies Used
Frontend: React.js is used for building the user interface, and React Router is used for client-side routing. Bootstrap is used for styling.

Backend: A mock API is used to simulate data fetching for student information and attendance history.

Installation
Clone the repository:

bash
Copy code
cd student-management-system
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Usage
Add Students: Access the Student Management page and fill out the student information form. Click the "Submit" button to add a student. The added student will appear in the table.

Mark Attendance: On the Student Management page, click the "Present" or "Absent" button to mark a student's attendance.

View Attendance History: Access the Attendance History page to view and filter the attendance history of students. Use the filter buttons to show all students, present students, or absent students.

Navigate Between Pages: Use the navigation links to switch between the Student Management and Attendance History pages.

Data Fetching
Student data is fetched from a mock API endpoint for demonstration purposes. In a real-world scenario, you would replace this with an actual API or database connection.

Attendance history data is also fetched from a mock API endpoint. The data includes student names, dates, and attendance statuses.

Folder Structure
src/components: Contains React components for the Student Management and Attendance History pages.

src/styles.css: Contains the CSS styles for the application.

License
This project is licensed under the MIT License.

Acknowledgments
Special thanks to Bootstrap for providing the CSS framework.

This project is for educational purposes and serves as a template for building student management systems.

Author
Shivam Kumar
Feel free to customize this README template to fit your project's specific details, and be sure to replace placeholders like your-username with your actual information. Additionally, you can include any other relevant information or sections that you think would be helpful for users and contributors of your project.
