// Reset the form fields when the page loads
window.onload = function () {
    const frame = document.querySelector(".frame");
    document.getElementById("contact-form")?.reset();

    // Show animation
    // frame.style.display = "block";
    frame.style.transform = "translateY(0)";

    document.body.style.overflow = "hidden";

    // Hide smoothly after 2 seconds
    setTimeout(() => {
        frame.style.transform = "translateY(-100%)";

        // Wait until transition fully ends before hiding
        setTimeout(() => {
            document.body.style.overflow = "auto";
            frame.style.display = "none";
        }, 1500);
    }, 2000);
};


// Work when something have on input field
document.querySelectorAll(".input-field input, .textarea-field textarea")
    .forEach(field => {
        field.addEventListener("input", () => {
            if (field.value.trim() !== "") {
                field.classList.add("filled");
            } else {
                field.classList.remove("filled");
            }
        });
    });



const contactForm = document.getElementById("contact-form");
const user_name = document.getElementById("userName");
const user_message = document.getElementById("user_message");
const gmailInput = document.getElementById("userEmail");
const messageBox = document.querySelector(".contact_message");
const message = document.querySelector(".message");
const closeIcon = document.querySelector(".close-message");
let hideTimeout;

// Gmail Format
const gmail_Format = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

contactForm.addEventListener("submit", function (event) {

    // Stop form first
    event.preventDefault();

    // Empty field check
    if (user_name.value.trim() == "" || user_message.value.trim() == "" || gmailInput.value.trim() == "" || user_name.value.trim() == "" && user_message.value.trim() == "" || user_name.value.trim() == "" && gmailInput.value.trim() == "" || gmailInput.value.trim() == "" && user_message.value.trim() == "") {

        messageBox.style.right = "1rem";
        message.innerHTML = "Please Fill the Empty Section";

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            hideMessage();
        }, 5000);

        return;
    }

    // Gmail validation
    if (!gmail_Format.test(gmailInput.value.trim())) {

        messageBox.style.right = "1rem";
        message.innerHTML = "Please enter a valid Gmail address!";

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            hideMessage();
        }, 5000);

        return;
    }

    // Hide message function
    function hideMessage() {
        messageBox.style.right = "-100%";
    }

    // If valid → Submit Web3Forms
    contactForm.submit();


    // Reload page to reset form
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            // If the page was cached and user returns, reload it
            window.location.reload();
        }
    });

});

closeIcon.addEventListener("click", function () {
    messageBox.style.right = "-100%";
});


// Scroll Up Button
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollUp') : scrollUp.classList.remove('show-scrollUp');
}
window.addEventListener('scroll', scrollUp);


// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');


const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_list a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


// ScrollReveal Animation (When Scroll windows animate sections)
const sReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: 'true'

})

sReveal.reveal('.profile, .contact_form');
sReveal.reveal('.info', { origin: 'left', delay: 800 });
sReveal.reveal('.skills', { origin: 'left', delay: 1000 });
sReveal.reveal('.about', { origin: 'right', delay: 1200 });
sReveal.reveal('.projects_card, .services_card, .experiance_card', { interval: 100 });




