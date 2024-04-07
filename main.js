
import { inicio } from './src/components/Pagina-Inicio/incio';
import { initializeMemoryGame } from './src/pages/memori/memori';
import { createTrivial } from './src/pages/trivial/trivial';
import { initmole } from './src/pages/whack-a-mole/whack-a-mole';

import './style.css'

const divApp = document.querySelector("#app");
createTrivial(divApp)
initializeMemoryGame(divApp)
initmole(divApp);
inicio(divApp);


