document.addEventListener("DOMContentLoaded", function() {
    if (checkLoggedIn()) {
        showCRUD();
        get_json_data(); 
    } else {
        showLoginForm();
    }

    // event listener for login
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        handleLogin();
    });

    // event listener for logout
    const logoutLink = document.querySelector('.logout-link');
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        handleLogout();
    });

});

// check if any user logged in 
function checkLoggedIn() {
    const data = JSON.parse(sessionStorage.getItem('sessionData'));
    return !!data;
}

// crud table display
function showCRUD() {
    document.getElementById("form").style.display = "none";
    document.getElementById("tablecrud").style.display = "block";
    displayGreeting(JSON.parse(sessionStorage.getItem('sessionData')));
}

// login form display
function showLoginForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("tablecrud").style.display = "none";
    displayGreeting(null);
}

// login
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const jsonData = JSON.parse(localStorage.getItem('jsonData'));
    const isValidUser = jsonData.some(function(user) {
        return user.EMAIL === email && user.PASS === password;
    });

    if (isValidUser) {
        const foundUser = jsonData.find(function(user) {
            return user.EMAIL === email;
        });
        const sessionData = {
            email: email,
            password: password,
            UID: foundUser.UID
        };
        sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
        showCRUD();
        get_json_data(); // populate table with data after login
    } else {
        const error = document.getElementById("error");
        error.textContent = "Invalid email or password";
        error.style.color = "red";
    }
}

// logout
function handleLogout() {
    sessionStorage.removeItem('sessionData');
    showLoginForm();
}

// display Hi to loggedin user
function displayGreeting(sessionData) {
    const hello = document.getElementById("hello");
    if (sessionData && sessionData.UID) {
        hello.innerText = 'Hello, ' + sessionData.UID;
    } else {
        hello.innerText = 'Hello, Guest';
    }
}

// data from json file
fetch("assets/example.json")
    .then(response => response.json())
    .then(jsonData => {
        localStorage.setItem('jsonData', JSON.stringify(jsonData));
    })
    .catch(error => console.error("Error:", error));

