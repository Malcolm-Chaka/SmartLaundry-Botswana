document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Order submitted successfully! We will contact you shortly.");
    });
  }
});