import React from 'react';
import './index.css'
import DebugContainer from './debugContainer'
import DebugHeader from './debugHeader'
import Overview from './overview'

const ReactDOM = require('react-dom');

export default class Debug extends React.Component {

	componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    // Modify the DOM here
  }
  
  componentWillReceiveProps(nextProps) {
    // new properties - update anything you need to update
  }

  shouldComponentUpdate() {
    return false;
  }



  // // When its closed
  // <DebugHeader />

  // // When its open
  // <div>
  // 	<DebugHeader>
  // 	<DebugContainer>
  // 		<Overview />
  // 		<Timeline />
  // 	</DebugContainer>
  // </div>




  render () {
    return (
      <div>
        <DebugHeader />
        <DebugContainer />
      </div>
    );
  };
};
