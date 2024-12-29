import Image from "next/image";
import { michael } from "@/app/assets/assets";
import Section from "../ui/section";

const About = () => {
  return (
    <>
      <Section id={"about"} title={"About Me"} sectionStyle={"aboutSection"}>
        <div className={"aboutContainer"}>
          <div>
            <p className={"aboutDescription"}>
              Hi I&#39;m Michael, a passionate web developer. I have always been
              interested in technology and computers. My journey began in 2023
              when I discovered Python, which sparked my transition into
              full-stack web development. Ever since then, I have been deeply
              involved in building websites.
              <br />
              <br />I combine technical expertise with creative problem-solving
              to build responsive, user-centric websites that make an impact.
              Currently focused on expanding my skills in modern web
              technologies while delivering high-quality solutions for clients.
            </p>
          </div>
          <div>
            <Image src={michael} alt="michael tom" className={"mich"} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
