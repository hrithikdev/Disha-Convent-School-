// document.getElementById('teacherForm').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch('http://localhost:3000/send-teaching-email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     alert(result.message);
//     window.location.href = "index.html";
//   // console.log('Form Data:');
//   // for (let [key, value] of formData.entries()) {
//   //   console.log(`${key}: ${value}`);
//   // }
//   } catch (error) {
//     alert('Failed to submit form. Please try again later.');
//     console.error(error);
//   }
// });





document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.querySelector("#teacherForm");
  const form2 = document.querySelector("#appointmentForm");

  if (form1) {
      form1.addEventListener('submit', async (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
      
        try {
          const response = await fetch('http://localhost:3000/send-teaching-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          alert(result.message);
          window.location.href = "index.html";
        } catch (error) {
          alert('Failed to submit form. Please try again later.');
          console.error(error);
        }
  } )
}

  if (form2) {
      form2.addEventListener('submit', async (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
      
        try {
          const response = await fetch('http://localhost:3000/send-appointment-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          alert(result.message);
          window.location.href = "index.html";
        } catch (error) {
          alert('Failed to submit form. Please try again later.');
          console.error(error);
        }
      });
  }
});




// document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch('http://localhost:3000/send-appointment-email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     alert(result.message);
//     window.location.href = "index.html";
//   } catch (error) {
//     alert('Failed to submit form. Please try again later.');
//     console.error(error);
//   }
// });