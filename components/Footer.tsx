import Image from "next/image";
import footerLogo from "../public/footer-logo.svg";

const Footer = () => {
  return (
    <div
      className="relative h-[600px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%,100% 100%,0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sticky top-[calc(100vh-600px)] w-full h-[600px] flex gap-4 items-center justify-between">
          <Image src={footerLogo} alt="Logo" className="w-48" />
          <div className="grid grid-cols-3 gap-auto w-3xl">
            <div className="flex flex-col gap-8">
              <h1 className="text-lg text-white">Company</h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold text-white">Footer</h1>
                <h1 className="text-xl font-semibold text-white">Footer</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg text-white">Reach us out</h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold text-white">Footer</h1>
                <h1 className="text-xl font-semibold text-white">Footer</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg text-white">Follow us on Social Media</h1>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold text-white">Footer</h1>
                <h1 className="text-xl font-semibold text-white">Footer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
