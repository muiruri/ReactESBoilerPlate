import React from 'react';
import { Provider } from 'react-redux'

import TokenContainer from './containers/TokenContainer'
import appStore from './store'

import { PersistGate } from 'redux-persist/lib/integration/react'

const { store, persistor} = appStore({})
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Provider store={ store }>
        <PersistGate persistor={ persistor } store={ store } >
          <div>
            <TokenContainer />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
