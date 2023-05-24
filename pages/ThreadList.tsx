import React from 'react';
import Thread from './Thread';

const ThreadList = ({ threads }) => (
  <div className="space-y-5">
    {threads.map((thread) => <Thread key={thread.id} thread={thread} />)}
  </div>
);

export default ThreadList;
