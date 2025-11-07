
import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Categories from './src/components/Categories';
import ContactForm from './src/components/ContactForm';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-vilera-blue font-roboto overflow-x-hidden">
      <Header />
      <main>
        <div className="relative pt-16 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-10">
            <Hero />
        </div>
        <div className="px-4 sm:px-6 lg:px-10 py-16 md:py-24">
            <About />
        </div>
         <div className="px-4 sm:px-6 lg:px-10 py-16 md:py-24">
            <Categories />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-10 py-16 md:py-24">
            <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
