import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

const createPost = API.graphql({
  query: mutations.createPost,
  variables: { input: postDetails }
});

const listPosts = API.graphql({ query: queries.listPosts });

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={() => createPost({
        variables: {
          id: 2,
          name: "hola",
          description: 'Example post'
        }
      })}>Create example posy</button>
      <button onClick={console.log(listPosts)}>List posts</button>
    </main>
  );
}
