const firstOrder = () => console.log ('First order strikes back!');

const higherOrder = whoStrikesBack => whoStrikesBack ();

higherOrder (firstOrder);