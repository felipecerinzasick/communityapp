import React, { useState } from 'react';

interface PostCreationProps {
  threadId: string;  // Assuming threadId is a string, update the type as needed
}

const PostCreation: React.FC<PostCreationProps> = ({ threadId }) => { 
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call an API or function to create the new post here using `content` and `threadId`

    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostCreation;
