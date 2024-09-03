function goToHP() {
    window.history.back();
    // window.location.href = 'SR.html'; // Replace 'page2.html' with the path to your second page
}
document.addEventListener('DOMContentLoaded', () => {


    let outsideContainer = document.getElementById('outsideContainer');
    let tempContainer;
    let tempImage;
    let tempElement;
    let noOfParks = 5;
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
    let summaryPopup = document.querySelector('.round');
    let summaryCloseBtn = document.querySelector('.summaryCloseBtn');
    let popupBg = document.querySelector('.popupBg');
    let addedLocations = [];


    tempContainer = document.createElement('div');
    outsideContainer.append(tempContainer);
    tempContainer.classList.add('containerr');

    tempImage = document.createElement('img');
    tempImage.src = "CE_Pics/whiteBlur.png";
    tempContainer.append(tempImage);
    tempImage.classList.add('whiteBlur');

    let container = document.querySelectorAll('.containerr');
    let parkImageUrls = ['CE_Pics2/bookfair.avif', 'CE_Pics2/durga puja fair.avif', 'CE_Pics2/kolkatainternationalfilmfestival.webp', 'CE_Pics2/cristmasfair.png', 'CE_Pics2/art.webp'];
    let startingPrices = ['0', '20', '50', '50', '75'];
    let parkStatus = ['Open', 'Open', 'Open', 'Closed', 'Open'];


    //creating FOOD carousel-------------------------
    let tempCarousel2 = document.createElement('div');
    container[0].append(tempCarousel2);
    tempCarousel2.classList.add('sliderContainer');

    //Creating Left & Right buttons
    let Lbtn2 = document.createElement('button');
    tempCarousel2.append(Lbtn2);
    Lbtn2.textContent = '<';
    Lbtn2.classList.add('leftBtn');
    let Rbtn2 = document.createElement('button');
    tempCarousel2.append(Rbtn2);
    Rbtn2.textContent = '>';
    Rbtn2.classList.add('rightBtn');

    let dummyElement2 = document.createElement('div');
    tempCarousel2.append(dummyElement2);
    dummyElement2.classList.add('dummyElement');

    //Now creating FOOD elements
    let parkNames = ['Book Fair', 'Durga Puja Fair', 'KIFF', 'Christmas Fair', 'Art Fair'];


    for (let i = 1; i <= noOfParks; i++) {
        tempElement = document.createElement('div');
        tempCarousel2.append(tempElement);
        tempElement.classList.add('element');
        let tempText = document.createElement('p');
        tempElement.append(tempText);
        tempText.classList.add('heading2');
        tempText.textContent = `${parkNames[i-1]}`;

        let tempElementImageContainer = document.createElement('div');
        tempElement.append(tempElementImageContainer);
        tempElementImageContainer.classList.add('fairElementImageContainer');
        let tempElementBox = document.createElement('div');
        tempElementImageContainer.append(tempElementBox);
        tempElementBox.classList.add('fairElementBox');
        tempElementBox.style.backgroundImage = `url('${parkImageUrls[i - 1]}')`;

        let tempText2 = document.createElement('p');
        tempElement.append(tempText2);
        tempText2.classList.add('heading3');
        tempText2.textContent = `Starting from ${startingPrices[i - 1]} /-`;

        let tempStatus = document.createElement('p');
        tempElement.append(tempStatus);
        tempStatus.classList.add('heading4');
        tempStatus.textContent = `${parkStatus[i - 1]}`;
        parkStatus[i - 1] == 'Open' ? tempStatus.style.color = 'white' : tempStatus.style.color = 'red'
    }



    let dummyElementR2 = document.createElement('div');
    tempCarousel2.append(dummyElementR2);
    dummyElementR2.classList.add('dummyElementRight');




    function showMapPopup(name){
        let fetchedLocationsArray = JSON.parse(sessionStorage.getItem('addedLocationsArray'));
        fetchedLocationsArray.push(name);
        sessionStorage.setItem('addedLocationsArray', JSON.stringify(fetchedLocationsArray));

        locationSummary.textContent = `You added ${name}. Click to view`;
        popup.classList.add('show');
    }

    popup.addEventListener('click', () => {
        let fetchedLocationsArray = JSON.parse(sessionStorage.getItem('addedLocationsArray'));
        fetchedLocationsArray.forEach( element => {
            addLocationToList(element);
            console.log(element);
        });

        summaryPopup.style.display = 'block';
        popupBg.style.display = 'block';

        popup.classList.remove('show');

    });

    closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    summaryCloseBtn.addEventListener('click', () => {
        summaryPopup.style.display = 'none';
        popupBg.style.display = 'none';

    });

    














    const locationMap = {
        "Victoria Memorial": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235834.64277711377!2d88.05416668671876!3d22.5448082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e0!3m2!1sen!2sus!4v1725299617549!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Eco Park": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235834.92963925545!2d88.05347846476461!3d22.54464031743774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027544e22a5b6f%3A0xf22acb90ceebe765!2sEco%20Park!5e0!3m2!1sen!2sus!4v1725299803903!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Maidan": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117877.34071220542!2d88.33216469999999!3d22.591558499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f2409843d9%3A0x79c5834e270f0de2!2sHowrah%20Maidan!5e0!3m2!1sen!2sus!4v1725300014115!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Nehru": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117899.98696625751!2d88.20704624335939!3d22.565089000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7982b3d57%3A0x8d1c53365d018b76!2z4Kaq4Kaj4KeN4Kah4Ka_4KakIOCmnOCmk-CmueCmsOCmsuCmvuCmsiDgpqjgp4fgprngprDgp4Eg4KaJ4Kam4KeN4Kav4Ka-4KaoIFBhbmRpdCBKYXdhaGFybGFsIE5laHJ1IFBhcms!5e0!3m2!1sen!2sus!4v1725300217040!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Central Park": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.066385672407!2d-73.9681636892325!3d40.78255467126369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1725300280713!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        


        "South City Mall": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0672047205476!2d88.35892050985093!3d22.501661579457032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270d861b6d22b%3A0xee3d107a198d3cdf!2sSouth%20City%20Mall!5e0!3m2!1sen!2sin!4v1725388646865!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Axis Mall": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.989065083981!2d88.45569768885497!3d22.579512300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753d8031edb9%3A0xfe16ed8c3cfa592f!2sAxis%20Mall!5e0!3m2!1sen!2sin!4v1725388736410!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Acropolis Mall": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7006702624885!2d88.39069460985142!3d22.51541112944715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027152eb607059%3A0x265403909555d32c!2sAcropolis%20Mall!5e0!3m2!1sen!2sin!4v1725388803257!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Quest Mall": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.072629962261!2d88.3631735098523!3d22.538951879430225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dfad4bf901%3A0xfbbe370e3a5a4dc8!2sQuest%20Mall!5e0!3m2!1sen!2sin!4v1725388918608!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "City Centre Mall": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29470.07176489194!2d88.37219731083984!3d22.588116400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275e77d80e877%3A0x110955b936be866a!2sCity%20Centre%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1725389014944!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,



        "Book Fair": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29470.07232691723!2d88.37211145555715!3d22.58811377344286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c8571262a3%3A0x2ff53496a63046e0!2sSalt%20Lake%20Book%20Fair%20Ground!5e0!3m2!1sen!2sin!4v1725389583520!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Durga Puja Fair": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235929.63189147649!2d88.17116698252296!3d22.489152053062433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275eb864f7669%3A0x8e827e0dbcb5d4b!2sCF%20Block%20Residents&#39;%20Association%20Durga%20Puja%20Pandal!5e0!3m2!1sen!2sin!4v1725390140280!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "KIFF": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.103437202114!2d88.34688150985228!3d22.537797679431083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773db872fd03%3A0xdacd7270b34ca6dd!2sKolkata%20International%20Film%20Festival!5e0!3m2!1sen!2sin!4v1725389735394!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Christmas Fair": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235929.06060843528!2d88.17254342770624!3d22.489487170252946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275e321747649%3A0x1d9baac988fe6951!2sChristmas%20Carnival%20At%20Sreebhumi!5e0!3m2!1sen!2sin!4v1725389789200!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
        "Art Fair": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235929.3462518005!2d88.1718552051156!3d22.48931961116734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bee22524295%3A0x8a5f63cf2962458d!2sBehala%20Art%20Fest!5e0!3m2!1sen!2sin!4v1725389868784!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`,
    };
    
    
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
    
    
    
    confirmViewMapBtn.addEventListener('click', () => {
        const selectedLocation = locationDropdown.value;
        console.log(locationDropdown.value);
        mapIframe.src = locationMap[selectedLocation];
        popup.classList.remove('show');
    });
    
    
























    //Scrolling

    let carousels = document.querySelectorAll('.sliderContainer');
    let leftBtns = document.querySelectorAll('.leftBtn');
    let rightBtns = document.querySelectorAll('.rightBtn');
    let parkHeading = document.getElementById('parkHeading');
    let parkDetail = document.getElementById('parkDetail');
    let addButton = document.querySelector('.add-button');

    // let parkNames = ['Victoria Memorial', 'Biswa Bangla', 'Hawrah Bridge', 'Indian Museum', 'Princep Ghat'];
    let tempIndex = 0;


    carousels.forEach((carousel, index) => {
        let leftBtn = leftBtns[index];
        let rightBtn = rightBtns[index];
        let items = carousel.querySelectorAll('.element');
        console.log(items.length);

        addButton.addEventListener('click', () => showMapPopup(parkNames[tempIndex]));

        parkHeading.textContent = parkNames[tempIndex];
         parkDetail.textContent = `Details: ${parkNames[tempIndex]} is an annual event renowned for its vibrant atmosphere and diverse offerings. Held in a picturesque location, the fair transforms into a bustling hub of excitement and joy, attracting visitors from all walks of life.

The fair is a sensory delight, featuring a variety of attractions to engage and entertain. Thrilling carnival rides, from dizzying roller coasters to classic carousels, offer exhilarating experiences for all ages. The fairgrounds are filled with colorful booths, each offering games and prizes, providing endless opportunities for fun and laughter.

Culinary delights abound at ${parkNames[tempIndex]}. A diverse selection of food vendors caters to every taste, from savory street food to sweet treats. Visitors can savor gourmet burgers, artisanal pizzas, and exotic dishes, along with classic fair favorites like cotton candy and funnel cakes. The fair’s food court is a haven for food enthusiasts, offering a culinary journey that satisfies every craving.

Art and craftsmanship are celebrated at ${parkNames[tempIndex]}, with a dedicated section showcasing local artisans and their creations. From handmade jewelry to unique art pieces, the fair offers a range of beautiful, handcrafted items perfect for souvenirs or gifts.

${parkNames[tempIndex]} also embraces cultural diversity through live performances and entertainment. The stage hosts a variety of acts, including music, dance, and theatrical performances, highlighting the rich cultural tapestry of the community. These performances add a dynamic element to the fair, ensuring there’s always something captivating to enjoy.

Overall, ${parkNames[tempIndex]} is a celebration of joy, community, and culture, offering an unforgettable experience for all who attend.`



        if (leftBtn && rightBtn && carousel) { // Check if elements exist
            leftBtn.addEventListener('click', () => {

                console.log('Left button clicked');
                if (carousel.scrollLeft === 0) {
                    // If at the start, go to the end
                    carousel.scrollLeft = carousel.scrollWidth;
                } else {
                    carousel.scrollBy({
                        left: -(carousel.offsetWidth / 2) + 118,
                        behavior: 'smooth',
                    });
                }

                tempIndex == 0 ? tempIndex = noOfParks - 1 : tempIndex--;
                parkHeading.textContent = parkNames[tempIndex];

                 parkDetail.textContent = `Details: ${parkNames[tempIndex]} is an annual event renowned for its vibrant atmosphere and diverse offerings. Held in a picturesque location, the fair transforms into a bustling hub of excitement and joy, attracting visitors from all walks of life.

The fair is a sensory delight, featuring a variety of attractions to engage and entertain. Thrilling carnival rides, from dizzying roller coasters to classic carousels, offer exhilarating experiences for all ages. The fairgrounds are filled with colorful booths, each offering games and prizes, providing endless opportunities for fun and laughter.

Culinary delights abound at ${parkNames[tempIndex]}. A diverse selection of food vendors caters to every taste, from savory street food to sweet treats. Visitors can savor gourmet burgers, artisanal pizzas, and exotic dishes, along with classic fair favorites like cotton candy and funnel cakes. The fair’s food court is a haven for food enthusiasts, offering a culinary journey that satisfies every craving.

Art and craftsmanship are celebrated at ${parkNames[tempIndex]}, with a dedicated section showcasing local artisans and their creations. From handmade jewelry to unique art pieces, the fair offers a range of beautiful, handcrafted items perfect for souvenirs or gifts.

${parkNames[tempIndex]} also embraces cultural diversity through live performances and entertainment. The stage hosts a variety of acts, including music, dance, and theatrical performances, highlighting the rich cultural tapestry of the community. These performances add a dynamic element to the fair, ensuring there’s always something captivating to enjoy.

Overall, ${parkNames[tempIndex]} is a celebration of joy, community, and culture, offering an unforgettable experience for all who attend.`;




            });

            rightBtn.addEventListener('click', () => {
                console.log('Right button clicked');
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                    // If at the end, go to the start
                    carousel.scrollLeft = 0;
                } else {
                    carousel.scrollBy({
                        left: (carousel.offsetWidth / 2) - 118,
                        behavior: 'smooth',
                    });
                }
                tempIndex == noOfParks - 1 ? tempIndex = 0 : tempIndex++;
                parkHeading.textContent = parkNames[tempIndex];

                 parkDetail.textContent = `Details: ${parkNames[tempIndex]} is an annual event renowned for its vibrant atmosphere and diverse offerings. Held in a picturesque location, the fair transforms into a bustling hub of excitement and joy, attracting visitors from all walks of life.

The fair is a sensory delight, featuring a variety of attractions to engage and entertain. Thrilling carnival rides, from dizzying roller coasters to classic carousels, offer exhilarating experiences for all ages. The fairgrounds are filled with colorful booths, each offering games and prizes, providing endless opportunities for fun and laughter.

Culinary delights abound at ${parkNames[tempIndex]}. A diverse selection of food vendors caters to every taste, from savory street food to sweet treats. Visitors can savor gourmet burgers, artisanal pizzas, and exotic dishes, along with classic fair favorites like cotton candy and funnel cakes. The fair’s food court is a haven for food enthusiasts, offering a culinary journey that satisfies every craving.

Art and craftsmanship are celebrated at ${parkNames[tempIndex]}, with a dedicated section showcasing local artisans and their creations. From handmade jewelry to unique art pieces, the fair offers a range of beautiful, handcrafted items perfect for souvenirs or gifts.

${parkNames[tempIndex]} also embraces cultural diversity through live performances and entertainment. The stage hosts a variety of acts, including music, dance, and theatrical performances, highlighting the rich cultural tapestry of the community. These performances add a dynamic element to the fair, ensuring there’s always something captivating to enjoy.

Overall, ${parkNames[tempIndex]} is a celebration of joy, community, and culture, offering an unforgettable experience for all who attend.`;


            });

        } else {
            console.log('Element not found', leftBtn, rightBtn, carousel);
        }
    });



    let images = document.querySelectorAll(".images");
    let names = document.querySelectorAll(".names");
    let reviews = document.querySelectorAll(".reviews");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let secondaryStar = document.querySelector('.star2');

    let imageUrls = ['CE_Pics/img1.jpg', 'CE_Pics/img2.jpg', 'CE_Pics/img3.jpg', 'CE_Pics/img4.jpg'];
    let reviewStars = ['★★★★', '★★★', '★★★★', '★★★★★'];

    next.onclick = () => { nextReview() };
    prev.onclick = () => { prevReview() };
    let index = 0;
    let intervalID;

    initializeReview();
    function initializeReview() {

        images[0].classList.add("selectedImage");
        images[0].style.backgroundImage = `url(${imageUrls[0]})`;
        names[0].classList.add("selectedName");
        reviews[0].classList.add("selectedReview");
        secondaryStar.textContent = reviewStars[0];

        intervalID = setInterval(() => {
            nextReview()
        }, 5000);
    }
    function showReview() {
        images[index].classList.add("selectedImage");
        images[index].style.backgroundImage = `url(${imageUrls[index]})`;
        names[index].classList.add("selectedName");
        reviews[index].classList.add("selectedReview");
        secondaryStar.textContent = reviewStars[index];

    }
    function nextReview() {
        images.forEach(image => image.classList.remove("selectedImage"));
        names.forEach(image => image.classList.remove("selectedName"));
        reviews.forEach(image => image.classList.remove("selectedReview"));
        if (index == images.length - 1) {
            index = -1;
        }
        index++;
        showReview();
        clearInterval(intervalID);
        intervalID = setInterval(() => {
            nextReview()
        }, 5000);

    }
    function prevReview() {
        images.forEach(image => image.classList.remove("selectedImage"));
        names.forEach(image => image.classList.remove("selectedName"));
        reviews.forEach(image => image.classList.remove("selectedReview"));
        if (index == 0) {
            index = images.length;
        }
        index--;
        showReview();
        clearInterval(intervalID);
        intervalID = setInterval(() => {
            nextReview()
        }, 5000);

    }

});


