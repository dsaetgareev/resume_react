import ApiResume from "../../../api/ApiResume";
import NavItem from "../../../components/navbar/NavItem";
import React from "react";


const ADD_NAV_ITEM = 'ADD_NAV_ITEM';
const UPDATE_TEXT = 'UPDATE_TEXT';
const SET_TITLES = 'SET_TITLES';

let initState = {
    titles: [
        {
            titleId:'1',
            titleName: 'testing'
        }
    ]
};

const navReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_TITLES:
            let setTitlesStateCopy = {...state};
            setTitlesStateCopy.titles = action.titles;
            return setTitlesStateCopy;
        case ADD_NAV_ITEM:
            let item =
                {
                    id: '2',
                    name: action.name

                };
            let addCopyState = {...state};
            addCopyState.navPage.navItems = [...state.navPage.navItems];
            addCopyState.navPage.navItems.push(item);
            return addCopyState;
        default:
            return state;

    }
};

let setTitles = (titles) => ({type: SET_TITLES, titles});

export const addNavItemActionCreator = (name) => {
    return {
        type: ADD_NAV_ITEM,
        name: name
    }
};

export const getTitlesThunkCreator = () => {
    return (dispatch) => {
        ApiResume.getTitles().then(res => {
            dispatch(setTitles(res.data))
        })
    }
};

export default navReducer;