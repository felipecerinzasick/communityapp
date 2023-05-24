import React from 'react';
import Threads from './Threads';
import Header from '../components/Header';
import Footer from '../components/Footer';


const sampleThreads = [
  { id: 1, title: 'Thread 1', content: 'This is thread 1' },
  { id: 2, title: 'Thread 2', content: 'This is thread 2' },
  // Add more threads as necessary
];

const Community = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-4xl font-bold mb-5">Community Forum</h1>
      <Threads threads={sampleThreads} />
    </main>
    <Footer />
  </div>
);

export default Community;
