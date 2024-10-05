// suggest.js

// Array of articles to suggest (Sample Data; replace with dynamic data source)
const articles = [
    { title: "Free speech and Musk’s agenda:It’s impact on Nepal", link: "elontwitter.html", image: "/Publications/ent.png", description: "(Article) Elon Musk's Agenda of Free Speech with his acquisation of twitter" },
    { title: "Article Title 2", link: "article2.html", image: "path/to/image2.jpg", description: "Brief description of Article 2" },
    { title: "Article Title 3", link: "article3.html", image: "path/to/image3.jpg", description: "Brief description of Article 3" },
    { title: "Article Title 4", link: "article4.html", image: "path/to/image4.jpg", description: "Brief description of Article 4" },
    { title: "Article Title 5", link: "article5.html", image: "path/to/image5.jpg", description: "Brief description of Article 5" }
];

// Function to select random articles and display in the sidebar
function loadSuggestedArticles() {
    const sidebar = document.getElementById("suggest"); // Get the sidebar container
    
    // Check if the sidebar element exists
    if (sidebar) {
        sidebar.innerHTML = ""; // Clear any existing content

        // Shuffle the articles array and pick the first 3 articles
        const shuffledArticles = articles.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Generate HTML for each suggested article
        shuffledArticles.forEach(article => {
            const articleElement = document.createElement("div");
            articleElement.classList.add("suggested-flashcard");

            // Flashcard-like structure for each article
            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="suggested-thumbnail">
                <div class="suggested-content">
                    <h4 class="suggested-title"><a href="${article.link}">${article.title}</a></h4>
                    <p class="suggested-description">${article.description}</p>
                </div>
            `;

            sidebar.appendChild(articleElement);
        });
    } else {
        console.error("Sidebar element not found. Check your HTML structure.");
    }
}

// Load suggested articles on page load
document.addEventListener("DOMContentLoaded", loadSuggestedArticles);