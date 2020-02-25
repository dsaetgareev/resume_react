import React from 'react';
import s from './Interactiv.module.css'
import NotesContainer from "./notes/NotesContainer";
import ImageContainer from "./screen/ImageContainer";


class Interactiv extends React.Component{

    render() {
        return (
            <div className={s.interactive}>
                <ImageContainer/>
                <NotesContainer />
            </div>

        )
    }

}

export default Interactiv;