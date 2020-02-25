import React from 'react';
import s from './Content.module.css'
import DesktopContainer from "./main/desktop/DesktopContainer";
import DescriptionContainer from "./main/description/DescriptionContainer";

class Content extends React.Component{

    render() {
        return (
            <div className={s.content}>
                <DesktopContainer/>
                <DescriptionContainer/>
            </div>
        )
    }
}
export default Content;