import React, {Component} from 'react';
import Welcome from './components/admin/Welcome';
import {Router, navigate} from '@reach/router';
import firebase from './Firebase';

import ProductAdmin from './components/admin/ProductAdmin';

import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  constructor (){
    super();

    this.state = {
      user: null
    };
  }

  componentDidMount() {

    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();

      this.setState({user: FBUser});
    });
  }

  render(){
  return (
    <div className="App">
      <Welcome user = {this.state.user} />
      {/* <ProductAdmin /> */}
    </div>
  );
  }
}

export default App;
