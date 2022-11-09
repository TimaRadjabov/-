document.addEventListener("DOMContentLoaded", () => {
  const slider01 = document.querySelector(".slider01");
  const slider02 = document.querySelector(".slider02");
  const sliderOne = document.querySelector(".slider-one");
  const sliderTwo = document.querySelector(".slider-two");
  const progressOne = document.querySelector(".point01");
  const progress02One = document.querySelector(".point02");
  const progressTwo = document.querySelector(".point03");
  const progress02Two = document.querySelector(".point04");
  const screenWidth = window.screen.width;
  const resultOne = document.querySelector(".result");
  const resultTwo = document.querySelector(".result-two");

  function customSlider(one, two, progress, progress02, result01) {
    console.log(progress);
    if (two.value === "0") {
      const profit = new Intl.NumberFormat("ru-RU").format(
        Math.round(one.value * 1 * 321 * 0.075)
      );
      result01.innerHTML = profit;
    } else {
      const profit = new Intl.NumberFormat("ru-RU").format(
        Math.round(one.value * two.value * 321 * 0.075)
      );
      result01.innerHTML = profit;
    }

    if (one.value === "2000") {
      progress.style.width = one.value - 2000 + "px";
    }
    if (one.value === "2100") {
      progress.style.width = one.value - 1990 + "px";
    }
    if (one.value === "2200") {
      progress.style.width = one.value - 1990 + "px";
    }
    if (one.value === "2300") {
      progress.style.width = one.value - 1988 + "px";
    }
    if (one.value === "2400") {
      progress.style.width = one.value - 1987 + "px";
    }
    if (one.value === "2500") {
      progress.style.width = one.value - 1986 + "px";
    }
    if (one.value === "2600") {
      progress.style.width = one.value - 1986 + "px";
    }
    if (one.value === "2700") {
      progress.style.width = one.value - 1988 + "px";
    }
    if (one.value === "2800") {
      progress.style.width = one.value - 1987 + "px";
    }
    if (one.value === "2900") {
      progress.style.width = one.value - 1987 + "px";
    }
    if (one.value === "3000") {
      progress.style.width = one.value - 1987 + "px";
    }


    if (one.value === "1750") {
      progress.style.width = one.value - 1750 + "px";
    }
    if (one.value === "1850") {
      console.log(one.value);
      progress.style.width = one.value - 1741 + "px";
    }
    if (one.value === "1950") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2050") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2150") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2250") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2350") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2450") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2550") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2650") {
      progress.style.width = one.value - 1740 + "px";
    }
    if (one.value === "2750") {
      progress.style.width = one.value - 1740 + "px";
    }

    if (two.value === "0") {
      progress02.style.width = two.value + 0 + "px";
    }
    if (two.value === "3") {
      progress02.style.width = 128 - two.value + "px";
    }
    if (two.value === "6") {
      progress02.style.width = 243 - two.value + "px";
    }
    if (two.value === "9") {
      progress02.style.width = 359 - two.value + "px";
    }
    if (two.value === "12") {
      progress02.style.width = 474 - two.value + "px";
    }
    if (two.value === "15") {
      progress02.style.width = 585 - two.value + "px";
    }
    if (two.value === "18") {
      progress02.style.width = 698 - two.value + "px";
    }
    if (two.value === "21") {
      progress02.style.width = 815 - two.value + "px";
    }
    if (two.value === "24") {
      progress02.style.width = 928 - two.value + "px";
    }
    if (two.value === "27") {
      progress02.style.width = 1037 - two.value + "px";
    }
  }

  customSlider(slider01, slider02, progressOne, progress02One, resultOne);
  customSlider(sliderOne, sliderTwo, progressTwo, progress02Two, resultTwo);

  slider01.addEventListener("input", () => {

    customSlider(slider01, slider02, progressOne, progress02One, resultOne);
  });

  slider02.addEventListener("input", () => {

    customSlider(slider01, slider02, progressOne, progress02One, resultOne);
  });
  sliderOne.addEventListener("input", () => {
    customSlider(sliderOne, sliderTwo, progressTwo, progress02Two, resultTwo);
  });

  sliderTwo.addEventListener("input", () => {
    customSlider(sliderOne, sliderTwo, progressTwo, progress02Two, resultTwo);
  });
});
