
        
        function toggleMenu() {
    var menu = document.getElementById("navMenu");
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.getElementById("navbar");

    menu.classList.toggle("show");
    
    if(menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        navbar.style.background = "rgba(0, 0, 0, 0.8)"; // Background appears when toggled
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        navbar.style.background = "transparent"; // Background becomes transparent again
    }
}

        
        
        
        
        
        
        
        // Add 3D floating effect to footer items
        const footerSections = document.querySelectorAll('.footer-section h2');

        footerSections.forEach(section => {
            section.addEventListener('mouseover', () => {
                section.style.transform = 'rotateX(15deg) rotateY(15deg)';
            });

            section.addEventListener('mouseout', () => {
                section.style.transform = 'rotateX(0) rotateY(0)';
            });
        });
        
        
        
        let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // নিচের দিকে স্ক্রল করলে navbar হাইড হবে
        navbar.style.top = "-80px"; 
    } else {
        // উপরের দিকে স্ক্রল করলে navbar শো হবে
        navbar.style.top = "0"; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



function goBack() {
            window.history.back();
        }

        function goHome() {
            window.location.href = 'https://yourtopupcenter.github.io/home';
        }
        
        
        
        
        
        const supportIcon = document.getElementById('supportIcon');
    const callIcon = document.getElementById('callIcon');
    const whatsappIcon = document.getElementById('whatsappIcon');
    const telegramIcon = document.getElementById('telegramIcon');
    const messengerIcon = document.getElementById('messengerIcon');
    const upButton = document.getElementById('upButton');

    let isOpen = false;

    supportIcon.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            supportIcon.classList.add('rotate');
            callIcon.classList.add('show');
            whatsappIcon.classList.add('show');
            telegramIcon.classList.add('show');
            messengerIcon.classList.add('show');
        } else {
            supportIcon.classList.remove('rotate');
            callIcon.classList.remove('show');
            whatsappIcon.classList.remove('show');
            telegramIcon.classList.remove('show');
            messengerIcon.classList.remove('show');
        }
    });

    // Show the Up Button when scrolling down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            upButton.style.display = "flex";
        } else {
            upButton.style.display = "none";
        }
    };

    // Scroll to top when Up Button is clicked
    upButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    
    window.onload = function() {
        const popup = document.getElementById('popup');
        const closePopup = document.getElementById('closePopup');

        // Show the popup after 1 second
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);

        // Hide the popup when the close button is clicked
        closePopup.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }
    
    
   
