fetch("news.json")
  .then(response => response.json())
  .then(news => {
    const container = document.getElementById("news");

    news.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p><strong>${item.category}</strong></p>
        <p>${item.summary}</p>
        <a href="${item.link}" target="_blank">Read original source</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading news:", error);
  });

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

