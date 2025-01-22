document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('search-input').value.trim();
  const feedback = document.getElementById('error-feedback');

  if (!input) {
    feedback.textContent = "Please enter a valid search query.";
    feedback.style.display = "block";
  } else {
    feedback.style.display = "none";
    alert(`Searching for: ${input}`);
    // Redirect or handle search functionality
    // Example: window.location.href = `/search?q=${encodeURIComponent(input)}`;
  }
});