// populate crud from localstorage
function get_json_data() {
    const jsonDataString = localStorage.getItem('jsonData');
    const sessionData = JSON.parse(sessionStorage.getItem('sessionData'));

    if (jsonDataString && sessionData) {
        const jsonData = JSON.parse(jsonDataString);
        const tableBody = document.getElementById('table-body');

        tableBody.innerHTML = '';

        jsonData.forEach((item, index) => {
            const row = document.createElement('tr');

            Object.values(item).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            // Check if the user's UID matches the logged-in user's UID
            if (item.UID === sessionData.UID) {
                row.classList.add('highlighted'); // Add the 'highlighted' class to the row
            }

            const actionsTd = document.createElement('td');
            const editBtn = document.createElement('button');
            editBtn.className = "edit-btn";
            editBtn.innerText = "Edit";
            editBtn.addEventListener('click', () => {
                showUpdateForm(item.SR);
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.className = "delete-btn";
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener('click', () => {
                confirmDelete(item.SR);
            });
            actionsTd.appendChild(editBtn);
            actionsTd.appendChild(deleteBtn);
            row.appendChild(actionsTd);

            tableBody.appendChild(row);
        });
    } else {
        console.log('No data found in local storage or session storage.');
    }
}



function showAddModal() {
var modal = document.getElementById("addModal");
modal.style.display = "block";
}


//ADD MODAL show and hide------------------------------------------------------

function hideAddModal() {
var modal = document.getElementById("addModal");
modal.style.display = "none";
}

var addBtn = document.getElementById("addbtn");
addBtn.onclick = function() {
showAddModal();
}

var closeAdd = document.getElementById("closeAdd");
closeAdd.onclick = function() {
hideAddModal();
}

window.onclick = function(event) {
var modal = document.getElementById("addModal");
if (event.target == modal) {
    hideAddModal();
}
}

//ADD user-------------------------------------------------------------

var addform = document.getElementById('add-btn');
addform.addEventListener("click", addUser);

function addUser() {
const passInput = document.getElementById("password1");
const emailInput = document.getElementById("email1");
const ageInput = document.getElementById("age1");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const password = passInput.value.trim();
const email = emailInput.value.trim();
const age = ageInput.value.trim();
const unique = 'BTS_'+ Date.now().toString(16) +Math.floor(Math.random()*1000).toString(16);
if (email.match(validRegex)) {
    if (password && email) {
        if(age){
            let jsonData = JSON.parse(localStorage.getItem('jsonData')) || [];

            let maxId = 0;
            jsonData.forEach(user => {
                if (user.SR > maxId) {
                    maxId = user.SR;
                }
            });

            const id = parseInt(maxId) + 1;


            // Create a new user object
            const user = {
                SR: id,
                UID: unique,
                EMAIL: email,
                PASS: password,
                AGE: age,
            };


            jsonData.push(user);

            localStorage.setItem("jsonData", JSON.stringify(jsonData));

            passInput.value = "";
            emailInput.value = "";
            ageInput.value="";

            get_json_data();

            hideAddModal();
        }
        else{
            alert("Age is Required");
        }

    } else {
        alert("Password is Required");
    }
} else {
    alert("Invalid email address!");
}
}


// UPDATE user --------------------------------------------------------
function showUpdateForm(userId) {
let jsonData = JSON.parse(localStorage.getItem('jsonData'));

const updatePasswordInput = document.getElementById("password2");
const updateEmailInput = document.getElementById("email2");
const updateAgeInput = document.getElementById("age2");

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const userToUpdate = jsonData.find(user => user.SR === userId);
console.log(userToUpdate);
const upmodal = document.getElementById("upModal");

updateEmailInput.value = userToUpdate.EMAIL;
updatePasswordInput.value = userToUpdate.PASS;
updateAgeInput.value = userToUpdate.AGE;

document.getElementById("upModal").style.display = "block";
var span = document.getElementById("closeUpdate");

span.onclick = function () {
upmodal.style.display = "none";
}

window.onclick = function (event) {
if (event.target == upmodal) {
    upmodal.style.display = "none";
}
}

var updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener("click", function (event) {
event.preventDefault();
const updatedEmail = updateEmailInput.value.trim();
const updatedPassword = updatePasswordInput.value.trim();
const updatedAge = updateAgeInput.value.trim();

if (updatedEmail.match(validRegex)) {
    if (updatedPassword && updatedEmail) {
        if(updatedAge){
            userToUpdate.EMAIL = updatedEmail;
            userToUpdate.PASS = updatedPassword;
            userToUpdate.AGE = updatedAge;

            localStorage.setItem("jsonData", JSON.stringify(jsonData));

            get_json_data();

            document.getElementById("upModal").style.display = "none";
        } else {
            alert("Please fill the age");
        }
    }
    else{
        alert("Please fill all the fields");
    }
}
else{
    alert("Please fill valid email.");
}
});

}


//DELETE functions------------------------------------------------------

function deleteUser(userId) {
let jsonData = JSON.parse(localStorage.getItem('jsonData'));
let delData = JSON.parse(localStorage.getItem('delData')) || [];
const sessionData = JSON.parse(sessionStorage.getItem('sessionData'));

const deletedUser = jsonData.find(user => user.SR === userId);

if (deletedUser.UID === sessionData.UID) {
    alert("You can not delete yourself");
    return;
}

jsonData = jsonData.filter(user => user.SR !== userId);

delData.push(deletedUser);

localStorage.setItem("jsonData", JSON.stringify(jsonData));
localStorage.setItem("delData", JSON.stringify(delData));

get_json_data(jsonData);
}


function confirmDelete(userId) {
const confirmDelete = confirm("Are you sure you want to delete this user?");
if (confirmDelete) {
    deleteUser(userId);
} else {
    alert("Delete operation cancelled.");
}
}
