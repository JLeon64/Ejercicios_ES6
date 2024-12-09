// Dado el siguiente javascript, utiliza .filter() para mostrar por consola  los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector("input");
const dropdown = document.getElementById("dropdown");

input.addEventListener("input", (event) => {
    const searchTerm = event.target.value;

  const streamersFilter = streamers.filter((streamer) =>
    streamer.name.includes(event.target.value)
  );

  dropdown.innerHTML = "";

  if (searchTerm === "") {
    return;
  }

  streamersFilter.forEach((streamer) => {
    const item = document.createElement("div");
    item.textContent = streamer.name;
    item.className = "dropdownItem";
    dropdown.appendChild(item);
  });
});
