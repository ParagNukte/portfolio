function Card({ projectImage, projectTitle, desc, githubLink, live }) {
  return (
    <div className="border border-red-500 rounded-lg w-[365px] lg:w-[400px] bg-red-50">
      {/* Container for image with aspect ratio control */}
      <div className="relative pb-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        <img
          src={projectImage}
          alt="Project"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{projectTitle}</h1>
        <p>{desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a
              href={githubLink}
              target="_blank"
              className="flex gap-1"
              rel="noopener noreferrer"
            >
              <img src="Github.png" alt="GitHub" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
