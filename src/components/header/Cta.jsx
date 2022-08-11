import React from "react";
import resume from "../../asset/CV.pdf";

const Cta = () => {
  return (
    <div className="cta p-4 mt-6 flex gap-8">
      <a href={resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
