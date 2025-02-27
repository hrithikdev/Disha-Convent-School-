const API_URL=CONFIG.API_URL;

async function fetchEvents() {
    try {
        const response = await fetch(API_URL);
        const events = await response.json();
        // console.log(events);
        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}

fetchEvents();




















// events=[
//     {
//         name: "Science Exhibition",
//         img: ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg"],
//         date: "18/11/2023"
//     },
//     {
//         name: "Raksha Bandhan",
//         img: ["./img/img5.jpg", "./img/img6.jpg", "./img/img7.jpg", "./img/img8.jpg"],
//         date: "18/11/2023"
//     },
//     {
//         name: "Independence Day",
//         img: ["./img/img9.jpg", "./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"],
//         date: "18/11/2023"
//     }
// ]