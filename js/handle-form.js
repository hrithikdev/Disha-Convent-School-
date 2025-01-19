document.getElementById('teacherForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  // console.log('Form Data:');
  // for (let [key, value] of formData.entries()) {
  //   console.log(`${key}: ${value}`);
  // }
  } catch (error) {
    alert('Failed to send email. Please try again later.');
    console.error(error);
  }
});