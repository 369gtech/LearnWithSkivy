import Link from 'next/link';

export default function Home() {
  return (
    <main className="banner">
      <div className="w-100">
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-lg-6 col-med-8 col-sm-12 col-12 mx-auto">
            <h3 className="fw-bold text-center mt-5 pt-5">Welcome To</h3>
              <h1 className="lead fw-bold text-center display-1">
                Learn With Skivy
              </h1>
              <h5 className="text-center fw-light fst-italic mt-3">"Igniting curiosity through interactive exploration."</h5>
              <p className="lead text-center mt-4">
              <Link href="/aboutus" className="btn btn-lg btn-primary fw-bold">About Us
              </Link>
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-12 mx-auto">
              <img src="/lwslogo.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}
