import React, {useRef} from "react";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import styles from './App.css';


function App() {
    let scrollToRef = useRef(null);
    const onClickScrollTo = () => {
        scrollToRef.current.scrollIntoView();
        console.log(scrollToRef)
    }
    return (
        <div className={styles.app}>
            <NavBar onClickContacts={onClickScrollTo}/>
            <HomePage contactsRef={scrollToRef}/>
            <Footer/>
        </div>
    );
}

export default App;
