import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import MainContent from "./components/content/main/MainContent";

function App() {
    return (
        <div className="grid">
            {/*<HeaderContainer />*/}
            <NavbarContainer/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
