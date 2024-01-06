function skipAds() {
  const videos = Array.from(document.querySelectorAll("pjsdiv > video")).filter(
    (video) => !video.src.startsWith("blob:"),
  );

  if (videos.length) {
    videos.map((video) => {
      const isVideoPlaying = (video) =>
        !!(
          video.currentTime > 0 &&
          !video.paused &&
          !video.ended &&
          video.readyState > 2
        );

      if (isVideoPlaying) {
        video.muted = true;
        video.currentTime = 60;
      }
    });
  }

  const skipButton = document.evaluate(
    "//pjsdiv[text()='Пропустить']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;

  if (skipButton) {
    skipButton.click();
  }
}

var isTop = true;

setInterval(skipAds, 500);
