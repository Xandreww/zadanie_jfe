import channels from "./channels.js";

const loadContent = () => {
  const mainContent = document.getElementById("main");
  console.log("mainContent:", mainContent);

  let html = "";

  for (let channel of channels) {
    html += `<a class="js-content_card" href="${channel.customUrl}">
<div class="card_image-container">
  <img
    src="${channel.thumbnails.medium.url}"
    alt="${channel.title}"
    class="card_image"
  />
</div>
<h1 class="card_header">${channel.title}</h1>
<div class="card_stats">
  <div class="stats_details">
    <h2>Subscribers:</h2>
    <p>${channel.statistics.subscriberCount}</p>
  </div>
  <div class="stats_details">
    <h2>Videos:</h2>
    <p>${channel.statistics.videoCount}</p>
  </div>
  <div class="stats_details">
    <h2>Views:</h2>
    <p>${channel.statistics.viewCount}</p>
  </div>
</div>
</a>`;
  }

  console.log("html:", html);
  mainContent.innerHTML = html;
};

window.onload = () => {
  loadContent();
};
