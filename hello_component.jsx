import React from 'react';
import ReactDOM from 'react-dom';
import FindUS from './FindUS.jsx';

class HelloComponent extends React.Component {
   render() {
       return(
           <div>
               <h1>Hello World HKOSCon!!</h1>
               <FindUS
                   twitterLink="twitter.com/hkoscon"
                   facebookLink="facebook.com/hkoscon"
               />
           </div>
       );
   }
}


ReactDOM.render(<HelloComponent/>, document.getElementById('HKOSConComponent'));
