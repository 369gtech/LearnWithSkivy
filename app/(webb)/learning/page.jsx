'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import AccordionItem from '././AccordionItem'; // Adjust the path according to your project structure

const Learning = () => {
  const router = useRouter();
  const openContactUs = () => {
    router.push("/contactus");
  };

  // Accordion data for Section One
  const accordionDataOne = [
    { id: 'One', heading: 'Alphabet For Spelling', title: '"Alphabet For Spelling"', description: "Press the green flag and then press Learning ABC's to start the lesson, repeat after me.", src: 'https://scratch.mit.edu/projects/988205839/embed' },
    { id: 'Two', heading: 'Learn With Skivy "Jobs"', title: '"Jobs"', description: "Press the green flag and then press Learning ABC's to start the lesson.", src: 'https://scratch.mit.edu/projects/1007851238/embed' },
    { id: 'Three', heading: 'Learn With Skivy "Greetings"', title: '"Greetings"', description: "Press the green flag and then press Learning ABC's to start the lesson.", src: 'https://scratch.mit.edu/projects/1005347039/embed' },
    { id: 'Four', heading: 'Learn With Skivy "Hobbies"', title: '"Hobbies"', description: "Press the green flag and then press Learning ABC's to start the lesson.", src: 'https://scratch.mit.edu/projects/1006176517/embed' },
    { id: 'Five', heading: 'Learn With Skivy "Preposition Adventure"', title: '"Preposition Adventure"', description: "Press the green flag and then press Learning ABC's to start the lesson.", src: 'https://scratch.mit.edu/projects/1020467974/embed' },
    { id: 'Six', heading: ' Learn With Skivy "Diagraphs"', title: '"Diagraphs"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/1029641127/embed' },
    { id: 'Seven', heading: 'Learn With Skivy "Diagraph Quiz 1"', title: '"Diagraph Quiz 1"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/1030120626/embed' },
    { id: 'Eight', heading: 'Learn With Skivy "Diagraph Quiz 2"', title: '"Diagraph Quiz 2"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/1030439255/embed' },
    { id: 'Nine', heading: 'Learn With Skivy "Diagraph Quiz 3"', title: '"Diagraph Quiz 3"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/1030452781/embed' },
    { id: 'Ten', heading: ' Learn With Skivy P1 "Two Letter Spelling Adventure"', title: 'P1 "Two Letter Spelling Adventure"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/992419130/embed' },
    { id: 'Eleven', heading: 'Learn With Skivy P1 "Two Letter Spelling"', title: 'P1 "Two Letter Spelling"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/1013590415/embed' },
    { id: 'Twelve', heading: 'Learn With Skivy P2 "Two Letter Spelling Adventure"', title: 'P2 "Two Letter Spelling Adventure"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/994841793/embed' },
    { id: 'Thirteen', heading: 'Learn With Skivy P2 "Two Letter Spelling"', title: 'P2 "Two Letter Spelling"', description: "Press the green flag and then press Learning or Diagraphs to start the lesson.", src: 'https://scratch.mit.edu/projects/1030452781/embed' },
    // Add more items as needed
  ];

  // Accordion data for Section Two
  const accordionDataTwo = [
    { id: 'One', heading: 'Learn With Skivy 3.1 CSW "Spelling Adventure', title: '"3.1 CSW "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell, then move the blue letters onto the yellow circles to create the word.", src: 'https://scratch.mit.edu/projects/1023080937/embed' },
    { id: 'Two', heading: 'Learn With Skivy 3.1 CSW "Spelling Quiz', title: '"3.1 CSW "Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to quiz and choose the correct answer A, B or C to match the sentence that has been said and shown.", src: 'https://scratch.mit.edu/projects/1025386908/embed' },
    { id: 'Three', heading: 'Learn With Skivy 3.1 CSW "Spelling', title: '"3.1 CSW "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1024637441/embed' },
    { id: 'Four', heading: 'Learn With Skivy 3.2 CSW "Spelling Adventure', title: '"3.2 CSW "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell, then move the blue letters onto the yellow circles to create the word.", src: 'https://scratch.mit.edu/projects/1023125424/embed' },
    { id: 'Five', heading: 'Learn With Skivy 3.2 CSW "Spelling Quiz', title: '"3.2 CSW "Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to quiz and choose the correct answer A, B or C to match the sentence that has been said and shown.", src: 'https://scratch.mit.edu/projects/1025636185/embed' },
    { id: 'Six', heading: 'Learn With Skivy 3.2 CSW "Spelling', title: '"3.2 CSW "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1025366126/embed' },
    { id: 'Seven', heading: 'Learn With Skivy 3.3 CSW "Spelling Adventure', title: '"3.3 CSW "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell, then move the blue letters onto the yellow circles to create the word.", src: 'https://scratch.mit.edu/projects/1023155126/embed' },
    { id: 'Eight', heading: 'Learn With Skivy 3.3 CSW "Spelling Quiz', title: '"3.3 CSW "Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to quiz and choose the correct answer A, B or C to match the sentence that has been said and shown.", src: 'https://scratch.mit.edu/projects/1026172923/embed' },
    { id: 'Nine', heading: 'Learn With Skivy 3.3 CSW "Spelling', title: '"3.3 CSW "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1025372666/embed' },
    { id: 'Ten', heading: 'Learn With Skivy "Rhyming Words"', title: '"Rhyming Words"', description: "Press the green flag and then press Start Lesson. Move the correct rhyming words into the green blocks and then press next to advance.", src: 'https://scratch.mit.edu/projects/1009757098/embed' },
    { id: 'Eleven', heading: 'Learn With Skivy Rhyming 1 "Spelling Lesson"', title: 'Rhyming 1 "Spelling Lesson"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1018617643/embed' },
    { id: 'Twelve', heading: 'Learn With Skivy Rhyming 2 "Spelling Lesson"', title: 'Rhyming 2 "Spelling Lesson"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1020239919/embed' },
    { id: 'Thirteen', heading: 'Learn With Skivy Rhyming 3 "Spelling Lesson"', title: 'Rhyming 3 "Spelling Lesson"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1020274619/embed' },

    // Add more items as needed
  ];

  // Accordion data for Section Three
  const accordionDataThree = [
    { id: 'One', heading: 'Advanced Math Concepts', title: '"Advanced Math"', description: "Press the green flag to start the lesson on advanced math concepts.", src: 'https://scratch.mit.edu/projects/1012345681/embed' },
    { id: 'Two', heading: 'Physics Basics', title: '"Physics Basics"', description: "Press the green flag to start the lesson on basic physics concepts.", src: 'https://scratch.mit.edu/projects/1012345682/embed' },
    { id: 'Three', heading: 'Geography Basics', title: '"Geography Basics"', description: "Press the green flag to start the lesson on geography basics.", src: 'https://scratch.mit.edu/projects/1012345683/embed' },
    // Add more items as needed
  ];

    // Accordion data for Section Four Learn With Skivy Book Series Challenge
    const accordionDataFour = [
      { id: 'One', heading: 'Advanced Math Concepts', title: '"Advanced Math"', description: "Press the green flag to start the lesson on advanced math concepts.", src: 'https://scratch.mit.edu/projects/1012345681/embed' },
      { id: 'Two', heading: 'Physics Basics', title: '"Physics Basics"', description: "Press the green flag to start the lesson on basic physics concepts.", src: 'https://scratch.mit.edu/projects/1012345682/embed' },
      { id: 'Three', heading: 'Geography Basics', title: '"Geography Basics"', description: "Press the green flag to start the lesson on geography basics.", src: 'https://scratch.mit.edu/projects/1012345683/embed' },
      // Add more items as needed
    ];

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

      {/* Section One */}
      <div className="row justify-content-evenly">
        <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Building Blocks"</span></h2>
          <p className="text-center lead mt-4 mb-4">The "Building Blocks" are the core, essential skills and knowledge that form the foundation for everything else you'll learn.</p>
        </div>

        <div className="accordion w-75" id="accordionPanelsStayOpenExample">
          {accordionDataOne.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              heading={item.heading}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </div>

      <hr className="featurette-divider mt-5 pt-1 mb-5" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />

      {/* Section Two */}
      <div className="row justify-content-evenly">
        <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Growing Strong"</span></h2>
          <p className="text-center lead mt-4 mb-4">Building upon the basics to enhance learning.</p>
        </div>

        <div className="accordion w-75" id="accordionPanelsStayOpenExample2">
          {accordionDataTwo.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              heading={item.heading}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </div>

      <hr className="featurette-divider mt-5 pt-1 mb-5" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />

      {/* Section Three */}
      <div className="row justify-content-evenly">
        <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Mastering the Challenge"</span></h2>
          <p className="text-center lead mt-4 mb-4">Ready for more complex concepts and skills.</p>
        </div>

        <div className="accordion w-75" id="accordionPanelsStayOpenExample3">
          {accordionDataThree.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              heading={item.heading}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </div>

      <hr className="featurette-divider mt-5 pt-1 mb-5" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />

      {/* Section Four */}
      <div className="row justify-content-evenly">
        <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Book Challenge Series"</span></h2>
          <p className="text-center lead mt-4 mb-4">Reading the Learn With Skivy Series where you will be challenged with spelling and grammar.</p>
        </div>

        <div className="accordion w-75" id="accordionPanelsStayOpenExample3">
          {accordionDataFour.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              heading={item.heading}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Learning;
