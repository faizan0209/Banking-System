// registration page
function saveData() {
    let name, email, password;
    name = document.getElementById("fullName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    // Retrieve data from localStorage
    let record = JSON.parse(localStorage.getItem('inputs'));

    // Check if record is null or undefined, if so, initialize it as an empty array
    if (!Array.isArray(record)) {
        record = [];
    }

    if (record.some(v => v.email === email)) {
        alert("Duplicate data");
    } else {
        record.push({
            "name": name,
            "email": email,
            "password": password
        });
        localStorage.setItem("inputs", JSON.stringify(record));
        localStorage.setItem("name",name);
        localStorage.setItem("email", email); // Store email
        localStorage.setItem("password", password); // Store password
        alert("Registration Successful");
    }
}

























// function saveData() {
//     let name, email, password;
//     name = document.getElementById("fullName").value;
//     email = document.getElementById("email").value;
//     password = document.getElementById("password").value;

//     // Retrieve data from localStorage
//     let record = JSON.parse(localStorage.getItem('inputs'));

//     // Check if record is null or undefined, if so, initialize it as an empty array
//     if (!Array.isArray(record)) {
//         record = [];
//     }

//     if (record.some(v => v.email === email)) {
//         alert("Duplicate data");
//     } else {
//         record.push({
//             "name": name,
//             "email": email,
//             "password": password
//         });
//         localStorage.setItem("inputs", JSON.stringify(record));
//         alert("Registration Successfull");
//     }
// }