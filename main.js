// pobieramy element z DOM
const btn = document.querySelector("button");
// let number poza funkcja poniewaz gdyby zostalo w funkcji liczba by nie wzrastala
let number = 1;

let activeNumber = 1;
//tworzymy funkcje i przypisujemy ją do zmiennej dzięki czemu mozemy się do niej odwolac
const addElement = function () {
  // tworzymy węzeł (element) html i przyposuujemy do zmiennej
  const div = document.createElement("div");
  // dzięki textContent dodajemy zawartosc
  div.textContent = number;
  //metoda appendChild dodaje element na koncu obiektu na ktorym jest wywolywana

  //MODULO
  // if (number % 5 == 0) {
  //     div.classList.add("circle");
  // }

  if (activeNumber == 5) {
    activeNumber = 0;
    div.classList.add("circle");
  }

  document.body.appendChild(div);
  number++; // number = number + 1;
  activeNumber++;
};

// ustawiamy nasluchiwanie na klik a funkcje przypisujemy addELement
btn.addEventListener("click", addElement);
