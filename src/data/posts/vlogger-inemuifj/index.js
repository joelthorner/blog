import React from 'react';
import img_inemuifj from '../../../img/inemuifj.png';
import { People } from '../../categories';

function Body() {
  return (
    <>
      <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" title="inemuifj channel" without rel="noreferrer" href="https://youtube.com/@inemuifj">inemuifj</a> es una vlogger estudiant de Tokyo (en el moment en que ho escric al menys) que fa videos molt amens tranquils.
      Una barreja entre bona musica, asmr, costumbrisme (el seu), amb una estetica bonissima. Basicament grava el que li dona la puta gana.<br /><br />
      <a class="block" target="_blank" title="inemuifj channel" without rel="noreferrer" href="https://youtube.com/@inemuifj"><img class="max-w-full h-auto block" src={img_inemuifj} alt='inemuifj channel' /></a><br />
      Imagino que m'encanta perque viu on viu, estudia arts gràfiques i està ple de detalls.
    </>
  );
};

export const post = {
  title: 'Vlogger inemuifj',
  seo: 'vlogger-inemuifj',
  body: Body(),
  categories: [People],
  videoYT: 'tzesutJY1ys',
  tags: ['Artist', 'Youtube', 'Aesthetic', 'Vlogger', 'Japan', 'Calm'],
  date: new Date('05/21/2024'),
  weed: false,
};