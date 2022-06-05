import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
