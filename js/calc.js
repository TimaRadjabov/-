document.addEventListener("DOMContentLoaded", () => {
  const slider01 = document.querySelector(".slider01");
  const slider02 = document.querySelector(".slider02");
  const progress = document.querySelector(".point01");
  const progress02 = document.querySelector(".point02");
  const screenWidth = window.screen.width;
  const result01 = document.querySelector(".result");

  function customSlider() {
    if (slider02.value === "0") {
      const profit = new Intl.NumberFormat("ru-RU").format(
        slider01.value * 1 * 321 * 0.075
      );
      result01.innerHTML = profit;
    } else {
      const profit = new Intl.NumberFormat("ru-RU").format(
        slider01.value * slider02.value * 321 * 0.075
      );
      result01.innerHTML = profit;
    }

    if (slider01.value === "2000") {
      progress.style.width = slider01.value - 2000 + "px";
    }
    if (slider01.value === "2100") {
      progress.style.width = slider01.value - 1993 + "px";
    }
    if (slider01.value === "2200") {
      progress.style.width = slider01.value - 1990 + "px";
    }
    if (slider01.value === "2300") {
      progress.style.width = slider01.value - 1988 + "px";
    }
    if (slider01.value === "2400") {
      progress.style.width = slider01.value - 1987 + "px";
    }
    if (slider01.value === "2500") {
      progress.style.width = slider01.value - 1986 + "px";
    }
    if (slider01.value === "2600") {
      progress.style.width = slider01.value - 1986 + "px";
    }
    if (slider01.value === "2700") {
      progress.style.width = slider01.value - 1988 + "px";
    }
    if (slider01.value === "2800") {
      progress.style.width = slider01.value - 1987 + "px";
    }
    if (slider01.value === "2900") {
      progress.style.width = slider01.value - 1987 + "px";
    }
    if (slider01.value === "3000") {
      progress.style.width = slider01.value - 1987 + "px";
    }

    if (slider02.value === "0") {
      progress02.style.width = slider02.value + 0 + "px";
    }
    if (slider02.value === "3") {
      progress02.style.width = 128 - slider02.value + "px";
    }
    if (slider02.value === "6") {
      progress02.style.width = 243 - slider02.value + "px";
    }
    if (slider02.value === "9") {
      progress02.style.width = 359 - slider02.value + "px";
    }
    if (slider02.value === "12") {
      progress02.style.width = 474 - slider02.value + "px";
    }
    if (slider02.value === "15") {
      progress02.style.width = 585 - slider02.value + "px";
    }
    if (slider02.value === "18") {
      progress02.style.width = 698 - slider02.value + "px";
    }
    if (slider02.value === "21") {
      progress02.style.width = 815 - slider02.value + "px";
    }
    if (slider02.value === "24") {
      progress02.style.width = 928 - slider02.value + "px";
    }
    if (slider02.value === "27") {
      progress02.style.width = 1037 - slider02.value + "px";
    }
  }

  customSlider();

  slider01.addEventListener("input", () => {
    customSlider();
  });

  slider02.addEventListener("input", () => {
    customSlider();
  });
});
