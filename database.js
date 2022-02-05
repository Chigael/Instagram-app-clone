const request = indexedDB.open('instagram', 4);

request.onsuccess = () => {
    const database = request.result
    console.log('success creting or requesting database')
    console.log(request);

    // const transaction = database.transaction(['bio'], 'readwrite');
    // const store = transaction.objectStore('bio');
    // store.add({name: 'Beny Lee', description:`Hey I'm Benzy`})
}

// ===creaating object stores for various item====
request.onupgradeneeded = () => {
    const database = request.result
    console.log();
    //deleting the Object store
    // database.deleteObjectStore('bio');
    // database.deleteObjectStor('gallery')  

    //Creating the Object store
    database.createObjectStore('bio');
    database.createObjectStore('gallery');

}

request.onerror = () => {
    console.log('error pm creating database')
}

// This section shows the function for adding entryies to the database

const addEntryToDb = (storeName, entry) => {
    const database = request.result
    const transaction = database.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.add(entry)

    // section that show when the database transaction is complete
    transaction.oncomplete = () => alert(`entry added th ${storeName}`) 

    // this shows an error when thendatabase transaction fails
    transaction.onerror = (event) =>{
        console.log(`error adding entry to ${storeName}`);

        // this targets the event and show what error it is
        event.target.error
    } 
}


export { request, addEntryToDb }