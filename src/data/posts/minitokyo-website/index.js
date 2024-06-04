import React from 'react';
import img_minitokyo from '../../../img/www.minitokyo.net_.png';
import { Anime, Links } from '../../categories';

function Body() {
  return (
    <>
      Fa poc he descobert aquesta web. No se si durarà molt, pero esta plena d'scans japonesos a molta resolució; gachapons, artbooks, revistes, posters, etc.
    </>
  );
};

export const post = {
  title: 'Minitokyo website',
  seo: 'minitokyo-website',
  body: Body(),
  website: {
    name: 'www.minitokyo.net',
    img: img_minitokyo,
    link: 'http://www.minitokyo.net/'
  },
  categories: [Links, Anime],
  tags: ['Anime', 'Scans', 'Artbook', 'Wallpaper', 'Japan'],
  date: new Date('05/19/2024'),
  weed: false,
};