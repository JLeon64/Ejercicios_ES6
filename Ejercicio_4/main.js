// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los valores que sean mayor que 18
const agesA = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const overAgeFilter = agesA.filter((agesA) => agesA >= 18);
console.log(overAgeFilter);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los valores que sean par.
const agesB = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenNumbersFilter = agesB.filter((agesB) => agesB % 2 == 0);
console.log(evenNumbersFilter);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const leaguePlayers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log(leaguePlayers);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los streamers que incluyan el caracter 'u' en su propiedad name. Recomendamos  usar la funcion .includes() para la comprobación.

const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes("u")
);
console.log(streamersWithU);

// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan  el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion  .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando  .age sea mayor que 35.

const legendFilter = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
  .map((streamer) =>
    streamer.age >= 35
      ? { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() }
      : streamer
  );
console.log(legendFilter);
