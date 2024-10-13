import { BsFacebook, BsInstagram, BsLinkedin, BsPinterest, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-black text-black dark:text-white py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
          
          {/* About Us Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About us</h2>
            <p className="text-sm mb-4">
              Desires to obtain pain of itself, because it is pain, but occasionally circumstances.
            </p>
         
          </div>
  
          {/* Explore Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Explore</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-red-500">About Company</a></li>
              <li><a href="#" className="hover:underline hover:text-red-500">Meet the Team</a></li>
              <li><a href="#" className="hover:underline hover:text-red-500">News & Media</a></li>
              <li><a href="#" className="hover:underline hover:text-red-500">Our Projects</a></li>
              <li><a href="#" className="hover:underline hover:text-red-500">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <a href="mailto:needhelp@company.com" className="hover:underline">teebliqs4@gmail.com</a>
            <p className="text-sm mt-2 flex items-center space-x-2">
              <CiPhone className="text-red-500" />
              +2348149602710
            </p>
          </div>
  
          {/* Gallery Section */}
          <div>
            <div className="grid grid-cols-3 gap-2">
                <BsInstagram className="text-4xl text-gray-300" />
                <BsTwitterX className="text-4xl text-gray-300" />
                <BsFacebook className="text-4xl text-gray-300" />
                <BsLinkedin className="text-4xl text-gray-300" />
                <BsWhatsapp className="text-4xl text-gray-300" />
                <BsPinterest className="text-4xl text-gray-300" />
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-gray-200 dark:bg-black text-gray-700 dark:text-gray-400 text-center mt-10">
          <p>© 2024 Electricien | All Rights Reserved | <a href="#" className="text-red-500 hover:underline">ThemeMascot</a></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  