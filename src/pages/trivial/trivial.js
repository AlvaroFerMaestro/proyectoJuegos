import { inicio } from "../../components/Pagina-Inicio/incio";
import "./trivial.css";
export const baseDatosTrivial = [
    {
        id: 1,
        pregunta: '¿En qué año debutó Iron Man en los cómics de Marvel?',
        respuestas: ['1963', '1966', '1968', '1971'],
        respuestaCorrecta: '1963'
      },
      {
        id: 2,
        pregunta: '¿Quién fue el creador de Spider-Man?',
        respuestas: ['Stan Lee', 'Jack Kirby', 'Steve Ditko', 'Bob Kane'],
        respuestaCorrecta: 'Stan Lee'
      },
      {
        id: 3,
        pregunta: '¿Qué personaje de Marvel es conocido como "El Hombre sin Miedo"?',
        respuestas: ['Daredevil', 'Spider-Man', 'Iron Man', 'Hulk'],
        respuestaCorrecta: 'Daredevil'
      },
      {
        id: 4,
        pregunta: '¿Qué actor interpreta a Thor en el Universo Cinematográfico de Marvel?',
        respuestas: ['Chris Hemsworth', 'Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
        respuestaCorrecta: 'Chris Hemsworth'
      },
      {
        id: 5,
        pregunta: '¿Cuál es el verdadero nombre de Wolverine?',
        respuestas: ['James Howlett', 'Logan Howlett', 'Scott Summers', 'Bruce Banner'],
        respuestaCorrecta: 'James Howlett'
      },
      {
        id: 6,
        pregunta: '¿Cuál es la gema del infinito que Thanos buscaba en las películas de Marvel?',
        respuestas: ['La gema del alma', 'La gema del tiempo', 'La gema del espacio', 'La gema del poder'],
        respuestaCorrecta: 'La gema del alma'
      },
      {
        id: 7,
        pregunta: '¿Cuál es el nombre real de Black Widow?',
        respuestas: ['Natasha Romanoff', 'Wanda Maximoff', 'Carol Danvers', 'Jessica Jones'],
        respuestaCorrecta: 'Natasha Romanoff'
      },
      {
        id: 8,
        pregunta: '¿Qué villano es conocido como "El Titán Loco"?',
        respuestas: ['Thanos', 'Magneto', 'Loki', 'Doctor Doom'],
        respuestaCorrecta: 'Thanos'
      },
      {
        id: 9,
        pregunta: '¿Qué actor interpreta a Hulk en el Universo Cinematográfico de Marvel?',
        respuestas: ['Mark Ruffalo', 'Edward Norton', 'Eric Bana', 'Lou Ferrigno'],
        respuestaCorrecta: 'Mark Ruffalo'
      },
      {
        id: 10,
        pregunta: '¿Cuál es el nombre de la organización a la que pertenece Nick Fury?',
        respuestas: ['S.H.I.E.L.D.', 'HYDRA', 'A.I.M.', 'S.W.O.R.D.'],
        respuestaCorrecta: 'S.H.I.E.L.D.'
      },
      {
        id: 11,
        pregunta: '¿Quién es el archienemigo de Spider-Man?',
        respuestas: ['Green Goblin', 'Red Skull', 'Doctor Octopus', 'Venom'],
        respuestaCorrecta: 'Green Goblin'
      },
      {
        id: 12,
        pregunta: '¿Cuál es la identidad secreta de Deadpool?',
        respuestas: ['Wade Wilson', 'Matt Murdock', 'Peter Parker', 'Bruce Wayne'],
        respuestaCorrecta: 'Wade Wilson'
      },
      {
        id: 13,
        pregunta: '¿Quién es el creador de los X-Men?',
        respuestas: ['Stan Lee', 'Jack Kirby', 'Chris Claremont', 'Rob Liefeld'],
        respuestaCorrecta: 'Stan Lee'
      },
      {
        id: 14,
        pregunta: '¿Qué actor interpreta a Capitán América en el Universo Cinematográfico de Marvel?',
        respuestas: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'],
        respuestaCorrecta: 'Chris Evans'
      },
      {
        id: 15,
        pregunta: '¿Quién es el archienemigo de Iron Man?',
        respuestas: ['Mandarín', 'Loki', 'Thanos', 'Whiplash'],
        respuestaCorrecta: 'Mandarín'
      },
      {
        id: 16,
        pregunta: '¿Cuál es el nombre de la armadura original de Iron Man?',
        respuestas: ['Mark I', 'Hulkbuster', 'Mark XLII', 'War Machine'],
        respuestaCorrecta: 'Mark I'
      },
      {
        id: 17,
        pregunta: '¿Qué actor interpreta a Wolverine en las películas de X-Men?',
        respuestas: ['Hugh Jackman', 'Ryan Reynolds', 'Robert Downey Jr.', 'Patrick Stewart'],
        respuestaCorrecta: 'Hugh Jackman'
      },
      {
        id: 18,
        pregunta: '¿Cuál es el nombre real de La Viuda Negra?',
        respuestas: ['Natasha Romanoff', 'Wanda Maximoff', 'Carol Danvers', 'Jessica Jones'],
        respuestaCorrecta: 'Natasha Romanoff'
      },
      {
        id: 19,
        pregunta: '¿Quién es el archienemigo de Los Vengadores?',
        respuestas: ['Loki', 'Thanos', 'Mandarín', 'Ultron'],
        respuestaCorrecta: 'Loki'
      },
      {
        id: 20,
        pregunta: '¿Cuál es el nombre real de Thor?',
        respuestas: ['Thor Odinson', 'Thor Laufeyson', 'Thor Stark', 'Thor Banner'],
        respuestaCorrecta: 'Thor Odinson'
      },
      {
        id: 21,
        pregunta: '¿Cuál es el nombre real de Loki?',
        respuestas: ['Loki Laufeyson', 'Loki Odinson', 'Loki Stark', 'Loki Banner'],
        respuestaCorrecta: 'Loki Laufeyson'
      },
      {
        id: 22,
        pregunta: '¿Cuál es el nombre de la hermana de Thor?',
        respuestas: ['Hela', 'Angela', 'Frigga', 'Sif'],
        respuestaCorrecta: 'Hela'
      }
]

export const createTrivial = (divApp) => {
  const trivialContainer = document.createElement('div')
  trivialContainer.className = 'trivialContainer'
  divApp.append(trivialContainer)

  const title = document.createElement('p')
  title.className = 'title'
  title.innerText = 'Trivial Marvel'
  trivialContainer.append(title)

  const buttonInicio = document.createElement("button");
  buttonInicio.classList = "botonInicio2";
  buttonInicio.textContent = "Inicio";
  trivialContainer.append(buttonInicio);
  buttonInicio.addEventListener("click", () => {
    inicio(divApp);
  });
  

  let preguntasMezcladas = []
  let indicePreguntaActual = 0
  let puntuacion = 0

  const mezclarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const iniciarJuego = () => {
    preguntasMezcladas = mezclarArray(baseDatosTrivial)
    cargarPregunta()
  }

  const cargarPregunta = () => {
    trivialContainer.innerHTML = '' 

    const contenedorPregunta = document.createElement('div')
    contenedorPregunta.className = 'contenedorPregunta'
    trivialContainer.append(contenedorPregunta)

    const pregunta = document.createElement('p')
    pregunta.className = 'pregunta'
    pregunta.innerText = preguntasMezcladas[indicePreguntaActual].pregunta
    contenedorPregunta.append(pregunta)

    const contenedorRespuestas = document.createElement('div')
    contenedorRespuestas.className = 'contenedorRespuestas'
    trivialContainer.append(contenedorRespuestas)

    const respuestasMezcladas = mezclarArray(
      preguntasMezcladas[indicePreguntaActual].respuestas
    )

    for (let i = 0; i < respuestasMezcladas.length; i++) {
      const botonRespuesta = document.createElement('button')
      botonRespuesta.className = 'botonRespuesta'
      botonRespuesta.textContent = respuestasMezcladas[i]
      botonRespuesta.addEventListener('click', (e) => {
        const respuesta = e.target.textContent
        const respuestaCorrecta =
          preguntasMezcladas[indicePreguntaActual].respuestaCorrecta
        const botonesRespuesta = document.querySelectorAll('.botonRespuesta')
        botonesRespuesta.forEach((boton) => {
          boton.disabled = true 
          if (boton.textContent === respuestaCorrecta) {
            boton.style.backgroundColor = 'green' 
          } else if (boton.textContent === respuesta) {
            boton.style.backgroundColor = 'red'
          }
        })
        if (respuesta === respuestaCorrecta) {
          puntuacion += 1
        }
      })
      contenedorRespuestas.append(botonRespuesta)
    }

    const botonSiguientePreguntaContainer = document.createElement('div')
    trivialContainer.append(botonSiguientePreguntaContainer)
    const botonSiguientePregunta = document.createElement('button')
    botonSiguientePregunta.innerText = 'Siguiente Pregunta'
    botonSiguientePregunta.className = 'botonSiguientePregunta'
    botonSiguientePregunta.addEventListener('click', () => {
      indicePreguntaActual++
      if (indicePreguntaActual < preguntasMezcladas.length) {
        cargarPregunta()
      } else {
        mostrarPuntuacionFinal()
      }
    })
    botonSiguientePreguntaContainer.append(botonSiguientePregunta)

    const contenedorPuntuacion = document.createElement('div')
    contenedorPuntuacion.className = 'contenedorPuntuacion'
    contenedorPuntuacion.innerHTML = `Puntuación: ${puntuacion}`
    trivialContainer.append(contenedorPuntuacion)
  }

  const mostrarPuntuacionFinal = () => {
    trivialContainer.innerHTML = ''

    const divPuntuacionFinal = document.createElement('div')
    trivialContainer.append(divPuntuacionFinal)
    divPuntuacionFinal.className = 'divPuntuacionFinal'
    const puntuacionFinal = document.createElement('p')
    puntuacionFinal.innerText = `Tu puntuación final es: ${puntuacion}`
    divPuntuacionFinal.append(puntuacionFinal)

    const botonReiniciar = document.createElement('button')
    botonReiniciar.innerText = 'Reiniciar Juego'
    botonReiniciar.className = 'botonReiniciar'
    botonReiniciar.addEventListener('click', reiniciarJuego)
    trivialContainer.append(botonReiniciar)
  }

  const reiniciarJuego = () => {
    puntuacion = 0
    indicePreguntaActual = 0
    iniciarJuego()
  }

  iniciarJuego()
}