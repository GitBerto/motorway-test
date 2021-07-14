import React, { useEffect, useState } from 'react';
import './App.css';
import CarListPage from './components/pages/Carlist'
import themeStyles from './styles/theme.module.css';

const App = () => {
  const [images, setImages] = useState();
 
  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <header className={themeStyles.header}>
        <h1 className={themeStyles.h1}>Motorway UI test App - Alberto Russo</h1>
      </header>
      <main className={themeStyles.bodyContent}>
        <CarListPage images={images} />
      </main>
    </div>
  );
}

export default App;
