import React from "react";

class LinkItem extends React.Component{

    id = this.props.id;
    selectedText = this.props.selectedText;

    render() {
        this.id = this.props.id;
        this.selectedText = this.props.selectedText;
        return (
            <a id={this.id} href='#'>{this.selectedText}</a>
        )
    }

}

export default LinkItem;