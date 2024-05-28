import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight: ['400', '700'], 
    subsets: ['latin'],
    variable: '--font-averia',
});
export const opensans = Open_Sans({
    weight: ['300','400', '700', '800'],
    subsets: ['latin'],
    style:[ 'normal', 'italic' ],
    variable: '--font-opensans',
})