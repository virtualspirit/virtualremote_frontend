import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ qn, backButtonHandler, nextButtonHandler, selectedAnswers, onChangeHandler, children }) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log("files", acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    // const [startDate, setStartDate] = React.useState(new Date());

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
            errors.phone = 'Required';
        } else if (values.phone.length !== 10) {
            errors.phone = 'Invalid phone number';
        }

        if (!values.country) {
            errors.country = 'Required';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            dob: "",
            gender: "male",
            email: '',
            phone: "",
            country: "malaysia"
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false);
            onChangeHandler({ q: "formValues", a: values });
            console.log("submitted", values, selectedAnswers);
            nextButtonHandler({ qn: Number(qn) });
        },
    });
    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <form className="form-section-form" onSubmit={formik.handleSubmit}>
                    <div className="all-input-btn">
                        <p className="input-label">Name <span className={(!formik.values.name || formik.errors.name) ? "requr-star" : "no-error"}> * </span></p>
                        <input type="text" id="name" name="name"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
                            placeholder="Please enter your name" className="input-type form-control" />
                        <p className="input-label extra-mar-bt">Date of birth <span className={(!formik.values.dob || formik.errors.dob) ? "requr-star" : "no-error"}>*</span></p>
                        <div className="input-group">
                            <input type="text" id="dob" name="dob"
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob}
                                className="form-control mydatepicker " placeholder="mm/dd/yyyy" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                            </div>
                        </div>
                        {/* <DatePicker autoComplete="none" dateFormat="mm/dd/yyyy" selected={startDate} value={formik.values.dob} onChange={date => { setStartDate(date); formik.handleChange("dob", date)}}
                            customInput={(<div className="input-group"> <input type="text" id="dob" name="dob"
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob}
                                className="form-control mydatepicker " placeholder="mm/dd/yyyy" />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                </div></div>)} /> */}
                        <p className="input-label extra-mar-tp">Gender <span className={(!formik.values.gender || formik.errors.gender) ? "requr-star" : "no-error"}>*</span></p>
                        <select id="gender" name="gender" data-placeholder="Select Gender" className=" form-control input-type"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender}>
                            <option value="male" data-icon="male"> Male</option>
                            <option value="female" data-icon="female"> Female</option>
                            <option value="other" data-icon="other"> Other</option>
                        </select>
                        <p className="input-label">Email <span className={(!formik.values.email || formik.errors.email) ? "requr-star" : "no-error"}>*</span></p>
                        <input type="email" name="email" id="email"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                            placeholder="Enter email" className="input-type form-control" />
                        <p className="input-label">Phone number <span className={(!formik.values.phone || formik.errors.phone) ? "requr-star" : "no-error"}>*</span></p>
                        <input type="text" name="phone" id="phone"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
                            placeholder="Enter your phone number" className="input-type form-control" />
                        <p className="input-label">Where are you from? <span className={(!formik.values.country || formik.errors.country) ? "requr-star" : "no-error"}>*</span></p>
                        <select id="country" name="country" data-placeholder="Country" className=" form-control input-type"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}>
                            <option value="malaysia" data-icon="malaysia"> Malaysia</option>
                            <option value="india" data-icon="india"> India</option>
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
                    {/* {children} */}
                    <div className="nex-bac-button">
                        <button className="back-btn"
                            onClick={_ => backButtonHandler({ qn: Number(qn) })}>
                            <i className="fa fa-long-arrow-left" />Back
                        </button>
                        <button className="next-btn" type="submit" >
                            Submit<i className="fa fa-long-arrow-right" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
