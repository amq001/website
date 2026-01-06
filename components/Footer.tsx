import Image from "next/image";
import footerLogo from "../public/footer-logo.svg";

const Footer = () => {
  return (
    <div
      className="relative h-[600px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%,100% 100%,0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sticky top-[calc(100vh-600px)] h-[600px] flex flex-col md:flex-row gap-8 items-center md:items-center justify-center md:justify-between">
          <div>
          <Image src={footerLogo} alt="Logo" className="w-48" />
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-auto max-w-3xl flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center md:items-start gap-2">
              <h1 className="text-xl font-semibold text-white">Company</h1>
              <div className="flex flex-col gap-1 items-baseline-last">
                <h1 className="text-lg text-white text-center">Footer</h1>
                <h1 className="text-lg text-white">Footer</h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start gap-2">
              <h1 className="text-xl font-semibold text-white">Reach us out</h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg text-white">Footer</h1>
                <h1 className="text-lg text-white">Footer</h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start gap-2">
              <h1 className="text-xl font-semibold text-white">Follow us on Social Media</h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg text-white">Footer</h1>
                <h1 className="text-lg text-white">Footer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
