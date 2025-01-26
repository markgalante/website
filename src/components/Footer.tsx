import { Text } from "./Text";
import { Flex } from "./Flex";
import { useData } from "../useData";

import LinkedinIcon from "../assets/social-media/linkedin.png";
import GithubIcon from "../assets/social-media/github.png";
import EmailIcon from "../assets/social-media/email.png";
import { SocialMediaPlatform } from "../cv.types";

import "./Footer.styles.css";

export function Footer() {
  return (
    <footer className="footer" style={{paddingBottom: 14}}>
      <Flex alignItems="center" flexDirection="column">
        <Text.Tiny fontFamily="body-mono" color="dark">
          &copy; Mark Galante, 2025
        </Text.Tiny>
        <SocialMediaLinks />
      </Flex>
    </footer>
  );
}

const SOCIAL_MEDIA_IMAGES: Record<SocialMediaPlatform, any> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  email: EmailIcon,
};

function SocialMediaLinks() {
  const { contact } = useData();
  return (
    <Flex flexDirection="row" justifyContent="center" gap="1rem">
      {contact.map(({ platform, img, alt, link }, key) => {
        return (
          <a key={key} href={link} target="_blank" rel="noreferrer">
            <img
              src={SOCIAL_MEDIA_IMAGES[platform]}
              alt={alt}
              title={platform}
              height={32}
              width={32}
            />
          </a>
        );
      })}
    </Flex>
  );
}
