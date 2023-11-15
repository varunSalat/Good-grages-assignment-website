// //BURGER TRANSFORMATION
const burgerLines = document.querySelectorAll('.burger-line');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    burgerLines.forEach((line) => {
        line.classList.toggle('active-burger')
    });
    document.querySelector('.nav-link-container').classList.toggle('active-nav');
});
const navAllLinks = document.querySelectorAll('.nav-link-container li');
navAllLinks.forEach((link) => {
        link.addEventListener('click', () => {
            burgerLines.forEach((line) => {
                line.classList.remove('active-burger');
                document.querySelector('.nav-link-container').classList.remove('active-nav');
            })
        })
    })
    // <!-- ONLINE COURSE SECTION -->
const filterBtn = document.querySelector('#filter-btn');
const courses = document.querySelectorAll('.course-card');
courses.forEach((course) => {
    if (course.classList.contains('Computer-Science')) {
        course.classList.add('active')
        course.classList.remove('hide')
        course.style.display = 'block'
    } else {
        course.classList.add('hide')
        course.classList.remove('active')
        course.style.display = 'none'
    }
})
filterBtn.addEventListener('change', (e) => {
    let value = e.target.selectedOptions[0].getAttribute('value');
    courses.forEach((course) => {
        if (course.classList.contains(value)) {
            course.classList.add('active')
            course.classList.remove('hide')
                // course.style.display = 'block'
            setTimeout(() => {
                course.style.display = 'block'
            }, 1)
        } else {
            course.classList.add('hide')
            course.classList.remove('active')
            setTimeout(() => {
                course.style.display = 'none'
            }, 500)
        }
    })
});

// <!-- JOIN OUR EVENT -->
const eventBtn = document.querySelector('.event-play-btn');
eventBtn.addEventListener('click', () => {
    document.querySelector('.event-play-btn').style.display = 'none';
    document.querySelector('.event-img-container img').style.display = 'none';
    document.querySelector('#event-video').style.display = 'block';
});
// /* <!-- ====SCROLL TOP BUTTON====== --> */

console.log(document.querySelector('#hero-section').clientHeight);
window.addEventListener('scroll', () => {
    document.querySelector('.scroll-top-btn').classList.toggle('active', window.scrollY > document.querySelector('#hero-section').clientHeight)
});
// CONTACT US FORM BUTTON
const formBtn = document.querySelector('.close-form-btn-container');
document.querySelector('#contact-us-btn').addEventListener('click', () => {
    document.querySelector('.contact-us-form-main-container').classList.add('show')
});
formBtn.addEventListener('click', () => {
    document.querySelector('.contact-us-form-main-container').classList.remove('show')
})