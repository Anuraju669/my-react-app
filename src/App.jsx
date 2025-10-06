import React from 'react';     
import Calltoaction from './components/Calltoaction';
import Footer from './components/Footer';
import Header from './components/Header';
import Speakers from './components/Speakers';
import Eventsdetails from './components/Eventsdetails';
import Schedule from './components/schedule';

 function App() {
  return (
    <div className="App">
      <Header />
      <Calltoaction />
      <Speakers />
      <Eventsdetails />
      <Schedule />
      <Footer />
    </div>
  );
}
export default App;
