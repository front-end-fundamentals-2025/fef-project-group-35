// Game Data
const games = {
    "monster-hunter-wilds": {
        title: "Monster Hunter Wilds",
        price: "$39.99",
        image: "https://upload.wikimedia.org/wikipedia/en/5/52/Monster_Hunter_Wilds_cover.png",
        description: "Explore vast, beautiful lands filled with powerful monsters in this latest installment.",
        genre: "Action RPG",
        platform: "PS5, Xbox, PC",
        release: "2025",
        developer: "Capcom"
    },
};

// Get the game parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const gameKey = urlParams.get("game");

// Load Game Data
if (gameKey && games[gameKey]) {
    const game = games[gameKey];
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-price").textContent = game.price;
    document.getElementById("game-image").src = game.image;
    document.getElementById("game-image").alt = game.title;
    document.getElementById("game-description").textContent = game.description;
    document.getElementById("game-genre").textContent = game.genre;
    document.getElementById("game-platform").textContent = game.platform;
    document.getElementById("game-release").textContent = game.release;
    document.getElementById("game-developer").textContent = game.developer;
} else {
    document.querySelector(".product-container").innerHTML = "<h1>Game Not Found</h1>";
}



    