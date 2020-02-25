import {reduxForm} from "redux-form";
import DesktopForm from "./DesktopForm";


const DesktopFormRedux = reduxForm({
    form: 'desktopForm',
    enableReinitialize: true
})(DesktopForm);

export default DesktopFormRedux;