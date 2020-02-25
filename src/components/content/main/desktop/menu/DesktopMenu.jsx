import React from "react";
import s from './DesktopMenu.modules.css'

class DesktopMenu extends React.Component{
    editable = this.props.editable;

    render = () => {
        this.editable = this.props.editable;
        if (!this.editable) {
            return (
                <div className={s.menu}>
                    <button>Редактировать</button>
                </div>
            )
        }
        return (
            <div className={s.menu}>
                <button>Сохранить</button>
            </div>
        )

    }

}

export default DesktopMenu;