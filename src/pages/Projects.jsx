import React from "react";
import packA from "../assets/A.jpg";
import packB from "../assets/B.jpg";
import packC from "../assets/C.jpg";
import packD from "../assets/D.jpg";
import packE from "../assets/E.jpg";
import packF from "../assets/F.jpg";

const PackageCard = ({ item }) => {
  return (
    <div className="package-card">
      <img src={item.icon} alt={item.title} className="package-img" />
      <h2 className="package-title">{item.title}</h2>
      <p className="package-context">{item.context}</p>
    </div>
  );
};

function Projects() {
  const packageData = [
    { id: 1, title: "Premium", icon: packA, context: "Clean, high-impact aesthetic designed for modern clarity." },
    { id: 2, title: "Elite", icon: packB, context: "The ultimate tier. Refined details with premium gold-standard finishes." },
    { id: 3, title: "Advanced", icon: packC, context: "Complex architecture and robust design for maximum scale." },
    { id: 4, title: "Exclusive", icon: packD, context: "A specialized setup focused on unique, custom-tailored environments." },
    { id: 5, title: "Luxury", icon: packE, context: "Elevated design language for high-end professional presentations." },
    { id: 6, title: "Signature", icon: packF, context: "Our most comprehensive package for total artistic immersion." },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {packageData.map((pkg) => (
          <PackageCard key={pkg.id} item={pkg} />
        ))}
      </div>
    </section>
  );
}

export default Projects;