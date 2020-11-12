// AUTH STATUS LISTENER
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
        window.location.href = "/login?redirect=" + window.location.pathname
    }
});

// LOGOUT
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault(); // stops HTML from reloading
    auth.signOut(); // confirmation in STATUS LISTENER
})

