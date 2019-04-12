

## Walkthrough


- 1. Create React App

- 2. Add own markup in App.js

- 3. Install Apollo Client following the official docs

    - 3.1 install dependencies

        ```bash

        npm install apollo-boost react-apollo graphql --save

        ```

    - 3.2 Create Apollo Client in app

        ```Javascript

        import ApolloClient from "apollo-boost";

        const client = new ApolloClient({
        uri: "https://48p1r2roz4.sse.codesandbox.io"
        });
        

        ```

    - 3.3 Connect React App with Apollo Provider 

        ** In App.js:**

        ```Javascript

            import { ApolloProvider } from "react-apollo";

            const App = () => (
            <ApolloProvider client={client}>
                
                ...

            </ApolloProvider>
            );

            render(<App />, document.getElementById("root"));

        ```
