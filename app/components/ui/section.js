const Section = ({ id, title, children, style, sectionStyle }) => {
  return (
    <section id={id} className={sectionStyle}>
      <div className={`centerSection ${style}`}>
        <h2 className={"sectionHeading"}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
