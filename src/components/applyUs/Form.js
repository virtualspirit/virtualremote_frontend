import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';


const Form = ({ children }) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log("files", acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
        }

        if (!values.dob) {
            errors.dob = 'Required';
        } else if (!/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(values.dob)) {
            errors.dob = 'Invalid date';
        }

        if (!values.gender) {
            errors.gender = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.phone) {
            errors.email = 'Required';
        } else if (values.phone.length !== 10) {
            errors.phone = 'Invalid phone number';
        }

        if (!values.from) {
            errors.form = 'Required';
        }

        return errors;
    };
    // const applyUsForm = () => {
    //     const formik = useFormik({
    //         initialValues: {
    //             name: '',
    //             dob: '',
    //             gender: "",
    //             email: '',
    //             phone: "",
    //             from: ""
    //         },
    //         validate,
    //         onSubmit: values => {
    //             console.log("values", values)
    //         },
    //     });
    // }
    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <form className="form-section-form" >
                    <div className="all-input-btn">
                        <p className="input-label">Name <span className="requr-star"> * </span></p>
                        <input type="text" name="" placeholder="Please enter your name" className="input-type form-control" />
                        <p className="input-label extra-mar-bt">Date of birth <span className="requr-star">*</span></p>
                        <div className="input-group ">
                            <input type="text" className="form-control mydatepicker " placeholder="mm/dd/yyyy" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                            </div>
                        </div>
                        <p className="input-label extra-mar-tp">Gender <span className="requr-star">*</span></p>
                        <select data-placeholder="Select Gender" className=" form-control input-type" >
                            <option value="male" data-icon="male"> Male</option>
                            <option value="female" data-icon="female"> Female</option>
                            <option value="other" data-icon="other"> Other</option>
                        </select>
                        <p className="input-label">Email <span className="requr-star">*</span></p>
                        <input type="email" name="" placeholder="Enter email" className="input-type form-control" />
                        <p className="input-label">Phone number <span className="requr-star">*</span></p>
                        <input type="text" name="" placeholder="Enter your phone number" className="input-type form-control" />
                        <p className="input-label">Where are you from? <span className="requr-star">*</span></p>
                        <select data-placeholder="Country" className=" form-control input-type" >
                            <option value="malaysia" data-icon="malaysia"> Malaysia</option>
                        </select>
                        <p className="input-label">Attachments</p>
                        <div {...getRootProps()} style={{ height: "132px", border: "1px solid #E0E0E0", borderRadius: "2px" }}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p className="drop-text" style={{ textAlign: "center" }}>Drop the files here ...</p> :
                                    <p className="drop-text" style={{ textAlign: "center" }}>Drop files here or click to upload</p>
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
