import React from "react";

class TextItem extends React.Component{

    textValue = this.props.textValue;
    id = '';
    value = '';

    createMarkUp = () => {
        return {__html: this.textValue}
    };
    onclick = () => {
        alert(this.id);
    };

    getDescription = () => {
        this.props.getDescription(this.id);
    };

    render() {
        this.textValue = this.props.textValue;
        if (this.textValue.match('id=|')) {
            let arr = this.textValue.split('|');
            this.id = arr[1];
            this.value = arr[2];
            if (arr.length === 3) {
                return (
                    <a href = '#' onClick={this.getDescription}>{this.value}</a>
                )
            }else  {
                return (
                    <span>{this.textValue}</span>

                )
            }

        }

    }

}

export default TextItem;