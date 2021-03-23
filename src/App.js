import React, { Component } from 'react';
import Section from './components/Section/Section';
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <>
        <Section title={'Кинопоиск'}>{/* <Header /> */}</Section>

        <Section title={'Trending today'}>{/* <Main /> */}</Section>
      </>
    );
  }
}

export default App;
