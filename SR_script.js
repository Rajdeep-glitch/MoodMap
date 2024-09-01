function goToHP() {
    window.location.href = 'index.html'; // Replace 'page2.html' with the path to your second page
}


document.addEventListener('DOMContentLoaded', () => {

    function clearDynamicElements() {
        // Select all elements with a specific class or attribute that were dynamically created
        const dynamicElements = document.querySelectorAll('.element'); // or use an attribute selector
        const dynamicElements2 = document.querySelectorAll('.sliderContainer'); // or use an attribute selector
        const dynamicElements3 = document.querySelectorAll('.container'); // or use an attribute selector
        
        // Remove each element
        dynamicElements.forEach(element => {
            element.remove();
        });
        dynamicElements2.forEach(element => {
            element.remove();
        });
        dynamicElements3.forEach(element => {
            element.remove();
        });
    }
    
    let time;
    let individualBudget;
    
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        time = params.get('timeAvail');
        individualBudget = params.get('budgetAvail');
        // Use var1 and var2 as needed in your logic

            // If the query parameters are found, store them in sessionStorage
        // if (time && individualBudget) {
        //     sessionStorage.setItem('timeAvail', time);
        //     sessionStorage.setItem('budgetAvail', individualBudget);
        // }
    }
    
    // Fetch and use the variables when the page loads
    getQueryParams();
    console.log(time);
    console.log(individualBudget);

    // Retrieve variables
    // time = sessionStorage.getItem('timeAvail');
    // individualBudget = sessionStorage.getItem('budgetAvail');

        // function addVariablesToForm(event, url) {
        //     event.preventDefault(); // Prevent the form from submitting normally
            
        //     let timeAvail = time; // Replace with your actual variable value
        //     let budgetAvail = individualBudget; // Replace with your actual variable value

        //     // Get the form's action URL
        //     const actionUrl = url;

        //     // Add variables as query parameters
        //     const urlWithParams = `${actionUrl}?timeAvail=${encodeURIComponent(timeAvail)}&budgetAvail=${encodeURIComponent(budgetAvail)}`;

        //     // Redirect to the new URL with query parameters
        //     // window.location.href = urlWithParams;
        //     window.location.replace(urlWithParams);
        // }
    



    let outsideContainer = document.getElementById('outsideContainer');
   let tempContainer;
   let tempImage;
   let containerNumber;
   let budgetContainerNumber;
   let fourthContainerRestaurantOnly = false;

    //input----------------------------------
    //location

    let headCount = 2;

    let foodIncluded = true;

    //Algorithm------------------------------

    //ACTUAL ALGORITHM--------------------------------------------------------



     // Initialize all activities as false
     let showPark = false;
     let showFair = false;
     let showMalls = false;
     let showRestaurants = false;
     let showDhabas = false;
     let showCafes = false;
     let showHistoricPlaces = false;
     let showTemples = false;
     containerNumber = 0;
     //let showHighEndRestaurants = false;  currently not considering
 
     // Budget-based evaluation
     if (individualBudget > 100 && individualBudget < 300) {
         showPark = true;
         showFair = true;
         showMalls = true;
         showRestaurants = true;
         showDhabas = true;
         showCafes = true;
         showHistoricPlaces = true;
         showTemples = true;
         budgetContainerNumber = 3;

     } else if (individualBudget >= 300 && individualBudget < 500) {
         showPark = true;
         showFair = true;
         showMalls = true;
         showRestaurants = true;
         showDhabas = true;
         showCafes = true;
         showHistoricPlaces = true;
         showTemples = true;
     } else if (individualBudget >= 500 && individualBudget < 800) {
         showPark = true;
         showFair = true;
         showMalls = true;
         showRestaurants = true;
         showDhabas = true;
         showCafes = true;
         showHistoricPlaces = true;
         showTemples = true;
     } else if (individualBudget >= 800) {
         showPark = true;
         showFair = true;
         showMalls = true;
         showDhabas = true;
         showCafes = true;
         showHistoricPlaces = true;
         showTemples = true;
         showRestaurants = true;
         //showHighEndRestaurants = true;
         // Standard restaurants not shown, only high-end
     } else if(individualBudget > 0 && individualBudget <=100){
        showPark = true;
         showFair = true;
         showMalls = true;
         showDhabas = true;
         showCafes = true;
         showRestaurants = true;
         budgetContainerNumber = 2;
         showHistoricPlaces = true;
         showTemples = true;
     }
     else if(individualBudget == 0){
        showPark = true;
        showFair = true;
        showMalls = true;
        showDhabas = false;
        showCafes = false;
        showRestaurants = false;
        budgetContainerNumber = 1;
        showHistoricPlaces = true;
        showTemples = true;
     }
     else {
         console.log("Invalid Budget");
         return; // Exit the function if the budget is too low
     }
 
     // Time-based evaluation
     if (time === 0) {
         window.alert("Time is zero, unable to show any activities.");
         // Set all activities to false
         showPark = false;
         showFair = false;
         showMalls = false;
         showRestaurants = false;
         showDhabas = false;
         showCafes = false;
         showHistoricPlaces = false;
         showTemples = false;
        containerNumber = 0;

         //showHighEndRestaurants = false;
     } else if (time >= 8) {
         // Show all activities already determined by the budget
        containerNumber = 4;
        fourthContainerRestaurantOnly = true;

     } else if (time < 8 && time >= 5) {
         // Show only the first three containers----------------------------------------------
         containerNumber = 3;

     } else if (time >= 3 && time < 5) {
         // Show first two activities and add historic places/temples if applicable
        //Show 2 containers (time consuming in 1 included)------------------------------------
         //showHighEndRestaurants = false;
         containerNumber = 3;
         if (showHistoricPlaces || showTemples) {
             showHistoricPlaces = true;
             showTemples = true;
         }
     } else if (time > 1 && time < 3) {
         // Show only the first two activities
         showHistoricPlaces = false;
         showTemples = false;
         containerNumber = 2;

        // showHighEndRestaurants = false;
     } else if (time <= 1) {
         // Show only the first activity
         showRestaurants = false;
         showDhabas = false;
         showCafes = false;
         showHistoricPlaces = false;
         showTemples = false;
         //showHighEndRestaurants = false;
         containerNumber = 1;

     }
 
     // Output the result (for example purposes)
     console.log({
         showPark,
         showFair,
         showMalls,
         showRestaurants,
         showDhabas,
         showCafes,
         showHistoricPlaces,
         showTemples
     });


    //ACTUAL ALGORITHM END--------------------------------------------------------




    if(foodIncluded){
        //if (individualBudget >= 800){
        containerNumber = containerNumber>budgetContainerNumber? budgetContainerNumber: containerNumber;

// Get the computed style to handle any CSS unit properly
let computedStyle = window.getComputedStyle(outsideContainer);
let currentHeightRem = computedStyle.height; // This returns the height in px

// Convert the height from px to rem
// Assuming a base font size of 16px for 1rem
let baseFontSizePx = 16; // Adjust if your base font size is different
let currentHeightPx = parseFloat(currentHeightRem);
let currentHeightRemValue = currentHeightPx / baseFontSizePx;

// Calculate the new height in rem
let additionalHeightRem = 22.5 * containerNumber;
let newHeightRem = currentHeightRemValue + additionalHeightRem;

// Set the new height with 'rem' unit
outsideContainer.style.height = newHeightRem + 'rem';




        for(let i = 1; i<=containerNumber; i++){

           tempContainer = document.createElement('div');
           outsideContainer.append(tempContainer);
           tempContainer.classList.add('container');

            tempImage = document.createElement('img');
            tempImage.src = "ShowResultPics/whiteBlur.png";
            tempContainer.append(tempImage);
            tempImage.classList.add('whiteBlur');
        }

        let container = document.querySelectorAll('.container');


            //creating Heading
        if(container[0]){
            
            let entertainmentHeading = document.createElement('div');
            container[0].append(entertainmentHeading);
            entertainmentHeading.textContent = "Entertainment";
            entertainmentHeading.classList.add('heading1');

            //creating ENTERTAINMENT carousel-------------------------
            let tempCarousel = document.createElement('div');
            container[0].append(tempCarousel);
            tempCarousel.classList.add('sliderContainer');

            //Creating Left & Right buttons
            let Lbtn = document.createElement('button');
            tempCarousel.append(Lbtn);
            Lbtn.textContent = '<';
            Lbtn.classList.add('leftBtn');
            let Rbtn = document.createElement('button');
            tempCarousel.append(Rbtn);
            Rbtn.textContent = '>';
            Rbtn.classList.add('rightBtn');

            let dummyElement = document.createElement('div');
            tempCarousel.append(dummyElement);
            dummyElement.classList.add('dummyElement');


            //Now creating ENTERTAINMENT elements---------
            if(showPark){
            let parkElement = document.createElement('div');
            tempCarousel.append(parkElement);
            parkElement.classList.add('element');
            parkElement.id = 'parkID';
                let parkText = document.createElement('p');
                parkElement.append(parkText);
                parkText.classList.add('heading2');
                parkText.textContent = 'Parks';
                let parkFooter = document.createElement('p');
                parkElement.append(parkFooter);
                parkFooter.classList.add('heading3');
                parkFooter.textContent = 'Starting from 0/-'; //${} for price

            let parkElementImageContainer = document.createElement('div');
            parkElement.append(parkElementImageContainer);
            parkElementImageContainer.classList.add('parkElementImageContainer');
            let parkElementBox1 = document.createElement('div');
            parkElementImageContainer.append(parkElementBox1);
            parkElementBox1.classList.add('parkElementBox1');
            let parkElementBox2 = document.createElement('div');
            parkElementImageContainer.append(parkElementBox2);
            parkElementBox2.classList.add('parkElementBox2');
            let parkElementBox3 = document.createElement('div');
            parkElementImageContainer.append(parkElementBox3);
            parkElementBox3.classList.add('parkElementBox3');

                
            }

            if(showMalls){
            let mallElement = document.createElement('div');
            tempCarousel.append(mallElement);
            mallElement.classList.add('element');
            mallElement.id = 'mallID';

                let mallText = document.createElement('p');
                mallElement.append(mallText);
                mallText.classList.add('heading2');
                mallText.textContent = 'Malls';
            
            let mallElementImageContainer = document.createElement('div');
            mallElement.append(mallElementImageContainer);
            mallElementImageContainer.classList.add('mallElementImageContainer');
            let mallElementBox1 = document.createElement('div');
            mallElementImageContainer.append(mallElementBox1);
            mallElementBox1.classList.add('mallElementBox1');
            let mallElementBox2 = document.createElement('div');
            mallElementImageContainer.append(mallElementBox2);
            mallElementBox2.classList.add('mallElementBox2');
            let mallElementBox3 = document.createElement('div');
            mallElementImageContainer.append(mallElementBox3);
            mallElementBox3.classList.add('mallElementBox3');
            }

            if(showFair){
            let fairElement = document.createElement('div');
            tempCarousel.append(fairElement);
            fairElement.classList.add('element');
            fairElement.id = 'fairID';

                let fairText = document.createElement('p');
                fairElement.append(fairText);
                fairText.classList.add('heading2');
                fairText.textContent = 'Fairs';
                let fairFooter = document.createElement('p');
                fairElement.append(fairFooter);
                fairFooter.classList.add('heading3');
                fairFooter.textContent = 'Starting from 0/-'; //${} for price
                //If 1 fair
            let fairElementImageContainer = document.createElement('div');
            fairElement.append(fairElementImageContainer);
            fairElementImageContainer.classList.add('fairElementImageContainer');
            let fairElementBox = document.createElement('div');
            fairElementImageContainer.append(fairElementBox);
            fairElementBox.classList.add('fairElementBox');
            }

            let dummyElementR = document.createElement('div');
            tempCarousel.append(dummyElementR);
            dummyElementR.classList.add('dummyElementRight');
        }


            //creating Heading 2
        if(container[1]){

            let foodHeading = document.createElement('div');
            container[1].append(foodHeading);
            foodHeading.textContent = "Food";
            foodHeading.classList.add('heading1');

            //creating FOOD carousel-------------------------
            let tempCarousel2 = document.createElement('div');
            container[1].append(tempCarousel2);
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
            if(showDhabas){
            let dhabaElement = document.createElement('div');
            tempCarousel2.append(dhabaElement);
            dhabaElement.classList.add('element');
                let dhabaText = document.createElement('p');
                dhabaElement.append(dhabaText);
                dhabaText.classList.add('heading2');
                dhabaText.textContent = 'Dhabas';
            let dhabaElementImageContainer = document.createElement('div');
            dhabaElement.append(dhabaElementImageContainer);
            dhabaElementImageContainer.classList.add('dhabaElementImageContainer');
            let dhabaElementBox1 = document.createElement('div');
            dhabaElementImageContainer.append(dhabaElementBox1);
            dhabaElementBox1.classList.add('dhabaElementBox1');
            let dhabaElementBox2 = document.createElement('div');
            dhabaElementImageContainer.append(dhabaElementBox2);
            dhabaElementBox2.classList.add('dhabaElementBox2');
            let dhabaElementBox3 = document.createElement('div');
            dhabaElementImageContainer.append(dhabaElementBox3);
            dhabaElementBox3.classList.add('dhabaElementBox3');
            }

            if(showCafes){
            let cafeElement = document.createElement('div');
            tempCarousel2.append(cafeElement);
            cafeElement.classList.add('element');
                let cafeText = document.createElement('p');
                cafeElement.append(cafeText);
                cafeText.classList.add('heading2');
                cafeText.textContent = 'Cafes';
            let cafeElementImageContainer = document.createElement('div');
            cafeElement.append(cafeElementImageContainer);
            cafeElementImageContainer.classList.add('cafeElementImageContainer');
            let cafeElementBox1 = document.createElement('div');
            cafeElementImageContainer.append(cafeElementBox1);
            cafeElementBox1.classList.add('cafeElementBox1');
            let cafeElementBox2 = document.createElement('div');
            cafeElementImageContainer.append(cafeElementBox2);
            cafeElementBox2.classList.add('cafeElementBox2');
            let cafeElementBox3 = document.createElement('div');
            cafeElementImageContainer.append(cafeElementBox3);
            cafeElementBox3.classList.add('cafeElementBox3');
            }

            if(showRestaurants && !fourthContainerRestaurantOnly){
                let restaurantElement = document.createElement('div');
                tempCarousel2.append(restaurantElement);
                restaurantElement.classList.add('element');
                    let restaurantText = document.createElement('p');
                    restaurantElement.append(restaurantText);
                    restaurantText.classList.add('heading2');
                    restaurantText.textContent = 'Restaurants';
                let restaurantElementImageContainer = document.createElement('div');
                restaurantElement.append(restaurantElementImageContainer);
                restaurantElementImageContainer.classList.add('restaurantElementImageContainer');
                let restaurantElementBox1 = document.createElement('div');
                restaurantElementImageContainer.append(restaurantElementBox1);
                restaurantElementBox1.classList.add('restaurantElementBox1');
                let restaurantElementBox2 = document.createElement('div');
                restaurantElementImageContainer.append(restaurantElementBox2);
                restaurantElementBox2.classList.add('restaurantElementBox2');
                let restaurantElementBox3 = document.createElement('div');
                restaurantElementImageContainer.append(restaurantElementBox3);
                restaurantElementBox3.classList.add('restaurantElementBox3');
            }

            let dummyElementR2 = document.createElement('div');
            tempCarousel2.append(dummyElementR2);
            dummyElementR2.classList.add('dummyElementRight');
        }

            //creating Heading 3
        if(container[2]){

            let culturalTourismHeading = document.createElement('div');
            container[2].append(culturalTourismHeading);
            culturalTourismHeading.textContent = "Cultural Tourism";
            culturalTourismHeading.classList.add('heading1');

            //creating CULTURE carousel-------------------------
            let tempCarousel3 = document.createElement('div');
            container[2].append(tempCarousel3);
            tempCarousel3.classList.add('sliderContainer');

            //Creating Left & Right buttons
            let Lbtn3 = document.createElement('button');
            tempCarousel3.append(Lbtn3);
            Lbtn3.textContent = '<';
            Lbtn3.classList.add('leftBtn');
            let Rbtn3 = document.createElement('button');
            tempCarousel3.append(Rbtn3);
            Rbtn3.textContent = '>';
            Rbtn3.classList.add('rightBtn');

            let dummyElement3 = document.createElement('div');
            tempCarousel3.append(dummyElement3);
            dummyElement3.classList.add('dummyElement');


            //Now creating CULTURE elements---------
            if(showHistoricPlaces){
            let historicElement = document.createElement('div');
            tempCarousel3.append(historicElement);
            historicElement.classList.add('element');
                let historicText = document.createElement('p');
                historicElement.append(historicText);
                historicText.classList.add('heading2');
                historicText.textContent = 'Historic';
            let historicElementImageContainer = document.createElement('div');
            historicElement.append(historicElementImageContainer);
            historicElementImageContainer.classList.add('historicElementImageContainer');
            let historicElementBox = document.createElement('div');
            historicElementImageContainer.append(historicElementBox);
            historicElementBox.classList.add('historicElementBox');
            }

            if(showTemples){
            let templeElement = document.createElement('div');
            tempCarousel3.append(templeElement);
            templeElement.classList.add('element');
                let templeText = document.createElement('p');
                templeElement.append(templeText);
                templeText.classList.add('heading2');
                templeText.textContent = 'Temples';
            let templeElementImageContainer = document.createElement('div');
            templeElement.append(templeElementImageContainer);
            templeElementImageContainer.classList.add('templeElementImageContainer');
            let templeElementBox = document.createElement('div');
            templeElementImageContainer.append(templeElementBox);
            templeElementBox.classList.add('templeElementBox');
            }

            let dummyElementR3 = document.createElement('div');
            tempCarousel3.append(dummyElementR3);
            dummyElementR3.classList.add('dummyElementRight');
        }


            //creating Heading 4
        if(container[3]){
            let diningHeading = document.createElement('div');
            container[3].append(diningHeading);
            diningHeading.textContent = "Dining";
            diningHeading.classList.add('heading1');

            //creating FOOD2 carousel-------------------------
            let tempCarousel4 = document.createElement('div');
            container[3].append(tempCarousel4);
            tempCarousel4.classList.add('sliderContainer');

            //Creating Left & Right buttons
            let Lbtn4 = document.createElement('button');
            tempCarousel4.append(Lbtn4);
            Lbtn4.textContent = '<';
            Lbtn4.classList.add('leftBtn');
            let Rbtn4 = document.createElement('button');
            tempCarousel4.append(Rbtn4);
            Rbtn4.textContent = '>';
            Rbtn4.classList.add('rightBtn');

            let dummyElement4 = document.createElement('div');
            tempCarousel4.append(dummyElement4);
            dummyElement4.classList.add('dummyElement');

            //Now creating FOOD2 elements
            if(showRestaurants && fourthContainerRestaurantOnly){
            let restaurantElement = document.createElement('div');
            tempCarousel4.append(restaurantElement);
            restaurantElement.classList.add('element');
                let restaurantText = document.createElement('p');
                restaurantElement.append(restaurantText);
                restaurantText.classList.add('heading2');
                restaurantText.textContent = 'Restaurants';
            let restaurantElementImageContainer = document.createElement('div');
            restaurantElement.append(restaurantElementImageContainer);
            restaurantElementImageContainer.classList.add('restaurantElementImageContainer');
            let restaurantElementBox1 = document.createElement('div');
            restaurantElementImageContainer.append(restaurantElementBox1);
            restaurantElementBox1.classList.add('restaurantElementBox1');
            let restaurantElementBox2 = document.createElement('div');
            restaurantElementImageContainer.append(restaurantElementBox2);
            restaurantElementBox2.classList.add('restaurantElementBox2');
            let restaurantElementBox3 = document.createElement('div');
            restaurantElementImageContainer.append(restaurantElementBox3);
            restaurantElementBox3.classList.add('restaurantElementBox3');
            }

            let dummyElementR4 = document.createElement('div');
            tempCarousel4.append(dummyElementR4);
            dummyElementR4.classList.add('dummyElementRight');
        }
    }
    let carousels = document.querySelectorAll('.sliderContainer');
    let leftBtns = document.querySelectorAll('.leftBtn');
    let rightBtns = document.querySelectorAll('.rightBtn');

    carousels.forEach((carousel, index) => {
        let leftBtn = leftBtns[index];
        let rightBtn = rightBtns[index];
        let items = carousel.querySelectorAll('.element');
        console.log(items.length);

        if(!((items.length%2) == 0)){
            const centerPosition = (carousel.scrollWidth - carousel.clientWidth) / 2;
            carousel.scrollLeft = centerPosition;
            carousel.scrollBy({
                left: centerPosition,  // Scroll left by the width of the carousel
                behavior: 'smooth',
            });
            console.log('odd');
        }
        else{
            console.log('even');
            const centerPosition = (carousel.scrollWidth - carousel.clientWidth) / 2;
            carousel.scrollLeft = centerPosition;
            carousel.scrollBy({
                left: (centerPosition-279),  // Scroll left by the width of the carousel
                behavior: 'smooth',
            });
        }

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
            });
        } else {
            console.log('Element not found', leftBtn, rightBtn, carousel);
        }

        let parkLink = document.getElementById('parkID');
        parkLink.addEventListener('click', (event) => {
            // clearDynamicElements();
            window.location.assign('CE_parks.html');
        });
        let mallLink = document.getElementById('mallID');
        mallLink.addEventListener('click', (event) => {
            // clearDynamicElements();
            window.location.assign('CE_malls.html');
        });
        let fairLink = document.getElementById('fairID');
        fairLink.addEventListener('click', () => {
            // clearDynamicElements();
            window.location.assign('CE_fairs.html');
        });
    });
});
