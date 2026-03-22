document.addEventListener("DOMContentLoaded", function () {
  // Handle order form submission
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Order submitted successfully! We will contact you shortly.");
    });
  }

  // Handle service selection from URL parameters
  const serviceSelect = document.getElementById("serviceSelect");
  if (serviceSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get('service');
    if (selectedService) {
      // Find the option that matches the service name
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text === selectedService) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
});
