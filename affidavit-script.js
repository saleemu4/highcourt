document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality (for index page)
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    // Only add event listeners if elements exist (to support both pages)
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function() {
            loginModal.classList.add('active');
        });
    }
    
    if (registerBtn && registerModal) {
        registerBtn.addEventListener('click', function() {
            registerModal.classList.add('active');
        });
    }
    
    if (showRegister && loginModal && registerModal) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.remove('active');
            registerModal.classList.add('active');
        });
    }
    
    if (showLogin && loginModal && registerModal) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (loginModal && e.target === loginModal) {
            loginModal.classList.remove('active');
        }
        if (registerModal && e.target === registerModal) {
            registerModal.classList.remove('active');
        }
    });
    
    // FAQ toggle (for index page)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle clicked answer
            if (!isActive) {
                answer.classList.add('active');
            }
            
            // Update toggle icon
            const toggleIcon = this.querySelector('.toggle-icon');
            
            // Reset all icons
            document.querySelectorAll('.toggle-icon').forEach(icon => {
                icon.textContent = '+';
            });
            
            if (!isActive) {
                toggleIcon.textContent = '-';
            }
        });
    });
    
    // Multi-step form functionality (for request form page)
    if (document.getElementById('affidavitForm')) {
        // Step navigation buttons
        const step1Next = document.getElementById('step1Next');
        const step2Prev = document.getElementById('step2Prev');
        const step2Next = document.getElementById('step2Next');
        const step3Prev = document.getElementById('step3Prev');
        const step3Next = document.getElementById('step3Next');
        const step4Prev = document.getElementById('step4Prev');
        const step4Next = document.getElementById('step4Next');
        
        // Steps
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        const step4 = document.getElementById('step4');
        const step5 = document.getElementById('step5');
        
        // Step tabs
        const step1Tab = document.getElementById('step1-tab');
        const step2Tab = document.getElementById('step2-tab');
        const step3Tab = document.getElementById('step3-tab');
        const step4Tab = document.getElementById('step4-tab');
        const step5Tab = document.getElementById('step5-tab');
        
        // Step 1 to Step 2
        step1Next.addEventListener('click', function() {
            step1.classList.remove('active');
            step2.classList.add('active');
            
            step1Tab.classList.remove('active');
            step1Tab.classList.add('completed');
            step2Tab.classList.add('active');
            
            window.scrollTo(0, 0);
        });
        
        // Step 2 to Step 1
        step2Prev.addEventListener('click', function() {
            step2.classList.remove('active');
            step1.classList.add('active');
            
            step2Tab.classList.remove('active');
            step1Tab.classList.remove('completed');
            step1Tab.classList.add('active');
            
            window.scrollTo(0, 0);
        });
        
        // Step 2 to Step 3
        step2Next.addEventListener('click', function() {
            step2.classList.remove('active');
            step3.classList.add('active');
            
            step2Tab.classList.remove('active');
            step2Tab.classList.add('completed');
            step3Tab.classList.add('active');
            
            window.scrollTo(0, 0);
        });
        
        // Step 3 to Step 2
        step3Prev.addEventListener('click', function() {
            step3.classList.remove('active');
            step2.classList.add('active');
            
            step3Tab.classList.remove('active');
            step2Tab.classList.remove('completed');
            step2Tab.classList.add('active');
            
            window.scrollTo(0, 0);
        });
        
        // Step 3 to Step 4
        step3Next.addEventListener('click', function() {
            step3.classList.remove('active');
            step4.classList.add('active');
            
            step3Tab.classList.remove('active');
            step3Tab.classList.add('completed');
            step4Tab.classList.add('active');
            
            window.scrollTo(0, 0);
        });
        
        // Step 4 to Step 3
        step4Prev.addEventListener('click', function() {
            step4.classList.remove('active');
            step3.classList.add('active');
            
            step4Tab.classList.remove('active');
            step3Tab.classList.remove('completed');
            step3Tab.classList.add('active');
            
            window.scrollTo(0, 0);
        });
        
        // Step 4 to Step 5 (Final submission)
        step4Next.addEventListener('click', function() {
            step4.classList.remove('active');
            step5.classList.add('active');
            
            step4Tab.classList.remove('active');
            step4Tab.classList.add('completed');
            step5Tab.classList.add('active');
            
            window.scrollTo(0, 0);
            
            // Set current date for submission
            const today = new Date();
            const submitDateEl = document.getElementById('submitDate');
            if (submitDateEl) {
                submitDateEl.textContent = today.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
            
            // Generate random request ID
            const requestIdEl = document.getElementById('requestId');
            if (requestIdEl) {
                const requestId = 'AFD-' + today.getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);
                requestIdEl.textContent = requestId;
            }
        });
        
        // Affidavit Type Selection
        const affidavitTypeCards = document.querySelectorAll('.affidavit-type-card');
        const otherAffidavitType = document.getElementById('otherAffidavitType');
        
        affidavitTypeCards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove selected class from all cards
                affidavitTypeCards.forEach(c => c.classList.remove('selected'));
                
                // Add selected class to clicked card
                this.classList.add('selected');
                
                // Show/hide "Other" type input field
                if (this.dataset.type === 'other') {
                    otherAffidavitType.style.display = 'block';
                } else {
                    otherAffidavitType.style.display = 'none';
                    
                    // Update summary in payment step
                    const summaryTypeEl = document.getElementById('summaryType');
                    if (summaryTypeEl) {
                        summaryTypeEl.textContent = this.querySelector('.affidavit-type-title').textContent;
                    }
                }
            });
        });
        
        // Payment Method Selection
        const paymentMethodCards = document.querySelectorAll('.payment-method-card');
        const cardPaymentForm = document.getElementById('cardPaymentForm');
        
        paymentMethodCards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove selected class from all cards
                paymentMethodCards.forEach(c => c.classList.remove('selected'));
                
                // Add selected class to clicked card
                this.classList.add('selected');
                
                // Show/hide card payment form
                if (this.dataset.method === 'card') {
                    cardPaymentForm.style.display = 'block';
                } else {
                    cardPaymentForm.style.display = 'none';
                }
            });
        });
        
        // File Upload Previews
        const setupFileUpload = (uploadId, previewId, inputId) => {
            const uploadArea = document.getElementById(uploadId);
            const previewContainer = document.getElementById(previewId);
            const fileInput = document.getElementById(inputId);
            
            if (!uploadArea || !previewContainer || !fileInput) return;
            
            uploadArea.addEventListener('click', () => {
                fileInput.click();
            });
            
            fileInput.addEventListener('change', function(e) {
                if (this.files && this.files[0]) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        previewContainer.innerHTML = '';
                        
                        const previewItem = document.createElement('div');
                        previewItem.className = 'preview-item';
                        
                        // Check if it's an image
                        if (fileInput.files[0].type.match('image.*')) {
                            const img = document.createElement('img');
                            img.className = 'preview-img';
                            img.src = e.target.result;
                            previewItem.appendChild(img);
                        } else {
                            // If it's not an image (e.g., PDF)
                            const docIcon = document.createElement('div');
                            docIcon.style.width = '100%';
                            docIcon.style.height = '100%';
                            docIcon.style.display = 'flex';
                            docIcon.style.alignItems = 'center';
                            docIcon.style.justifyContent = 'center';
                            docIcon.style.backgroundColor = '#f5f5f5';
                            docIcon.textContent = '📄';
                            docIcon.style.fontSize = '40px';
                            previewItem.appendChild(docIcon);
                        }
                        
                        const removeBtn = document.createElement('div');
                        removeBtn.className = 'preview-remove';
                        removeBtn.textContent = '×';
                        removeBtn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            previewContainer.innerHTML = '';
                            fileInput.value = '';
                        });
                        
                        previewItem.appendChild(removeBtn);
                        previewContainer.appendChild(previewItem);
                    };
                    
                    reader.readAsDataURL(this.files[0]);
                }
            });
        };
        
        // Setup file uploads
        setupFileUpload('photoUpload', 'photoPreview', 'passportPhoto');
        setupFileUpload('signatureUpload', 'signaturePreview', 'signature');
        setupFileUpload('idUpload', 'idPreview', 'idDocument');
        
        // Supporting documents (multiple files)
        const supportingUpload = document.getElementById('supportingUpload');
        const supportingPreview = document.getElementById('supportingPreview');
        const supportingDocs = document.getElementById('supportingDocs');
        
        if (supportingUpload && supportingPreview && supportingDocs) {
            supportingUpload.addEventListener('click', () => {
                supportingDocs.click();
            });
            
            supportingDocs.addEventListener('change', function(e) {
                if (this.files && this.files.length > 0) {
                    supportingPreview.innerHTML = '';
                    
                    for (let i = 0; i < this.files.length; i++) {
                        const file = this.files[i];
                        const reader = new FileReader();
                        
                        reader.onload = function(e) {
                            const previewItem = document.createElement('div');
                            previewItem.className = 'preview-item';
                            
                            // Check if it's an image
                            if (file.type.match('image.*')) {
                                const img = document.createElement('img');
                                img.className = 'preview-img';
                                img.src = e.target.result;
                                previewItem.appendChild(img);
                            } else {
                                // If it's not an image (e.g., PDF)
                                const docIcon = document.createElement('div');
                                docIcon.style.width = '100%';
                                docIcon.style.height = '100%';
                                docIcon.style.display = 'flex';
                                docIcon.style.alignItems = 'center';
                                docIcon.style.justifyContent = 'center';
                                docIcon.style.backgroundColor = '#f5f5f5';
                                docIcon.textContent = '📄';
                                docIcon.style.fontSize = '40px';
                                previewItem.appendChild(docIcon);
                            }
                            
                            const fileInfo = document.createElement('div');
                            fileInfo.className = 'file-info';
                            fileInfo.style.position = 'absolute';
                            fileInfo.style.bottom = '0';
                            fileInfo.style.left = '0';
                            fileInfo.style.right = '0';
                            fileInfo.style.backgroundColor = 'rgba(0,0,0,0.7)';
                            fileInfo.style.color = 'white';
                            fileInfo.style.padding = '2px 5px';
                            fileInfo.style.fontSize = '10px';
                            fileInfo.style.whiteSpace = 'nowrap';
                            fileInfo.style.overflow = 'hidden';
                            fileInfo.style.textOverflow = 'ellipsis';
                            fileInfo.textContent = file.name;
                            previewItem.appendChild(fileInfo);
                            
                            supportingPreview.appendChild(previewItem);
                        };
                        
                        reader.readAsDataURL(file);
                    }
                }
            });
        }
    }
    
    // Form validations
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, this would submit the form data to the server
            alert('Login successful!');
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.remove('active');
            }
        });
    }
    
    // Register form validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if passwords match
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }
            
            // In a real application, this would submit the form data to the server
            alert('Registration successful! You can now log in with your credentials.');
            const registerModal = document.getElementById('registerModal');
            if (registerModal) {
                registerModal.classList.remove('active');
            }
        });
    }
});
