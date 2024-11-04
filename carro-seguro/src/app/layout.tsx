"use client"; 

import Cabecalho from '@/components/Cabecalho/Cabecalho/Cabecalho';
import RootLayout from './RootLayout';
import { usePathname } from "next/navigation"; 
import Rodape from '@/components/Rodape/Rodape/Rodape';


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 
  const hideHeaderAndFooter = pathname === "/cadastro" || pathname === "/"; 

  return (
    <RootLayout>
      {!hideHeaderAndFooter && <Cabecalho />}
      {children}
      {!hideHeaderAndFooter && <Rodape />}
    </RootLayout>
  );
}
