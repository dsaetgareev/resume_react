import React from 'react';
import s from './Navbar.module.css'
import NavItem from "./NavItem";

class Navbar extends React.Component{

    state = {
        titles:[],
        items: []
    };

    constructor(props) {
        super(props);

    }

    componentDidMount = () => {
        this.props.getTitlesThunkCreator();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state.titles = this.props.titles.titles;
        this.state.items = this.state.titles.map((item) => <NavItem key={item.resumeId}
                                                                    id={item.resumeId}
                                                                    value={item.title}
                                                                    toDesktop={this.toDesktop}/>);
    }

    toDesktop = (id) => {
        this.props.toDesktop(id);
    };

    getPageState = (id, pages) => {
        let temp;
        for (let item of pages) {
            if (item.descPage.id + '' === id) {
                temp = item;
                break;
            }
        }
        return temp;
    };

    renderItems = () => {
        this.state.titles = this.props.titles.titles;
        this.state.items = this.state.titles.map((item) => <NavItem key={item.resumeId}
                                                                    id={item.resumeId}
                                                                    value={item.title}
                                                                    toDesktop={this.toDesktop}/>);
    };

    render = () => {
        this.renderItems();
        return (
            <nav className={s.sidebar}>
                {this.state.items}
            </nav>
        )
    }

}

export default Navbar;