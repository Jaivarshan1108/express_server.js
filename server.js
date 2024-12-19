const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); 

let students = [];

// Route for the form page
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission and add student to the array
app.post('/student', (req, res) => {
    const { name, dob, age, rollNo, year, course, phoneNo, email } = req.body;

    // Add student to the temporary array
    students.push({ name, dob, age, rollNo, year, course, phoneNo, email });

    // Redirect to the student details page
    res.redirect('/');
});

//
app.get('/student',(req,res) =>{
    res.redirect('/student/details');
});

// Route to display student details
app.get('/student/details', (req, res) => {
    res.render('details', { students });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
