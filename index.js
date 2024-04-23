const countrysConter = document.querySelector(".all-contrys");
const shortBtn = document.getElementById("short-btn");
const apiUrl =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

// ----------------Fetch country data from the API----------------
async function fetchCountrys() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const countryArr = data.data;
    countryArr.map((iteam) => {
      card(iteam);
    });
    shortBtn.addEventListener("click", () => {
      countrysConter.innerHTML = "";
      sortByPopulation(countryArr);
      const newCountryArr = countryArr;
      newCountryArr.map((iteam) => {
        card(iteam);
      });
    });
  } catch (error) {
    console.log("error fatcing", error);
  }
}

function card(detail) {
  countrysConter.innerHTML += `<div class="country">
      <p>Country Name : <span>${detail.country}</span></p>
       <p>Rank : <span>${detail.Rank}</span></p>
       <p>Population : <span>${detail.population}</span></p>
     </div>`;
}

function sortByPopulation(detail) {
  detail.sort((a, b) => {
    return a.population - b.population;
  });
}

fetchCountrys();
// -----------------Display country cards--------------------

// fetch(
//   "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
// )
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   data.data.map((iteam) => {
//     countrys.innerHTML += `<div class="country">
//       <p>Country Name : <span>${iteam.country}</span></p>
//       <p>Rank : <span>${iteam.Rank}</span></p>
//       <p>Population : <span>${iteam.population}</span></p>
//     </div>`;
//   });
//   shortBtn.addEventListener("click", () => {});
// });
