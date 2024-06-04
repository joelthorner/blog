import React from 'react';
import chocolate_cacao from '../../../img/chocolate_cacao.png';
import { Links, Menjar, People } from '../../categories';

function Body() {
  return (
    <>
      <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" without rel="noreferrer" href="https://www.youtube.com/@chocolate_cacao">Chocolate Cacao</a> és un canal de YT d'un japonès que fa rebosteria amb xocolata. Un altre cop, com no, al ser vídeos d'un japonès els detalls, la música, les tomes, son art. Les postres també són espectaculars i estètiques.<br /><br />
      <img class="max-w-full h-auto block" src={chocolate_cacao} alt='Chocolate cacao youtube channel' /><br />
      Un canal recomanadissim per a qui li agrada mirar coses de menjar. Tot i que jo no soc el més fan de vídeos d'aquesta temàtica, recomano el sr <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" without rel="noreferrer" href="https://www.youtube.com/@chocolate_cacao">@chocolate_cacao</a>
    </>
  );
};

export const post = {
  title: 'Chocolate Cacao チョコレートカカオ',
  seo: 'chocolate-cacao-yt',
  body: Body(),
  categories: [Links, People, Menjar],
  videoYT: 'TXXjeIF7M7I',
  tags: ['Youtube', 'Japan', 'Xocolata', 'Postres'],
  date: new Date('05/28/2024'),
  weed: false,
};