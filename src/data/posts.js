import img_minitokyo from '../img/www.minitokyo.net_.png';
import img_inemuifj from '../img/inemuifj.png';
import mistralctronicles from '../img/mistralctronicles.png';
import perfectblue from '../img/perfectblue.jpg';
import perfectblue2 from '../img/perfectblue2.jpg';

// Cats
// Anime, Links, People, Music, Cine

export const POSTS = [
  // {
  //   title: '',
  //   seo: '',
  //   body: ``,
  //   categories: [],
  //   videoYT: '',
  //   tags: [],
  //   date: new Date('dd/mm/yyyy'),
  //   weed: false,
  // },
  {
    title: 'He vist Perfect Blue',
    seo: 'perfect-blue',
    body: `Sincerament, anava a veure-la una mica per veure, per alguna imatge que he vist per Twitter perquè la estetica m'agradava. M'ha flipat.<br><br>
      <img class="max-w-full h-auto block" src=${perfectblue} /><br>
      No en farè un analisis ni res semblant, nomes recomanar-lo perque m'ha semblat una obra de 10 i el dibuix es rollo dels '90/'00. Si voleu un resum el busqueu.  
      Deixo per aquí el link a imdb <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" without rel="noreferrer" href="https://www.imdb.com/title/tt0156887">Perfect Blue</a><br><br>
      <img class="max-w-full h-auto block" src=${perfectblue2} /><br>
      Davant tal sorpresa em poso a la llista de pendents les demes obres de <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" without rel="noreferrer" href="https://www.imdb.com/name/nm0464804/">Satoshi Kon</a>`,
    categories: ['Cine', 'Anime'],
    videoYT: '',
    tags: ['Anime', 'Japan', 'Pelis', '90\'s'],
    date: new Date('05/22/2024'),
    weed: false,
  },
  {
    title: 'Mistral Chronicles',
    seo: 'mistral-chronicles',
    body: `Avui vinc a recomanar la gent de <a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" title="www.mistralchronicles.com" without rel="noreferrer" href="http://www.mistralchronicles.com/">Mistral Chronicles</a> que es dediquen a fer analisis i ensaig sobre manga i anime nivell hardcore.<br><br>
      Si teniu la sort de que us agradi algun anime/manga dels que analitzen per flipar. Us deixo la web on tenen molt mes contingut, pero tambè el canal de YT que encara es millor.<br><br>
      <a class="block" target="_blank" title="Mistral Chronicles channel" without rel="noreferrer" href="https://www.youtube.com/@MistralChronicles"><img class="max-w-full h-auto block" src=${mistralctronicles} /></a><br>
      Per part meva recomano els videos sobre Evangelion, tant documentats clars i ben guionitzats que son els millors analisis de tot internet sobre aquest tema (el que domino lol).`,
    categories: ['Anime', 'Links'],
    videoYT: 'EdQ8mvPXx5o',
    tags: ['Youtube', 'Anime', 'Manga', 'Analysis', 'Evangelion', 'Japan'],
    date: new Date('05/21/2024'),
    weed: false,
  },
  {
    title: 'Vlogger inemuifj',
    seo: 'vlogger-inemuifj',
    body: `<a class="text-blue-600 hover:text-blue-500 opacity-90" target="_blank" title="inemuifj channel" without rel="noreferrer" href="https://youtube.com/@inemuifj">inemuifj</a> es una vlogger estudiant de Tokyo (en el moment en que ho escric al menys) que fa videos molt amens tranquils. 
      Una barreja entre bona musica, asmr, costumbrisme (el seu), amb una estetica bonissima. Basicament grava el que li dona la puta gana.<br><br>
      <a class="block" target="_blank" title="inemuifj channel" without rel="noreferrer" href="https://youtube.com/@inemuifj"><img class="max-w-full h-auto block" src=${img_inemuifj} /></a><br>
      Imagino que m'encanta perque viu on viu, estudia arts gràfiques i està ple de detalls.`,
    categories: ['People'],
    videoYT: 'tzesutJY1ys',
    tags: ['Artist', 'Youtube', 'Aesthetic', 'Vlogger', 'Japan', 'Calm'],
    date: new Date('05/21/2024'),
    weed: false,
  },
  {
    title: 'Night Tapes - drifting',
    seo: 'night-tapes-drifting',
    body: ``,
    videoYT: 'mEf0xM0FIg0',
    categories: ['Music'],
    tags: ['Bona onda', 'Electronica'],
    date: new Date('05/20/2024'),
    weed: true,
  },
  {
    title: 'Minitokyo website',
    seo: 'minitokyo-website',
    body: `Fa poc he descobert aquesta web. No se si durarà molt, pero esta plena d'scans japonesos a molta resolució; gachapons, artbooks, revistes, posters, etc.`,
    website: {
      name: 'www.minitokyo.net',
      img: img_minitokyo,
      link: 'http://www.minitokyo.net/'
    },
    categories: ['Links', 'Anime'],
    tags: ['Anime', 'Scans', 'Artbook', 'Wallpaper', 'Japan'],
    date: new Date('05/19/2024'),
    weed: false,
  },
  {
    title: 'Cinnamon Chasers - Luv Deluxe',
    seo: 'cinnamon-chasers-luv-deluxe',
    body: '',
    videoYT: 'Z8Y1MalRrDc',
    categories: ['Music'],
    tags: ['Bona onda', 'Electronica'],
    date: new Date('05/18/2024'),
    weed: true,
  },
];