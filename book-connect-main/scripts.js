// Import data and constants from data.js
import { books, BOOKS_PER_PAGE, authors, genres } from "./data.js";

// Define the range variables
const range = [0, 36];
const matches = books;
let page = 1; 

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}
if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

// Function to create a book preview element
function createPreview({ author, id, image, title }) {
  const preview = document.createElement("button");
  preview.classList.add("preview");
  preview.setAttribute("data-preview", id);

  preview.innerHTML = `
    <img class="preview__image" src="${image}" />
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  preview.addEventListener("click", () => {
    const active = books.find((book) => book.id === id);

    if (!active) return;

    // opening the overlay
    const listActive = document.querySelector(".overlay");
    listActive.open = true;

    // background blur image
    const overlayBlur = document.querySelector("[data-list-blur]");
    overlayBlur.src = active.image;

    // book details in the overlay
    {
      const listImage = document.querySelector(".overlay__image");
      const listTitle = document.querySelector(".overlay__title");
      const listSubtitle = document.querySelector(".overlay__data");
      const listDescription = document.querySelector(".overlay__data_secondary");
      listImage.src = active.image;
      listTitle.textContent = active.title;
      listSubtitle.textContent = `${authors[active.author]} (${new Date(
        active.published
      ).getFullYear()})`;
      listDescription.textContent = active.description;
    }
  });

  return preview;
}

// DOM element for closing the list overlay
const listCloseButton = document.querySelector(".overlay__button[data-list-close]");
listCloseButton.addEventListener("click", () => {
  const dataSettingsOverlay = document.querySelector(".overlay[data-list-active]");
  dataSettingsOverlay.open = false;
});

// Create a fragment to store book previews
const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

// Create and append book previews to the fragment
for (const { author, image, title, id } of extracted) {
  const preview = createPreview({
    author,
    id,
    image,
    title,
  });

  fragment.appendChild(preview);
}
document.querySelector(".list__items").appendChild(fragment);

// DOM elements
const dataListItem = document.querySelector('[data-list-items]')
const dataListButton = document.querySelector('.list__button')

// Calculate remaining books for the Show more button
const dataListButtonRemaining = matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0
dataListButton.innerHTML = /* html */
    `<span>Show more</span>
    <span class="list__remaining">(${dataListButtonRemaining})</span>`

// Event listener for Show more button
dataListButton.addEventListener('click', () => {
    const startIndex = page * BOOKS_PER_PAGE
    const endIndex = startIndex + BOOKS_PER_PAGE
    const extracted = matches.slice(startIndex, endIndex)

    const fragment = document.createDocumentFragment()

    // Createe and append book previews to the fragment
    for (const { author, image, title, id } of extracted) {
        const preview = createPreview({
            author,
            id,
            image,
            title
        });

        fragment.appendChild(preview)
    }

    dataListItem.appendChild(fragment)
    page++

    // Disable the button when no more books are available
    const remaining = matches.length - page * BOOKS_PER_PAGE
    dataListButton.disabled = remaining <= 0

    // Update the "Show more" button text
    dataListButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
    `
    window.scrollTo({ bottom: 0, behavior: 'smooth' })
})

// DOM elements and event listeners for settings overlay
const dataSettingsButton = document.querySelector(".header__button[data-header-settings]");
const dataSettingsOverlay = document.querySelector(".overlay[data-settings-overlay]");
const dataSettingsForm = document.getElementById("settings");
const dataSettingsCloseButton = document.querySelector(".overlay__button[data-settings-cancel]");

dataSettingsButton.addEventListener("click", () => {
  // click event for opening settings overlay
  dataSettingsOverlay.open = true;
});

dataSettingsForm.addEventListener("submit", (submit) => {
  // form submission for settings
  submit.preventDefault();
  const formData = new FormData(submit.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty('--color-dark', themes[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', themes[result.theme].light);
  dataSettingsOverlay.open = false;
});
// Changes the theme from light to dark
const themes = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },
  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};
dataSettingsCloseButton.addEventListener("click",() => {
  // click event for closing settings overlay
  dataSettingsOverlay.open= false
});

// DOM elements and event listeners for search overlay
const dataSearchButton = document.querySelector(".header__button[data-header-search]");
const dataSearchOverlay = document.querySelector(".overlay[data-search-overlay]");

dataSearchButton.addEventListener("click",() => {
  // click event for opening search overlay
  dataSearchOverlay.open = true;
});

// Create select options for genres
const genreSelect = document.querySelector("select[name='genre']");
for (const genreId in genres) {
  if (genres.hasOwnProperty(genreId)) {
    const genreName = genres[genreId];
    const option = document.createElement("option");
    option.value = genreId;
    option.textContent = genreName;
    genreSelect.appendChild(option);
  }
}

// Create select options for authors
const authorSelect = document.querySelector("select[name='author']");
for (const authorId in authors) {
  if (authors.hasOwnProperty(authorId)) {
    const authorName = authors[authorId];
    const option = document.createElement("option");
    option.value = authorId;
    option.textContent = authorName;
    authorSelect.appendChild(option);
  }
}

// Event listener for search form submission
const searchForm = document.querySelector(".overlay__form");
const displayArea = document.querySelector(".list__items");
const messageElement = document.querySelector(".list__message");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(searchForm);
  const filters = Object.fromEntries(formData);

  const results = [];

  // Apply filters to the list of books
  for (const book of books) {
    const titleMatch =
      filters.title.trim() === "" ||
      book.title.toLowerCase().includes(filters.title.toLowerCase());

    const authorMatch =
      filters.author === "any" || book.author === filters.author;

    const genreMatch =
      filters.genre === "any" || book.genres.includes(filters.genre);

    if (titleMatch && authorMatch && genreMatch) {
      results.push(book);
    }
  }

  // Display search results or show a message if no results found
  displayArea.innerHTML = "";

  if (results.length === 0) {
    messageElement.classList.add("list__message_show");
  } else {
    messageElement.classList.remove("list__message_show");

    for (const book of results) {
      const preview = createPreview(book);
      displayArea.appendChild(preview);
    }
  }
});

// Event listener for closing the search overlay
const closeButton = document.querySelector(".overlay__button[data-search-cancel]");
closeButton.addEventListener("click", () => {
  const dataSettingsOverlay = document.querySelector(".overlay[data-search-overlay]");
  dataSettingsOverlay.open = false;
});
