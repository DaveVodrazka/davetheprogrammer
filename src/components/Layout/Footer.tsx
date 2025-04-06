import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-dvw py-6 flex justify-around items-center">
      <a
        href="https://github.com/DaveVodrazka"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-3">
          <FaGithub size={30} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/davevodrazka/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-3">
          <FaLinkedin size={30} />
        </div>
      </a>
      <a
        href="https://x.com/DaveVodrazka"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-3">
          <FaTwitter size={30} />
        </div>
      </a>
    </footer>
  );
};
