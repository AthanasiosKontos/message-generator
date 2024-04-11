// Arrays storing parts of the inspirational message
const beginnings = ['Believe in yourself,', 'Your limitation—it’s only your imagination.', 'Push yourself,'];
const middles = ['because great things never come from comfort zones.', 'dream it, wish it, do it.', 'the harder you work for something, the greater you’ll feel when you achieve it.'];
const ends = ['Dream bigger.', 'Do not stop when you are tired. Stop when you are done.', 'Wake up with determination. Go to bed with satisfaction.'];

// Function to select a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate and return a random inspirational message
function generateMessage() {
  return `${getRandomElement(beginnings)} ${getRandomElement(middles)} ${getRandomElement(ends)}`;
}

// Display the message
console.log(generateMessage());
