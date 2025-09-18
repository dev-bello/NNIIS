import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  LucideTwitter,
  XIcon,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* <h3 className="text-xl font-bold mb-4">About NNIIS 2025</h3>
            <p className="text-gray-400">
              The Northern Nigeria Investment Summit is a platform for
              investors, entrepreneurs, and policymakers to collaborate and
              drive economic growth in the region.
            </p> */}
            <img
              src="/images/NNIIS_Primary.png"
              width={250}
              height={250}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/exhibition"
                  className="text-gray-400 hover:text-white"
                >
                  Exhibition
                </Link>
              </li>
              <li>
                <Link
                  to="/masterclasses"
                  className="text-gray-400 hover:text-white"
                >
                  Masterclasses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Volunteer</h3>
            <p className="text-gray-400 mb-4">
              Join our dedicated team of volunteers and be a part of making
              NNIIS 2025 a landmark event. Your contribution is invaluable.
            </p>
            <Button asChild size="lg">
              <Link to="/volunteer">Apply to Volunteer</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; 2025 NNIIS. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/NNIIS25"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@NNIIS.25"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              href="https://youtube.com/@nniis25?si=e4MDOS2gk4fmeOUI"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
