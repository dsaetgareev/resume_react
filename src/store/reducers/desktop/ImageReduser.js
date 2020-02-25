import ApiNote from "../../../api/ApiNote";
import ApiImage from "../../../api/ApiImage";

const SET_IMAGE_BY_ID = 'SET_IMAGE_BY_ID';
const UPDATE_IMAGE_TEXT = 'UPDATE_IMAGE_TEXT';

let initState = {
    id: 1,
    file: 'file',
    imagePreviewUrl: ''
};

const imageReducer = (state = initState, action = {}) => {

    switch (action.type) {

        case SET_IMAGE_BY_ID:
            let setImageCopyState = {...state};
            setImageCopyState.id = action.image.id;
            setImageCopyState.file = action.image.file;
            setImageCopyState.imagePreviewUrl = action.image.image;
            return setImageCopyState;
        case UPDATE_IMAGE_TEXT:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.file = action.file;
            updateEditableCopyState.imagePreviewUrl = action.imagePreviewUrl;
            if (!action.editable) {
                let imageSave={
                    id: updateEditableCopyState.id,
                    image: action.imagePreviewUrl
                };
                updateImage(imageSave);
            }
            return updateEditableCopyState;
        default:
            return state;

    }
};

let updateImage = (image) => {
    ApiImage.updateImage(image);
};

let setImage = (image) => ({type: SET_IMAGE_BY_ID, image: image});

export const getImageThunkCreator = (id) => {
    return (dispatch) => {
        ApiImage.getImageByRef(id).then(res => {
            dispatch(setImage(res.data));
        })
    }
};

export const updateImageTextActionCreator = (file, imagePreviewUrl) => {
    return {
        type: UPDATE_IMAGE_TEXT,
        file: file,
        imagePreviewUrl: imagePreviewUrl
    }
};


export default imageReducer;