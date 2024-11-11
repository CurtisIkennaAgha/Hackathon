// Text content for each part
const textUTC = "UTC";
const textPorts = " Portsmouth";
const text2 = "Hackathon";

// Elements for text and cursor
const cursor1 = document.getElementById("cursor1");
const cursor2 = document.getElementById("cursor2");
const UTCElement = document.getElementById("UTC");
const PortsElement = document.getElementById("Ports");
const text2Element = document.getElementById("text2");

// Typing state variables
let indexUTC = 0;
let indexPorts = 0;
let index2 = 0;
let isTypingUTC = true;
let isTypingPorts = false;
let isTypingLine2 = false;

// Typing function
function typeText() {
    if (isTypingUTC) {
        // Type "UTC" character by character
        if (indexUTC < textUTC.length) {
            UTCElement.textContent += textUTC[indexUTC];
            indexUTC++;
            moveCursor(UTCElement, cursor1); // Move cursor to the end of the text
            setTimeout(typeText, 100); // Typing speed
        } else {
            // Move to typing "Portsmouth"
            isTypingUTC = false;
            isTypingPorts = true;
            setTimeout(typeText, 200); // Small delay between lines to ensure smooth transition
        }
    } else if (isTypingPorts) {
        // Type "Portsmouth" character by character
        if (indexPorts < textPorts.length) {
            PortsElement.textContent += textPorts[indexPorts];
            indexPorts++;
            moveCursor(PortsElement, cursor1); // Move cursor to the end of the text
            setTimeout(typeText, 100); // Typing speed
        } else {
            // Hide the first cursor and move to second line after typing "Portsmouth"
            isTypingPorts = false;
            isTypingLine2 = true;
            cursor1.style.animation = "none";  // Stop the first cursor animation
            cursor1.style.display = "none";   // Hide first cursor
            cursor2.style.display = "inline"; // Show cursor for the second line
            setTimeout(typeText, 500); // Small delay before starting "Hackathon"
        }
    } else if (isTypingLine2) {
        // Type "Hackathon" character by character
        if (index2 < text2.length) {
            text2Element.textContent += text2[index2];
            index2++;
            moveCursor(text2Element, cursor2); // Move cursor to the end of the text
            setTimeout(typeText, 100); // Typing speed
        }
    }
}

// Function to move the cursor to the end of the text
function moveCursor(textElement, cursorElement) {
    // Set the position of the cursor to be just after the last character
    const textWidth = textElement.offsetWidth;  // Get the current width of the text
    cursorElement.style.left = `${textWidth}px`;  // Move the cursor
}

// Start the typing effect
typeText();
