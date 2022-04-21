const generateBtn = document.querySelector("#generate");

// declare the variable questions as an array of objects
const questions = [
  {
    category: "animals",
    items: [
      "cat",
      "dog",
      "bear",
      "giraffe",
      "turtle",
      "squirrel",
      "lion",
      "zebra",
      "snake",
      "spider",
      "bee",
      "butterfly",
      "fox",
      "elephant",
      "horse",
      "camel",
      "owl",
      "eagle",
      "shark",
      "dolphin",
      "penguin",
      "ant",
      "crab",
      "octopus",
    ],
    text: "Would you like to add the category of Animals?",
  },
  {
    category: "sports",
    items: [
      "basketball",
      "football",
      "handball",
      "golf",
      "tennis",
      "snooker",
      "swimming",
      "yoga",
      "cycling",
      "bowling",
      "weight lifting",
      "badminton",
      "squash",
      "table tennis",
      "baseball",
      "cricket",
      "boxing",
      "jiu-jitsu",
      "acrobatic gymnastics",
      "rythmic gymnastics",
      "hockey",
      "curling",
    ],
    text: "Would you like to add the category of Sports?",
  },
  {
    category: "food",
    items: [
      "strawberry",
      "banana",
      "rice",
      "lettuce",
      "tomatoe",
      "bread",
      "cheese",
      "hummus",
      "pizza",
      "cookies",
      "yorkshire pudding",
      "pasta",
      "hamburger",
      "hot dog",
      "lasagna",
      "chocolate",
      "egg",
      "milk",
      "yogurt",
      "brioche",
    ],
    text: "Would you like to add the category of Food?",
  },
  {
    category: "movies",
    items: [
      "Avatar",
      "Godzilla",
      "Alien",
      "Matrix",
      "Inception",
      "Bad Boys",
      "Twilight",
      "Fight Club",
      "Iron Man",
      "Pretty Woman",
      "La la land",
      "Titanic",
      "Mission : impossible",
      "The Notebook",
      "American Pie",
      "Grown Ups",
      "Superman",
      "The Avengers",
      "Reservoir Dogs",
      "Scream",
      "E.T.",
      "Jaws",
      "Rocky",
    ],
    text: "Would you like to add the category of Movies?",
  },
];

//get the user input for number of cars and checks if is number+within range
const getCardNumber = () => {
  //declare variable to receive user input - const -> not modified further down
  const userInput = prompt(
    "How many cards would you like in your set? \n\nPlease enter a number between 6 and 20.\n",
    ""
  );
  // check if userInput is a number
  const cardNumber = parseInt(userInput);

  if (!isNaN(cardNumber) && cardNumber >= 6 && cardNumber <= 20) {
    //if type and range are both true, the number is returned for storage in variable
    return cardNumber;
  }
  //if type or range are not true, it sends an alert box with message
  else {
    alert(
      "You must enter a number between 6 and 20. \n\nClick OK to start again."
    );
    window.location.reload(true);
    document.getElementById("cards").reset();
  }
};

// get the user's choice for each category and store chosen ones as categories
const getCategories = () => {
  const categories = [];

  const getUserChoices = (element, index) => {
    const getUserInput = confirm(element.text);
    if (getUserInput) {
      const choice = { category: element.category, items: element.items };
      categories.push(choice);
    }
  };

  questions.forEach(getUserChoices);
  console.log(categories);

  //check the user;s choice matches the acceptance criteria => at least 2 categories selected
  if (categories.length < 2) {
    alert("Invalid selection. \n\nClick OK to start again.");
    window.location.reload(true);
    document.getElementById("cards").reset();
  } else {
    return categories;
  }
};
const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};

//function creates the cards from the categories chosen by user - not done
const createCardSet = (cardNumber, categories) => {
  const newArray = [];
  //look into securing at least 1 from each category
  while (cardNumber - newArray.length !== 0) {
    // gets a random number to pick an object
    const randomObjectIndex = getRandomNumber(categories.length);
    const randomObject = categories[randomObjectIndex];
    // gets a random number to pick item in array

    const randomItemIndex = getRandomNumber(randomObject.items.length);
    const randomItem = randomObject.items[randomItemIndex];
    console.log(randomObject, randomItem);

    //check if already exist in array

    //if not already in array, push in
    newArray.push(randomItem);
  }
  console.log(newArray);

  return newArray;
  // return an array of cards
};

// main function to generate the set of cards
const generateCards = () => {
  //get the car set length from the user
  const cardNumber = getCardNumber();

  //get the category options from the user
  const categories = getCategories();

  //create the card set
  const cardSet = createCardSet(cardNumber, categories);

  //return the card set
  return cardSet;
};

// show cards in the #cards input
const showCards = () => {
  const cardSet = generateCards();
  const cardSetText = document.querySelector("#cards");

  cardSetText.value = cardSet;
};

// Add event listener to generate button
generateBtn.addEventListener("click", showCards);
