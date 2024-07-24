import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full p-4 bg-black flex justify-between items-center">
      <Link href="/" className="text-white text-2xl hover:text-gray-400 ml-10">
        Jason Jiang
      </Link>
    </header>
  );
}

export default function LayOut({ children }: { children: React.ReactNode}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}