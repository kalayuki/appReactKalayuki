import React from 'react';

/* C10 E1 P4
- CReamos un cotexto  darkMOdeCotext= React.createContext()
-En la parte de import debe aparecer de la siguiente manera import React from 'react';
-al conecxto le damos un valor de true
-Lo que hara que en cada parte que este disntinta a la pricipal este diga off, por que 
  le pusimos un contexto de true , para todo lo que ocurra ?mepregunto eso 
- Vamos a ChardDitalis, llevaremos el cotexto ahi 
 */
const DarkMOdeCotext= React.createContext(true)

export {DarkMOdeCotext}