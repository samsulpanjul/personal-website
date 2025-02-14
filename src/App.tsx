import Section from "./components/Section"
import projects from "./data/projects.json"
import tech from "./data/tech.json"
import GitHubLogo from "./components/icons/GitHubLogo"
import Mail from "./components/icons/Mail"
import LinkedInLogo from "./components/icons/LinkedInLogo"

function App() {
  return (
    <div className="max-w-[600px] text-white px-4 mx-auto my-24 flex flex-col gap-8">
      <div className="box flex justify-between">
        <div className="flex flex-col justify-evenly py-2">
          <h2 className="text-xl">Galih Aditya Dwisevi</h2>
          <p className="text-secondary">front-end web developer</p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:galih.aditya227@gmail.com"
            target="_blank"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/samsulpanjul"
            target="_blank"
          >
            <GitHubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/galih-aditya-8914a6216/"
            target="_blank"
          >
            <LinkedInLogo />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Section title="me 🧑">
          <p className="text-secondary">
            I'm a passionate front-end web developer who loves crafting interactive and user-friendly interfaces. I'm always eager to learn and improve my skills by building projects and exploring new technologies.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <p>technologies I have worked with:</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-neutral-800 text-white rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Section>
        <Section title="study 🎓">
          <div>
            <p>Universitas Islam Syekh-Yusuf</p>
            <p className="text-secondary">2021 - present</p>
          </div>
        </Section>
        <Section title="projects 🚀">
          {projects.map((project) => (
            <div
              key={project.title}
              className="mt-2 box"
            >
              <a
                href={project.website}
                target="_blank"
                className="hover:underline text-lg"
              >
                {project.title}
              </a>
              <p className="text-secondary">{project.description}</p>
              <p className="text-secondary mt-2">tech used: {project.tech.join(", ")}</p>
              <div className="flex gap-2 mt-2">
                <a
                  href={project.repo}
                  target="_blank"
                  className="hover:underline flex gap-2"
                >
                  <GitHubLogo /> <span>Repository</span>
                </a>
              </div>
            </div>
          ))}
        </Section>
        <Section title="experience 💼">
          <p className="text-secondary">While I haven't worked in the industry yet, I'm always learning and improving my skills by building projects and exploring new technologies.</p>
          <p className="mt-2 text-secondary">I'm open to internship, freelance, or even full-time. If you're looking for a passionate front-end developer, feel free to reach out!</p>
          <div className="mt-2">
            <div className="flex flex-col gap-1 mt-2">
              <a
                href="mailto:galih.aditya227@gmail.com"
                className="hover:underline flex gap-2"
              >
                <Mail /> <span>galih.aditya227@gmail.com</span>
              </a>
              <a
                href="https://github.com/samsulpanjul"
                target="_blank"
                className="hover:underline flex gap-2"
              >
                <GitHubLogo /> <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/galih-aditya-8914a6216/"
                target="_blank"
                className="hover:underline flex gap-2"
              >
                <LinkedInLogo /> <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default App
