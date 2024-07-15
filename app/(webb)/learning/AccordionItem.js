import React, { useState } from 'react';

const AccordionItem = ({ id, heading, title, description, src, pdfUrl }) => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const handleToggle = () => {
    setIframeLoaded(!isIframeLoaded);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`panelsStayOpen-heading${id}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${id}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse${id}`}
          onClick={handleToggle}
        >
          <span className="fw-2 fw-normal">{heading}</span>
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`panelsStayOpen-heading${id}`}
      >
        <div className="accordion-body ms-0 ps-0">
          <div className="row featurette p-5 w-100">
            <div className="col-12 text-center mb-4">
              <h2 className="featurette-heading fw-bold lh-1">
                Learn With Skivy <span className="text-muted fw-normal">{title}</span>
              </h2>
              <p className="lead">{description}</p>
              {pdfUrl && (
                <div className="text-center mt-4 mb-4">
                  <a href={pdfUrl} download className="btn btn-primary">
                    Download PDF
                  </a>
                </div>
              )}
            </div>
            <div className="col-12 d-flex justify-content-center">
              {isIframeLoaded && (
                <iframe
                  src={src}
                  allowtransparency="true"
                  width="485"
                  height="402"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
