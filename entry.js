const rootRef = document.getElementById("root");
// import axios from "axios";

async function getApiData() {
  const result1 = await axios.get(
    `https://thesimpsonsquoteapi.glitch.me/quotes?character=homer simpson`
  );
  const result2 = await axios.get(
    `https://thesimpsonsquoteapi.glitch.me/quotes?character=bart simpson`
  );
  const result3 = await axios.get(
    `https://thesimpsonsquoteapi.glitch.me/quotes?character=lisa simpson`
  );
  console.log(result1, result2, result3);
}
getApiData();
