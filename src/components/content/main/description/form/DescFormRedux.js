import {reduxForm} from "redux-form";
import DescriptionForm from "./DescriptionForm";


const DescFormRedux = reduxForm({
    form: 'descriptionForm',
    enableReinitialize: true
})(DescriptionForm);

export default DescFormRedux;