import React from 'react';
import mistralctronicles from '../../../img/mistralctronicles.png';
import { Anime, Links } from '../../categories';

function Body() {
  return (
    <>
      Avui vinc a recomanar la gent de <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" title="www.mistralchronicles.com" without rel="noreferrer" href="http://www.mistralchronicles.com/">Mistral Chronicles</a> que es dediquen a fer analisis i ensaig sobre manga i anime nivell hardcore.<br /><br />
      Si teniu la sort de que us agradi algun anime/manga dels que analitzen per flipar. Us deixo la web on tenen molt mes contingut, pero tambè el canal de YT que encara es millor.<br /><br />
      <a class="block" target="_blank" title="Mistral Chronicles channel" without rel="noreferrer" href="https://www.youtube.com/@MistralChronicles"><img class="max-w-full h-auto block" src={mistralctronicles} alt='Mistral cronicles' /></a><br />
      Per part meva recomano els videos sobre Evangelion, tant documentats clars i ben guionitzats que son els millors analisis de tot internet sobre aquest tema (el que domino lol).
    </>
  );
};

export const post = {
  title: 'Mistral Chronicles',
  seo: 'mistral-chronicles',
  body: Body(),
  categories: [Anime, Links],
  videoYT: 'EdQ8mvPXx5o',
  tags: ['Youtube', 'Anime', 'Manga', 'Analysis', 'Evangelion', 'Japan'],
  date: new Date('05/21/2024'),
  weed: false,
};