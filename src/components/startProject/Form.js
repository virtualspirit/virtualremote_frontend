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
                        <p className="input-label">Company Name<span>(optional)<span /></span></p>
                        <input type="text" name="" placeholder="Enter your company name" className="input-type form-control" />
                        <p className="input-label">Email *</p>
                        <input type="email" name="" placeholder="Enter your email" className="input-type form-control" />
                        <p className="input-label">Phone number *</p>
                        <input type="text" name="" placeholder="Enter your phone number" className="input-type form-control" />
                        <p className="input-label extra-mar-tp">Industry *</p>
                        <select data-placeholder="Select Industry " className=" form-control input-type" >
                            <option value="property" data-icon="property"> Property</option>
                        </select>
                        <p className="input-label">Where are you from? *</p>
                        <select data-placeholder="Country" className=" form-control input-type" >
                            <option value="malaysia" data-icon="malaysia"> Malaysia</option>
                        </select>
                        <p className="input-label">Estimated budget *</p>
                        <select data-placeholder="Estimated budget" className=" form-control input-type">
                            <option value="budget" data-icon="budget"> $10,000 - $20,000</option>
                        </select>
                        <p className="input-label">Describe your project *</p>
                        <textarea className="form-section-txtarea-2 no-resize" placeholder="Please tell us about your current project..." cols={30} rows={5} defaultValue={""} />
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
