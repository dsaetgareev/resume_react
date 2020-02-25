import Desktop from "./Desktop";
import {connect} from "react-redux";
import {
    updateBodyTextActionCreator, updateEditableActionCreator,
    updateHeadingTextActionCreator
} from "../../../../store/reducers/desktop/DesktopReducer";
import {getTitlesThunkCreator} from "../../../../store/reducers/nav/NavbarReducer";
import {getDescThunkCreator} from "../../../../store/reducers/desktop/DescriptionReducer";
import {getNoteThunkCreator} from "../../../../store/reducers/desktop/NotesReducer";
import {getImageThunkCreator} from "../../../../store/reducers/desktop/ImageReduser";

let mapStateToProps = (state) => {
    return {
        desktopPage: state.desktopPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateHeading: (text) => {
            dispatch(updateHeadingTextActionCreator(text));
        },
        updateBody: (text) => {
            dispatch(updateBodyTextActionCreator(text));
        },
        updateEditable: (headingText, bodyText, editable) => {
            dispatch(updateEditableActionCreator(headingText, bodyText, editable));
        },
        getTitlesThunkCreator: () => {
            dispatch(getTitlesThunkCreator())
        },
        getDescription: (id) => {
            dispatch(getDescThunkCreator(id));
            dispatch(getNoteThunkCreator(id));
            dispatch(getImageThunkCreator(id));
        }
    };
};


let DesktopContainer = connect(mapStateToProps, mapDispatchToProps)(Desktop);

export default DesktopContainer;