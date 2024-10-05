// suggest.js

// Sample Data for Suggested Articles (Replace with your actual data)
const articles = [
    {
        title: "Free speech and Musk’s agenda:It’s impact on Nepal",
        link: "elontwitter.html",
        image: "Publications/ent.png",
        description: "(Article) Elon Musk's Agenda of Free Speech with his acquisation of twitter"
    },
    {
        title: "Knowledge and Application of E-Governance in Pokhara-27",
        link: "article2.html",
        image: "Publications/thumb1.png",
        description: "(Research)To assess the knowledge and application of E-governance in Pokhara-27"
    },
    {
        title: "CSS Tips and Tricks for Responsive Design",
        link: "article3.html",
        image: "path/to/image3.jpg",
        description: "Discover tips and tricks for creating responsive and beautiful web pages using CSS."
    },
    {
        title: "Exploring the Power of HTML5",
        link: "article4.html",
        image: "path/to/image4.jpg",
        description: "HTML5 offers a range of new features and capabilities for web developers."
    }
];

// Function to dynamically load and display suggested articles
function loadSuggestedArticles() {
    // Get the container element where suggested articles will be displayed
    const container = document.getElementById("suggest");

    // Check if the container exists
    if (container) {
        // Clear any existing content
        container.innerHTML = "";

        // Loop through the articles array and create flashcards for each article
        articles.forEach(article => {
            // Create the flashcard container
            const flashcard = document.createElement("div");
            flashcard.classList.add("suggested-flashcard");

            // Create the image element and set the desired width and height
            const imageElement = document.createElement("img");
            imageElement.src = article.image;
            imageElement.alt = article.title;
            imageElement.classList.add("suggested-thumbnail-rectangular");

            // Set specific width and height manually
            imageElement.style.width = "240px";  // Set the desired width
            imageElement.style.height = "150px"; // Set the desired height

            // Create the content container
            const contentElement = document.createElement("div");
            contentElement.classList.add("suggested-content");

            // Create the title element
            const titleElement = document.createElement("h4");
            titleElement.classList.add("suggested-title");

            // Create the link inside the title
            const titleLink = document.createElement("a");
            titleLink.href = article.link;
            titleLink.textContent = article.title;
            titleElement.appendChild(titleLink);

            // Create the description element
            const descriptionElement = document.createElement("p");
            descriptionElement.classList.add("suggested-description");
            descriptionElement.textContent = article.description;

            // Append title and description to content container
            contentElement.appendChild(titleElement);
            contentElement.appendChild(descriptionElement);

            // Append image and content container to the flashcard
            flashcard.appendChild(imageElement);
            flashcard.appendChild(contentElement);

            // Append the flashcard to the container
            container.appendChild(flashcard);
        });
    } else {
        console.error("Suggested articles container not found. Check your HTML structure.");
    }
}

// Call the function to load suggested articles when the document is ready
document.addEventListener("DOMContentLoaded", loadSuggestedArticles);