

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


4. Connect to WP

    - 4.1 Create .env file in project root
    - 4.2 Add GraphQL API URL as env var: (REACT_APP_ prefix is important)
    
    ```bash

    REACT_APP_GRAPHQL_API=http://localhost/pulsar/graphql


    ```

    - 4.3 Add env variable to client:

    ```Javascript

    const client = new ApolloClient({
        uri: process.env.REACT_APP_GRAPHQL_API
    });

    ```


- 5. Add First Query


    ```Javascript



        import React, { Component } from 'react';

        import { ApolloProvider, Query } from "react-apollo";
        import gql from "graphql-tag";


        const Posts = () => (
        <Query
            query={gql`query GET_POSTS {
            posts {
                edges {
                node {
                    id
                    title
                    date
                    excerpt
                }
                }
            }
            }
            
        `}
        >

            {
            ({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                console.log(data.posts.edges);
                
                const renderPosts = data.posts.edges.map(({ node }) => {

                const {
                    id, title, date, excerpt
                } = { ... node }
                return (
                <article key={id}>
                    <h4>{title}</h4>
                    <p>{date}</p>
                    <p>{excerpt}</p>
                </article>
                )
            });
            
                return (
                <section className="Posts">
                    { renderPosts }
                </section>
                )
            }
            }

        </Query>
        );


        class App extends Component {
        render() {
            return (
            <ApolloProvider client={this.props.client}>
                <div className="App">
            
                <h1>
                    WPGraphQL + React/Apollo
                </h1>

                <Posts/>

                </div>
            </ApolloProvider>
            );
        }
        }

        export default App;



    ```
