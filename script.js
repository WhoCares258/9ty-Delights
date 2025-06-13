let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul a');

// Adjust the offset to account for the header height
let headerHeight = document.querySelector('header').offsetHeight;

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - headerHeight -55; // Use the header height for the offset
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    console.log(`Section ID: ${id}, Offset: ${offset}, Height: ${height}, Scroll position: ${top}`);

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('gold'));
      document.querySelector(`header ul a[href="#${id}"]`).classList.add('gold');
    }
  });
});

// Scroll to the section when a nav link is clicked, adjusting for header height
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    let targetId = link.getAttribute('href').substring(1);
    let targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight - 50, // Adjust scroll position by header height
        behavior: 'smooth' // Smooth scroll effect
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const today = new Date();
    const todayDate = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Set the minimum date for the date input
    dateInput.setAttribute('min', todayDate);

    // Update the time input dynamically
    dateInput.addEventListener('change', () => {
        const selectedDate = dateInput.value;

        if (selectedDate === todayDate) {
            // If the selected date is today, set the time input's min to the current time
            const currentTime = today.toTimeString().split(':').slice(0, 2).join(':'); // Get current time in HH:MM format
            timeInput.setAttribute('min', currentTime);
        } else {
            // Reset the time input's min to the default opening time (10:00)
            timeInput.setAttribute('min', '10:00');
        }
    });
});


function displayCustomAlert(event, formtype) {
    event.preventDefault(); // Prevent form submission

    let message = '';
    let message2 = '';

    if (formtype === 'reservation') {
        message = `Your table has been reserved!`;
        message2 = `See you there!`;
    } else if (formtype === 'contact') {
        message = `We have received your message.`;
        message2 = `We will get back to you shortly.`;
    }
    if (formtype === 'login') {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const validUsername = 'username@gmail.com';
        const validPassword = '#Password1';

        if (username === validUsername && password === validPassword) {
            message = `Welcome back!`;
            message2 = `You have successfully logged in.`;
        } else {
            alert('Invalid username or password. Please try again.');
            return;
        }
    } else if (formtype === 'signup') {
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        message = `Thank you for signing up!`;
        message2 = `Your account has been created.`;
    }

    // Set and display the alert messages
    const alertMessage = document.getElementById('alert-message');
    alertMessage.innerHTML = message;
    const alertMessage2 = document.getElementById('alert-message2');
    alertMessage2.innerHTML = message2;

    const customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'block';

    // Handle the OK button click
    const alertOk = document.getElementById('alert-ok');
    alertOk.onclick = () => {
        customAlert.style.display = 'none';
        if (formtype === 'login' || formtype === 'signup') {
            window.location.href = 'home.html';
        }
    };
}
