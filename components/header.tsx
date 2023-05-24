import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white text-blue px-4 py-2 flex justify-between items-center">
      <Link href="/">
          <Image
            src="/logo.png" // Path to your logo file
            alt="Sick-Ventures Logo" // Alternative text for the logo
            width={150} // Desired width
            height={50} // Desired height
          />
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/community">Community</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
