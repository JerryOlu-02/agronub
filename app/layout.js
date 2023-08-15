import { Poppins } from 'next/font/google';
import './global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: 'normal',
});

export const metadata = {
  title: 'Agro Nub',
  description: 'The Future of Agriculture',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
