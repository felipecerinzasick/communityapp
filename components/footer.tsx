// footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white-500 text-blue px-4 py-2 mt-8">
      <nav className="flex gap-4 justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
      </nav>
      <p className="text-center mt-4">© 2023 Sick-Ventures</p>
    </footer>
  );
}
