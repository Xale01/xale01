
const cursorGlow = document.querySelector('#cursorGlow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar ul li a');

function changeNavActive() {
    let index = sections.length;

    while(--index > 0 && window.scrollY + 100 < sections[index].offsetTop) {}
    
    navLinks.forEach((link) => link.classList.remove('active'));
    
    navLinks[index].classList.add('active');
}

changeNavActive();
window.addEventListener('scroll', changeNavActive);

const filterInput = document.getElementById('filter');
const projectCards = document.querySelectorAll('.project-card');

// On vérifie que l'input existe pour éviter les erreurs sur les autres pages
if (filterInput) {
    filterInput.addEventListener('keyup', (e) => {
        const searchText = e.target.value.toLowerCase();

        projectCards.forEach(card => {
            let hasMatch = false;

            const tags = card.querySelectorAll('.tech-tag');
            tags.forEach(tag => {
                if (tag.textContent.toLowerCase().includes(searchText)) {
                    hasMatch = true;
                }
            });

            const title = card.querySelector('h3');
            if (title && title.textContent.toLowerCase().includes(searchText)) {
                hasMatch = true;
            }

            const status = card.querySelector('.project-status');
            if (status && status.textContent.toLowerCase().includes(searchText)) {
                hasMatch = true;
            }

            const dates = card.querySelector('.project-date');
            if (dates && dates.textContent.toLowerCase().includes(searchText)) {
                hasMatch = true;
            }

            if (hasMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}


const contactForm = document.querySelector('#contact-form');
const submitBtn = document.querySelector('#submit-btn');
const formStatus = document.querySelector('#form-status');

const formId = "xgvrepvw";
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!formId || formId === "mqkrvbzy") {
            if (formStatus) {
            formStatus.textContent = "Please set your Formspree ID in the script!";
            formStatus.className = 'error';
        }
        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }
    if (formStatus) {
        formStatus.textContent = '';
        formStatus.className = '';
    }

    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            if (formStatus) {
                formStatus.textContent = "Message sent successfully! Thank you.";
                formStatus.className = 'success';
            }
            contactForm.reset();
        } else {
            // Essayer de lire la réponse d'erreur de Formspree
            const data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
                const errorMsg = data["errors"].map(error => error["message"]).join(", ");
                throw new Error(errorMsg);
            } else {
                throw new Error('Something went wrong. Please try again.');
            }
        }

    } catch (error) {
        if (formStatus) {
            formStatus.textContent = error.message || 'Something went wrong. Please try again.';
            formStatus.className = 'error';
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'send_message()';
        }
    }
});