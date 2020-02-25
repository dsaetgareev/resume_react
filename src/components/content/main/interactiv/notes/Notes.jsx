import React from "react";
import DescBody from "../../description/descbody/DescBody";
import s from './Notes.module.css'
import DescMenu from "../../description/descmenu/DescMenu";
import DescFormRedux from "../../description/form/DescFormRedux";
import NoteFormRedux from "./form/NoteFormRedux";

class Notes extends React.Component{

    title = 'Заметки:';

    onSubmit = (formData) => {
        let newEditable = !formData.editable;
        this.props.updateNotes(formData.desc, newEditable);
    };

    render = () => {
        return (
            <div className={s.notes}>
                <NoteFormRedux onSubmit={this.onSubmit}
                               initialValues={this.props.notesPage}
                />
            </div>

        )
    }
}

export default Notes;