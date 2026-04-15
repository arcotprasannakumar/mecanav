 document.addEventListener("DOMContentLoaded", () => {
    // Tabs
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });

    // Trigger default tab
    const defaultTab = document.querySelector(".tab-button.active") || tabButtons[0];
    if (defaultTab) defaultTab.click();

    // AOS init for scroll animations
    AOS.init({
      duration: 800,
      once: true,
    });

    // Copy product code (if you have copy buttons)
    const copyButtons = document.querySelectorAll(".copy-code");
    copyButtons.forEach(button => {
      button.addEventListener("click", () => {
        const code = button.previousElementSibling.innerText;
        navigator.clipboard.writeText(code).then(() => {
          button.innerText = "Copied!";
          setTimeout(() => button.innerText = "Copy", 2000);
        });
      });
    });

    // Carousel Logic
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const slides = document.querySelectorAll('.carousel-track img');
    let currentIndex = 0;

    function updateCarousel() {
      const width = slides[0].clientWidth;
      carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length -1 : currentIndex - 1;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });

    // Optional: auto-slide every 5 seconds
    setInterval(() => {
      nextBtn.click();
    }, 5000);
  });