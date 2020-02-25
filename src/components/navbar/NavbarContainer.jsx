import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {getResumeThunkCreator, updateDesktopActionCreator} from "../../store/reducers/desktop/DesktopReducer";
import {getTitlesThunkCreator} from "../../store/reducers/nav/NavbarReducer";

let mapStateToProps = (state) => {
    return {
        titles: state.titles,
        state: state
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        toDesktop: (id) => {
            dispatch(getResumeThunkCreator(id))
        },
        getTitlesThunkCreator: () => {
            dispatch(getTitlesThunkCreator())
        }
    }
};

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;