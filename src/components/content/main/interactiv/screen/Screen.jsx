import React from "react";
import s from './Screen.module.css'
import ImageUpload from "./ ImageUpload";

class Screen extends React.Component{

    render() {
        let p = this.props.imagePage;
        return (
            <div className={s.screen}>
                <ImageUpload imagePage={p}
                             updateImage={this.props.updateImage}
                />
            </div>
        )
    }

}

export default Screen;