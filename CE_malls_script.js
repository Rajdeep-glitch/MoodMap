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

    tempContainer = document.createElement('div');
    outsideContainer.append(tempContainer);
    tempContainer.classList.add('containerr');

    tempImage = document.createElement('img');
    tempImage.src = "CE_Pics/whiteBlur.png";
    tempContainer.append(tempImage);
    tempImage.classList.add('whiteBlur');

    let container = document.querySelectorAll('.containerr');
    let parkImageUrls = ['CE_Pics2/southcitymall.jpg', 'CE_Pics2/axismall.jpeg', 'CE_Pics2/acropolismall.webp', 'CE_Pics2/Questmall.webp', 'CE_Pics2/citycenter.jpg'];
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
    let parkNames = ['South City Mall', 'Axis Mall', 'Acropolis Mall', 'Quest Mall', 'City Center Mall'];


    for (let i = 1; i <= noOfParks; i++) {
        tempElement = document.createElement('div');
        tempCarousel2.append(tempElement);
        tempElement.classList.add('element');
        let tempText = document.createElement('p');
        tempElement.append(tempText);
        tempText.classList.add('heading2');
        tempText.textContent = `${parkNames[i - 1]}`;

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



    //Scrolling

    let carousels = document.querySelectorAll('.sliderContainer');
    let leftBtns = document.querySelectorAll('.leftBtn');
    let rightBtns = document.querySelectorAll('.rightBtn');
    let parkHeading = document.getElementById('parkHeading');
    let parkDetail = document.getElementById('parkDetail');
    // let parkNames = ['Victoria Memorial', 'Biswa Bangla', 'Hawrah Bridge', 'Indian Museum', 'Princep Ghat'];
    let tempIndex = 0;


    carousels.forEach((carousel, index) => {
        let leftBtn = leftBtns[index];
        let rightBtn = rightBtns[index];
        let items = carousel.querySelectorAll('.element');
        console.log(items.length);

        parkHeading.textContent = parkNames[tempIndex];
         parkDetail.textContent = `Details : Step into ${parkNames[tempIndex]}, where your shopping, dining, and entertainment desires come to life. Nestled in the heart of the city, ${parkNames[tempIndex]} is not just a mall but a vibrant destination designed to cater to all your needs. From the moment you enter, you’ll be greeted by an expansive array of retail options. Browse through an impressive selection of high-end boutiques, popular retail chains, and specialty stores. Whether you're searching for the latest fashion trends, cutting-edge electronics, or unique gifts, ${parkNames[tempIndex]} offers a shopping experience tailored to every taste and budget.

But ${parkNames[tempIndex]} is more than just shopping. It’s a culinary delight with diverse dining options ranging from upscale restaurants to cozy cafés and casual eateries. Savor gourmet meals, indulge in quick bites, or enjoy a relaxing coffee break in our comfortable seating areas. Our dining options are designed to please every palate and occasion.

For family fun and entertainment, ${parkNames[tempIndex]} has you covered. Catch the latest blockbuster at our state-of-the-art cinema, let the kids enjoy the vibrant play areas, or explore our seasonal events and promotions. We provide a variety of activities to ensure every visit is memorable.

Convenience is key at ${parkNames[tempIndex]}. With ample parking, easy access via public transportation, and a welcoming atmosphere, your visit will be hassle-free. Whether you’re here for a shopping spree, a delightful meal, or a fun day out with family, ${parkNames[tempIndex]} offers everything you need for a perfect day.

Experience the best of shopping, dining, and entertainment at ${parkNames[tempIndex]} – where every visit is an experience to remember.`



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

                 parkDetail.textContent = `Details : Step into ${parkNames[tempIndex]}, where your shopping, dining, and entertainment desires come to life. Nestled in the heart of the city, ${parkNames[tempIndex]} is not just a mall but a vibrant destination designed to cater to all your needs. From the moment you enter, you’ll be greeted by an expansive array of retail options. Browse through an impressive selection of high-end boutiques, popular retail chains, and specialty stores. Whether you're searching for the latest fashion trends, cutting-edge electronics, or unique gifts, ${parkNames[tempIndex]} offers a shopping experience tailored to every taste and budget.

But ${parkNames[tempIndex]} is more than just shopping. It’s a culinary delight with diverse dining options ranging from upscale restaurants to cozy cafés and casual eateries. Savor gourmet meals, indulge in quick bites, or enjoy a relaxing coffee break in our comfortable seating areas. Our dining options are designed to please every palate and occasion.

For family fun and entertainment, ${parkNames[tempIndex]} has you covered. Catch the latest blockbuster at our state-of-the-art cinema, let the kids enjoy the vibrant play areas, or explore our seasonal events and promotions. We provide a variety of activities to ensure every visit is memorable.

Convenience is key at ${parkNames[tempIndex]}. With ample parking, easy access via public transportation, and a welcoming atmosphere, your visit will be hassle-free. Whether you’re here for a shopping spree, a delightful meal, or a fun day out with family, ${parkNames[tempIndex]} offers everything you need for a perfect day.

Experience the best of shopping, dining, and entertainment at ${parkNames[tempIndex]} – where every visit is an experience to remember.`




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

                parkDetail.textContent = `Details : Step into ${parkNames[tempIndex]}, where your shopping, dining, and entertainment desires come to life. Nestled in the heart of the city, ${parkNames[tempIndex]} is not just a mall but a vibrant destination designed to cater to all your needs. From the moment you enter, you’ll be greeted by an expansive array of retail options. Browse through an impressive selection of high-end boutiques, popular retail chains, and specialty stores. Whether you're searching for the latest fashion trends, cutting-edge electronics, or unique gifts, ${parkNames[tempIndex]} offers a shopping experience tailored to every taste and budget.

But ${parkNames[tempIndex]} is more than just shopping. It’s a culinary delight with diverse dining options ranging from upscale restaurants to cozy cafés and casual eateries. Savor gourmet meals, indulge in quick bites, or enjoy a relaxing coffee break in our comfortable seating areas. Our dining options are designed to please every palate and occasion.

For family fun and entertainment, ${parkNames[tempIndex]} has you covered. Catch the latest blockbuster at our state-of-the-art cinema, let the kids enjoy the vibrant play areas, or explore our seasonal events and promotions. We provide a variety of activities to ensure every visit is memorable.

Convenience is key at ${parkNames[tempIndex]}. With ample parking, easy access via public transportation, and a welcoming atmosphere, your visit will be hassle-free. Whether you’re here for a shopping spree, a delightful meal, or a fun day out with family, ${parkNames[tempIndex]} offers everything you need for a perfect day.

Experience the best of shopping, dining, and entertainment at ${parkNames[tempIndex]} – where every visit is an experience to remember.`


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


