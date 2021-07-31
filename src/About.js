import Navbar from './minicomponents/Navbar';
import AboutQuestion from './minicomponents/AboutQuestion';
import QnA from './qna.json';
import Pronoun from './minicomponents/Pronoun'
import Pronouns from './pronouns.json';
import './About.css';
function About() {
  return (
    <>
      <Navbar />
      <div className={"grid-3-col"}>
        <AboutQuestion question={"Pronouns"} answer={
          <>
            {Pronouns.map(x => <><Pronoun {...x} /></> ).map((e, i) => i < Pronouns.length - 1 ? [e, '/'] : [e]).reduce((a, b) => a.concat(b))}
          </>
        } />
        {QnA.map(x => <AboutQuestion {...x} />)}
      </div>
    </>
  );
}

export default About;
