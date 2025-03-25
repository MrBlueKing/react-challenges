import React from 'react';
import Header from '../Components/Common/Header';
import Main from '../Components/Common/Main';
import Footer from '../Components/Common/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header text="Retos Fáciles" />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
