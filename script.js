const places = {
    sadness: [
        { name: "Prinsep Ghat", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14743.04531533274!2d88.333537!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bd1e1e0ec5%3A0xdbc1f05d83db2bdf!2sPrinsep%20Ghat!5e0!3m2!1sen!2sus!4v1691381743793" },
        { name: "Dakshineswar Kali Temple", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.242536144705!2d88.33353721448405!3d22.65856071953728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d5a51c6f35%3A0xe2d79a55c32e56b4!2sDakshineswar%20Kali%20Temple!5e0!3m2!1sen!2sus!4v1691381743793" }
    ],
    refreshing: [
        { name: "Rabindra Sarobar Lake", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.262654264658!2d88.36885521448405!3d22.519718930239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277abf7799e97%3A0x5788c8ff9bdfb184!2sRabindra%20Sarobar!5e0!3m2!1sen!2sus!4v1691381743793" },
        { name: "Yoga Centers", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.262654264658!2d88.36389541448377!3d22.562629330239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e90730b8d9%3A0xc2a9e4e761c84c8!2sThe%20Yoga%20Center!5e0!3m2!1sen!2sus!4v1691381743793" }
    ],
    love: [
        { name: "Maidan", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.36768426495!2d88.34208231448373!3d22.550836430239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e90730b8d9%3A0xa099a99d55da53!2sMaidan!5e0!3m2!1sen!2sus!4v1691381743793" },
        { name: "Nandan", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.36768426495!2d88.36889531448373!3d22.558718930239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e90730b8d9%3A0x55e6b88d59389e8!2sNandan!5e0!3m2!1sen!2sus!4v1691381743793" }
    ],
    happiness: [
        { name: "Victoria Memorial", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2295297031616!2d88.35020631448405!3d22.544591930239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c0837b70a7%3A0xd0a8c09aa48d3e5f!2sVictoria%20Memorial!5e0!3m2!1sen!2sus!4v1691381743793" },
        { name: "Science City", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.36768426495!2d88.37055831448405!3d22.552620930239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c8b9d8f1ab%3A0x73823fc4a4d2b06!2sScience%20City!5e0!3m2!1sen!2sus!4v1691381743793" }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const mood = urlParams.get('mood');
    
    if (mood && places[mood]) {
        const placesList = document.getElementById('places-list');
        places[mood].forEach(place => {
            const button = document.createElement('button');
            button.classList.add('popupButtonElement');
            button.textContent = place.name;
            button.onclick = () => showMap(place.mapSrc);
            placesList.appendChild(button);
        });
    }
});

function showMap(src) {
    const mapPopup = document.getElementById('map-popup');
    const mapIframe = document.getElementById('map-iframe');
    mapIframe.src = src;
    mapPopup.style.display = 'block';
}

function closeMap() {
    const mapPopup = document.getElementById('map-popup');
    mapPopup.style.display = 'none';
}
