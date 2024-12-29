import Section from "../ui/section";
import Button from "../ui/button";

const Contact = () => {
  return (
    <Section id={"contact"} title={"Contact Me"} style={"contact"}>
      <div>
        <p className={"contactText"}>
          You can reach out to me via email or connect with me on social media.
        </p>
        <div className={"contactBtnContainer"}>
          <Button Icon href="mailto:mic81070@gmail.com">
            Send me a message
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
