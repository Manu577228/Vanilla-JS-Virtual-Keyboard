const keyboardContainer = document.querySelector(".keyboard");
const textInput = document.getElementById("textInput");

const keysLayout = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "Backspace",
];

// create keyboard keys dynamically
keysLayout.forEach((key) => {
  const keyElement = document.createElement("div");
  keyElement.textContent = key;
  keyElement.classList.add("key");

  // Add event listeners to keys
  if (key === "Backspace") {
    keyElement.classList.add("backspace");
    // backspace key functionality
    keyElement.addEventListener("click", () => {
      textInput.value = textInput.value.slice(0, -1);
    });
  } else {
    // other keys functionality
    keyElement.addEventListener("click", () => {
      textInput.value += key;
    });
  }

  // Append key to the keyboard container
  keyboardContainer.appendChild(keyElement);
});
