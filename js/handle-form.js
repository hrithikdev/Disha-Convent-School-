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
document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.querySelector("#teacherForm");
  const form2 = document.querySelector("#appointmentForm");
  const form3 = document.querySelector("#contactForm");
  const dateInput = document.querySelector("#appointmentDate");

  if(dateInput){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    let minDate = tomorrow.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    dateInput.setAttribute("min", minDate);
  }

  if (form1) {
      form1.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const updatedData = {...data, _subject: `New Teaching Job Application - ${data.Name}!`};

        fetch(`https://formspree.io/f/${CONFIG.FORM_ID}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        }).then(response => {
            alert("Thank you for your application! We have received your submission and will review it shortly. If shortlisted, we will contact you for further steps.");
            window.location.href = "index.html";
        }).catch(error => {
          alert("Network error. Try again.");
      });
  } )
}

  if (form2) {
      form2.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const updatedData = {...data, _subject: `New Appointment is Booked by ${data.Name}!`};
        
        const date=data.AppointmentDate;
        const time = data.AppointmentTime;

        fetch(`https://formspree.io/f/${CONFIG.FORM_ID}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        }).then(response => {
            alert(`Appointment Successfully Booked for ${date} at ${time}!`);
            window.location.href = "index.html";
        }).catch(error => {
            alert("Network error. Try again.");
        });
      });
  }


  if (form3) {
    form3.addEventListener('submit', async (e) => {
      e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const updatedData = {...data, _subject: `New Contact Form Submission ${data.User_Subject}!`};

        fetch(`https://formspree.io/f/${CONFIG.FORM_ID}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        }).then(response => {
            alert("Thank you for reaching out! We have received your message and will get back to you shortly.");
            window.location.href = "index.html";
        }).catch(error => {
            alert("Network error. Try again.");
        });
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