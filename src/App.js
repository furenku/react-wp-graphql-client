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
