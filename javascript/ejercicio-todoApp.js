// Seleccionamos la lista
let miLista = document.getElementsByTagName("li");

// Creamos un boton cerrar y lo agregamos a cada elemento de la lista
for (let i = 0; i < miLista.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function () {
    let element = this.parentElement;
    element.style.display = "none";
  };
  span.appendChild(txt);
  miLista[i].appendChild(span);
}

// Agregamos un símbolo de "marcado" al hacer clic en un elemento de la lista
let list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  console.log(ev.target.tagName);
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("miInput").value;

  if (inputValue === "") {
    alert("Ingresa un nombre para la tarea!");
  } else {
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.getElementById("miUL").appendChild(li);
  }

  // Agregamos a ese elemento que creamos el boton de eliminar
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  span.onclick = function () {
    let element = this.parentElement;
    element.style.display = "none";
  };
  li.appendChild(span);

  // Borramos el texto del input
  document.getElementById("miInput").value = "";
}
