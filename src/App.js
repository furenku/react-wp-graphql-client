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
          
        if( !! data.posts && !! data.posts.edges ) {

          const renderPosts = data.posts.edges.map(({ node }) => {            
            return (
              <article key={ node.id }>
                <h4>{ node.title }</h4>
                <p>{ node.date }</p>
                <p>{ node.excerpt }</p>
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
