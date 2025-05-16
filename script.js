// Gallery images data
const galleryImages = [
    {
        id: 1,
        src: "0.jpeg",
        alt: "Defense",
        caption: "Defense"
    },
    {
        id: 2,
        src: "3.jpeg",
        alt: "Defense",
        caption: "Defense"
    },
    {
        id: 3,
        src: "6.jpeg",
        alt: "Defense",
        caption: "Defense"
    },
    {
        id: 4,
        src: "4.jpeg",
        alt: "Defense",
        caption: "Defense"
    },
    {
        id: 5,
        src: "7.jpeg",
        alt: "tech xplore",
        caption: "Defense"
    },
    {
        id: 6,
        src: "5.jpeg",
        alt: "Picnic in the park",
        caption: "A perfect spring day"
    },
    {
        id: 7,
        src: "1.jpeg",
        alt: "Defense",
        caption: "Defense"
    },
    {
        id: 8,
        src: "8.jpeg",
        alt: "calls together",
        caption: "special friends type shii"
    },
    {
        id: 9,
        src: "https://via.placeholder.com/300x400",
        alt: "Road trip for the 1 week Byron X Florence",
        caption: "our 1 week adventure"
    },
    {
        id: 10,
        src: "https://via.placeholder.com/300x400",
        alt: "BUCC dinner",
        caption: "type shii"
    }
];

// Timeline events data
const timelineEvents = [
    {
        date: "October 11, 2022",
        title: "The day Chibu just had to set me up",
        description: "I'd do the Our eyes met across the room story but we both know what happened that day sooo..",
        icon: "fa-heart"
    },
    {
        date: "October 25, 2022",
        title: "First Date (If I'll call it that)",
        description: "conversation that lasted for hours and bicycle delivered bgh rice 😂",
        icon: "fa-coffee"
    },
    {
        date: "idk the date",
        title: "the day i insuted you because of your laptop😭",
        description: "I remeber you were on your blood convenant thingy and you wanted 2 plates of rice but just wanted the chicken😂😂. then you brought your laptop and I got carried away",
        icon: "fa-utensils"
    },
    {
        date: "another date",
        title: "normal friends stuff",
        description: "Sitting together in class and not learning shiii.",
        icon: "fa-car"
    },
    {
        date: "October 9, 2024",
        title: "your birthdayyyy",
        description: "I feel I didn't do enough but i tried shaaa",
        icon: "fa-gift"
    },
    {
        date: "omo dates shaaaaaa",
        title: "feast of light",
        description: "the big squabble. i believe this was where I realized I really liked you alot more than i thought",
        icon: "fa-star"
    },
    {
        date: "here we are in the future....",
        title: "That was a steven universe reference",
        description: "Here we are in present day and I understand it now. i like you Florence, I LIKE YOU A LOTTT",
        icon: "fa-map"
    }
];

// Love quotes for the love meter
const loveQuotes = [
    "I love you not only for what you are, but for what I am when I am with you.",
    "In all the world, there is no heart for me like yours. YEA SO THIS WAS CHAT GPT",
    "I love you more than I have ever found a way to say to you. CHAT GPT",
    "If I know what love is, it is because of you.",
    "You are my today and all of my tomorrows. CHAT GPT",
    "The best thing to hold onto in life is each other.",
    "I am who I am because of you. You are every reason, every hope, and every dream I've ever had. CHAT GPT ",
    "Take my hand, take my whole life too. For I can't help falling in love with you.",
    "To the world you may be one person, but to me you are the world.",
    "I've fallen in love many times... always with you.",
    "Every love story is beautiful, but ours is my favorite. CHAT GPT"
];

// DOM Elements
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
const galleryContainer = document.querySelector('.gallery-container');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close-modal');
const timelineContainer = document.querySelector('.timeline-container');
const heart = document.getElementById('heart');
const loveQuote = document.getElementById('love-quote');
const secretButton = document.getElementById('secret-button');
const surpriseOverlay = document.getElementById('surprise-overlay');
const closeSurprise = document.getElementById('close-surprise');
const fireworks = document.getElementById('fireworks');
const floatingHearts = document.getElementById('floating-hearts');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    createGallery();
    createTimeline();
    initializeSecretButton();
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        observeTimelineItems();
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.classList.add('visible');
        });
    }
});

