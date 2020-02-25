import React from 'react'
import s from "../Header.module.css";

class HeaderButtonMenu extends React.Component {

    desktopEditable = this.props.desktopEditable;
    descEditable = this.props.descEditable;
    notesEditable = this.props.notesEditable;

    updateEditables = () => {
        this.desktopEditable = false;
        this.descEditable = false;
        this.notesEditable = false;
        this.props.updateEditables(this.desktopEditable, this.descEditable, this.notesEditable)
    };

    addNewDesktop = () => {
        this.props.addNewDesktop();
    };

    render = () => {

        return (
            <header className={s.header}>
                <div>
                    <button onClick={this.updateEditables}>Сохранить</button>
                    <button onClick={this.addNewDesktop}>Добавить</button>
                </div>
            </header>
        )
    }

}

export default HeaderButtonMenu;