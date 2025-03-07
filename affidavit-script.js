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

  // Multi-step form functionality
  if (document.getElementById("affidavitForm")) {
    // Step navigation buttons
    const step1Next = document.getElementById("step1Next");
    const step2Prev = document.getElementById("step2Prev");
    const step2Next = document.getElementById("step2Next");
    const step3Prev = document.getElementById("step3Prev");
    const step3Next = document.getElementById("step3Next");
    const step4Prev = document.getElementById("step4Prev");
    const step4Next = document.getElementById("step4Next");

    // Steps
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const step4 = document.getElementById("step4");
    const step5 = document.getElementById("step5");

    // Step tabs
    const step1Tab = document.getElementById("step1-tab");
    const step2Tab = document.getElementById("step2-tab");
    const step3Tab = document.getElementById("step3-tab");
    const step4Tab = document.getElementById("step4-tab");
    const step5Tab = document.getElementById("step5-tab");

    // Step 1 to Step 2
    step1Next.addEventListener("click", function () {
      step1.classList.remove("active");
      step2.classList.add("active");

      step1Tab.classList.remove("active");
      step1Tab.classList.add("completed");
      step2Tab.classList.add("active");

      window.scrollTo(0, 0);
    });

    // Step 2 to Step 1
    step2Prev.addEventListener("click", function () {
      step2.classList.remove("active");
      step1.classList.add("active");

      step2Tab.classList.remove("active");
      step1Tab.classList.remove("completed");
      step1Tab.classList.add("active");

      window.scrollTo(0, 0);
    });

    // Step 2 to Step 3
    step2Next.addEventListener("click", function () {
      step2.classList.remove("active");
      step3.classList.add("active");

      step2Tab.classList.remove("active");
      step2Tab.classList.add("completed");
      step3Tab.classList.add("active");

      window.scrollTo(0, 0);
    });

    // Step 3 to Step 2
    step3Prev.addEventListener("click", function () {
      step3.classList.remove("active");
      step2.classList.add("active");

      step3Tab.classList.remove("active");
      step2Tab.classList.remove("completed");
      step2Tab.classList.add("active");

      window.scrollTo(0, 0);
    });

    // Step 3 to Step 4
    step3Next.addEventListener("click", function () {
      step3.classList.remove("active");
      step4.classList.add("active");

      step3Tab.classList.remove("active");
      step3Tab.classList.add("completed");
      step4Tab.classList.add("active");

      window.scrollTo(0, 0);
    });

    // Step 4 to Step 3
    step4Prev.addEventListener("click", function () {
      step4.classList.remove("active");
      step3.classList.add("active");

      step4Tab.classList.remove("active");
      step3Tab.classList.remove("completed");
      step3Tab.classList.add("active");

      window.scrollTo(0, 0);
    });

    // Step 4 to Step 5 (Final submission)
    step4Next.addEventListener("click", function () {
      step4.classList.remove("active");
      step5.classList.add("active");

      step4Tab.classList.remove("active");
      step4Tab.classList.add("completed");
      step5Tab.classList.add("active");

      window.scrollTo(0, 0);

      // Set current date for submission
      const today = new Date();
      document.getElementById("submitDate").textContent =
        today.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

      // Generate random request ID
      const requestId =
        "AFD-" +
        today.getFullYear() +
        "-" +
        Math.floor(10000 + Math.random() * 90000);
      document.getElementById("requestId").textContent = requestId;
    });

    // Affidavit Type Selection
    const affidavitTypeCards = document.querySelectorAll(
      ".affidavit-type-card"
    );
    const otherAffidavitType = document.getElementById("otherAffidavitType");

    affidavitTypeCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Remove selected class from all cards
        affidavitTypeCards.forEach((c) => c.classList.remove("selected"));

        // Add selected class to clicked card
        this.classList.add("selected");

        // Show/hide "Other" type input field
        if (this.dataset.type === "other") {
          otherAffidavitType.style.display = "block";
        } else {
          otherAffidavitType.style.display = "none";

          // Update summary in payment step
          document.getElementById("summaryType").textContent =
            this.querySelector(".affidavit-type-title").textContent;
        }
      });
    });

    // Payment Method Selection
    const paymentMethodCards = document.querySelectorAll(
      ".payment-method-card"
    );
    const cardPaymentForm = document.getElementById("cardPaymentForm");

    paymentMethodCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Remove selected class from all cards
        paymentMethodCards.forEach((c) => c.classList.remove("selected"));

        // Add selected class to clicked card
        this.classList.add("selected");

        // Show/hide card payment form
        if (this.dataset.method === "card") {
          cardPaymentForm.style.display = "block";
        } else {
          cardPaymentForm.style.display = "none";
        }
      });
    });

    // File Upload Previews
    const setupFileUpload = (uploadId, previewId, inputId) => {
      const uploadArea = document.getElementById(uploadId);
      const previewContainer = document.getElementById(previewId);
      const fileInput = document.getElementById(inputId);

      uploadArea.addEventListener("click", () => {
        fileInput.click();
      });

      fileInput.addEventListener("change", function (e) {
        if (this.files && this.files[0]) {
          const reader = new FileReader();

          reader.onload = function (e) {
            previewContainer.innerHTML = "";

            const previewItem = document.createElement("div");
            previewItem.className = "preview-item";

            // Check if it's an image
            if (fileInput.files[0].type.match("image.*")) {
              const img = document.createElement("img");
              img.className = "preview-img";
              img.src = e.target.result;
              previewItem.appendChild(img);
            } else {
              // If it's not an image (e.g., PDF)
              const docIcon = document.createElement("div");
              docIcon.style.width = "100%";
              docIcon.style.height = "100%";
              docIcon.style.display = "flex";
              docIcon.style.alignItems = "center";
              docIcon.style.justifyContent = "center";
              docIcon.style.backgroundColor = "#f5f5f5";
              docIcon.textContent = "📄";
              docIcon.style.fontSize = "40px";
              previewItem.appendChild(docIcon);
            }

            const removeBtn = document.createElement("div");
            removeBtn.className = "preview-remove";
            removeBtn.textContent = "×";
            removeBtn.addEventListener("click", function (e) {
              e.stopPropagation();
              previewContainer.innerHTML = "";
              fileInput.value = "";
            });

            previewItem.appendChild(removeBtn);
            previewContainer.appendChild(previewItem);
          };

          reader.readAsDataURL(this.files[0]);
        }
      });
    };

    // Setup file uploads
    setupFileUpload("photoUpload", "photoPreview", "passportPhoto");
    setupFileUpload("signatureUpload", "signaturePreview", "signature");
    setupFileUpload("idUpload", "idPreview", "idDocument");

    // Supporting documents (multiple files)
    const supportingUpload = document.getElementById("supportingUpload");
    const supportingPreview = document.getElementById("supportingPreview");
    const supportingDocs = document.getElementById("supportingDocs");

    supportingUpload.addEventListener("click", () => {
      supportingDocs.click();
    });

    supportingDocs.addEventListener("change", function (e) {
      if (this.files && this.files.length > 0) {
        supportingPreview.innerHTML = "";

        for (let i = 0; i < this.files.length; i++) {
          const file = this.files[i];
          const reader = new FileReader();

          reader.onload = function (e) {
            const previewItem = document.createElement("div");
            previewItem.className = "preview-item";

            // Check if it's an image
            if (file.type.match("image.*")) {
              const img = document.createElement("img");
              img.className = "preview-img";
              img.src = e.target.result;
              previewItem.appendChild(img);
            } else {
              // If it's not an image (e.g., PDF)
              const docIcon = document.createElement("div");
              docIcon.style.width = "100%";
              docIcon.style.height = "100%";
              docIcon.style.display = "flex";
              docIcon.style.alignItems = "center";
              docIcon.style.justifyContent = "center";
              docIcon.style.backgroundColor = "#f5f5f5";
              docIcon.textContent = "📄";
              docIcon.style.fontSize = "40px";
              previewItem.appendChild(docIcon);
            }

            const fileInfo = document.createElement("div");
            fileInfo.className = "file-info";
            fileInfo.style.position = "absolute";
            fileInfo.style.bottom = "0";
            fileInfo.style.left = "0";
            fileInfo.style.right = "0";
            fileInfo.style.backgroundColor = "rgba(0,0,0,0.7)";
            fileInfo.style.color = "white";
            fileInfo.style.padding = "2px 5px";
            fileInfo.style.fontSize = "10px";
            fileInfo.style.whiteSpace = "nowrap";
            fileInfo.style.overflow = "hidden";
            fileInfo.style.textOverflow = "ellipsis";
            fileInfo.textContent = file.name;
            previewItem.appendChild(fileInfo);

            supportingPreview.appendChild(previewItem);
          };

          reader.readAsDataURL(file);
        }
      }
    });
  }

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
