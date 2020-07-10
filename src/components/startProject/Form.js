import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormik } from 'formik';

const Form = ({ qn, backButtonHandler, nextButtonHandler, children }) => {
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

        if (!values.industry) {
            errors.industry = 'Required';
        }

        if (!values.country) {
            errors.country = 'Required';
        }

        if (!values.budget) {
            errors.budget = 'Required';
        }

        if (!values.project) {
            errors.project = 'Required';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: "",
            industry: "property",
            country: "malaysia",
            budget: `$10,000 - $20,000`,
            project: ""
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            console.log("values", values, nextButtonHandler)
            setSubmitting(false);
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
                        <p className="input-label">Company Name<span>(optional)<span /></span></p>
                        <input type="text" name="" placeholder="Enter your company name" className="input-type form-control" />
                        <p className="input-label">Email <span className={(!formik.values.email || formik.errors.email) ? "requr-star" : "no-error"}>*</span></p>
                        <input type="email" name="email" id="email"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                            placeholder="Enter your email" className="input-type form-control" />
                        <p className="input-label">Phone number <span className={(!formik.values.phone || formik.errors.phone) ? "requr-star" : "no-error"}>*</span></p>
                        <input type="text" name="phone" id="phone"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
                            placeholder="Enter your phone number" className="input-type form-control" />
                        <p className="input-label extra-mar-tp">Industry <span className={(!formik.values.industry || formik.errors.industry) ? "requr-star" : "no-error"}>*</span></p>
                        <select name="industry" id="industry"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.industry}
                            data-placeholder="Select Industry " className=" form-control input-type" >
                            <option value="property" data-icon="property"> Property</option>
                        </select>
                        <p className="input-label">Where are you from? <span className={(!formik.values.country || formik.errors.country) ? "requr-star" : "no-error"}>*</span></p>
                        <select data-placeholder="Country" id="country" name="country" className=" form-control input-type"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}>
                            <option value="malaysia" data-icon="malaysia"> Malaysia</option>
                            <option value="india" data-icon="malaysia"> India</option>
                        </select>
                        <p className="input-label">Estimated budget <span className={(!formik.values.budget || formik.errors.budget) ? "requr-star" : "no-error"}>*</span></p>
                        <select id="budget" name="budget" data-placeholder="Estimated budget"
                             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.budget}
                            className=" form-control input-type">
                            <option value={`$10,000 - $20,000`} data-icon="budget"> $10,000 - $20,000</option>
                        </select>
                        <p className="input-label">Describe your project <span className={(!formik.values.project || formik.errors.project) ? "requr-star" : "no-error"}>*</span></p>
                        <textarea id="project" name="project" className="form-section-txtarea-2 no-resize"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.project}
                            placeholder="Please tell us about your current project..." cols={30} rows={5} />
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
