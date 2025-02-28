// Task 2:
const imageContainer = document.getElementById("image-container");
const image = document.createElement("img");
image.src =
  "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
image.alt = "Random Image";
image.style.width = "300px";
image.style.height = "300px";
imageContainer.appendChild(image);

// Task 4:
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "img/download.jfif",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "img/granger.jfif",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "img/ron.jfif",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "img/draco.jfif",
    actor: "Tom Felton",
  },
];

const charactersListSection = document.getElementById("characters-list");

const characterCards = characters
  .map((character) => {
    return `
        <div class="character-card">
            <div class="content">
                <h3>${character.first_name} ${character.last_name}</h3>
                <p>House: ${character.house}</p>
                <button class="delete-button">Delete</button>
                <button class="info-button">Info</button>
                <p class="actor-info" style="display: none;">Actor: ${character.actor}</p>
            </div>
            <img src="${character.image}" alt="${character.first_name} ${character.last_name}">
        </div>
    `;
  })
  .join("");

charactersListSection.innerHTML = characterCards;

//task 5

charactersListSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.target.closest(".character-card").remove();
  }

  if (event.target.classList.contains("info-button")) {
    const actorInfo = event.target.nextElementSibling;
    actorInfo.style.display =
      actorInfo.style.display === "none" ? "block" : "none";
  }
});
