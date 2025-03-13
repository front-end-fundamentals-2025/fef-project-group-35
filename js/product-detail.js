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
    "dynasty-warriors-origins": {
        title: "Dynasty Warriors: Origins",
        price: "$29.99",
        image: "https://upload.wikimedia.org/wikipedia/en/5/55/Dynasty_Warriors_Origins_Cover_1.jpg",
        description: "Experience the origins of the epic Dynasty Warriors saga.",
        genre: "Hack and Slash",
        platform: "PS5, PC",
        release: "2024",
        developer: "Koei Tecmo"
    },
    "witcher-3": {
        title: "The Witcher 3: Wild Hunt",
        price: "$29.99",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        description: "Step into the shoes of Geralt and explore a vast, story-driven open world.",
        genre: "Action RPG",
        platform: "PC, PS5, Xbox",
        release: "2015",
        developer: "CD Projekt Red"
    },
    "helldivers-2": {
        title: "Helldivers 2",
        price: "$39.99",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Helldivers2cover.png",
        description: "Join the Helldivers and fight for freedom in chaotic cooperative action.",
        genre: "Top-Down Shooter",
        platform: "PC, PS5",
        release: "2024",
        developer: "Arrowhead Game Studios"
    },
    "ghost-of-tsushima": {
        title: "Ghost of Tsushima",
        price: "$49.99",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
        description: "Experience the beauty and brutality of feudal Japan as a samurai.",
        genre: "Action Adventure",
        platform: "PS5, PC",
        release: "2020",
        developer: "Sucker Punch Productions"
    },
    "black-myth-wukong": {
        title: "Black Myth: Wukong",
        price: "$59.99",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Black_Myth_Wukong_cover_art.jpg",
        description: "Embark on an epic journey inspired by Chinese mythology.",
        genre: "Action RPG",
        platform: "PC, PS5",
        release: "2025",
        developer: "Game Science"
    },
    "elden-ring": {
        title: "Elden Ring",
        price: "$59.99",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
        description: "Explore the Lands Between in FromSoftware's critically acclaimed open world.",
        genre: "Action RPG",
        platform: "PC, PS5, Xbox",
        release: "2022",
        developer: "FromSoftware"
    },
    "god-of-war-ragnarok": {
        title: "God of War Ragnarök",
        price: "$29.99",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
        description: "Kratos and Atreus face Ragnarok in this epic Norse adventure.",
        genre: "Action Adventure",
        platform: "PS5",
        release: "2022",
        developer: "Santa Monica Studio"
    },
    "hogwarts-legacy": {
        title: "Hogwarts Legacy",
        price: "$49.99",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Hogwarts_Legacy_key_art.jpg",
        description: "Explore Hogwarts and the wizarding world in this open-world RPG.",
        genre: "RPG",
        platform: "PC, PS5, Xbox",
        release: "2023",
        developer: "Avalanche Software"
    },
    "baldurs-gate-3": {
        title: "Baldur's Gate III",
        price: "$49.99",
        image: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
        description: "Gather your party and venture forth in this acclaimed D&D-inspired RPG.",
        genre: "RPG",
        platform: "PC, PS5",
        release: "2023",
        developer: "Larian Studios"
    },
    "final-fantasy-xvi": {
        title: "Final Fantasy XVI",
        price: "$39.99",
        image: "https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png",
        description: "Experience a brand new Final Fantasy story filled with epic battles.",
        genre: "Action RPG",
        platform: "PS5",
        release: "2023",
        developer: "Square Enix"
    },
    "dragons-dogma-2": {
        title: "Dragon's Dogma 2",
        price: "$49.99",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Dragon%27s_Dogma_2_cover_art.jpg",
        description: "The highly anticipated sequel to the cult classic action RPG.",
        genre: "Action RPG",
        platform: "PC, PS5, Xbox",
        release: "2025",
        developer: "Capcom"
    }
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

    // Set data attributes for the "Add to Cart" button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.setAttribute('data-name', game.title);
    addToCartBtn.setAttribute('data-price', game.price.replace('$', ''));
} else {
    document.querySelector(".product-container").innerHTML = "<h1>Game Not Found</h1>";
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the "Add to Cart" button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }
});
