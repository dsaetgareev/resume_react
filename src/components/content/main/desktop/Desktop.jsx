import React from "react";
import s from './Desktop.module.css'
import DesktopFormRedux from "./form/DesktopFormRedux";

class Desktop extends React.Component{

    title = this.props.desktopPage.title;
    content = this.props.desktopPage.content;
    editable = this.props.desktopPage.editable;
    id = this.props.desktopPage.id;

    onSubmit = (formData) => {
        let newEditable = !formData.editable;
        this.props.updateEditable(formData.title, formData.content, newEditable);
        this.props.getTitlesThunkCreator();
    };

    render =() => {
        this.title = this.props.desktopPage.title;
        this.content = this.props.desktopPage.content;
        this.editable = this.props.desktopPage.editable;
        return (
            <div className={s.desktop}>
                <div>
                    <DesktopFormRedux onSubmit={this.onSubmit}
                                      initialValues={this.props.desktopPage}
                                      getTitlesThunkCreator={this.props.getTitlesThunkCreator}
                                      getDescription={this.props.getDescription}
                    />
                </div>
            </div>
        );
    }

}

export default Desktop;