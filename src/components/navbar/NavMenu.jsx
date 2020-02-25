import React from "react";

class NavMenu extends React.Component{

    addItem() {

    }

    render() {
        return (
            <menu>
                <button onClick={this.addItem}>Добавить</button>
            </menu>
        )
    }

}

export default NavMenu;