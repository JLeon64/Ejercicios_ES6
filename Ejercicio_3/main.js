// 3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const usersA = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newUserA = usersA.map((userA) => userA.name);
console.log(newUserA);

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const usersB = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newUserB = usersB.map((userB) =>
  userB.name.startsWith("A") ? { ...userB, name: "Amanda" } : userB
);

console.log(newUserB);

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesList = cities.map((city) =>
  city.isVisited == true ? { ...city, visited: "(Visitado)" } : city
);

console.log(citiesList);
