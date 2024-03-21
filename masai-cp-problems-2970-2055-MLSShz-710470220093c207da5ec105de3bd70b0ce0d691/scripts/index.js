// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const stateURL = `${baseServerURL}/states`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// state
let stateNameInput = document.getElementById("state-Name");
let stateImageInput = document.getElementById("state-image");
let statecapitalInput = document.getElementById("state-capital");
let statepopulationInput = document.getElementById("state-population");
let statelanguageInput = document.getElementById("state-language");
let stateGDPRankingInput = document.getElementById("state-GDPRanking");
let stateRegionInput = document.getElementById("state-region");
let statetourismPlacesInput = document.getElementById("state-tourismPlaces");
let stateCreateBtn = document.getElementById("add-state");

// Update state
let updateStateIdInput = document.getElementById("update-state-id");
let updatestateNameInput = document.getElementById("update-state-Name");
let updateStateImageInput = document.getElementById("update-state-image");
let updateStatecapitalInput = document.getElementById("update-state-capital");
let updateStatepopulationInput = document.getElementById(
  "update-state-population"
);
let updateStatelanguageInput = document.getElementById("update-state-language");
let updateStateGDPRankingInput = document.getElementById(
  "update-state-GDPRanking"
);
let updateStateRegionInput = document.getElementById("update-state-region");

let updateStatetourismPlacesInput = document.getElementById(
  "update-state-tourismPlaces"
);
let updateStateBtn = document.getElementById("update-state");

//Update GDPRanking
let updateGDPStateId = document.getElementById("update-GDP-state-id");
let updateGDPRankingStateGDPRanking = document.getElementById(
  "update-GDP-state-GDPRanking"
);
let updateGDPRankingStateBtn = document.getElementById("update-GDP-stateBtn");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterNortheast = document.getElementById("filter-North-East-India");
let filterWest = document.getElementById("filter-West-India");
let filterNorth = document.getElementById("filter-North-India");

//Search by name/language
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//States Data
let statesData = [];
let queryParamString = null;
let pageNumber = 1;

/////////////////////////////////////////////////
// Constants

// Fetch initial data and render states
async function fetchAndRenderStates() {
  try {
    const response = await fetch(stateURL);
    const states = await response.json();
    statesData = states;
    renderStates(states);
  } catch (error) {
    console.error("Error fetching and rendering states:", error);
  }
}
const stateNames1 = statesData.map((state) => state.stateName);
// Render states on the UI
function renderStates(states) {
  const dataListWrapper = document.getElementById("data-list-wrapper");
  dataListWrapper.innerHTML = "";
  // console.log(states);
  states.forEach((state) => {
    const stateCard = createStateCard(state);
    dataListWrapper.appendChild(stateCard);
  });
}

// Create state card
function createStateCard(state) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = state.id;

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("card-img");
  const image = document.createElement("img");
  image.src = state.image;
  imageDiv.appendChild(image);
  card.appendChild(imageDiv);

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body");
  const stateName = document.createElement("h5");
  stateName.classList.add("card-stateName");
  stateName.textContent = state.stateName;
  bodyDiv.appendChild(stateName);

  const capital = createParagraph("Capital", state.capital);
  const population = createParagraph("Population", state.population);
  const region = createParagraph("Region", state.region);
  const language = createParagraph("Language", state.language);
  const GDPRanking = createParagraph("GDP Ranking", state.GDPRanking);
  const tourismPlaces = createParagraph(
    "Tourism Places",
    state.tourismPlaces.join(", ")
  );

  bodyDiv.appendChild(capital);
  bodyDiv.appendChild(population);
  bodyDiv.appendChild(region);
  bodyDiv.appendChild(language);
  bodyDiv.appendChild(GDPRanking);
  bodyDiv.appendChild(tourismPlaces);

  const editLink = document.createElement("a");
  editLink.classList.add("card-link");
  editLink.textContent = "Edit";
  editLink.href = "#";
  editLink.dataset.id = state.id;
  editLink.addEventListener("click", populateEditForm);
  bodyDiv.appendChild(editLink);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("card-button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.id = state.id;
  deleteButton.addEventListener("click", deleteState);
  bodyDiv.appendChild(deleteButton);

  card.appendChild(bodyDiv);

  return card;
}

// Create paragraph element with given text content
function createParagraph(label, text) {
  const paragraph = document.createElement("p");
  paragraph.classList.add(`card-${label.toLowerCase().replace(" ", "-")}`);
  paragraph.textContent = `${label}: ${text}`;
  return paragraph;
}

// Populate edit form with state data

// Populate edit form with state data
function populateEditForm(event) {
  event.preventDefault();
  // const stateId = event.target.dataset.id;
  const stateId = parseInt(event.target.dataset.id);

  const state = findStateById(stateId);
  console.log(state);
  if (state) {
    updateStateIdInput.value = stateId.id;

    updatestateNameInput.value = state.stateName;
    updateStateImageInput.value = state.image;
    updateStatecapitalInput.value = state.capital;
    updateStatepopulationInput.value = state.population;
    updateStatelanguageInput.value = state.language;
    updateStateGDPRankingInput.value = state.GDPRanking;
    updateStateRegionInput.value = state.region;
    updateStatetourismPlacesInput.value = state.tourismPlaces.join(", ");
  }
}

