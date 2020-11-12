// //SIGNUP
// const signupForm = document.querySelector('#signup-form'); // get a reference and store in const
// signupForm.addEventListener('submit', (e) => { // prevents the page reload
//     e.preventDefault();

//     // get user info
//     const email = signupForm['signup-email'].value;
//     const password = signupForm['signup-password'].value;

//     // SIGNUP
//     auth.createUserWithEmailAndPassword(email, password).then(cred => { // firebase create user method
//         const modal = document.querySelector('#modal-signup'); // create a const for modal-signup
//         M.Modal.getInstance(modal).close(); // closes the modal
//         signupForm.reset(); // resets the fields
//     }); // asynchronous task, needs a promise
// });


// LOGIN
const login = document.querySelector('#login');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = login.elements['email'].value;
    const password = login.elements['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => { // firebase signin method
        console.log(cred.user);
        // close the form and open the dashboard
    });
});


// AUTH STATUS LISTENER
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
        window.location.href = "/"
    } else {
        console.log('user logged out');
    }
});


// // LOGOUT
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault(); // stops HTML from reloading
//     auth.signOut(); // confirmation in STATUS LISTENER
// })