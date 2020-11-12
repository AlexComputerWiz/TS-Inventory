// tells JS where to render the data
const workbenchList = document.querySelector('#workbenchList');

// render workbench
function renderWorkbench(doc) {
    let tr = document.createElement('tr');
    let serialNumber = document.createElement('td');
    let equipmentType = document.createElement('td');
    let encryptionType = document.createElement('td');
    let deploymentType = document.createElement('td');
    let dba = document.createElement('td');

    tr.setAttribute('data-id', doc.id) // set TR ID to the doc ID for reference
    serialNumber.textContent = doc.data().serialNumber;
    equipmentType.textContent = doc.data().equipmentType;
    encryptionType.textContent = doc.data().encryptionType;
    deploymentType.textContent = doc.data().deploymentType;
    dba.textContent = doc.data().dba;

    // Convert nulls to Inventory & TouchSuite
    // if (deploymentType.textContent == "") {
    //     deploymentType.textContent = 'Inventory';
    // }

    // if (dba.textContent == "") {
    //     dba.textContent = 'TouchSuite';
    // }

    tr.appendChild(serialNumber);
    tr.appendChild(equipmentType);
    tr.appendChild(encryptionType);
    tr.appendChild(deploymentType);
    tr.appendChild(dba);

    workbenchList.appendChild(tr);
}

// render db to workbench
db.collection('Inventory').where("deploymentType", "==", "Testing").limit(10).get().then((snapshot) => {
    console.log(snapshot.dosc);
    snapshot.docs.forEach(doc => {
        renderWorkbench(doc);
    });
})