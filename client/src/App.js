import React, { Component } from 'react';
import Input from './components/input/Input';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import './app.css'
import Main from './components/main/Main';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


class App extends Component {

  render() {
    return (
      <ApolloProvider client={client} >
        <Main />
      </ApolloProvider>
    );
  }
}

export default App;
