import React from 'react';
import HeaderButtonMenu from "./buttonmenu/HeaderButtonMenu";

class Header extends React.Component {

    desktopPage = this.props.desktopPage.desktopPage;
    descPage = this.props.descPage.descPage;
    notesPage = this.props.notesPage.notesPage;
    desktopEditable = this.props.desktopPage.desktopPage.editable;
    descEditable = this.props.descPage.descPage.editable;
    notesEditable = this.props.notesPage.notesPage.editable;

    updateEditables = (desktopEditable, descEditable, notesEditable) => {
        this.desktopPage.editable = desktopEditable;
        this.descPage.editable = descEditable;
        this.notesPage.editable = notesEditable;

        this.props.updateHeadEditable(this.desktopPage, this.descPage, this.notesPage)
    };


    render = () => {
        this.desktopPage = this.props.desktopPage.desktopPage;
        this.descPage = this.props.descPage.descPage;
        this.notesPage = this.props.notesPage.notesPage;
        this.desktopEditable = this.props.desktopPage.desktopPage.editable;
        this.descEditable = this.props.descPage.descPage.editable;
        this.notesEditable = this.props.notesPage.notesPage.editable;
        return (
            <HeaderButtonMenu
                addNewDesktop={this.props.addNewDesktop}
                updateEditables={this.updateEditables}
                desktopEditable={this.desktopEditable}
                descEditable={this.descEditable}
                notesEditable={this.notesEditable}
            />
        )
    }

}

export default Header;