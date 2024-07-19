import React, {useRef} from 'react';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {
    let scrollToRef = useRef(null);
    const onClickScrollTo = () => {
        scrollToRef.current.scrollIntoView();
    }
    return (
        <>
            <NavBar onClickContacts={onClickScrollTo}/>
            <HomePage contactsRef={scrollToRef}/>
            <Footer/>
        </>
    );
}

export default App;
