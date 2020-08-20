//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listaDeNumeros = document.querySelectorAll("ol li");
const mensajes = document.querySelector(".mensajes-a-usuario");
const botones = document.querySelectorAll("button");

const numerosExtraídosDeLista = [];

const obtenerNumeros = function () {
  for (let i = 0; i < listaDeNumeros.length; i++) {
    numerosExtraídosDeLista.push(listaDeNumeros[i].innerText);
  }
};

const calcularPromedioLista = function (lista) {
  let sumaNumerosLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaNumerosLista += Number(lista[i]);
  }
  let promedioLista = Math.round(sumaNumerosLista / lista.length);
  mensajes.innerHTML = `<em> El promedio de los números es: ${promedioLista}.`;
};

const obtenerNumeroMasChico = function (lista) {
  let numeroMenor = Math.min(...lista);
  mensajes.innerHTML = `<em> El número más bajo es ${numeroMenor}.`;
};

const obtenerNumeroMasGrande = function (lista) {
  let numeroMayor = Math.max(...lista);
  mensajes.innerHTML = `<em> El número más alto es ${numeroMayor}.`;
};

// const obtenerNumeroMasFrecuente = function(lista) {
//   let contador = 0;
//   let nuevaLista = [];
//   for(let i = 0; i < lista.length; i++) {
//     nuevaLista.push(lista[i]);
//     for (let j = 0; j < nuevaLista.length; j++) {
//       if (lista[i] === nuevaLista[j]) {
//         contador++
//       }

//     }
//   }
// }


const asignarFuncionABoton = function(){
  obtenerNumeros(listaDeNumeros);

  for(let i = 0; i < botones.length; i++) {
    if(botones[i].id === "promedio") {
      botones[i].onclick = function() {
        calcularPromedioLista(numerosExtraídosDeLista);
        return false;
      }
      } else if (botones[i].id === "menor") {
        botones[i].onclick = function() {
          obtenerNumeroMasChico(numerosExtraídosDeLista);
          return false;
        }
      } else if (botones[i].id === "grande") {
        botones[i].onclick = function() {
          obtenerNumeroMasGrande(numerosExtraídosDeLista);
          return false;
        }
      } // else {
      //   botones[i].onclick = function() {
      //     calcularPromedioLista(numerosExtraídosDeLista);
      //     return false;
      //   }
      // }
    }
}

asignarFuncionABoton();




