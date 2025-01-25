import * as React from "react";
import "./Body.style.css";
import * as Yup from "yup";

import { Text } from "./Text";
import { Section } from "./Section";
import { useData } from "../useData";
import { DateTime } from "luxon";
import { Form, InputField, SubmitButton } from "./Form";
import { sendEmail } from "../services/emailjs";
import { Button } from "./Button";

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
      <TechStack />
      <MessageMe />
    </div>
  );
}

interface SectionContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
}

function SectionContainer({
  children,
  title,
  ...props
}: SectionContainerProps) {
  return (
    <div {...props}>
      <Section>
        <Text.Header1>{title}</Text.Header1>
        <div className="sectioned-container-inner">
          <div className={props.className}>{children}</div>
        </div>
      </Section>
    </div>
  );
}

function AboutMe() {
  const { aboutMe } = useData();
  return (
    <SectionContainer title="About me">
      <Text.Body fontFamily="body-mono">{aboutMe}</Text.Body>
    </SectionContainer>
  );
}

function WorkExperience() {
  const { workExperience } = useData();
  const ordered = [...workExperience];

  return (
    <SectionContainer title="Work experience">
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

function TechStack() {
  const { languages } = useData();
  return (
    <SectionContainer title="Tech stack">
      <div className="tech-stack-container">
        {languages.map(({ img, name }, key) => {
          return (
            <div key={key} className="tech-stack-item">
              <img height={48} src={img} alt={name} title={name} />
              <Text.Tiny align="center" fontFamily="body-mono">
                {name}
              </Text.Tiny>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

function useLocalBooleanStorage() {
  const set = (key: string, value: boolean) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  const get = (key: string) => {
    const res = window.localStorage.getItem(key);
    try {
      if (!res) {
        return;
      }
      return JSON.parse(res);
    } catch (_) {
      return res;
    }
  };
  return {
    set,
    get,
  };
}

const validationSchema = Yup.object({
  emailAddress: Yup.string()
    .email("Enter a valid email address")
    .required("Required"),
  emailBody: Yup.string().required("Required"),
});

const HAS_SENT_BOOLEAN_KEY = "has-sent-email";

function MessageMe() {
  const [sent, setSent] = React.useState<boolean>(false);
  const { get, set } = useLocalBooleanStorage();
  const resetSentState = () => {
    set(HAS_SENT_BOOLEAN_KEY, false);
    setSent(false);
  };

  React.useEffect(() => {
    if (get(HAS_SENT_BOOLEAN_KEY)) {
      setSent(true);
    } else {
      setSent(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (values: any) => {
    await sendEmail(values);
    set(HAS_SENT_BOOLEAN_KEY, true);
    setSent(true);
  };
  if (!sent) {
    return (
      <SectionContainer title="Get in touch">
        <Form
          onSubmit={handleSubmit}
          initialValues={{ emailAddress: "", emailBody: "" }}
          validationSchema={validationSchema}
        >
          <InputField.Email
            name="emailAddress"
            label="Email address"
            placeholder="joe@example.com"
            required
          />
          <InputField.TextArea
            name="emailBody"
            label="Message"
            placeholder="enter your message here"
            required
          />
          <SubmitButton value="Send" />
        </Form>
      </SectionContainer>
    );
  } else {
    return (
      <SectionContainer title="Get in touch" className="sent-message-container">
        <Text.Header2>Message sent</Text.Header2>
        <div style={{ paddingBottom: 20 }}>
          <Text.Body>Thanks for getting in touch!</Text.Body>
          <Text.Body>I'll get back to you as soon as I can.</Text.Body>
        </div>
        <Button onClick={resetSentState}>Send another message</Button>
      </SectionContainer>
    );
  }
}
