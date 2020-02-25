import ApiNote from "../../../api/ApiNote";

const ADD_NOTES = 'ADD_NOTES';
const SET_NOTE_BY_ID = 'SET_NOTE_BY_ID';
const UPDATE_NOTE_TEXT = 'UPDATE_NOTE_TEXT';

let initState = {
    id: 1,
    editable: true,
    desc: 'Введитеddd заметку'
};

const notesReducer = (state = initState, action = {}) => {

    switch (action.type) {
        case ADD_NOTES:
            let addCopyState = {
                notesPage: {
                    id: 1,
                    editable: true,
                    desc: 'Введите заметку'
                }
            };
            return addCopyState;
        case SET_NOTE_BY_ID:
            let setNoteCopyState = {...state};
            setNoteCopyState.id = action.note.id;
            setNoteCopyState.desc = action.note.text;
            setNoteCopyState.editable = false;
            return setNoteCopyState;
        case UPDATE_NOTE_TEXT:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.desc = action.newNotes;
            updateEditableCopyState.editable = action.editable;
            if (!action.editable) {
                let noteSave={
                    id: updateEditableCopyState.id,
                    text: action.newNotes
                };
                updateNote(noteSave);
            }
            return updateEditableCopyState;
        default:
            return state;

    }
};


let updateNote = (note) => {
    ApiNote.updateNote(note);
};

let setNote = (note) => ({type: SET_NOTE_BY_ID, note: note});

export const getNoteThunkCreator = (id) => {
    return (dispatch) => {
        ApiNote.getNoteByRef(id).then(res => {
            dispatch(setNote(res.data));
        })
    }
};

export const addNotesTextActionCreator = () => {
    return {
        type: ADD_NOTES
    }
};

export const updateNotesTextActionCreator = (newNotes, editable) => {
    return {
        type: UPDATE_NOTE_TEXT,
        newNotes: newNotes,
        editable: editable
    }
};


export default notesReducer;