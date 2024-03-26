import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from'./Components/Home';
import NewsFeed from './Components/NeesFeed';
import Favorites from './Components/Favorites';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Login />
        <Home />
        <NewsFeed />
        <Favorites />
      </main>
      <Footer />
    </div>
  );
}

export default App;
