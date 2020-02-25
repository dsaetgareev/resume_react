import React from "react";

class DescMenu extends React.Component{

    editable = this.props.editable;


    render = () => {
        this.editable = this.props.editable;
        if (!this.editable) {
            return (
                <div>
                    <button>Редактировать</button>
                </div>
            )
        }
        return (
            <div>
                <button>Сохранить</button>
            </div>
        )

    }


}

export default DescMenu;