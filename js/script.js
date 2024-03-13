const btn = document.querySelector(".btn");
const katte = document.querySelector(".katte");

let KatteVisible = false;

btn.addEventListener("click", function () {
    if (KatteVisible) {
        // Hvis kattene er synlige fjern dem
        katte.innerHTML = ""; // Fjerner indhold
        btn.textContent = "Vis Katte";
    } else {
        // Hvis kattene er synlige fetcher jeg dem fra json og displayer dem
        const jsonFil = "../json/katte.json";

        fetch(jsonFil)
            .then((res) => res.json())
            .then((json) => {
                json.forEach(function (val) {
                    const katteContainer = document.createElement("div");
                    katteContainer.classList.add("katte-container");

                    const katteItem = document.createElement("div");
                    katteItem.classList.add("katte-item");

                    const katteImage = document.createElement("img");
                    katteImage.src = `${val.image}`;
                    katteImage.alt = `${val.name} ${val.breed} ${val.weight}`;

                    const katteInfo = document.createElement("ul");
                    katteInfo.innerHTML = `
                        <li>Navn: ${val.name}</li>
                        <li>Art: ${val.breed}</li>
                        <li>Vægt: ${val.weight}</li>
                    `;

                    katteItem.appendChild(katteImage);
                    katteItem.appendChild(katteInfo);

                    katteContainer.appendChild(katteItem);
                    katte.appendChild(katteContainer);
                });
            });

        btn.textContent = "Fjern Katte";
    }

    KatteVisible = !KatteVisible;
});