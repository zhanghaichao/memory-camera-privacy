import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Privacy Policy · Memory Camera',
  description: 'How Memory Camera handles your photos, camera access, purchases and privacy choices. Contact Jocelyn at seansheaton@gmail.com.',
  icons: { icon: '/memory-camera-privacy/icon.png' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

