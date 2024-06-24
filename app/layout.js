import { Comfortaa } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
});

export const metadata = {
    title: 'Home',
    description: 'Welcome to this club',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-PT" className={comfortaa.className}>
            <body>{children}</body>
        </html>
    );
}
