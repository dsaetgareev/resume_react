import React from 'react'

const ADD_PAGE = 'ADD_PAGE';
const GET_PAGES = 'GET_PAGES';

let pages = [
    {
        descPage: {
            id: 1,
            editable: true,
            desc: 'Введите описание объекта'
        },
        desktopPage: {
            id: 1,
            editable: true,
            heading: 'Заголовок',
            body: 'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить ...'

        },
        notesPage: {
            id: 1,
            editable: true,
            notes: 'Введите заметку'
        },
        navPage: {
            navItem: {
                id: '1',
                name: 'testing'
            },

        }

    }
];


let dataBaseReducer = (state = pages, action) => {
    switch (action.type) {
        case ADD_PAGE:
            const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
            let copyState = [...state];
            let temp = {
                descPage: action.descPage,
                desktopPage: action.desktopPage,
                notesPage: action.notesPage,
                navPage: {
                    navItem: {
                        id: action.desktopPage.id,
                        name: action.desktopPage.heading
                    }
                }
            };
            temp.desktopPage.id = id;
            temp.descPage.id = id;
            temp.notesPage.id = id;
            temp.navPage.navItem.id = id;
            if (!copyState.find((item) => item.navPage.navItem.name === action.desktopPage.heading)) {
                copyState.push(temp);
            }
            return copyState;

        default:
            return state;

    }

}


export const addPageActionCreator = (desktopState, descState, notesState) => {
    return {
        type: ADD_PAGE,
        desktopPage: desktopState,
        descPage: descState,
        notesPage: notesState
    }
};



    //
    // getPages() {
    //     return this.pages;
    // }
    //
    // getPage(name) {
    //     return this.pages.find((item) => item.desktopPage.heading === name);
    // }
    //
    // addPage(page) {
    //     page.navPage.navItems = {id: page.desktopPage.id, name: page.desktopPage.heading};
    //     this.pages.push({...page});
    //
    // }


export default dataBaseReducer;
