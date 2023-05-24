import React from 'react';

const ThreadDetail = ({ thread }) => (
  <div className="border p-5 mb-5 bg-white text-purple-700 rounded">
    <h2 className="text-2xl font-bold mb-3">{thread.title}</h2>
    <p>{thread.content}</p>
  </div>
);

export default ThreadDetail;
