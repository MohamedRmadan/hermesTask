import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      {/* provider for reudxt */}
      <Provider store={store}>
        {/* APP HEADER */} 
        <Header/>
        {/* APP BODY */}
        <SearchResult/>
        {/* APP FOOTER */}
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
