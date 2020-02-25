import React from "react";

class ImageUpload extends React.Component {

    change = false;

    constructor(props) {
        super(props);
        this.state = {
            file: this.props.imagePage.file,
            imagePreviewUrl: this.props.imagePage.imagePreviewUrl
        };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
        this.props.updateImage(this.state.file, this.state.imagePreviewUrl)
    }

    _handleImageChange(e) {
        e.preventDefault();
        debugger
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.change = true;
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file)
    }

    render() {
        if (!this.change) {
            this.state.file = this.props.imagePage.file;
            this.state.imagePreviewUrl = this.props.imagePage.imagePreviewUrl;
        }
        this.change = false;
        debugger
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<img src='../../../../../logo192.png' />);
        }

        return (
            <div className="previewComponent">
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput"
                           type="file"
                           onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton"
                            type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>Сохранить</button>
                </form>
            </div>
        )
    }
}

export default ImageUpload;