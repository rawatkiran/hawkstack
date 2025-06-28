'use client';
import Header from '../components/Header';

export default function Home() {

  const handleClick = () => {
    window.open('https://www.hawkstack.com/contact-us/', '_blank');
  };

  return (
    <>
      <Header
        heading="HawkStack: Engineering the Future of DevOps – Smarter, Faster, Resilient"
        buttonText="SEE WHAT WE DO"
        onButtonClick={() => handleClick}
      />
    </>
  );
}
