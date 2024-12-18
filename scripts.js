function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const isHidden = navMenu.getAttribute('aria-hidden') === 'true';
    navMenu.setAttribute('aria-hidden', !isHidden);
    navMenu.classList.toggle('visible');
    console.log('toggleMenu called, nav-menu visibility toggled');
}

// Smooth scrolling for navigation links
document.querySelectorAll('#nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        try {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            console.log(`Smooth scrolling to ${targetId}`);
        } catch (error) {
            console.log(`An error occurred: ${error}`);
        }
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    console.log(`filterProjects called, category: ${category}`);
}

// Call filterProjects('all') when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    filterProjects('all');
    console.log('DOMContentLoaded event fired, filterProjects("all") called');
});

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    console.log(`openLightbox called, image src: ${img.src}`);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    console.log('closeLightbox called, lightbox closed');
}

function validateForm() {
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-error');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    console.log(`validateForm: name validation, isValid: ${isValid}`);

    // Validate email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    console.log(`validateForm: email validation, isValid: ${isValid}`);

    // Validate message
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('message-error');
    if (message.trim() === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
    console.log(`validateForm: message validation, isValid: ${isValid}`);

    if (isValid) {
        alert('Your contact information has been sent');
        console.log('validateForm: form is valid, alert shown');
    }

    return isValid;
}

// Real-time validation
document.getElementById('name').addEventListener('input', function () {
    const nameError = document.getElementById('name-error');
    if (this.value.trim() === '') {
        nameError.textContent = 'Name is required.';
    } else {
        nameError.textContent = '';
    }
    console.log(`Real-time validation: name input, value: ${this.value}`);
});

document.getElementById('email').addEventListener('input', function () {
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(this.value)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
    console.log(`Real-time validation: email input, value: ${this.value}`);
});

document.getElementById('message').addEventListener('input', function () {
    const messageError = document.getElementById('message-error');
    if (this.value.trim() === '') {
        messageError.textContent = 'Message is required.';
    } else {
        messageError.textContent = '';
    }
    console.log(`Real-time validation: message input, value: ${this.value}`);
});