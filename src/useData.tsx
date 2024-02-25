import * as React from "react";

import type { CV } from "./cv.types";

const backup = {
  record: {
    aboutMe:
      "Once a physiotherapist for 4.5 years, I traded the clinic for code, now a self-taught front-end developer crafting user-friendly experiences at Yoco Technologies with React and React Native. When I'm not building interfaces, you'll find me on the football pitch or geeking out over the latest sports stats. Let's connect – I'm always down for a chat about code, tech, or a lively sports debate!",
    workExperience: [
      {
        start: "03-01-2017",
        end: "31-12-2017",
        title: "Community Service Physiotherapist",
        company: "Western Cape Government Department of Health",
        location: "Matzikama Sub-District, Vredendal",
        description:
          "After graduating as a physiotherapist from Stellenbosch University in 2016, I had to do a mandatory year of working in the South African public sector. As the only physiotherapist, I had to organise and provide services to a total of 10 clinics in 9 areas inside the sub-discrict.",
        skills: [
          "Rehabilitation",
          "Interpersonal",
          "Organisational",
          "Health advocacy",
        ],
      },
      {
        start: "08-01-2018",
        end: "13-10-2021",
        title: "Physiotherapist",
        compoany: "Physiopaedic and Lyle Diedericks Physiotherapists",
        location: "Cape Town",
        description:
          "Private physiotherapist based in Life Vincent Pallotti hospital and Robin Trust sub-acute hospital. I also saw out-patients for post-op and general rehabilitation. An important skill learnt is being able to work and network with other health professionals in an interdisciplinary setting.",
        skills: ["Networking", "Rehabilitation"],
      },
      {
        start: "18-10-2021",
        title: "Frontend software engineer",
        company: "Yoco Technologies",
        location: "Cape Town",
        skills: ["React", "React Native", "TypeScript", "Storybook", "Testing"],
        description:
          "Working on a variety of applications and websites at Yoco. Notable projects was the Instant Payouts feature in the Yoco POS app as well as currently being part of the team that is working on a new management application and website.",
      },
    ],
    languages: [
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Express",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Node JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Mongo DB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "Jest",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      },
    ],
  },
  metadata: {
    id: "65b4d0b3dc746540189c43c8",
    private: true,
    createdAt: "2024-01-27T09:45:23.698Z",
    name: "cv-work-experience",
  },
};

const DataContext = React.createContext<CV>(backup);

export function DataProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: CV;
}) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData(): CV["record"] {
  return React.useContext(DataContext).record;
}
