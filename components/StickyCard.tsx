import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";

type CardProps = {
  title: string;
  description?: string;
  tagline?: String;
  src: string;
  slug?: string;
  color?: string;
};

const StickyCard = ({
  title,
  tagline,
  description,
  src,
  slug,
  color,
}: CardProps) => {
  return (
    <div
      className={
        "h-screen box-border flex w-[calc(100vw-32px)] items-center justify-center sticky top-0 px-4 sm:px-8 md:px-20"
      }
    >
      <div
        className={`bg-black rounded-2xl box-border flex text-white my-4 w-full min-h-[calc(100vh-50px)]`}
      >
        <div className="relative w-full rounded-2xl">
          <div className="absolute w-full h-full rounded-2xl" style={{ boxShadow: "0px 0px 20px rgba(150,120,120,0.5)" }}></div>
          <div className="p-2 md:p-4 z-100 flex max-w-2xl mx-auto flex-col gap-2 w-full h-full items-center justify-center">
            <Reveal className="z-100">
            <h2 className="text-2xl md:text-7xl font-bold text-center  drop-shadow-lg">{title}</h2>
            </Reveal>
            <Reveal className="z-100">
            <p className="text-md md:text-2xl z-100 text-center  drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)]">{tagline}</p>
            </Reveal>
            <div className="z-100">
            <Link href={`/portfolio/${slug}`} rel="noopener noreferrer">
             <Button variant="bordered">Visit {title}</Button>
            </Link>
            </div>
          </div>
          <Image
            src={src}
            fill
            alt={src}
            className="opacity-60 z-10 rounded-2xl hover:opacity-20 ease-in-out object-cover duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
