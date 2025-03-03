import SkillsComponent from "../assistcomponents/SkillsComponent";

function About() {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            {/* <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase"> */}
            <h2 className="text-3xl font-bold mb-8 text-red-500 border-b border-red-500 w-max pb-4 ">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I&apos;m Parag Nukte
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              A Frontend Developer with expertice in Web Development with React.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I started my journey in web development with a passion for
                  creating innovative and scalable applications. With
                  proficiency in the popular JavaScript library, React, I have
                  built projects such as a full-stack blog post application, a
                  to-do list, and more. My projects showcase my ability to
                  integrate powerful front-end solutions with sleek, smooth, and
                  user-friendly designs.
                </p>
                <img
                  src="mernstack.png"
                  alt=""
                  className="rounded-lg p-2 mt-4 w-52"
                />
              </div>
              <div className="border border-red-200 rounded-lg md:p7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  {" "}
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <SkillsComponent skillLogoName="Html.png" skillName="HTML" />
                  <SkillsComponent skillLogoName="CSS.png" skillName="CSS" />
                  <SkillsComponent
                    skillLogoName="JS.png"
                    skillName="Javascript"
                  />
                  <SkillsComponent
                    skillLogoName="React.png"
                    skillName="React"
                  />
                  <SkillsComponent
                    skillLogoName="Redux.png"
                    skillName="Redux-Toolkit"
                  />
                  <SkillsComponent
                    skillLogoName="Github.png"
                    skillName="Github"
                  />
                  <SkillsComponent
                    skillLogoName="Bootstrap.png"
                    skillName="Bootstrap"
                  />
                  <SkillsComponent
                    skillLogoName="Tailwind Css.png"
                    skillName="Tailwind CSS"
                  />
                  <SkillsComponent
                    skillLogoName="NextJs.png"
                    skillName="Next Js"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
              <p className="mt-4 text-lg text-gray-600">
                Apart from coding, I am passionate about learning new
                technologies and keeping myself updated with the latest trends
                in tweb development. I aslo run a Youtube channel where I teach
                Javascript, MERN Stack developement, and much more. Helping
                others dive deep into the world of programming and technology.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
