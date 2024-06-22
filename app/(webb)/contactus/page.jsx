'use client';

import React from 'react';

const ContactUs = () => {

  return (
    <main className="d-flex align-items-center justify-content-center">
      <div className="w-100">
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-12">
            <h1 className="lead fw-bold text-center mt-4 pt-4 mb-3 pb-3 display-1">
                Contact Us
            </h1>
            <h3 className="text-center mb-3 pb-3 fst-italic">"Ask Us Anything"</h3>
          <form 
          action="https://formsubmit.co/steevcan@gmail.com" 
          method="POST"
          target="_blank">
            <div className="row align-items-stretch mb-5">
            <div className="col-12 mb-3">
                    <div className="form-group">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control form-control-lg border-primary"
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control form-control-lg border-primary"
                        placeholder="Email *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group form-group-textarea mb-md-0">
                      <textarea
                        placeholder="Message *"
                        className="form-control form-control-lg large-textarea border-primary"
                        name="message"
                        id="message"
                        required
                      ></textarea>
                    </div>
                  </div>
            </div>
            <div className="mt-4 text-center">
              <button type="submit" className="btn btn-lg btn-primary fw-bold">Submit Form</button>
            </div>
          </form>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
