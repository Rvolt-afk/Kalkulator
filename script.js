
const layar = document.getElementById("layar");
const tombol = document.querySelectorAll(".tombol");
const klik = document.getElementById("klik");

let ekspresi = "";

tombol.forEach(btn => {
  btn.addEventListener("click", () => {
    klik.play();

    const nilai = btn.getAttribute("data-value");

    if (nilai === "C") {
      ekspresi = "";
      layar.innerText = "0";
    } else if (nilai === "←") {
      ekspresi = ekspresi.slice(0, -1);
      layar.innerText = ekspresi || "0";
    } else if (nilai === "=") {
      try {
        ekspresi = eval(ekspresi).toString();
        layar.innerText = ekspresi;
      } catch {
        layar.innerText = "Error";
        ekspresi = "";
      }
    } else {
      ekspresi += nilai;
      layar.innerText = ekspresi;
    }
  });
});
