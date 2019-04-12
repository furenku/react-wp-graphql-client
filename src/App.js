import React, { Component } from 'react';
import logo from './logo.svg';

import { ApolloProvider } from "react-apollo";


class App extends Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
        <div className="App">
      
          <h1>
            WPGraphQL + React/Apollo
          </h1>

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
