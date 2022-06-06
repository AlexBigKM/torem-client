import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import styles from './App.scss';


function App() {
    return (
        <div className={styles.app}>
            <NavBar/>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;
