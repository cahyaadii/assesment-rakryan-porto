import React from "react";
import ProjectItems from "../assets/ProjectsItems";

const Projects = () => {
  const buttons = [
    {
      id: 1,
      name: "All",
      status: "unactive",
    },
    {
      id: 2,
      name: "UI/UX",
      status: "unactive",
    },
    {
      id: 3,
      name: "Web Design",
      status: "active",
    },
    {
      id: 4,
      name: "App Design",
      status: "unactive",
    },
    {
      id: 5,
      name: "Graphic Design",
      status: "unactive",
    },
  ];

  return (
    <div className="bg-white max-w-6xl mx-auto py-16">
      <div className="flex flex-col items-center justify-center gap-8 lg:max-w-[600px] mx-auto text-center">
        <h2 className="text-5xl font-bold">Projects</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className="flex flex-wrap gap-4 py-4">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`py-2 px-4 rounded-lg transition-colors hover:cursor-pointer hover:bg-[#FD6F00] hover:text-white border border-gray-300
              ${
                button.status === "active"
                  ? "bg-[#FD6F00] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {ProjectItems.map((project) => (
          <div key={project.id} className="bg-[#FFEBDB] p-4 rounded-lg">
            <img src={project.imageFront} alt={project.title} className="absolute h-[309px] w-[206px]" />
            <img src={project.imageBack} alt={project.title}  className="ml-31 h-[366px] w-[206px]"/>
            <p className="text-[#FD6F00]">Web Design</p>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <button className="bg-[#FD6F00] text-white px-10 py-2 rounded-md hover:bg-[#CC5900] transition-colors hover:cursor-pointer">
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
