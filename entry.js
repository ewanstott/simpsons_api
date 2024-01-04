const rootRef = document.getElementById("root");
const searchRef = document.getElementById("search");

const spinner = `<span class="loader"></span>`;

async function getApiData(value) {
  //begin spinner here
  rootRef.innerHTML = spinner;

  //try statement (try and get data)
  try {
    const result = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?character=${value}`
    );
    const { character, image, quote } = result.data[0];

    rootRef.innerHTML = `<div>
                                    <h1>${character}</h1>
                                    <p>${quote}</p>
                                    <img src="${image}" alt="${character}"/>
                                    
                        </div>`;
  } catch (err) {
    rootRef.innerHTML = `API down, try again later`;
  }
}

searchRef.addEventListener("input", (e) => {
  getApiData(e.target.value);
});

//vpn or change security settings / airvpn
