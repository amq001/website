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
  variant?: "primary" | "secondary";
  color?: string;
};

const StickyCard = ({
  title,
  tagline,
  description,
  src,
  slug,
  variant = "primary",
  color,
}: CardProps) => {
  return (
    <div
      data-variant={variant}
      className={
        "h-screen box-border flex w-[calc(100vw-32px)] mx-auto items-center justify-center sticky top-0 data-[variant=primary]:px-2 data-[variant=primary]:sm:px-8 data-[variant=primary]:md:px-20"
      }
    >
      <div
        className={`bg-black rounded-2xl box-border flex text-white data-[variant=primary]:my-4 w-full min-h-[calc(100vh-50px)]`}
      >
        <div className="relative w-full rounded-2xl group overflow-hidden">
          <div className="absolute bg-cover bg-center z-5 bg-no-repeat opacity-50 rounded-2xl hover:opacity-20 ease-in-out object-cover duration-500 group-hover:opacity-30 w-full h-full overflow-hidden data-[variant=primary]:shadow-[0_0_20px_rgba(150,120,120,0.5)] " style={{backgroundImage: `url(${src})`}}>
          </div>
          <div className="p-2 md:p-4 relative z-100 flex max-w-2xl mx-auto flex-col gap-1 md:gap-2 w-full h-full items-center justify-center">
            <Reveal className="z-100">
            <h2 className="text-2xl md:text-7xl leading-10 md:leading-20 font-bold text-center drop-shadow-lg">{title}</h2>
            </Reveal>
            <Reveal className="z-100">
            <p className="text-md md:text-2xl z-100 text-center drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)]">{tagline}</p>
            </Reveal>
            <div className="z-100">
            <Link href={`/portfolio/${slug}`} rel="noopener noreferrer">
             <Button variant="bordered">Visit {title}</Button>
            </Link>
            </div>
          </div>
          {/* <Image
            src={src}
            fill
            alt={src}
            className="opacity-60 z-10 rounded-2xl hover:opacity-20 ease-in-out object-cover duration-500"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
