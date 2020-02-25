import React from "react";
import Content from "../Content";
import Interactiv from "./interactiv/Interactiv";
import s from './MainContent.module.css'

class MainContent extends React.Component{

    render() {
        return (
            <div className={s.main}>
                <Content/>
                <Interactiv/>
            </div>

        )
    }

}

export default MainContent;