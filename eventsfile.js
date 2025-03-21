// import { CONFIG } from "./config.js";


const API_URL="https://disha-convent-school.onrender.com/events";

export default async function fetchEvents() {
    try {
        const response = await fetch(API_URL);
        const events = await response.json();
        // console.log(events);
        const sortedEvents = events.sort((a, b) => new Date(b.date) - new Date(a.date));
        // const reversedEvents = events.reverse();
        return sortedEvents;
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