import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';


const postDetails = {
  id: 2,
  name: 'hola',
  description: 'Example post'
};

const createPost = await API.graphql({
  query: mutations.createPost,
  variables: { input: postDetails }
});

const listPosts = await API.graphql({ query: queries.listPosts });

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={createPost}>Create example post</button>
      <button onClick={console.log(listPosts)}>List posts</button>
    </main>
  );
}
