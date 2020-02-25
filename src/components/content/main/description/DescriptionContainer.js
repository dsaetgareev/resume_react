import {
    updateDescEditableActionCreator,
    updateDescTextActionCreator
} from "../../../../store/reducers/desktop/DescriptionReducer";
import {connect} from "react-redux";
import Description from "./Description";

let mapStateToPropsDesc = (state) => {
    return {
        descPage: state.descPage
    }
};
let mapDispatchToPropsDesc = (dispatch) => {
    return {
        updateDesc: (text, editable) => {
            dispatch(updateDescTextActionCreator(text, editable));
        },
        updateDescEditable: (newDesc, editable) => {
            dispatch(updateDescEditableActionCreator(newDesc, editable));
        }
    };
};

let DescriptionContainer = connect(mapStateToPropsDesc, mapDispatchToPropsDesc)(Description);
export default DescriptionContainer