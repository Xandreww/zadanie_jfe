import channels from "./channels.js";
const imperialChannels = [...channels];

const toImperialNotation = (channels) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const prepareNumbers = (x) => {
    return x.toString().replace(/ /g, "");
  };

  for (let channel of imperialChannels) {
    channel.statistics.viewCount = prepareNumbers(channel.statistics.viewCount);
    channel.statistics.subscriberCount = prepareNumbers(
      channel.statistics.subscriberCount
    );
    channel.statistics.videoCount = prepareNumbers(
      channel.statistics.videoCount
    );
  }

  for (let channel of imperialChannels) {
    channel.statistics.viewCount = numberWithCommas(
      channel.statistics.viewCount
    );
    channel.statistics.subscriberCount = numberWithCommas(
      channel.statistics.subscriberCount
    );
    channel.statistics.videoCount = numberWithCommas(
      channel.statistics.videoCount
    );
  }
};

toImperialNotation(channels);

const loadContent = () => {
  const mainContent = document.getElementById("main");
  let html = "";

  for (let channel of imperialChannels) {
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
  mainContent.innerHTML = html;
};

window.onload = () => {
  loadContent();
};
