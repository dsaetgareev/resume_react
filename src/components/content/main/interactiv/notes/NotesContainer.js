
import {connect} from "react-redux";
import Notes from "./Notes";
import {
    updateNotesEditableActionCreator,
    updateNotesTextActionCreator
} from "../../../../../store/reducers/desktop/NotesReducer";

let mapStateToPropsNotes = (state) => {

    return {
        notesPage: state.notesPage
    }
};
let mapDispatchToPropsNotes = (dispatch) => {
    return {
        updateNotes: (text, editable) => {
            dispatch(updateNotesTextActionCreator(text, editable));
        }
    };
};

let NotesContainer = connect(mapStateToPropsNotes,  mapDispatchToPropsNotes)(Notes);
export default NotesContainer;