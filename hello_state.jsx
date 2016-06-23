import React from 'react';
import ReactDOM from 'react-dom';
import FindUS from './FindUS.jsx';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { RootReducer } from './reducers/RootReducers.jsx';
import { setInitialData } from './actions.jsx';

const initialData = {
  twitterLink: "twitter.com/hkoscon",
  facebookLink: "facebook.com/hkoscon"
};

const Store = createStore(RootReducer);
Store.dispatch(setInitialData(initialData));

const select = (state) => ({
  twitterLink: state.InitialData.twitterLink,
  facebookLink: state.InitialData.facebookLink
});


class HelloState extends React.Component {

   render() {
       return(
           <div>
               <h1>Hello World HKOSCon!!</h1>
               <FindUS
                  { ...this.props }
               />
           </div>
       );
   }
}

const HelloStateWrap = connect(select)(HelloState);

ReactDOM.render(
  <Provider store={Store}>
    <HelloStateWrap />
  </Provider>,
  document.getElementById('HKOSConState')
);