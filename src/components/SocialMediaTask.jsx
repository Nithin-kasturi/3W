import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialMediaTask = () => (
    <div className="bg-white p-4 shadow-lg rounded-lg mx-2 mb-4">
      <h2 className="font-bold text-lg mb-4">Social Media Task</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="text-center items-center justify-center flex">
            <FaFacebook className="h-10 w-10"/>
            <div className="relative bottom-4">
                <p className="font-bold text-green-600">+100</p>
            </div>
        </div>
        <div className="text-center items-center justify-center flex">
            <FaInstagramSquare  className="h-10 w-10"/>
            <div className="relative bottom-4">
                <p className="font-bold text-green-600">+400</p>
            </div>
        </div>
        <div className="text-center items-center justify-center flex">
            <FaLinkedin className="h-10 w-10"/>
            <div className="relative bottom-4">
                <p className="font-bold text-green-600">+800</p>
            </div>
        </div>
        <div className="text-center items-center justify-center flex">
            <FaTelegram className="h-10 w-10"/>
            <div className="relative bottom-4">
                <p className="font-bold text-green-600">+890</p>
            </div>
        </div>
        <div className="text-center items-center justify-center flex">
            <FaYoutube className="h-10 w-10"/>
            <div className="relative bottom-4">
                <p className="font-bold text-green-600">+150</p>
            </div>
        </div>
        <div className="text-center items-center justify-center flex">
            <FaXTwitter className="h-10 w-10"/>
            <div className="relative bottom-4">
                <p className="font-bold text-green-600">+200</p>
            </div>
        </div>
        
        {/* <div className="text-center">
          <img
            src=""
            alt="Facebook"
            className="mx-auto h-10 w-10"
          />
          <p className="mt-2 font-bold text-blue-600">225</p>
        </div>
        <div className="text-center">
          <img
            src="/images/x.png"
            alt="X"
            className="mx-auto h-10 w-10"
          />
          <p className="mt-2 font-bold text-gray-600">85</p>
        </div>
        <div className="text-center">
          <img
            src="/images/youtube.png"
            alt="YouTube"
            className="mx-auto h-10 w-10"
          />
          <p className="mt-2 font-bold text-red-600">150</p>
        </div>
        <div className="text-center">
          <img
            src="/images/telegram.png"
            alt="Telegram"
            className="mx-auto h-10 w-10"
          />
          <p className="mt-2 font-bold text-blue-600">60</p>
        </div>
        <div className="text-center">
          <img
            src="/images/linkedin.png"
            alt="LinkedIn"
            className="mx-auto h-10 w-10"
          />
          <p className="mt-2 font-bold text-blue-600">30</p>
        </div> */}
      </div>
    </div>
  );
  export default SocialMediaTask;
  