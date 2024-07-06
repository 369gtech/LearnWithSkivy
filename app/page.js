import Link from 'next/link';

export default function Home() {
  return (
    <main className="banner">
      <div className="w-100">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-lg-6 col-med-8 col-sm-12 col-12 mx-auto text-center">
            <h3 className="fw-bold text-center mt-5 pt-5">Welcome To</h3>
              <h1 className="lead fw-bold text-center display-1">
                Learn With Skivy
              </h1>
              <h5 className="fw-light fst-italic mt-3">"Igniting curiosity through interactive exploration."</h5>
              <p className="lead mt-4">
              <Link href="/aboutus" className="btn btn-lg btn-primary fw-bold">About Us
              </Link>
              </p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto text-center">
              <img src="/lwslogo.png" alt="banner" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}
