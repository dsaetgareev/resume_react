import {connect} from "react-redux";
import Screen from "./Screen";
import {updateImageTextActionCreator} from "../../../../../store/reducers/desktop/ImageReduser";

let mapStateToPropsImage = (state) => {

    return {
        imagePage: state.imagePage
    }
};
let mapDispatchToPropsImage = (dispatch) => {
    return {
        updateImage: (file, image) => {
            dispatch(updateImageTextActionCreator(file, image));
        }
    };
};

let ImageContainer = connect(mapStateToPropsImage,  mapDispatchToPropsImage)(Screen);
export default ImageContainer;