// Create floating hearts background
function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        floatingHearts.appendChild(heart);
    }
}

// Music toggle functionality
musicToggle.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().then(() => {
            musicToggle.classList.add('playing');
            musicToggle.querySelector('.music-status').textContent = 'Pause Music';
        }).catch(e => {
            console.log('Audio playback failed:', e);
        });
    } else {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.querySelector('.music-status').textContent = 'Play Music';
    }
});

// Scroll to section functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Create gallery items
function createGallery() {
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.left = `${10 + (index % 5) * 15}%`;
        galleryItem.style.top = `${10 + Math.floor(index / 5) * 30}%`;
        galleryItem.style.animationDuration = `${5 + index % 3}s`;
        galleryItem.style.animationDelay = `${index * 0.2}s`;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
        
        // Add click event to open modal
        galleryItem.addEventListener('click', function() {
            openModal(image);
        });
    });
}

// Open image modal
function openModal(image) {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = image.caption;
    modal.classList.add('show');
}

// Close modal when clicking the close button
closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Create timeline items
function createTimeline() {
    timelineEvents.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const timelineContent = document.createElement('div');
        timelineContent.className = 'timeline-content';
        
        const timelineDate = document.createElement('div');
        timelineDate.className = 'timeline-date';
        timelineDate.textContent = event.date;
        
        const timelineTitle = document.createElement('h3');
        timelineTitle.className = 'timeline-title';
        timelineTitle.textContent = event.title;
        
        const timelineDescription = document.createElement('p');
        timelineDescription.textContent = event.description;
        
        const timelineIcon = document.createElement('div');
        timelineIcon.className = 'timeline-icon';
        timelineIcon.innerHTML = `<i class="fas ${event.icon}"></i>`;
        
        timelineContent.appendChild(timelineDate);
        timelineContent.appendChild(timelineTitle);
        timelineContent.appendChild(timelineDescription);
        
        timelineItem.appendChild(timelineContent);
        timelineItem.appendChild(timelineIcon);
        
        timelineContainer.appendChild(timelineItem);
    });
}

// Observe timeline items for animation
function observeTimelineItems() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Love meter functionality
heart.addEventListener('mouseover', function() {
    if (!this.classList.contains('beat')) {
        this.style.transform = 'scale(1.3)';
    }
});

heart.addEventListener('mouseout', function() {
    if (!this.classList.contains('beat')) {
        this.style.transform = 'scale(1)';
    }
});

heart.addEventListener('click', function() {
    this.classList.add('beat');
    
    // Show a random love quote
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    loveQuote.textContent = randomQuote;
    loveQuote.classList.add('show');
    
    // Reset heart after animation
    setTimeout(() => {
        this.classList.remove('beat');
        this.style.transform = 'scale(1)';
    }, 1000);
});

// Secret button functionality
function initializeSecretButton() {
    // Show the secret button after a random delay
    setTimeout(() => {
        secretButton.style.left = `${Math.random() * 80 + 10}%`;
        secretButton.style.top = `${Math.random() * 80 + 10}%`;
        secretButton.classList.add('show');
    }, 10000 + Math.random() * 20000); // Random delay between 10-30 seconds
    
    secretButton.addEventListener('click', function() {
        triggerSurprise();
        this.classList.remove('show');
    });
}

// Trigger surprise overlay with fireworks
function triggerSurprise() {
    surpriseOverlay.classList.add('show');
    createFireworks();
}

closeSurprise.addEventListener('click', function() {
    surpriseOverlay.classList.remove('show');
});

// Create fireworks animation
function createFireworks() {
    fireworks.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 5 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random color
            const hue = Math.floor(Math.random() * 360);
            particle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
            
            // Random animation duration
            particle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
            
            fireworks.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1500);
        }, i * 100);
    }
}
