import { skillsCards } from '../data';

const Skills = () => {
  return (
    <div>
      <div className="content-divider"></div>
      <section className="skills clearfix">
        {skillsCards.map((skill) => {
          const { title, text, icon, id } = skill;
          return (
            <article className="skill" key={id}>
              <span className="skill-icon">
                <i className={icon}></i>
              </span>
              <h4 className="skill-title">{title}</h4>
              <p className="skill-text">{text}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default Skills;
