import {reduxForm} from "redux-form";
import DescriptionForm from "../../../description/form/DescriptionForm";


const NoteFormRedux = reduxForm({
    form: 'noteForm',
    enableReinitialize: true
})(DescriptionForm);

export default NoteFormRedux;