import { useQuery } from "@apollo/client";
import PostForm from "../components/Post/PostForm";
import Posts from "../components/Post/Posts";
import { GET_ALL_POSTS } from "../utilities/graphql_queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <PostForm />
      <Posts posts={data.allPosts} />
    </>
  );
}
