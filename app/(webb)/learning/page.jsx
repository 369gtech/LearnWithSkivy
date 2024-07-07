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
    { id: 'Fourteen', heading: 'LWS A, An and The - “Introduction” - “Coming Soon”', title: '"A, An and The - “Introduction”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Fifteen', heading: 'A “Basic” - “Coming Soon”', title: 'A “Basic”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Sixteen', heading: 'A “Quiz” - “Coming Soon”', title: 'A “Quiz”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Seventeen', heading: 'An “Basic” - “Coming Soon”', title: 'An “Basic”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Eighteen', heading: 'An “Quiz” - “Coming Soon”', title: 'An “Quiz”', description: "Press the green flag and theb", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Nineteen', heading: 'The “Basic” - “Coming Soon”', title: 'The “Basic”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Twenty', heading: 'The “Quiz” - “Coming Soon”', title: 'The “Quiz”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    // Add more items as needed
  ];

  // Accordion data for Section Two
  const accordionDataTwo = [
    { id: 'One', heading: 'LWS 3.1 Common Sight Words "Three Letter Spelling Adventure"', title: '3.1 CSW "3L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell, then move the blue letters onto the yellow circles to create the word.", src: 'https://scratch.mit.edu/projects/1023080937/embed' },
    { id: 'Two', heading: 'LWS 3.1 Common Sight Words "Three Letter Spelling Quiz"', title: '3.1 CSW "3L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to quiz and choose the correct answer A, B or C to match the sentence that has been said and shown.", src: 'https://scratch.mit.edu/projects/1025386908/embed' },
    { id: 'Three', heading: 'LWS 3.1 Common Sight Words "Three Letter Spelling"', title: '3.1 CSW "3L Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1024637441/embed' },
    { id: 'Four', heading: 'LWS 3.2 Common Sight Words "Three Letter Spelling Adventure"', title: '3.2 CSW "3L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell, then move the blue letters onto the yellow circles to create the word.", src: 'https://scratch.mit.edu/projects/1023125424/embed' },
    { id: 'Five', heading: 'LWS 3.2 Common Sight Words "Three Letter Spelling Quiz"', title: '3.2 CSW "3L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to quiz and choose the correct answer A, B or C to match the sentence that has been said and shown.", src: 'https://scratch.mit.edu/projects/1025636185/embed' },
    { id: 'Six', heading: 'LWS 3.2 Common Sight Words "Three Letter Spelling"', title: '3.2 CSW "3L Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1025366126/embed' },
    { id: 'Seven', heading: 'LWS 3.3 Common Sight Words "Three Letter Spelling Adventure"', title: '3.3 CSW "3L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell, then move the blue letters onto the yellow circles to create the word.", src: 'https://scratch.mit.edu/projects/1023155126/embed' },
    { id: 'Eight', heading: 'LWS 3.3 Common Sight Words "Three Letter Spelling Quiz"', title: '3.3 CSW "3L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to quiz and choose the correct answer A, B or C to match the sentence that has been said and shown.", src: 'https://scratch.mit.edu/projects/1026172923/embed' },
    { id: 'Nine', heading: 'LWS 3.3 Common Sight Words "Three Letter Spelling"', title: '3.3 CSW "3L Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1025372666/embed' },
    { id: 'Ten', heading: 'LWS "Three Letter Rhyming Words"', title: '"3L Rhyming Words"', description: "Press the green flag and then press Start Lesson. Move the correct rhyming words into the green blocks and then press next to advance.", src: 'https://scratch.mit.edu/projects/1009757098/embed' },
    { id: 'Eleven', heading: 'LWS Rhyming 1 "Three Letter Spelling Lesson"', title: 'Rhyming 1 "3L Spelling Lesson"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1018617643/embed' },
    { id: 'Twelve', heading: 'LWS Rhyming 2 "Three Letter Spelling Lesson"', title: 'Rhyming 2 "3L Spelling Lesson"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1020239919/embed' },
    { id: 'Thirteen', heading: 'LWS Rhyming 3 "Three Letter Spelling Lesson"', title: 'Rhyming 3 "3L Spelling Lesson"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1020274619/embed' },
    // Add more items as needed
  ];

  // Accordion data for Section Three
  const accordionDataThree = [
    { id: 'One', heading: 'LWS 4.1 Common Sight Word "Four Letter Spelling Adventure"', title: 'LWS 4.1 CSW "4L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1041596149/embed' },
    { id: 'Two', heading: 'LWS 4.1 Common Sight Word "Four Letter Spelling Quiz"', title: 'LWS 4.1 CSW "4L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1041621869/embed' },
    { id: 'Three', heading: 'LWS 4.1 Common Sight Word "Four Letter Spelling"', title: 'LWS 4.1 CSW "4L Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1041974068/embed' },
    { id: 'Four', heading: 'LWS 4.2 Common Sight Word "Four Letter Spelling Adventure"', title: 'LWS 4.2 CSW "4L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1041603066/embed' },
    { id: 'Five', heading: 'LWS 4.2 Common Sight Word "Four Letter Spelling Quiz"', title: 'LWS 4.2 CSW "4L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1041923970/embed' },
    { id: 'Six', heading: 'LWS 4.2 Common Sight Word "Four Letter Spelling"', title: 'LWS 4.2 CSW "4L Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042001343/embed' },
    { id: 'Seven', heading: 'LWS 4.3 Common Sight Word "Four Letter Spelling Adventure"', title: 'LWS 4.3 CSW "4L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1041606515/embed' },
    { id: 'Eight', heading: 'LWS 4.3 Common Sight Word "Four Letter Spelling Quiz"', title: 'LWS 4.3 CSW "4L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1041928703/embed' },
    { id: 'Nine', heading: 'LWS 4.3 Common Sight Word "Four Letter Spelling"', title: 'LWS 4.3 CSW "4L Spelling"', description: "CPress the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042022302/embed' },
    { id: 'Ten', heading: 'LWS 4.4 Common Sight Word "Four Letter Spelling Adventure"', title: 'LWS 4.3 CSW "4L Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1041616413/embed' },
    { id: 'Eleven', heading: 'LWS 4.4 Common Sight Word "Four Letter Spelling Quiz"', title: 'LWS 4.3 CSW "4L Spelling Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1041964854/embed' },
    { id: 'Twelve', heading: 'LWS 4.4 Common Sight Word "Four Letter Spelling"', title: 'LWS 4.3 CSW "4L Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042025746/embed' },
    { id: 'Thirteen', heading: 'LWS The Body "Spelling Adventure"', title: 'The Body "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1004112380/embed' },
    { id: 'Fourteen', heading: 'LWS The Body "Quiz"', title: 'The Body "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1009648897/embed' },
    { id: 'Fifteen', heading: 'LWS The Body "Spelling"', title: 'The Body "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042335550/embed' },
    { id: 'Sixteen', heading: 'LWS The Animal "Spelling Adventure"', title: 'The Animal "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1013596404/embed' },
    { id: 'Seventeen', heading: 'LWS The Animaly "Quiz"', title: 'The Animaly "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1013606133/embed' },
    { id: 'Eighteen', heading: 'LWS The Animal "Spelling"', title: 'The Animal "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042345624/embed' },
    { id: 'Nineteen', heading: 'LWS Doing Word "Spelling Adventure"', title: 'Doing Word "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1022852541/embed' },
    { id: 'Twenty', heading: 'LWS Doing Word "Quiz"', title: 'Doing Word "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1022881574/embed' },
    { id: 'TwentyOne', heading: 'LWS Doing Word "Spelling"', title: 'Doing Word "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042350670/embed' },
    { id: 'TwentyTwo', heading: 'LWS Describing Word "Spelling Adventure"', title: 'Describing Word "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1027415510/embed' },
    { id: 'TwentyThree', heading: 'LWS Describing Word "Quiz"', title: 'Describing Word "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1027428102/embed' },
    { id: 'TwentyFour', heading: 'LWS Describing Word "Spelling"', title: 'Describing Word "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042357578/embed' },
    { id: 'TwentyFive', heading: 'LWS Food "Spelling Adventure"', title: 'Food "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1018592358/embed' },
    { id: 'TwentySix', heading: 'LWS Food "Quiz"', title: 'Food "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1018604514/embed' },
    { id: 'TwentySeven', heading: 'LWS Food "Spelling"', title: 'Food "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042371771/embed' },
    { id: 'TwentyEight', heading: 'LWS Nature "Spelling Adventure"', title: 'Nature "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1031599137/embed' },
    { id: 'TwentyNine', heading: 'LWS Nature "Quiz"', title: 'Nature "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1031600229/embed' },
    { id: 'Thirty', heading: 'LWS Nature "Spelling"', title: 'Nature "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042377039/embed' },
    { id: 'ThirtyOne', heading: 'LWS Things "Spelling Adventure"', title: 'Things "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1032220847/embed' },
    { id: 'ThirtyTwo', heading: 'LWS Things "Quiz"', title: 'Things "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1032221098/embed' },
    { id: 'ThirtyThree', heading: 'LWS Things "Spelling"', title: 'Things "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042383524/embed' },
    { id: 'ThirtyFour', heading: 'LWS Feelings "Spelling Adventure"', title: 'Feelings "Spelling Adventure"', description: "Press the green flag and then press Start Lesson. Listen to the word you need to spell then move the blue letters onto the yellow circles to spell the correct word.", src: 'https://scratch.mit.edu/projects/1038024061/embed' },
    { id: 'ThirtyFive', heading: 'LWS Feelings "Quiz"', title: 'Feelings "Quiz"', description: "Press the green flag and then press Start Lesson. Listen to the question and press the correct answer A, B or C.", src: 'https://scratch.mit.edu/projects/1038024205/embed' },
    { id: 'ThirtySix', heading: 'LWS Feelings "Spelling"', title: 'Feelings "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson.", src: 'https://scratch.mit.edu/projects/1042389582/embed' },
    { id: 'ThirtySeven', heading: 'LWS Naming Words "Spelling Adventure" - "Coming Soon"', title: 'Naming Words "Spelling Adventure"', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'ThirtyEight', heading: 'LWS Naming Words "Quiz" - "Coming Soon"', title: 'Naming Words "Quiz"', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'ThirtyNine', heading: 'LWS Naming Words "Spelling" - "Coming Soon"', title: 'Naming Words "Spelling"', description: "Coming Soon.", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
    { id: 'Forty', heading: 'LWS 1 "Sentence Structure"', title: '1 "Sentence Structure', description: "Press the green flag and then press Start Lesson. Listen to the sentence and then move the words onto the yellow boxes to create the correct sentence.", src: 'https://scratch.mit.edu/projects/1030515030/embed' },
    { id: 'FortyOne', heading: 'LWS 2 "Sentence Structure"', title: '2 "Sentence Structure', description: "Press the green flag and then press Start Lesson. Listen to the sentence and then move the words onto the yellow boxes to create the correct sentence.", src: 'https://scratch.mit.edu/projects/1030741142/embed' },
    { id: 'FortyTwo', heading: 'LWS 3 "Sentence Structure"', title: '3 "Sentence Structure', description: "Press the green flag and then press Start Lesson. Listen to the sentence and then move the words onto the yellow boxes to create the correct sentence.", src: 'https://scratch.mit.edu/projects/1030744211/embed' },
    { id: 'FortyThree', heading: 'LWS 4 "Sentence Structure"', title: '4 "Sentence Structure', description: "Press the green flag and then press Start Lesson. Listen to the sentence and then move the words onto the yellow boxes to create the correct sentence.", src: 'https://scratch.mit.edu/projects/1030747793/embed' },
    { id: 'FortyFour', heading: 'LWS 5 "Sentence Structure"', title: '5 "Sentence Structure', description: "Press the green flag and then press Start Lesson. Listen to the sentence and then move the words onto the yellow boxes to create the correct sentence.", src: 'https://scratch.mit.edu/projects/1030921614/embed' },
    // Add more items as needed
  ];

    // Accordion data for Section Four Learn With Skivy Book Series Challenge
    const accordionDataFour = [
      { id: 'One', heading: 'LWS S1N1 "Spelling"', title: 'S1N1 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1008838423/embed' },
      { id: 'Two', heading: 'LWS S1N2 "Spelling"', title: 'S1N2 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1009331416/embed' },
      { id: 'Three', heading: 'LWS S1N3 "Spelling"', title: 'S1N3 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1009341404/embed' },
      { id: 'Four', heading: 'LWS S1N4 "Spelling"', title: 'S1N4 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1009346294/embed' },
      { id: 'Five', heading: 'LWS S1N5 "Spelling"', title: 'S1N5 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1009357595/embed' },
      { id: 'Six', heading: 'LWS S1N6 "Spelling"', title: 'S1N6 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1009371773/embed' },
      { id: 'Seven', heading: 'LWS S1N7 "Spelling"', title: 'S1N7 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/1009378474/embed' },
      { id: 'Eight', heading: 'LWS S1N8 "Spelling"', title: 'S1N8 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/984381139/embed' },
      { id: 'Nine', heading: 'LWS S1N9 "Spelling"', title: 'S1N9 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/988903874/embed' },
      { id: 'Ten', heading: 'LWS S1N10 "Spelling"', title: 'S1N10 "Spelling"', description: "Press the green flag and then press Start Lesson to begin the spelling lesson. This lesson is apart of the Skivy Book Series.", src: 'https://scratch.mit.edu/projects/994671086/embed' },
      { id: 'Eleven', heading: 'LWS “Nouns” - "Coming Soon"', title: '“Nouns”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
      { id: 'Twelve', heading: 'LWS “Verbs” - "Coming Soon"', title: '“Verbs”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
      { id: 'Thirteen', heading: 'LWS “Adverbs” - "Coming Soon"', title: '“Adverbs”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
      { id: 'Fourteen', heading: 'LWS “Adjectives” - "Coming Soon"', title: '“Adjectives”', description: "Coming Soon", src: 'https://scratch.mit.edu/projects/1041055559/embed' },
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

      <div className="image-navigation">
        <img
          id="image1"
          src="/lwslogo.png"
          alt="Section One"
          onClick={() => navigateToSection('section-one')}
        />
        <img
          id="image2"
          src="/lwslogo.png"
          alt="Section Two"
          onClick={() => navigateToSection('section-two')}
        />
        <img
          id="image3"
          src="/lwslogo.png"
          alt="Section Three"
          onClick={() => navigateToSection('section-three')}
        />
        <img
          id="image4"
          src="/lwslogo.png"
          alt="Section Four"
          onClick={() => navigateToSection('section-four')}
        />
      </div>

      <hr className="featurette-divider mt-5 pt-1 mb-5" style={{ width: '80%', margin: '0 auto', backgroundColor: '#000', height: '2px' }} />

      {/* Section One */}
      <div className="row justify-content-evenly" id="section-one">
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
      <div className="row justify-content-evenly" id="section-two">
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
      <div className="row justify-content-evenly" id="section-three">
        <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Mastering More"</span></h2>
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
      <div className="row justify-content-evenly" id="section-four">
        <div className="col-lg-8 col-med-10 col-sm-12 mx-auto">
          <h2 className="text-center featurette-heading fw-bold lh-1">Learn With Skivy <span className="text-muted fw-normal">"Book Challenge Series"</span></h2>
          <p className="text-center lead mt-4 mb-4">Reading the Learn With Skivy Series where you will be challenged with spelling and grammar.</p>
        </div>

        <div className="accordion w-75" id="accordionPanelsStayOpenExample4">
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
