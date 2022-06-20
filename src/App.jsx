import React, {useRef} from "react";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import styles from './App.css';


function App() {
    let scrollToContacts = useRef(null);
    const onClickScrollTo = () => {
        scrollToContacts.current.scrollIntoView();
        console.log(scrollToContacts)
    }
    return (
        <div className={styles.app}>
            <NavBar onClickContacts={onClickScrollTo} />
            <HomePage contactsRef={scrollToContacts} />
            <Footer />
        </div>
    );
}

export default App;
