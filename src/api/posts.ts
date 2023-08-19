import { Post } from "../../typings";

export const getPosts = (): Promise<Post[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data: Post[]) => {
      return data && data;
    });
};
