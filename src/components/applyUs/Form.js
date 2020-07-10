import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const Form = ({ children }) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log("files", acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <form className="form-section-form" >
                    <div className="all-input-btn">
                        <p className="input-label">Name *</p>
                        <input type="text" name="" placeholder="Please enter your name" className="input-type form-control" />
                        <p className="input-label extra-mar-bt">Date of birth *</p>
                        <div className="input-group ">
                            <input type="text" className="form-control mydatepicker " placeholder="mm/dd/yyyy" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                            </div>
                        </div>
                        <p className="input-label extra-mar-tp">Gender *</p>
                        <select data-placeholder="Select Gender" className=" form-control input-type" >
                            <option value="male" data-icon="male"> Male</option>
                            <option value="female" data-icon="female"> Female</option>
                            <option value="other" data-icon="other"> Other</option>
                        </select>
                        <p className="input-label">Email *</p>
                        <input type="email" name="" placeholder="Enter email" className="input-type form-control" />
                        <p className="input-label">Phone number *</p>
                        <input type="text" name="" placeholder="Enter your phone number" className="input-type form-control" />
                        <p className="input-label">Where are you from? *</p>
                        <select data-placeholder="Country" className=" form-control input-type" >
                            <option value="malaysia" data-icon="malaysia"> Malaysia</option>
                        </select>
                        <p className="input-label">Attachments</p>
                        <div {...getRootProps()} style={{ height: "132px", border: "1px solid #E0E0E0", borderRadius: "2px" }}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p style={{textAlign: "center"}}>Drop the files here ...</p> :
                                    <p style={{textAlign: "center"}}>Drop files here or click to upload</p>
                            }
                        </div>
                        <p className="term-privacy">By submit this enquiry, you are agreeing to VRemote’s <a className="pointer">Terms of Service </a>and <a className="pointer">Privacy Policy</a>.</p>
                    </div>
                    <hr />
                    {children}
                </form>
            </div>
        </div>
    )
}

export default Form
