import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Bentham } from 'next/font/google';
import { DM_Serif_Text } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin']
});

export const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});

export const bentham = Bentham({
    weight: '400',
    subsets: ['latin'],
});

export const dm_serif = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});