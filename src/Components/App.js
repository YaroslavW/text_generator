import React, {Component} from 'react';

import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text:''
    }
  }

  componentWillMount(){
    this.getText();
  }

  getText(){
    axios.get('https://loripsum.net/api/4/short/headers')
      .then((response) => {
        this.setState({text: response.data.text}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render(){
    return (
      <div>
        My App
      </div>
    );
  }
}

export default App;
