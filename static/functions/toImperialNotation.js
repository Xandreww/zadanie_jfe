const toImperialNotation = (channels) => {
  const imperialChannels = [...channels];
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const prepareNumbers = (x) => {
    return x.toString().replace(/[ .]/g, "");
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

  return imperialChannels;
};

export default toImperialNotation;
