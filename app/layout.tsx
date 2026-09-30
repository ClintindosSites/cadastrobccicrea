import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoria de Crédito',
  description: 'Atendimento personalizado para soluções de crédito.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-PT"><body>{children}</body></html>;
}
