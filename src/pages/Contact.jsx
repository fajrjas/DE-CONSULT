import { DiYahooSmall } from "react-icons/di";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="max-w-[300px] md:max-w-[800px] mx-auto">
        <div className="pt-[100px] text-white">
          <h1 className="text-white font-bold text-center text-2xl md:mt-10">
            Contact Us
          </h1>
          <div className="mt-10">
            <h2 className="text-3xl">These are our socials:</h2>
            <div className="lg:flex md:gap-10">
              <div className="flex gap-4 mt-20">
                <span className="text-3xl">
                  <FaFacebook />
                </span>
                <p className="text-lg">facebook.com/majid.ibnmahadali</p>
              </div>
              <div className="flex gap-4 mt-20">
                <span className="text-3xl">
                  <FaLinkedin />
                </span>
                <p className="text-lg">
                  linkedin.com/in/almajid-s-idjas-996b5413a/
                </p>
              </div>
              <div className="flex gap-4 mt-20">
                <span className="text-3xl">
                  <DiYahooSmall />
                </span>
                <p className="text-lg">idjas_almajid@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
