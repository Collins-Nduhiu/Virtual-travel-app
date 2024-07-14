// Sample data (in a real application, this would come from a backend API)
const destinations = [
    { name: "Paris", description: "The City of Light", image: "paris.jpg" },
    { name: "Tokyo", description: "A blend of the ultramodern and the traditional", image: "tokyo.jpg" },
    { name: "New York", description: "The Big Apple", image: "newyork.jpg" }
];

const tours = [
    { name: "Eiffel Tower Experience", description: "Climb to the top of the Eiffel Tower in VR" },
    { name: "Tokyo Street Food Tour", description: "Experience the vibrant street food scene of Tokyo" }
];

const packages = [
    { name: "European Getaway", description: "Visit 3 European cities in VR", price: 299 },
    { name: "Asian Adventure", description: "Explore 4 Asian destinations", price: 349 }
];

const reviews = [
    { name: "John Doe", content: "Amazing experience! Felt like I was really there.", rating: 5 },
    { name: "Jane Smith", content: "Great way to plan my next real-world trip.", rating: 4 }
];

// Function to create destination cards
function createDestinationCards() {
    const container = document.getElementById('destinationCards');
    destinations.forEach(dest => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
                    <div class="card-body">
                        <h5 class="card-title">${dest.name}</h5>
                        <p class="card-text">${dest.description}</p>
                        <a href="#" class="btn btn-primary">Explore</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to create tour cards
function createTourCards() {
    const container = document.getElementById('tourCards');
    tours.forEach(tour => {
        const card = `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${tour.name}</h5>
                        <p class="card-text">${tour.description}</p>
                        <a href="#" class="btn btn-primary">Start Tour</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to create package cards
function createPackageCards() {
    const container = document.getElementById('packageCards');
    packages.forEach(pkg => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${pkg.name}</h5>
                        <p class="card-text">${pkg.description}</p>
                        <p class="card-text"><strong>Price: $${pkg.price}</strong></p>
                        <a href="#" class="btn btn-primary">Book Now</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to create review cards
function createReviewCards() {
    const container = document.getElementById('reviewCards');
    reviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const card = `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${review.name}</h5>
                        <p class="card-text">${review.content}</p>
                        <div class="text-warning">${stars}</div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to handle profile form submission
function handleProfileSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    alert(`Profile updated for ${username} (${email})`);
    // In a real application, you would send this data to a server
}
// Video Slider Functionality
function setupVideoSlider() {
    const slides = document.querySelectorAll('.video-slide');
    const navBtns = document.querySelectorAll('.nav-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        navBtns[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        navBtns[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => showSlide(index));
    });
    // Auto-advance slides every 10 seconds
    setInterval(nextSlide, 10000);
}
// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createDestinationCards();
    createTourCards();
    createPackageCards();
    createReviewCards();
    setupVideoSlider();

    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', handleProfileSubmit);
});