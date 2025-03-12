import { useState } from "react";
import { Post } from "../types/post";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  return { posts, addPost: (post: Post) => setPosts([...posts, post]) };
}
