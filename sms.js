const studentForm = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const rollInput = document.getElementById('roll');
const courseInput = document.getElementById('course');
const marksInput = document.getElementById('marks');
const studentIndex = document.getElementById('studentIndex');
const submitBtn = document.getElementById('submitBtn');
const formTitle = document.getElementById('formTitle');
const tableBody = document.getElementById('searchBox');
const searchBox = document.getElementById('filterCourse');
const themeToggle = document.getElementById('themeToggle');


let students = JSON.parse(localStorage.getItem('students_data')) || [
    { roll: '102', name: 'aman verma', course: 'bca',marks: 88 },
    { roll: '102', name: 'priya patel', course: 'b.tech', marks: 92 }
];
renderTable();

