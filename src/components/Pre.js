function Pre({ load }) {
  if (!load) return null;

  return (
    <div id="preloader">
      <lottie-player
        src="/loading/Sandy_Loading.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{ width: "65vw", height: "65vw", maxWidth: "550px", maxHeight: "550px" }}
      ></lottie-player>
    </div>
  );
}

export default Pre;

