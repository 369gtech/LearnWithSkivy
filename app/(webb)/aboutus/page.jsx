'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './AboutUs.module.css'; // Import the CSS module

const AboutUs = () => {
  const router = useRouter();
  const openLearning = () => {
    router.push("/learning");
  };

  return (
    <div className={styles.banner}> { /* Use the CSS module class */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-med-12 col-sm-12 col-12 mx-auto">
          <div className={styles.textContainer}> 
            <h1 className="lead fw-bold text-center-primary mt-4 pt-4 mb-3 pb-3 display-1">
              About Us
            </h1>
              <h3 className="text-center mb-3 pb-3 fst-italic">"Our Learning Journey"</h3>
              <h5 className="text-center lh-lg">
                As a father who homeschools my son, I've seen firsthand the power of interactive, engaging learning. Using platforms like Scratch, I've created educational materials that spark my child's curiosity and help him develop key skills. Now, I'm sharing these resources with the world in the hope of providing fun, effective learning experiences for children everywhere.
              </h5>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btn-lg btn-primary fw-bold" onClick={openLearning}>Learning</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
