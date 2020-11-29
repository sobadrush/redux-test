import React from 'react';
import logo from './logo.svg';
import redux01Pic from './assets/img/redux01.png';
import redux02Pic from './assets/img/redux02.png';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import FatherComponent from './components/FatherComponent'

import {counterReducer} from './reducers/counterReducer'

const store = createStore(counterReducer);

// React.Component<P, S>
// ref. https://devblog.xero.com/typescript-and-react-whats-react-component-p-s-mean-cfddc65f81e1
// ref. https://blog.csdn.net/qq_30101131/article/details/84799731
class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {

        console.log(`store.getState() = `, store.getState()); // 查看 store 的狀態

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={{ width: "5cm" }}/>
                    <img src={redux01Pic} alt="redux01.png"/><br/>
                    <img src={redux02Pic} alt="redux01.png"/><br/>

                    <Provider store={store}>
                        <FatherComponent testOwnProp="FuckYou"/>
                    </Provider>

                </header>
            </div>
        );
    }
}

export default App;