// Find state by ID
function findStateById(stateId) {
  console.log(statesData, "statebyIf()");
  return statesData.find((state) => state.id === stateId);
}

// Delete state
async function deleteState(event) {
  const stateId = event.target.dataset.id;
  try {
    await fetch(`${stateURL}/${stateId}`, { method: "DELETE" });
    await fetchAndRenderStates();
  } catch (error) {
    console.error("Error deleting state:", error);
  }
}

// Event listener for adding a new state
stateCreateBtn.addEventListener("click", addNewState);

// Add new state
async function addNewState() {
  const newState = {
    stateName: stateNameInput.value,
    image: stateImageInput.value,
    capital: statecapitalInput.value,
    population: parseInt(statepopulationInput.value),
    language: statelanguageInput.value,
    GDPRanking: parseInt(stateGDPRankingInput.value),
    region: stateRegionInput.value,
    tourismPlaces: statetourismPlacesInput.value
      .split(",")
      .map((place) => place.trim()),
  };

  try {
    await fetch(stateURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newState),
    });
    await fetchAndRenderStates();
  } catch (error) {
    console.error("Error adding new state:", error);
  }
}

// Fetch and render states on page load
fetchAndRenderStates();
// Event listener for updating GDP ranking of a state
updateGDPRankingStateBtn.addEventListener("click", updateStateGDPRanking);

// Function to update GDP ranking of a state
async function updateStateGDPRanking() {
  const stateId = updateGDPStateId.value;
  const newGDPRanking = parseInt(updateGDPRankingStateGDPRanking.value);

  const updatedGDPRanking = {
    GDPRanking: newGDPRanking,
  };

  try {
    const response = await fetch(`${stateURL}/${stateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGDPRanking),
    });

    if (!response.ok) {
      throw new Error("Failed to update state GDP Ranking");
    }

    // Find the updated state in the statesData array and update its GDP Ranking
    const updatedStateIndex = statesData.findIndex(
      (state) => state.id === stateId
    );
    if (updatedStateIndex !== -1) {
      statesData[updatedStateIndex].GDPRanking = newGDPRanking;
    }

    // Re-render the states with the updated data
    renderStates(statesData);
  } catch (error) {
    console.error("Error updating state GDP Ranking:", error);
  }
}
// Event listener for updating all fields of a state
// updateStateBtn.addEventListener("click", updateState);

// // Function to update all fields of a state
// async function updateState() {
//   const stateId = updateStateIdInput.value;

//   const updatedState = {
//     stateName: updatestateNameInput.value,
//     image: updateStateImageInput.value,
//     capital: updateStatecapitalInput.value,
//     population: parseInt(updateStatepopulationInput.value),
//     language: updateStatelanguageInput.value,
//     GDPRanking: parseInt(updateStateGDPRankingInput.value),
//     region: updateStateRegionInput.value,
//     tourismPlaces: updateStatetourismPlacesInput.value
//       .split(",")
//       .map((place) => place.trim()),
//   };

//   try {
//     const response = await fetch(`${stateURL}/${stateId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedState),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update state");
//     }

//     // Update the statesData array with the updated state
//     const index = statesData.findIndex((state) => state.id === stateId);
//     if (index !== -1) {
//       statesData[index] = updatedState;
//     }

//     // Re-render the states with the updated data
//     renderStates(statesData);
//   } catch (error) {
//     console.error("Error updating state:", error);
//   }
// }

// Event listeners for region filter buttons
filterNortheast.addEventListener("click", filterByRegion);
filterWest.addEventListener("click", filterByRegion);
filterNorth.addEventListener("click", filterByRegion);

// Function to filter states by region
function filterByRegion(event) {
  const region = event.target.textContent.trim();
  const filteredStates = statesData.filter((state) => state.region === region);
  renderStates(filteredStates);
}

// Event listeners for sort buttons
sortAtoZBtn.addEventListener("click", sortLowToHigh);
sortZtoABtn.addEventListener("click", sortHighToLow);

// Function to sort states by GDP ranking in ascending order (Low to High)
function sortLowToHigh() {
  const sortedStates = statesData
    .slice()
    .sort((a, b) => a.GDPRanking - b.GDPRanking);
  renderStates(sortedStates);
}

// Function to sort states by GDP ranking in descending order (High to Low)
function sortHighToLow() {
  const sortedStates = statesData
    .slice()
    .sort((a, b) => b.GDPRanking - a.GDPRanking);
  renderStates(sortedStates);
}

// Event listener for search button click
searchByButton.addEventListener("click", searchStates);

// Function to search states based on selected criteria
function searchStates() {
  const searchCriteria = searchBySelect.value;
  const searchTerm = searchByInput.value.toLowerCase().trim();

  // Filter states based on selected criteria and search term
  const filteredStates = statesData.filter((state) => {
    if (searchCriteria === "stateName") {
      return state.stateName.toLowerCase().includes(searchTerm);
    } else if (searchCriteria === "language") {
      return state.language.toLowerCase().includes(searchTerm);
    }
  });

  // Render filtered states on the UI
  renderStates(filteredStates);
}
