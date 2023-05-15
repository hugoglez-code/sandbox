import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.attributes.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={() => API.graphql({
        query: mutations.createPost,
        variables: {
          input: {
            id: 2,
            name: "hola",
            description: 'Example post'
          } 
        },
        authMode: "AMAZON_COGNITO_USER_POOLS"
      })}>Create example post</button>
      <button onClick={() => {console.log(API.graphql({ query: queries.listPosts }))}}>List posts</button>
      <iframe
        width="1280"
        height="720"
        src={"https://www.youtube.com/embed/O8G9ytZg-bM"}
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
    </main>
  );
}
