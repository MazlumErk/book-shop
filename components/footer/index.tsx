// Icons
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import ContactButton from "../contact-button";

// Contact List
const contactList = [
  {
    icon: <AiOutlineGithub size="2em" />,
    link: "https://github.com/MazlumErk",
    label: "GitHub",
  },
  {
    icon: <AiOutlineLinkedin size="2em" />,
    link: "https://www.linkedin.com/in/mazlum-e-19936a233/",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {contactList.map((contact) => (
        <ContactButton
          icon={contact.icon}
          link={contact.link}
          label={contact.label}
        />
      ))}
    </footer>
  );
}
