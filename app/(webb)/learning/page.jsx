'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const Learning = () => {
  const router = useRouter();
  const openContactUs=()=>{
    router.push("/contactus")
  };
  return (
  
    <div className="banner">
      <div className="w-100">
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-lg-12 col-med-12 col-sm-12 mx-auto">
                <h1 className="lead fw-bold text-center mt-4 pt-4 mb-3 pb-3 display-1">
                  Learning
                </h1>
                <h3 className="text-center mb-3 pb-3 fst-italic">"Education Is Fun"</h3>
              <h5 className="text-center lh-lg">This is our learning hub, you'll find a growing library of interactive Scratch lessons and activities. These fun, visually engaging projects allow children to explore a range of learning concepts, problem-solving, and creative expression at their own pace. If you have any quiries please feel free to contact us.</h5>
              <div className="mt-4 text-center">
              <button className="btn btn-lg btn-primary fw-bold mb-3" onClick={openContactUs}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="featurette-divider mt-5 pt-1 mb-5" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />

    <div className="row justify-content-evenly">
      <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Building Blocks"</span></h2>
          <p className="text-center lead mt-4 mb-4">The "Building Blocks" are the core, essential skills and knowledge that form the foundation for everything else you'll learn.</p>
      </div>

      <div className="accordion w-75" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <span className="fw-2 fw-normal">Alphabet For Spelling</span>
            </button>
          </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div className="accordion-body ms-0 ps-0">
            <div className="row featurette p-5 w-100">
              <div className="col-12 text-center mb-4">
                <h2 className="featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Alphabet For Spelling"</span></h2>
                <p className="lead">Press the green flag and then press Learning ABC's to start the lesson, repeat after me.</p>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <iframe 
                  src="https://scratch.mit.edu/projects/988205839/embed" 
                  allowtransparency="true" 
                  width="485" 
                  height="402" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
            <span className="fw-2 fw-normal">Alphabet For Spelling</span>
            </button>
          </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
          <div className="accordion-body ms-0 ps-0">
            <div className="row featurette p-5 w-100">
              <div className="col-12 text-center mb-4">
                <h2 className="featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Alphabet For Spelling"</span></h2>
                <p className="lead">Press the green flag and then press Learning ABC's to start the lesson, repeat after me.</p>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <iframe 
                  src="https://scratch.mit.edu/projects/988205839/embed" 
                  allowtransparency="true" 
                  width="485" 
                  height="402" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
            <span className="fw-2 fw-normal">Alphabet For Spelling</span>
            </button>
          </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
          <div className="accordion-body ms-0 ps-0">
            <div className="row featurette p-5 w-100">
              <div className="col-12 text-center mb-4">
                <h2 className="featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Alphabet For Spelling"</span></h2>
                <p className="lead">Press the green flag and then press Learning ABC's to start the lesson, repeat after me.</p>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <iframe 
                  src="https://scratch.mit.edu/projects/988205839/embed" 
                  allowtransparency="true" 
                  width="485" 
                  height="402" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</div>

<hr className="featurette-divider mt-5 pt-1 mb-5" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />



<hr className="featurette-divider mt-3 mb-3" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />


    </div>
    
  )
}

export default Learning
