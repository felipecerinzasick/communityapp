import React, { useState } from 'react';

// Define what properties you expect in a 'post' object
interface PostProps {
  id: string;
  title: string;
  content: string;
  // Add other properties as needed
}

// Use the defined interface in your function component
const Post = ({ post }: { post: PostProps }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Rest of your component code...




  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div>
      <p>{post.content}</p>
      <button onClick={handleLike}>Like {likes}</button>
      <button onClick={handleDislike}>Dislike {dislikes}</button>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
