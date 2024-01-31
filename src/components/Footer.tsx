import { FaDiscord, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center items-center">
            <div className="flex gap-2 mr-2">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Discord <FaDiscord className="ml-1" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Github <FaGithub className="ml-1" />
                </a>
            </div>
            <p>© 2024 CC CS Club</p>
        </footer>
    );
};

export default Footer;