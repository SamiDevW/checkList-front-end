function customAlert(message, type) {
  // Create the alert element
  const alertBox = document.createElement('div');
  alertBox.className = 'custom-alert';
  if (type) {
    alertBox.className = 'custom-alert warning';
  }
  alertBox.textContent = message;

  // Append it to the body
  document.body.appendChild(alertBox);

  // Remove it after 3 seconds
  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}
export default customAlert;