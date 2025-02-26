document.addEventListener("DOMContentLoaded", function () {
  // Initialize Hero Slider
  initHeroSlider();

  // Initialize Testimonials Carousel
  initTestimonialsCarousel();

  // User dropdown functionality
  const userProfileButton = document.getElementById("user-profile");
  const userDropdown = document.getElementById("user-dropdown");

  if (userProfileButton && userDropdown) {
    userProfileButton.addEventListener("click", function (e) {
      e.stopPropagation();
      userDropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
      userDropdown.classList.remove("active");
    });

    // Prevent dropdown from closing when clicking inside it
    userDropdown.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Show/hide modals
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  // Open login modal
  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", function () {
      loginModal.classList.add("active");
    });
  }

  // Open register modal
  if (registerBtn && registerModal) {
    registerBtn.addEventListener("click", function () {
      registerModal.classList.add("active");
    });
  }

  // Switch from login to register
  if (showRegister && loginModal && registerModal) {
    showRegister.addEventListener("click", function (e) {
      e.preventDefault();
      loginModal.classList.remove("active");
      registerModal.classList.add("active");
    });
  }

  // Switch from login to register
  if (showRegister && loginModal && registerModal) {
    showRegister.addEventListener("click", function (e) {
      e.preventDefault();
      loginModal.classList.remove("active");
      registerModal.classList.add("active");
    });
  }

  // Switch from register to login
  if (showLogin && loginModal && registerModal) {
    showLogin.addEventListener("click", function (e) {
      e.preventDefault();
      registerModal.classList.remove("active");
      loginModal.classList.add("active");
    });
  }

  // Close modals when clicking outside
  window.addEventListener("click", function (e) {
    if (loginModal && e.target === loginModal) {
      loginModal.classList.remove("active");
    }
    if (registerModal && e.target === registerModal) {
      registerModal.classList.remove("active");
    }
  });

  // Form validations
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Login successful!");
      if (loginModal) {
        loginModal.classList.remove("active");
      }
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      alert(
        "Registration successful! You can now log in with your credentials."
      );
      if (registerModal) {
        registerModal.classList.remove("active");
      }
    });
  }

  // FAQ toggle
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isActive = answer.classList.contains("active");

      // Close all answers
      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.classList.remove("active");
      });

      // Toggle clicked answer
      if (!isActive) {
        answer.classList.add("active");
      }

      // Update toggle icon
      const toggleIcon = this.querySelector(".toggle-icon");

      // Reset all icons
      document.querySelectorAll(".toggle-icon").forEach((icon) => {
        icon.textContent = "+";
      });

      if (!isActive) {
        toggleIcon.textContent = "-";
      }
    });
  });

  // Hero Slider functionality
  function initHeroSlider() {
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderDots = document.querySelectorAll(".slider-dot");
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      sliderItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Remove active class from all dots
      sliderDots.forEach((dot) => {
        dot.classList.remove("active");
      });

      // Show the current slide and activate the corresponding dot
      sliderItems[index].classList.add("active");
      sliderDots[index].classList.add("active");

      currentSlide = index;
    }

    // Add click event listeners to the dots
    sliderDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });

    // Auto slide
    function autoSlide() {
      let nextSlide = currentSlide + 1;
      if (nextSlide >= sliderItems.length) {
        nextSlide = 0;
      }
      showSlide(nextSlide);
    }

    // Set the auto slide interval (5 seconds)
    const slideInterval = setInterval(autoSlide, 5000);

    // Pause auto slide when mouse enters the slider
    const heroSlider = document.getElementById("heroSlider");
    if (heroSlider) {
      heroSlider.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
      });

      // Resume auto slide when mouse leaves the slider
      heroSlider.addEventListener("mouseleave", () => {
        clearInterval(slideInterval); // Clear any existing interval
        setInterval(autoSlide, 5000);
      });
    }
  }

  // Testimonials Carousel functionality
  function initTestimonialsCarousel() {
    const track = document.getElementById("testimonialsTrack");
    const items = document.querySelectorAll(".testimonial-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!track || !items.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const itemWidth = items[0].getBoundingClientRect().width;

    // Set initial position
    track.style.transform = `translateX(0)`;

    // Next button click
    nextBtn.addEventListener("click", () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    });

    // Previous button click
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    });

    // Auto slide
    let autoSlideInterval;

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        if (currentIndex < items.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }, 7000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Start auto slide
    startAutoSlide();

    // Stop auto slide on hover
    const carousel = document.querySelector(".testimonials-carousel");
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);
  }
});
