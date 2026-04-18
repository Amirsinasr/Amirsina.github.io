import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    // The main header wrapper. We use the same dark background as your hero section.
    <header className="w-full bg-[#1e2228] border-b border-gray-800 text-white py-4 px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          {/* Using the logo you already have in your public folder */}
          <span className="text-xl font-bold tracking-wider">Sina Sahraei</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
          <Link href="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;