import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Collection from './components/Collection';
import Offer from './components/Offer';
import Model from "./components/Model"
import NewArrival from './components/NewArrival';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import your Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay of 5 seconds (replace this with your actual initialization logic)
      await new Promise((resolve) => setTimeout(resolve, 5000));
      // Set loading to false once the delay is complete
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Section />
          <Collection />
          <Model />
          <Offer />
          <NewArrival />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
