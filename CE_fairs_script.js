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
    let parkNames = ['Book Fair', 'Durga Puja Fair', 'KIFF', 'Cristmas Fair', 'Art fair'];


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


