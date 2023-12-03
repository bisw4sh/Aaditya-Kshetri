document
  .getElementById("form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Compose email body
    const subject = `New message from ${name}`;
    const body = `From: ${name}\nEmail: ${email}\n\nMessage: ${message}`;

    // Create mailto link
    const mailtoLink = `mailto:aadityakshetri676@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default mail application
    window.location.href = mailtoLink;
  });

  document.
  querySelector('.mail-icon')
  .addEventListener('click', () => {
    document.getElementById('name').focus()
  })