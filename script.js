class Zoo {
    constructor(name, annualVisitors, numAnimals) {
        this.name = name;
        this.annualVisitors = annualVisitors;
        this.numAnimals = numAnimals;
    }
}

const zooForm = document.getElementById('zoo-form');
const zooList = document.getElementById('zoo-list');
const searchResultsList = document.getElementById('search-results');

let zoos = [];
let filteredZoos = [];

zooForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const zooName = document.getElementById('zoo-name').value;
    const annualVisitors = parseInt(document.getElementById('annual-visitors').value);
    const numAnimals = parseInt(document.getElementById('num-animals').value);

    if (zooName && !isNaN(annualVisitors) && !isNaN(numAnimals)) {
        const newZoo = new Zoo(zooName, annualVisitors, numAnimals);
        addZoo(newZoo);

        document.getElementById('zoo-name').value = '';
        document.getElementById('annual-visitors').value = '';
        document.getElementById('num-animals').value = '';
    } else {
        alert('Please enter valid data.');
    }
});

function addZoo(zoo) {
    zoos.push(zoo);
    updateDOM();
}

function updateDOM(zooData = zoos) {
    zooList.innerHTML = '';
    searchResultsList.innerHTML = '';

    zooData.forEach((zoo) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${zoo.name}</strong> - Annual Visitors: ${zoo.annualVisitors}, Number of Animals: ${zoo.numAnimals}`;
        zooList.appendChild(listItem);
    });
}


function updateZoo(zoo) {
    const zooIndex = zoos.findIndex((z) => z.name === zoo.name);

    if (zooIndex !== -1) {
        zoos[zooIndex] = zoo;
        updateDOM();
    }
}

function deleteZoo(zooName) {
    zoos = zoos.filter((zoo) => zoo.name !== zooName);
    updateDOM();
}

function sortZoosByVisitors() {
    zoos.sort((a, b) => a.annualVisitors - b.annualVisitors);
    updateDOM();
}

function calculateTotalVisitors(filteredZoos) {
    const totalVisitors = filteredZoos.reduce((acc, zoo) => acc + zoo.annualVisitors, 0);
    alert(`Total Annual Visitors for Searched Zoos: ${totalVisitors}`);
}

function doubleVisitorsToZoos() {
    zoos = zoos.map((zoo) => {
        return { ...zoo, annualVisitors: zoo.annualVisitors * 2 };
    });
    updateDOM();
}

function filterAndSortZoos(searchKeyword = '') {
    filteredZoos = zoos;

    if (searchKeyword) {
        filteredZoos = filteredZoos.filter((zoo) =>
            zoo.name.toLowerCase().includes(searchKeyword)
        );
    }

    filteredZoos.sort((a, b) => a.annualVisitors - b.annualVisitors);
    updateDOM(filteredZoos);
}

document.getElementById('update-zoo').addEventListener('click', function () {
    const zooName = document.getElementById('zoo-name').value;
    const annualVisitors = parseInt(document.getElementById('annual-visitors').value);
    const numAnimals = parseInt(document.getElementById('num-animals').value);

    if (zooName && !isNaN(annualVisitors) && !isNaN(numAnimals)) {
        const updatedZoo = new Zoo(zooName, annualVisitors, numAnimals);
        updateZoo(updatedZoo);
    } else {
        alert('Please enter valid data.');
    }
});

document.getElementById('delete-zoo').addEventListener('click', function () {
    const zooNameToDelete = prompt('Enter the name of the zoo to delete:');
    if (zooNameToDelete) {
        deleteZoo(zooNameToDelete);
    }
});

document.getElementById('search-by-name').addEventListener('click', function () {
    const searchKeyword = document.getElementById('search-zoo').value.trim().toLowerCase();
    const filteredZoos = filterAndSortZoos(searchKeyword);
    calculateTotalVisitors(filteredZoos); // Calculate total for searched zoos
});

document.getElementById('sort-by-visitors').addEventListener('click', function () {
    const searchKeyword = document.getElementById('search-zoo').value.trim().toLowerCase();
    const filteredZoos = filterAndSortZoos(searchKeyword);
    calculateTotalVisitors(filteredZoos); // Calculate total for searched zoos
});

document.getElementById('double-visitors').addEventListener('click', function () {
    doubleVisitorsToZoos();
});

document.getElementById('calculate-total-visitors').addEventListener('click', function () {
    calculateTotalVisitors(filteredZoos);
});


updateDOM(zoos);