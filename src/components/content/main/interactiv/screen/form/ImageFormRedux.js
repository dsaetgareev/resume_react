import {reduxForm} from "redux-form";
import ImageUpload from "../ ImageUpload";


const ImageFormRedux = reduxForm({
    form: 'imageForm',
    enableReinitialize: true
})(ImageUpload);

export default ImageFormRedux;