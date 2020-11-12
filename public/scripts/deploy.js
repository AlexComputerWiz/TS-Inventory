// tells JS where to get the input from
const form = document.querySelector('#addDoc');

// adding document to collection
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Inventory').add({
        serialNumber: form.serialNumber.value,
        equipmentType: form.equipmentType.value,
        mid: form.mid.value,
        dba: form.dba.value,
        deploymentType: form.deploymentType.value,
        condition: form.condition.value,
        encryptionType: form.encryptionType.value,
        debitEncryption: form.debitEncryption.value
    });
    // clears fields after submission
    form.serialNumber.value = '';
    form.equipmentType.value = '';
    form.mid.value = '';
    form.dba.value = '';
    form.deploymentType.value = '';
    form.condition.value = '';
    form.encryptionType.value = '';
    form.debitEncryption.value = '';
})