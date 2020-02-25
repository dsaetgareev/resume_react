import React from "react";
import s from './Heading.module.css'

class Heading extends React.Component{

    state = {
        heading: this.props.heading,
        editable: this.props.editable
    };
    heading = this.props.heading;
    editable = this.props.editable;

    onChangeHeading = (e) => {
        this.props.updateHeading(e.currentTarget.value);
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        this.props.getTitlesThunkCreator();
    };

    render = () => {
        this.state.heading = this.props.heading;
        this.state.editable = this.props.editable;
        if (this.state.heading === '' || this.state.editable) {
            return (
                <div>
                    <div className={s.heading}>
                        <h1>Введите заголовок</h1>
                    </div>
                    <input type='text' value={this.state.heading}
                           onChange={this.onChangeHeading}
                           />
                </div>
            )
        } else {
            return (
                <h1>
                    {this.props.heading}
                </h1>
            )
        }
    }

}

export default Heading;