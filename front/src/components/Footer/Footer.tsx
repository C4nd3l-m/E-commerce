import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-12 px-6 glass-card border-none bg-background mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
                <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">NextByte</h3>
                    <p className="text-sm text-gray-500 font-medium">&copy; 2024 NextByte. All rights reserved.</p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/candela-villaverde-0a9027318/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/C4nd3l-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        title="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
