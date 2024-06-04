import React from 'react';
import perfectblue from '../../../img/perfectblue.jpg';
import perfectblue2 from '../../../img/perfectblue2.jpg';
import { Anime, Cine } from '../../categories';

function Body() {
  return (
    <>
      Sincerament, anava a veure-la una mica per veure, per alguna imatge que he vist per Twitter perquè la estetica m'agradava. M'ha flipat.<br /><br />
      <img class="max-w-full h-auto block" src={perfectblue} alt='Fotograma de la peli' /><br />
      No en farè un analisis ni res semblant, nomes recomanar-lo perque m'ha semblat una obra de 10 i el dibuix es rollo dels '90/'00. Si voleu un resum el busqueu.
      Deixo per aquí el link a imdb <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" without rel="noreferrer" href="https://www.imdb.com/title/tt0156887">Perfect Blue</a><br /><br />
      <img class="max-w-full h-auto block" src={perfectblue2} alt='Fotograma de la peli 2' /><br />
      Davant tal sorpresa em poso a la llista de pendents les demes obres de <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" without rel="noreferrer" href="https://www.imdb.com/name/nm0464804/">Satoshi Kon</a>
    </>
  );
};

export const post = {
  title: 'He vist Perfect Blue',
  seo: 'perfect-blue',
  body: Body(),
  categories: [Cine, Anime],
  videoYT: '',
  tags: ['Anime', 'Japan', 'Pelis', '90\'s'],
  date: new Date('05/22/2024'),
  weed: false,
};