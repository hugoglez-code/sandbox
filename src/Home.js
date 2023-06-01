import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import axios from "axios";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

export function Home() {
  const { signOut, user } = useAuthenticator();
  const APIUrl = "https://aqsneed4l3.execute-api.us-east-1.amazonaws.com/prod/php-lambda";
  const myInit = {
    body: {
      "user": "hugoglez"
    },
    headers: {}
  }
  function PhpLambda() {
    axios.post(APIUrl, {
      body: {
        "user": "hugoglez"
      },
    })
  }

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
      <button onClick={console.log(PhpLambda)}>PHP Lambda</button>
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
