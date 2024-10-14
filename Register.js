// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwesYlyb1wLDPt2kHQFI9ejvYoMqO3GZo",
    authDomain: "message-c8e1d.firebaseapp.com",
    databaseURL: "https://message-c8e1d-default-rtdb.firebaseio.com",
    projectId: "message-c8e1d",
    storageBucket: "message-c8e1d.appspot.com",
    messagingSenderId: "450526951451",
    appId: "1:450526951451:web:3dd5f2e3f27309bae960be",
    measurementId: "G-5S5QP2E0F5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the contact form in Firebase
const contactFormDB = firebase.database().ref('contactForm');

// Submit form
document.getElementById('addForm').addEventListener("submit", submitForm); // Changed to 'submit' event

function submitForm(e) {
    e.preventDefault();
    // Get input values
    const name = getElementVal('addName');
    const emailid = getElementVal('addEmail'); // Changed to match the correct ID
    const phone = getElementVal('addPhone'); // Added to capture phone
    const status = getElementVal('addStatus'); // Added to capture status
    const role = getElementVal('addRole'); // Added to capture role
    const position = getElementVal('addPosition'); // Added to capture position
    const company = getElementVal('addCompany'); // Added to capture company
    const image = getElementVal('addImage'); // Image input if needed, handling would need to be implemented

    // Push data to Firebase
    contactFormDB.push().set({
        name: name,
        email: emailid,
        phone: phone, // Added phone info
        status: status, // Added status info
        role: role, // Added role info
        position: position, // Added position info
        company: company // Added company info
        // Handle image upload if necessary
    })
    .then(() => {
        console.log("Data submitted successfully!");
    })
    .catch((error) => {
        console.error("Error submitting data: ", error);
    });

    saveMessage(name, emailid, phone, status, role, position, company); // Updated to include all fields
}

// Function to save message locally
const saveMessage = (name, emailid, phone, status, role, position, company) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: emailid,
        phone: phone, // Added phone info
        status: status, // Added status info
        role: role, // Added role info
        position: position, // Added position info
        company: company // Added company info
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
