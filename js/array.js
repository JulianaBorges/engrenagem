const data = [
    {nome: 'Matehus', age: 31, sallary: 2000, driverLicense: true},
    {nome: 'João', age: 20, sallary: 1500, driverLicense: false},
    {nome: 'Mariana', age: 22, sallary: 4000, driverLicense: true},
    {nome: 'Pedro', age: 50, sallary: 7000, driverLicense: false},
    {nome: 'Juliana', age: 33, sallary: 6000, driverLicense: true},
];

const nomes = [
    {nome: "Juliana"},
    {nome: "Rosimeire"},
    {nome: "Maria Gabrielly"},
    {nome: "Luizene"},
]

// 1-Reverse
const reverseData = data.reverse();

console.log(reverseData)

// 2- FIND -> esse filtro retorna o ultimo resultado encontrado, 
//mesmo não sendo de maior valor na array

const highSallary = 6500

const highestSallary = data.find((user) => user.sallary > highSallary)

 console.log(highestSallary)


// 3 - findIndex  buscas dentro de uma condição
const lowestSallary = data.findIndex(
    (user) => user.sallary > 0 && user.sallary < 2000
);

console.log(lowestSallary);

data[lowestSallary].sallary += 20;

// 4 -- include verifica se o elemento existe na array

const numeros = [1, 2, 3, 4, 5];

const hasFour = numeros.includes(2);

console.log(hasFour)


//5 -- map 
data.map((user) => (user.newsletter = false));

console.log(data)


//6 -- filter
const drivers = data.filter((user) => user.driverLicense);

console.log(drivers)

//7 reduce 
const somaSalarios = data.reduce(
    (totalSalario, user) => (totalSalario += user.sallary),
    0
    );
   
console.log(somaSalarios);


// 8-- forEach

const mostrarNomeUser = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.nome}!`);
    });
};

mostrarNomeUser(nomes);


//9 some

let consultaAssinaturaNewsletter = data.some((user) => user.newsletter);

 console.log(consultaAssinaturaNewsletter)

 data[0].newsletter = true;

 consultaAssinaturaNewsletter = data.some((user) => user.newsletter)

 console.log(consultaAssinaturaNewsletter)


//10 - every 

const verificandoBonsSalarios = data.every((user) => user.sallary > 2000);

console.log(verificandoBonsSalarios);