import React from "react";
import s from "../Desktop.module.css";

class Body extends React.Component{

    body = this.props.body;
    editable = this.props.editable;

    refBody = React.createRef();

    onChangeBody = () => {
        let text = this.refBody.current.value;
        this.props.updateBody(text);
    };


    render = () => {

        this.body = this.props.body;
        this.editable = this.props.editable;
        if (this.body === '' || this.editable) {
            return (
                <div>
                    <div>
                        <p1>Введите основной текст</p1>
                    </div>
                    <textarea className={s.c_textaria}
                              value={this.body}
                              ref={this.refBody}
                              onChange={this.onChangeBody}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <p>{this.body}</p>
                </div>
            )
        }
    }

}

export default Body;