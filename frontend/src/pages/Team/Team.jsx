import React from "react";
import "./Team.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
  const members = [
    {
      name: "Aditya Kumar",
      role: "Frontend Developer",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHFZGbtjLxDpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706549467524?e=1779321600&v=beta&t=R80cTHqvCK9m5doMFIJi42Kv62Mkkq3ZusdnLdTDjtI",
      github: "#",
      linkedin: "https://www.linkedin.com/in/aditya-kumar-19637127b/",
      instagram: "#",
    },
    {
      name: "Nikhil Kumar",
      role: "Backend Developer",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQEJv0hDE9ah0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686721928729?e=1779321600&v=beta&t=j1k6Dw7Ed3bJDHJfyRSz9jJGx4bTy-AHWb4YFBHqyvA",
      github: "#",
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-singh-82a09227b/",
      instagram: "#",
    },
    {
      name: "Gaurav Yadav",
      role: "UI/UX Designer",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFt4oO_upK-zQ/profile-displayphoto-crop_800_800/B56Z2XCCETIUAI-/0/1776355387950?e=1779321600&v=beta&t=ltfyizMF_foAoaCgk6nArv1nAgqk02YLq3CU7s-CQC0",
      github: "#",
      linkedin: "https://www.linkedin.com/in/gauravyadav63/",
      instagram: "#",
    },
  ];

  return (
    <main className="team-page container">
      <section className="team-header">
        <h1>Meet Our Team</h1>
        <p>
          The passionate people behind PrimePoll — building a modern polling
          experience for everyone.
        </p>
      </section>

      
      <section className="team-grid">
        {members.map((member, i) => (
          <div className="team-card" key={i}>
            <img src={member.img} alt={member.name} className="team-img" />

            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>

            <div className="team-socials">
              <a href={member.github}>
                <FaGithub />
              </a>
              <a href={member.linkedin}>
                <FaLinkedin />
              </a>
              <a href={member.instagram}>
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Team;
