
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './Global/css/App.css';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    
    return (
      <div className="App">
        <Header title="Codejobs" items={items}/>
        <Content body={children} />
        <Footer copyright="&copy; Yasser React 2018"/>
      </div>
    );
  }
}

export default App;
