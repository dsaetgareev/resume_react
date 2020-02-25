import ApiResume from "../../../api/ApiResume";
import {getTitlesThunkCreator} from "../nav/NavbarReducer";

const ADD_DESKTOP = 'ADD_DESKTOP';
const UPDATE_HEADING_TEXT = 'UPDATE_HEADING_TEXT';
const UPDATE_BODY_TEXT = 'UPDATE_BODY_TEXT';
const CHANGE_EDITABLE = 'CHANGE_EDITABLE';
const UPDATE_DESKTOP = 'UPDATE_DESKTOP';
const SET_RESUME_BY_ID = 'SET_RESUME_BY_ID';

let initState = {
        id: 1,
        editable: false,
        title: 'Заголовок',
        content: 'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить ...'

    };

const desktopReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD_DESKTOP:
            let addCopyState = {
                desktopPage: {
                    id: 0,
                    editable: true,
                    heading: 'Введите заголовок',
                    body: 'Введите тексе'
                }
            };
            return addCopyState;
        case CHANGE_EDITABLE:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.title = action.title;
            updateEditableCopyState.content = action.content;
            updateEditableCopyState.editable = action.editable;
            if (!action.newEditable) {
                let resumeSave={
                    id: updateEditableCopyState.id,
                    title: action.title,
                    content: action.content
                };
                updateResume(resumeSave);
            }
            return updateEditableCopyState;
        case SET_RESUME_BY_ID:
            let setDesktopCopyState = {...state};
            setDesktopCopyState.id = action.resume.id;
            setDesktopCopyState.title = action.resume.title;
            setDesktopCopyState.content = action.resume.content;
            setDesktopCopyState.editable = false;
            return setDesktopCopyState;
        default:
            return state;

    }
};

let updateResume = (resume) => {
    ApiResume.updateResume(resume);
};

let setResume = (resume) => ({type: SET_RESUME_BY_ID, resume: resume});

export const getResumeThunkCreator = (id) => {
    return (dispatch) => {
        ApiResume.getResumeById(id).then(res => {
            dispatch(setResume(res.data));
        })
    }
};

export const addTextActionCreator = () => {
    return {
        type: ADD_DESKTOP
    }
};

export const updateHeadingTextActionCreator = (text) => {
    return {
        type: UPDATE_HEADING_TEXT,
        newText: text
    }
};

export const updateBodyTextActionCreator = (text) => {
    return {
        type: UPDATE_BODY_TEXT,
        newText: text
    }
};

export const updateEditableActionCreator = (title, content, editable) => {
    return {
        type: CHANGE_EDITABLE,
        title: title,
        content: content,
        editable: editable
    }
};

export const updateDesktopActionCreator = (state) => {
    return {
        type: UPDATE_DESKTOP,
        state: state
    }
};

export default desktopReducer;