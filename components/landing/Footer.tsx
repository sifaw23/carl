import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, Send, ExternalLink } from 'lucide-react';

interface SocialLinkData {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface SocialLinkProps {
  link: SocialLinkData;
}

const links: SocialLinkData[] = [
  {
    title: "Twitter",
    href: "https://x.com/CrazyCarltoken",
    icon: <Twitter className="text-[#FF1493] w-5 h-5" />,
  },
  {
    title: "Telegram",
    href: "https://t.me/+o4XlacsvDoQwMzY0",
    icon: <Send className="text-[#00FF7F] w-5 h-5" />,
  }
];

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-4 py-3 sm:py-4
      rounded-xl bg-black/40 backdrop-blur-sm w-full
      border border-white/5 hover:border-white/10
      transition-all group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="group-hover:scale-110 transition-transform">
      {link.icon}
    </span>
    <span className="text-base text-white/80">{link.title}</span>
    <ExternalLink className="w-4 h-4 opacity-40 ml-auto" />
  </motion.a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#13001F]/40 backdrop-blur-xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/crazy-carl.png"
                  alt="Crazy Carl"
                  fill
                  className="object-contain"
                  sizes="56px"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-[#FF1493]">$</span>
                  <span className="text-[#CACACA]">CA</span>
                  <span className="text-[#00FF7F]">RL</span>
                </h3>
                <p className="text-sm text-gray-400">
                  Your favorite degen&apos;s favorite token.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <SocialLink key={link.title} link={link} />
              ))}
            </div>
          </div>

          {/* Right Section - Target Card */}
          <div className="md:w-[400px]">
            <div className="p-4 sm:p-5 rounded-xl bg-black/40 backdrop-blur-sm 
              border border-white/5 h-full">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[#00FF7F] font-medium">
                  Next Target: $1B MCap
                </p>
                <motion.span
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  🎯
                </motion.span>
              </div>
              <p className="text-sm text-gray-400">
                Carl&apos;s taking over crypto fr fr
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/5
          flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Get crazy or get rekt ser
            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              🤪
            </motion.span>
          </p>
          <div className="text-sm text-gray-400">
            Just vibing through the charts
            <motion.span
              className="inline-block ml-2"
              animate={{
                y: [-1, 1, -1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              📈
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};