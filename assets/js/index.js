// declare the questions array as variable questions
const questions = [
  {
    category: "animals",
    items: [],
    text: "Would you like to add the category of Animals?",
  },
  {
    category: "vehicles",
    items: [],
    text: "Would you like to add the category of Vehicles?",
  },
  {
    category: "food",
    items: [],
    text: "Would you like to add the category of Food?",
  },
  {
    category: "movies",
    items: [],
    text: "Would you like to add the category of Movies?",
  },
];

// present the user with prompt
// store prompt value in variable userInput
const userInput = prompt("How many cards would you like?");

// validate user input
const isValidInput = (userInput) => {
  // return boolean
  return true;
};

const getCategories = (questions) => {
  // return categories object
  return {
    animals: [],
    food: [],
  };
};

const isValidCategories = (categories) => {
  // return boolean
  return false;
};

const generateRandomCards = () => {
  // return an array of cards
  return [];
};

const displayCards = () => {
  // console log all cards
  console.log("DONE");
};

// this is true or false
const isValidUserInput = isValidInput(userInput);

if (isValidUserInput) {
  // if user input is valid
  // convert the userInput to number and store in variable numberOfCards
  const numberOfCards = 10;

  // get categories for questions and store as categories
  const categories = getCategories(questions);

  // validate categories and store in variable is isValidSelections
  const isValidSelections = isValidCategories(categories);

  if (isValidSelections) {
    // if selections is valid
    // pass categories and numberOfCards to generateRandomCards
    const cards = generateRandomCards(categories, numberOfCards);

    // end of happy path
    displayCards(cards);
  } else {
    // if selections is invalid
    // alert
    alert("Invalid Selections");
  }
} else {
  // if user input is not valid
  // alert message
  alert("Invalid User Input");
}
