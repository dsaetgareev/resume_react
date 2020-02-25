import React from "react";

class NavItem extends React.Component{

    constructor(props) {
        super(props);
        this.value = this.props.value;
    }

    toDesktop = () => {
        this.props.toDesktop(this.props.id)
    };

    render() {
        this.value = this.props.value;
        return (
            <div onClick={this.toDesktop}>{this.value}</div>
        )


    }
}

export default NavItem;