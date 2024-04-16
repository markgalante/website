import * as React from "react";
import "./Body.style.css";

import { Text } from "./Text";
import { Section } from "./Section";
import { useData } from "../useData";
import { DateTime } from "luxon";

export function Body() {
  return (
    <div className="body-container">
      <div className="custom-shape-divider-top-1713099304">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <AboutMe />
      <WorkExperience />
    </div>
  );
}

interface SectionContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

function SectionContainer({ children, ...props }: SectionContainerProps) {
  return (
    <div {...props}>
      <Section>
        <div className="sectioned-container-inner">{children}</div>
      </Section>
    </div>
  );
}

function AboutMe() {
  const { aboutMe } = useData();
  return (
    <SectionContainer>
      <Text.Header1>About me</Text.Header1>
      <Text.Body fontFamily="body-mono">{aboutMe}</Text.Body>
    </SectionContainer>
  );
}

function WorkExperience() {
  const { workExperience } = useData();
  const ordered = [...workExperience];

  return (
    <SectionContainer>
      <Text.Header1>Work experience</Text.Header1>
      <ol className="work-experience-ordered-list">
        {ordered.reverse().map((props, key) => {
          return <WorkExperienceListItem {...props} key={key} />;
        })}
      </ol>
    </SectionContainer>
  );
}

interface WorkExperienceListItemProps {
  company: string;
  title: string;
  start: string;
  end?: string;
  description: string;
  key: number;
}

function WorkExperienceListItem({
  company,
  description,
  start,
  end,
  key,
}: WorkExperienceListItemProps) {
  const startString = DateTime.fromISO(start).toFormat("DDD");
  const endString = end ? DateTime.fromISO(end).toFormat("DDD") : "present";
  return (
    <li key={key} className="work-experience-list-item">
      <div className="work-experience-list-item-container">
        <Text.Header2>{company}</Text.Header2>
        <Text.Body color="secondary">
          {startString} - {endString}
        </Text.Body>
        <Text.Body>{description}</Text.Body>
      </div>
    </li>
  );
}
