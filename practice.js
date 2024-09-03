
const locationDropdown = document.getElementById('location-dropdown');
const summaryContainer = document.querySelector('.summaryContainer');
const addLocationBtn = document.getElementById('add-location-btn');
const locationList = document.getElementById('location-list');
const historyDropdown = document.getElementById('history-dropdown');
const popup = document.getElementById('summary-popup');
const locationSummary = document.getElementById('location-summary');
const confirmViewMapBtn = document.getElementById('confirm-view-map-btn');
const mapIframe = document.getElementById('map-iframe');
const closePopupBtn = document.querySelector('.close');

let addedLocations = [];

const locationMap = {
    "Victoria Memorial": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235834.64277711377!2d88.05416668671876!3d22.5448082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e0!3m2!1sen!2sus!4v1725299617549!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
    "Eco Park": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235834.92963925545!2d88.05347846476461!3d22.54464031743774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027544e22a5b6f%3A0xf22acb90ceebe765!2sEco%20Park!5e0!3m2!1sen!2sus!4v1725299803903!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
    "Maidan": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117877.34071220542!2d88.33216469999999!3d22.591558499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f2409843d9%3A0x79c5834e270f0de2!2sHowrah%20Maidan!5e0!3m2!1sen!2sus!4v1725300014115!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
    "Nehru": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117899.98696625751!2d88.20704624335939!3d22.565089000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7982b3d57%3A0x8d1c53365d018b76!2z4Kaq4Kaj4KeN4Kah4Ka_4KakIOCmnOCmk-CmueCmsOCmsuCmvuCmsiDgpqjgp4fgprngprDgp4Eg4KaJ4Kam4KeN4Kav4Ka-4KaoIFBhbmRpdCBKYXdhaGFybGFsIE5laHJ1IFBhcms!5e0!3m2!1sen!2sus!4v1725300217040!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
    "Central Park": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.066385672407!2d-73.9681636892325!3d40.78255467126369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1725300280713!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
};

// addLocationBtn.addEventListener('click', () => {
//     const selectedLocation = locationDropdown.value;

//     // Add to history dropdown
//     const newHistoryOption = document.createElement('option');
//     newHistoryOption.value = selectedLocation;
//     newHistoryOption.textContent = selectedLocation;
//     historyDropdown.appendChild(newHistoryOption);

//     // Add to list
//     const newListItem = document.createElement('li');
//     newListItem.textContent = selectedLocation;
//     locationList.appendChild(newListItem);

//     // Show popup
//     locationSummary.textContent = `You added ${selectedLocation}. Do you want to view it on the map?`;

//     popup.classList.add('show');
// });

function addLocationToList(name){
    if(addedLocations.length > 15){
        return;
    }
    if(addedLocations.includes(name)){
        return;
    }
    addedLocations.push(name);

    let tempDiv = document.createElement('div');
    tempDiv.classList.add('tempDiv');
    summaryContainer.append(tempDiv);


    let tempElement = document.createElement('div');
    tempElement.textContent = name;
    tempDiv.append(tempElement);
    tempElement.classList.add('summaryElement');

    let tempName = document.createElement('option');
    locationDropdown.append(tempName);
    tempName.textContent = name;
    tempName.setAttribute('value', `${name}`);

    let tempDelBtn = document.createElement('div');
    tempDiv.append(tempDelBtn);
    tempDelBtn.classList.add('delBtn');
    tempDelBtn.addEventListener('click', (event) => {
        tempDiv.removeChild(tempElement);
        addedLocations.pop(tempName.textContent);
        locationDropdown.removeChild(tempName);
        tempDiv.removeChild(tempDelBtn);
        summaryContainer.removeChild(tempDiv);
    });

}
addLocationToList('Victoria Memorial'); 
addLocationToList('Eco Park');
addLocationToList('Maidan');
addLocationToList('Nehru');
addLocationToList('Central Park');
confirmViewMapBtn.addEventListener('click', () => {
    const selectedLocation = locationDropdown.value;
    console.log(locationDropdown.value);
    mapIframe.src = locationMap[selectedLocation];
    popup.classList.remove('show');
});

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

window.onclick = function(event) {
    if (event.target == popup) {
        popup.classList.remove('show');
    }
};

// View location from history dropdown
// historyDropdown.addEventListener('change', (event) => {
//     const selectedLocation = event.target.value;
//     mapIframe.src = locationMap[selectedLocation];
// });