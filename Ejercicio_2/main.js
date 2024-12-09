// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsListA = [32, 54, 21, 64, 75, 43];

const [...pointsCopy] = pointsListA;
console.log(pointsCopy);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toyA = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const { ...toyAcopy } = toyA;
console.log(toyAcopy);

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolosusando
// spread operatos.
const pointsListB = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const combinedPoints = [...pointsListB, ...pointsList2];
console.log(combinedPoints);

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toyB = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const combinedToys = { ...toyB, ...toyUpdate };
console.log(combinedToys);

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsCopy = [...colors.filter(color => color !== colors[1])]
console.log(colorsCopy);
