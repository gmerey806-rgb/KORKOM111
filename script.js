const movies = {
    1: {
        title: "14 күн",
        genre: "Комедия • Драма • Қазақстан",
        poster: "poster1.jpg"
    },

    2: {
        title: "38. Соңғы нүкте",
        genre: "Драма • Триллер",
        poster: "poster2.jpg"
    },

    3: {
        title: "Астрал 6",
        genre: "Ужасы • Триллер",
        poster: "poster3.jpg"
    },

    4: {
        title: "Болған оқиға 2",
        genre: "Комедия",
        poster: "poster4.jpg"
    },

    5: {
        title: "Вышка 2",
        genre: "Триллер • Драма",
        poster: "poster5.jpg"
    },

    6: {
        title: "Бегущая",
        genre: "Боевик • Триллер",
        poster: "poster6.jpg"
    },

    7: {
        title: "Крушение рейса",
        genre: "Боевик • Триллер",
        poster: "poster7.jpg"
    },

    8: {
        title: "Надежда",
        genre: "Боевик • Детектив",
        poster: "poster8.jpg"
    },

    9: {
        title: "Фамилия",
        genre: "Драма • Криминал",
        poster: "poster9.jpg"
    },

    10: {
        title: "Бүркітші",
        genre: "Драма • Қазақстан",
        poster: "poster10.jpg"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && movies[id]) {

    const title = document.getElementById("movieTitle");
    const genre = document.getElementById("movieGenre");

    if (title) {
        title.textContent = movies[id].title;
    }

    if (genre) {
        genre.textContent = movies[id].genre;
    }

    localStorage.setItem("movieId", id);
    localStorage.setItem("movieTitle", movies[id].title);
    localStorage.setItem("movieGenre", movies[id].genre);
}


function chooseTime(time) {

    localStorage.setItem("movieTime", time);

    window.location.href = "seats.html";
}


const seats = document.querySelectorAll(".seat");

seats.forEach(function(seat) {

    seat.addEventListener("click", function() {

        seats.forEach(function(item) {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

        localStorage.setItem(
            "movieSeat",
            this.textContent
        );

        const text = document.getElementById("selectedSeat");

        if (text) {
            text.textContent =
                "Таңдалған орын: " + this.textContent;
        }

    });

});


function goTicket() {

    const seat = localStorage.getItem("movieSeat");

    if (!seat) {
        alert("Алдымен орын таңдаңыз!");
        return;
    }

    window.location.href = "ticket.html";
}


const ticketMovie = document.getElementById("ticketMovie");
const ticketTime = document.getElementById("ticketTime");
const ticketSeat = document.getElementById("ticketSeat");

if (ticketMovie) {

    ticketMovie.textContent =
        localStorage.getItem("movieTitle") || "—";

    ticketTime.textContent =
        localStorage.getItem("movieTime") || "—";

    ticketSeat.textContent =
        localStorage.getItem("movieSeat") || "—";
}


function finishBooking() {

    alert("✅ Билет сәтті брондалды!");

}  const ticketPoster = document.getElementById("ticketPoster");

if (ticketPoster) {

    const movieId = localStorage.getItem("movieId");

    if (movieId && movies[movieId]) {

        ticketPoster.src = movies[movieId].poster;

        document.getElementById("ticketMovie").textContent =
            movies[movieId].title;
    }

    document.getElementById("ticketTime").textContent =
        localStorage.getItem("movieTime") || "—";

    document.getElementById("ticketSeat").textContent =
        localStorage.getItem("movieSeat") || "—";
}