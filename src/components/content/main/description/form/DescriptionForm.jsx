import React from "react";
import {Field} from "redux-form";
import {TextareaForm} from "../../../form/desktop/TextareaForm";
import s from '../Description.module.css';
import DescMenu from "../descmenu/DescMenu";
import {DescTextareaFrom} from "../../../form/description/DescTextareaForm";


class DescriptionForm extends React.Component {

    editable = this.props.initialValues.editable;
    desc = this.props.initialValues.desc;

    setContent = () => {
        return (

            <Field placeholder={"ВВедите текст"}
                   component={DescTextareaFrom}
                   name={"desc"}
                   editable={this.editable}
            />
        )
    };


    render() {
        this.editable = this.props.initialValues.editable;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        {this.setContent()}
                    </div>
                    <div>
                        <DescMenu editable={this.props.initialValues.editable} className={s.menu}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default DescriptionForm;