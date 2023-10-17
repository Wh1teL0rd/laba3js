class Zoo {
    constructor(id, name, annualVisitors, numAnimals) {
        this.id = id;
        this.name = name;
        this.annualVisitors = annualVisitors;
        this.numAnimals = numAnimals;
    }
}

const zooForm = document.getElementById('zoo-form');
const zooList = document.getElementById('zoo-list');

let zoos = [];

zooForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const zooName = document.getElementById('zoo-name').value;
    const annualVisitors = parseInt(document.getElementById('annual-visitors').value);
    const numAnimals = parseInt(document.getElementById('num-animals').value);

    if (zooName && !isNaN(annualVisitors) && !isNaN(numAnimals) && annualVisitors >= 0 && numAnimals >= 0) {
        const newZoo = new Zoo(null, zooName, annualVisitors, numAnimals);

        axios.post('/zoos', newZoo)
            .then(response => {
                newZoo.id = response.data.id;
                addZoo(newZoo);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        document.getElementById('zoo-name').value = '';
        document.getElementById('annual-visitors').value = '';
        document.getElementById('num-animals').value = '';
    } else {
        alert('Please enter valid data, and ensure that the values are not negative.');
    }
});

function addZoo(zoo) {
    zoos.push(zoo);
    updateDOM();
}

function updateDOM(zooArray = zoos) {
    zooList.innerHTML = '';

    zooArray.forEach((zoo) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${zoo.name}</strong> - Annual Visitors: ${zoo.annualVisitors}, Number of Animals: ${zoo.numAnimals}`;

        const updateButton = document.createElement('button');
        updateButton.innerText = 'Update';
        updateButton.setAttribute('data-toggle', 'modal');
        updateButton.setAttribute('data-target', '#updateModal');
        updateButton.addEventListener('click', function () {
            document.getElementById('update-zoo-id').value = zoo.id; // Set the zoo ID
            document.getElementById('update-zoo-name').value = zoo.name;
            document.getElementById('update-annual-visitors').value = zoo.annualVisitors;
            document.getElementById('update-num-animals').value = zoo.numAnimals;
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('data-toggle', 'modal');
        deleteButton.setAttribute('data-target', '#deleteModal');
        deleteButton.addEventListener('click', function () {
            document.getElementById('delete-zoo-name').innerText = zoo.name;
        });

        listItem.appendChild(updateButton);
        listItem.appendChild(deleteButton);

        zooList.appendChild(listItem);
    });
}

function updateZoo(updatedZoo) {
    const zooIndex = zoos.findIndex((z) => z.id === updatedZoo.id);

    if (zooIndex !== -1) {
        axios.put(`/zoos/${updatedZoo.id}`, updatedZoo)
            .then(response => {
                zoos[zooIndex] = updatedZoo;
                updateDOM();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

function deleteZoo(zooId) {
    const zooIndex = zoos.findIndex((z) => z.id === zooId);

    if (zooIndex !== -1) {
        axios.delete(`/zoos/${zooId}`)
            .then(response => {
                zoos.splice(zooIndex, 1);
                updateDOM();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

function sortZoosByVisitors() {
    zoos.sort((a, b) => a.annualVisitors - b.annualVisitors);
    updateDOM();
}

function calculateTotalVisitors() {
    const totalVisitors = zoos.reduce((acc, zoo) => acc + zoo.annualVisitors, 0);
    alert(`Total Annual Visitors for All Zoos: ${totalVisitors}`);
}

function doubleVisitorsToZoos() {
    zoos = zoos.map((zoo) => {
        return { ...zoo, annualVisitors: zoo.annualVisitors * 2 };
    });
    updateDOM();
}

document.getElementById('update-zoo-submit').addEventListener('click', function () {
    const zooId = parseInt(document.getElementById('update-zoo-id').value);
    const zooName = document.getElementById('update-zoo-name').value;
    const annualVisitors = parseInt(document.getElementById('update-annual-visitors').value);
    const numAnimals = parseInt(document.getElementById('update-num-animals').value);

    if (!isNaN(zooId) && zooName && !isNaN(annualVisitors) && !isNaN(numAnimals) && annualVisitors >= 0 && numAnimals >= 0) {
        const updatedZoo = new Zoo(zooId, zooName, annualVisitors, numAnimals);
        updateZoo(updatedZoo);
        $('#updateModal').modal('hide');
    } else {
        alert('Please enter valid data, and ensure that the values are not negative.');
    }
});

document.getElementById('search-zoo-button').addEventListener('click', function () {
    const searchName = document.getElementById('search-zoo').value;
    
    if (searchName) {
        const results = zoos.filter((zoo) => zoo.name.toLowerCase().includes(searchName.toLowerCase()));
        
        if (results.length > 0) {
            updateDOM(results);
        } else {
            zooList.innerHTML = '<li>No matching zoos found.</li>';
        }
    } else {
        updateDOM();
    }
});

document.getElementById('delete-zoo-confirm').addEventListener('click', function () {
    const zooNameToDelete = document.getElementById('delete-zoo-name').innerText;
    deleteZoo(zooNameToDelete);
    $('#deleteModal').modal('hide');
});

document.getElementById('sort-zoos').addEventListener('click', function () {
    sortZoosByVisitors();
});

document.getElementById('calculate-total-visitors').addEventListener('click', function () {
    calculateTotalVisitors();
});

document.getElementById('double-visitors').addEventListener('click', function () {
    doubleVisitorsToZoos();
});
