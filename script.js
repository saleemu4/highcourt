document.addEventListener("DOMContentLoaded", function () {
  // Initialize Charts
  initCharts();

  // Initialize Charts Function
  function initCharts() {
    // Case Load Bar Chart
    const caseLoadCtx = document
      .getElementById("caseLoadChart")
      .getContext("2d");
    const caseLoadChart = new Chart(caseLoadCtx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "New Cases",
            data: [125, 145, 136, 152, 168, 178, 165, 172, 185, 192, 183, 178],
            backgroundColor: "rgba(26, 60, 110, 0.7)",
            borderColor: "rgba(26, 60, 110, 1)",
            borderWidth: 1,
          },
          {
            label: "Resolved Cases",
            data: [98, 112, 125, 132, 145, 156, 148, 160, 172, 168, 172, 165],
            backgroundColor: "rgba(40, 167, 69, 0.7)",
            borderColor: "rgba(40, 167, 69, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Cases",
            },
          },
        },
      },
    });

    // Case Distribution Pie Chart
    const caseDistributionCtx = document
      .getElementById("caseDistributionChart")
      .getContext("2d");
    const caseDistributionChart = new Chart(caseDistributionCtx, {
      type: "pie",
      data: {
        labels: [
          "Civil",
          "Criminal",
          "Commercial",
          "Probate",
          "Administrative",
        ],
        datasets: [
          {
            data: [42, 28, 15, 8, 7],
            backgroundColor: [
              "rgba(26, 60, 110, 0.7)",
              "rgba(220, 53, 69, 0.7)",
              "rgba(40, 167, 69, 0.7)",
              "rgba(23, 162, 184, 0.7)",
              "rgba(255, 193, 7, 0.7)",
            ],
            borderColor: "#ffffff",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });

    // Document Upload Trends
    const docUploadCtx = document
      .getElementById("docUploadChart")
      .getContext("2d");
    const docUploadChart = new Chart(docUploadCtx, {
      type: "line",
      data: {
        labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
        datasets: [
          {
            label: "Uploaded Documents",
            data: [843, 925, 1054, 1128, 1232, 1345],
            backgroundColor: "rgba(23, 162, 184, 0.2)",
            borderColor: "rgba(23, 162, 184, 1)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Case Resolution Rate
    const resolutionRateCtx = document
      .getElementById("resolutionRateChart")
      .getContext("2d");
    const resolutionRateChart = new Chart(resolutionRateCtx, {
      type: "bar",
      data: {
        labels: ["Civil", "Criminal", "Commercial", "Probate", "Admin"],
        datasets: [
          {
            label: "Resolution Rate (%)",
            data: [78, 65, 82, 88, 72],
            backgroundColor: [
              "rgba(26, 60, 110, 0.7)",
              "rgba(220, 53, 69, 0.7)",
              "rgba(40, 167, 69, 0.7)",
              "rgba(23, 162, 184, 0.7)",
              "rgba(255, 193, 7, 0.7)",
            ],
            borderColor: [
              "rgba(26, 60, 110, 1)",
              "rgba(220, 53, 69, 1)",
              "rgba(40, 167, 69, 1)",
              "rgba(23, 162, 184, 1)",
              "rgba(255, 193, 7, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: "Percentage (%)",
            },
          },
        },
      },
    });
  }

  // User dropdown functionality
  const userProfileButton = document.getElementById("user-profile");
  const userDropdown = document.getElementById("user-dropdown");

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
});
