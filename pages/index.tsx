// index.tsx
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="flex items-center justify-center h-screen p-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="space-y-5 text-center text-white">
            <h1 className="text-5xl font-bold">
              Welcome to the Sick-Ventures Web3 Investment Community
            </h1>
            <p className="text-xl">
              Join to discuss and discover the potential of decentralized finance
            </p>
            <div className="flex justify-center space-x-5">
            <Link href="/register" className="px-4 py-2 font-semibold text-purple-700 bg-white rounded">Register</Link>
            <Link href="/login" className="px-4 py-2 font-semibold text-white border border-white rounded">Login</Link>
            </div>
          </div>
        </section>

        <section className="px-10 py-20 bg-gray-100">
          <div className="max-w-5xl mx-auto space-y-10 text-center">
            <h2 className="text-4xl font-bold">Why Join?</h2>
            <p className="text-xl text-gray-700">
              We are a vibrant community of crypto enthusiasts dedicated to exploring and investing in the world of cryptocurrencies.
              We offer education, insights, and collaboration opportunities. Get started by creating your account and join our forums.
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
