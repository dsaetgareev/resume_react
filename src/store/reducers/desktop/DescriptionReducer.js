import ApiResume from "../../../api/ApiResume";
import ApiDescription from "../../../api/ApiDescription";

const ADD_DESC = 'ADD_DESC';
const UPDATE_DESC_TEXT = 'UPDATE_DESC_TEXT';
const CHANGE_DESC_EDITABLE = 'CHANGE_DESC_EDITABLE';

const SET_DESC_BY_ID = 'SET_DESC_BY_ID';

let initState = {
    id: 1,
    editable: true,
    desc: 'Введите описание объекта'
};

const descriptionReducer = (state = initState, action = {}) => {

    switch (action.type) {
        case ADD_DESC:
            let addCopyState = {
                descPage: {
                    id: 1,
                    editable: true,
                    desc: 'Введите описание'
                }
            };
            return addCopyState;
        case SET_DESC_BY_ID:
            let setDescCopyState = {...state};
            setDescCopyState.id = action.desc.id;
            setDescCopyState.desc = action.desc.text;
            setDescCopyState.editable = false;
            return setDescCopyState;
        case UPDATE_DESC_TEXT:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.desc = action.newDesc;
            updateEditableCopyState.editable = action.editable;
            if (!action.editable) {
                let descSave={
                    id: updateEditableCopyState.id,
                    text: action.newDesc
                };
                updateDesc(descSave);
            }
            return updateEditableCopyState;
        default:
            return state;

    }
};

let updateDesc = (desc) => {
    ApiDescription.updateDesc(desc);
};

let setDesc = (desc) => ({type: SET_DESC_BY_ID, desc: desc});

export const getDescThunkCreator = (id) => {
    return (dispatch) => {
        ApiDescription.getDescByRef(id).then(res => {
            dispatch(setDesc(res.data));
        })
    }
};

export const addDescTextActionCreator = () => {
    return {
        type: ADD_DESC
    }
};
export const updateDescTextActionCreator = (newDesc, editable) => {
    return {
        type: UPDATE_DESC_TEXT,
        newDesc: newDesc,
        editable: editable
    }
};
export const updateDescEditableActionCreator = (newDesc, editable) => {
    return {
        type: CHANGE_DESC_EDITABLE,
        newDesc: newDesc,
        newEditable: editable
    }
};

export default descriptionReducer;