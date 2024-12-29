import Section from "../ui/section";
import Card from "../ui/card";
import { projectItems } from "@/app/constants/data";
const Projects = () => {
  return (
    <Section id={"projects"} title={"Projects"} >
      <div className={"cardContainerGrid"}>
        {projectItems.map((item) => (
          <Card
            key={item.id}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
