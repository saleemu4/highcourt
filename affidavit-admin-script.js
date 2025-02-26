document.addEventListener('DOMContentLoaded', function() {
    // User dropdown functionality
    const userProfileButton = document.getElementById('user-profile');
    const userDropdown = document.getElementById('user-dropdown');
    
    if (userProfileButton && userDropdown) {
        userProfileButton.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            userDropdown.classList.remove('active');
        });
        
        // Prevent dropdown from closing when clicking inside it
        userDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Tab functionality
    const tabs = document.querySelectorAll('.request-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const contentId = 'content-' + this.id.split('-')[1];
            const contentElement = document.getElementById(contentId);
            if (contentElement) {
                contentElement.classList.add('active');
            }
        });
    });
    
    // Request Detail Modal
    const viewButtons = document.querySelectorAll('.view-btn, .process-btn, .approve-btn, .reject-btn');
    const requestDetailModal = document.getElementById('requestDetailModal');
    const closeDetailModalBtn = document.getElementById('closeDetailModal');
    const affidavitPreviewSection = document.getElementById('affidavitPreviewSection');
    
    // Open Request Detail Modal
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const requestId = this.getAttribute('data-request');
            openRequestDetail(requestId, this.classList.contains('approve-btn'));
        });
    });
    
    // Close detail modal
    if (closeDetailModalBtn && requestDetailModal) {
        closeDetailModalBtn.addEventListener('click', function() {
            requestDetailModal.classList.remove('active');
            // Reset modal state
            if (affidavitPreviewSection) {
                affidavitPreviewSection.style.display = 'none';
            }
        });
        
        // Close modal when clicking outside
        requestDetailModal.addEventListener('click', function(e) {
            if (e.target === requestDetailModal) {
                requestDetailModal.classList.remove('active');
                if (affidavitPreviewSection) {
                    affidavitPreviewSection.style.display = 'none';
                }
            }
        });
    }
    
    // Function to open request detail modal
    function openRequestDetail(requestId, showPreview = false) {
        // In a real application, you would fetch the request data from the server
        // For this example, we'll use static data
        
        if (requestDetailModal) {
            requestDetailModal.classList.add('active');
            
            // For demo purposes, update modal title with request ID
            const modalTitle = requestDetailModal.querySelector('.modal-title');
            if (modalTitle) {
                modalTitle.textContent = `Affidavit Request Details - ${requestId}`;
            }
            
            // Show/hide affidavit preview section based on parameter
            if (affidavitPreviewSection) {
                affidavitPreviewSection.style.display = showPreview ? 'block' : 'none';
            }
            
            // In a real application, you would populate form fields with actual data
            // This is a placeholder for that functionality
            populateRequestDetails(requestId);
        }
    }
    
    // Function to populate request details
    function populateRequestDetails(requestId) {
        // Mock data - in a real application, this would come from an API
        const requestData = {
            "AFD-2025-67890": {
                applicant: {
                    name: "Ahmed Ibrahim",
                    gender: "Male",
                    dob: "12 May 1985",
                    address: "15 Ibrahim Taiwo Road, Kano",
                    phone: "+234 802 345 6789",
                    email: "ahmed.ibrahim@example.com",
                    idType: "National ID (NIN)",
                    idNumber: "12345678901"
                },
                request: {
                    id: "AFD-2025-67890",
                    date: "26 Feb 2025, 10:45 AM",
                    type: "Affidavit of Relationship",
                    location: "Kano Central",
                    status: "pending",
                    paymentStatus: "Paid (₦3,000)",
                    transactionRef: "TXN-54321",
                    purpose: "I am requesting this affidavit to confirm the relationship between myself and my younger sister, Aisha Ibrahim. The affidavit is required by the National Youth Service Corps (NYSC) to support her relocation application to Kano State where I am currently residing."
                },
                timeline: [
                    {
                        title: "Request Submitted",
                        date: "26 Feb 2025, 10:45 AM",
                        description: "Affidavit request submitted by applicant. Payment completed successfully."
                    }
                ]
            },
            "AFD-2025-67889": {
                applicant: {
                    name: "Fatima Mohammed",
                    gender: "Female",
                    dob: "23 July 1990",
                    address: "45 Murtala Mohammed Way, Kano",
                    phone: "+234 805 432 1098",
                    email: "fatima.mohammed@example.com",
                    idType: "Driver's License",
                    idNumber: "DRV8765432"
                },
                request: {
                    id: "AFD-2025-67889",
                    date: "25 Feb 2025, 02:30 PM",
                    type: "Correction of Name",
                    location: "Kano North",
                    status: "processing",
                    paymentStatus: "Paid (₦3,000)",
                    transactionRef: "TXN-54322",
                    purpose: "I am requesting this affidavit to correct the spelling of my name on my academic certificates. My name was incorrectly spelled as 'Fatimah Mohammed' instead of 'Fatima Mohammed'."
                },
                timeline: [
                    {
                        title: "Request Submitted",
                        date: "25 Feb 2025, 02:30 PM",
                        description: "Affidavit request submitted by applicant. Payment completed successfully."
                    },
                    {
                        title: "Processing Started",
                        date: "25 Feb 2025, 04:15 PM",
                        description: "Request review initiated by Admin User."
                    }
                ]
            }
        };
        
        // Check if we have data for this request ID
        const data = requestData[requestId];
        if (!data) {
            console.log('No data available for request ID:', requestId);
            return;
        }
        
        // Populate applicant information
        document.getElementById('applicantName').textContent = data.applicant.name;
        document.getElementById('applicantGender').textContent = data.applicant.gender;
        document.getElementById('applicantDob').textContent = data.applicant.dob;
        document.getElementById('applicantAddress').textContent = data.applicant.address;
        document.getElementById('applicantPhone').textContent = data.applicant.phone;
        document.getElementById('applicantEmail').textContent = data.applicant.email;
        document.getElementById('applicantIdType').textContent = data.applicant.idType;
        document.getElementById('applicantIdNumber').textContent = data.applicant.idNumber;
        
        // Populate request information
        document.getElementById('requestId').textContent = data.request.id;
        document.getElementById('requestDate').textContent = data.request.date;
        document.getElementById('affidavitType').textContent = data.request.type;
        document.getElementById('judicialLocation').textContent = data.request.location;
        
        // Update status with appropriate class
        const statusElement = document.getElementById('currentStatus');
        statusElement.innerHTML = `<span class="status-badge status-${data.request.status}">${data.request.status.charAt(0).toUpperCase() + data.request.status.slice(1)}</span>`;
        
        document.getElementById('paymentStatus').innerHTML = `<span style="color: green; font-weight: bold;">${data.request.paymentStatus}</span>`;
        document.getElementById('transactionRef').textContent = data.request.transactionRef;
        document.getElementById('affidavitPurpose').textContent = data.request.purpose;
        
        // Populate timeline
        const timelineContainer = document.getElementById('requestTimeline');
        timelineContainer.innerHTML = '';
        
        data.timeline.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-point"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-title">${item.title}</div>
                        <div class="timeline-date">${item.date}</div>
                    </div>
                    <div class="timeline-desc">
                        ${item.description}
                    </div>
                </div>
            `;
            timelineContainer.appendChild(timelineItem);
        });
        
        // Update preview section if visible
        if (affidavitPreviewSection && affidavitPreviewSection.style.display === 'block') {
            document.getElementById('previewAffidavitTitle').textContent = data.request.type.toUpperCase();
            document.getElementById('previewApplicantName').textContent = data.applicant.name.toUpperCase();
            document.getElementById('previewSignatureName').textContent = data.applicant.name.toUpperCase();
            
            // In a real app, you would generate the content based on the type
            // For now, we'll use a generic template
            const contentElement = document.getElementById('previewAffidavitContent');
            contentElement.innerHTML = `
                <p>I, <strong>${data.applicant.name.toUpperCase()}</strong>, ${data.applicant.gender}, Nigerian Citizen, residing at ${data.applicant.address}, do hereby make oath and state as follows:</p>
                
                <ol>
                    <li>That I am the deponent herein and I swear to this affidavit in good faith.</li>
                    <li>That I was born on the ${data.applicant.dob}.</li>
                    <li>That ${data.request.purpose}</li>
                    <li>That I make this solemn declaration conscientiously believing the same to be true and correct in accordance with the Oaths Act.</li>
                </ol>
            `;
        }
    }
    
    // Create Manual Request modal
    const createAffidavitBtn = document.getElementById('createAffidavitBtn');
    const createRequestModal = document.getElementById('createRequestModal');
    const closeCreateModalBtn = document.getElementById('closeCreateModal');
    
    if (createAffidavitBtn && createRequestModal) {
        createAffidavitBtn.addEventListener('click', function() {
            createRequestModal.classList.add('active');
        });
    }
    
    if (closeCreateModalBtn && createRequestModal) {
        closeCreateModalBtn.addEventListener('click', function() {
            createRequestModal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        createRequestModal.addEventListener('click', function(e) {
            if (e.target === createRequestModal) {
                createRequestModal.classList.remove('active');
            }
        });
    }
    
    // Show/hide transaction reference field based on payment status
    const paymentStatusSelect = document.getElementById('paymentStatus');
    const transactionRefField = document.getElementById('transactionRefField');
    
    if (paymentStatusSelect && transactionRefField) {
        paymentStatusSelect.addEventListener('change', function() {
            transactionRefField.style.display = this.value === 'paid' ? 'block' : 'none';
        });
    }
    
    // Show/hide other type field based on affidavit type selection
    const affidavitTypeSelect = document.getElementById('affidavitType');
    const otherTypeField = document.getElementById('otherTypeField');
    
    if (affidavitTypeSelect && otherTypeField) {
        affidavitTypeSelect.addEventListener('change', function() {
            otherTypeField.style.display = this.value === 'other' ? 'block' : 'none';
        });
    }
    
    // Manual request form submission
    const manualRequestForm = document.getElementById('manualRequestForm');
    
    if (manualRequestForm) {
        manualRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would submit the form data to the server
            alert('Request created successfully!');
            
            // Close the modal
            if (createRequestModal) {
                createRequestModal.classList.remove('active');
            }
            
            // Reset the form
            this.reset();
            
            // Hide conditional fields
            if (otherTypeField) otherTypeField.style.display = 'none';
            if (transactionRefField) transactionRefField.style.display = 'none';
        });
    }
    
    // Request action buttons
    const processRequestBtn = document.getElementById('processRequestBtn');
    const forwardRequestBtn = document.getElementById('forwardRequestBtn');
    const approveRequestBtn = document.getElementById('approveRequestBtn');
    const rejectRequestBtn = document.getElementById('rejectRequestBtn');
    
    if (processRequestBtn) {
        processRequestBtn.addEventListener('click', function() {
            const notes = document.getElementById('requestNotes').value.trim();
            if (!notes) {
                alert('Please add processing notes before proceeding.');
                return;
            }
            
            // In a real application, you would send this action to the server
            alert('Request status updated to Processing');
            
            // Add a new timeline entry
            addTimelineEntry('Processing Started', getCurrentDateTime(), 'Request moved to processing by Admin User. Notes: ' + notes);
            
            // Update status
            document.getElementById('currentStatus').innerHTML = '<span class="status-badge status-processing">Processing</span>';
            
            // Clear notes
            document.getElementById('requestNotes').value = '';
        });
    }
    
    if (forwardRequestBtn) {
        forwardRequestBtn.addEventListener('click', function() {
            const forwardTo = document.getElementById('forwardSelect').value;
            if (!forwardTo) {
                alert('Please select a recipient before forwarding.');
                return;
            }
            
            // Get recipient name based on value
            const recipientOptions = {
                'registrar': 'Chief Registrar',
                'commissioner': 'Commissioner for Oaths',
                'judge': 'Presiding Judge',
                'admin': 'Administrative Officer'
            };
            
            const recipientName = recipientOptions[forwardTo] || 'Unknown';
            
            // In a real application, you would send this action to the server
            alert(`Request forwarded to ${recipientName}`);
            
            // Add a new timeline entry
            addTimelineEntry('Request Forwarded', getCurrentDateTime(), `Request forwarded to ${recipientName} for further processing.`);
            
            // Reset select
            document.getElementById('forwardSelect').value = '';
        });
    }
    
    if (approveRequestBtn) {
        approveRequestBtn.addEventListener('click', function() {
            // Show the affidavit preview section
            if (affidavitPreviewSection) {
                affidavitPreviewSection.style.display = 'block';
                
                // Scroll to the preview section
                affidavitPreviewSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // In a real application, you would send this action to the server
            alert('Request approved. Please review the affidavit document.');
            
            // Add a new timeline entry
            addTimelineEntry('Request Approved', getCurrentDateTime(), 'Affidavit request approved by Admin User.');
            
            // Update status
            document.getElementById('currentStatus').innerHTML = '<span class="status-badge status-approved">Approved</span>';
        });
    }
    
    if (rejectRequestBtn) {
        rejectRequestBtn.addEventListener('click', function() {
            const notes = document.getElementById('requestNotes').value.trim();
            if (!notes) {
                alert('Please add rejection reason before proceeding.');
                return;
            }
            
            // In a real application, you would send this action to the server
            alert('Request rejected');
            
            // Add a new timeline entry
            addTimelineEntry('Request Rejected', getCurrentDateTime(), 'Affidavit request rejected by Admin User. Reason: ' + notes);
            
            // Update status
            document.getElementById('currentStatus').innerHTML = '<span class="status-badge status-rejected">Rejected</span>';
            
            // Clear notes
            document.getElementById('requestNotes').value = '';
        });
    }
    
    // Function to add a new timeline entry
    function addTimelineEntry(title, date, description) {
        const timelineContainer = document.getElementById('requestTimeline');
        if (!timelineContainer) return;
        
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-point"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title">${title}</div>
                    <div class="timeline-date">${date}</div>
                </div>
                <div class="timeline-desc">
                    ${description}
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    }
    
    // Function to get current date and time as formatted string
    function getCurrentDateTime() {
        const now = new Date();
        return now.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }) + ', ' + now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    // Upload affidavit document functionality
    const uploadAffidavitBtn = document.getElementById('uploadAffidavitBtn');
    const affidavitFileInput = document.getElementById('affidavitFile');
    
    if (uploadAffidavitBtn && affidavitFileInput) {
        uploadAffidavitBtn.addEventListener('click', function() {
            affidavitFileInput.click();
        });
        
        affidavitFileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const fileName = this.files[0].name;
                
                // In a real application, you would upload the file to the server
                alert(`File "${fileName}" uploaded successfully. The affidavit is now available for download by the applicant.`);
                
                // Add a new timeline entry
                addTimelineEntry('Affidavit Uploaded', getCurrentDateTime(), `Signed and stamped affidavit document "${fileName}" uploaded by Admin User.`);
            }
        });
    }
    
    // Filtering and search functionality
    const filterStatus = document.getElementById('filterStatus');
    const filterType = document.getElementById('filterType');
    const filterDate = document.getElementById('filterDate');
    const searchInput = document.getElementById('searchInput');
    
    function applyFilters() {
        const statusFilter = filterStatus ? filterStatus.value : 'all';
        const typeFilter = filterType ? filterType.value : 'all';
        const dateFilter = filterDate ? filterDate.value : 'all';
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        // In a real application, you would send these filters to the server or filter client-side data
        console.log('Applying filters:', {
            status: statusFilter,
            type: typeFilter,
            date: dateFilter,
            search: searchTerm
        });
        
        // For demonstration purposes, we'll just show an alert
        alert(`Filters applied: Status=${statusFilter}, Type=${typeFilter}, Date=${dateFilter}, Search="${searchTerm}"`);
    }
    
    // Add event listeners for filters
    [filterStatus, filterType, filterDate].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });
    
    // Add event listener for search input (debounced)
    if (searchInput) {
        let debounceTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(applyFilters, 500);
        });
    }
    
    // Pagination functionality
    const pageButtons = document.querySelectorAll('.page-btn:not([disabled])');
    const pageSizeSelect = document.getElementById('pageSize');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all page buttons
            pageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real application, you would fetch the data for the selected page
            console.log('Loading page:', this.textContent);
        });
    });
    
    if (pageSizeSelect) {
        pageSizeSelect.addEventListener('change', function() {
            const pageSize = this.value;
            
            // In a real application, you would update the page size and refresh the data
            console.log('Page size changed to:', pageSize);
        });
    }
});
