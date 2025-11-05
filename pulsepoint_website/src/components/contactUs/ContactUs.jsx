import './style/Contact.css'
export default function ContactUs(){
    return(
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="contact-form">
                        <h3 className="form-title">Contact Us</h3>

                        <form>
                            {/* الاسم */}
                            <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-user"></i>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                />
                            </div>

                            {/* البريد الإلكتروني */}
                            <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                />
                            </div>

                            {/* رقم الهاتف */}
                            <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-phone"></i>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* الموضوع */}
                            <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-pen"></i>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                />
                            </div>

                            {/* الرسالة */}
                            <div className="mb-4 input-group">
                <span className="input-group-text align-items-start">
                  <i className="fa-solid fa-message"></i>
                </span>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            {/* الزر */}
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}