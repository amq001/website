"use client";
import Reveal from "./Reveal";

type Props = {
  className?: string;
  headingClassName?: string;
  heading?: string;
  description?: string;
  variant?: "primary" | "secondary" | "gradient";
};

const HeadingComponent = ({
  className,
  headingClassName,
  heading,
  description,
  variant = "primary",
}: Props) => {
  return (
    <div className={`${className} flex flex-col gap-4 px-4`} data-variant={variant}>
      {heading && (
        <Reveal>
          <h1
            data-variant={variant}
            className={`text-3xl leading-relaxed md:text-5xl font-medium text-center data-[variant=primary]:text-black data-[variant=secondary]:text-white data-[variant=gradient]:text-transparent data-[variant=gradient]:bg-clip-text data-[variant=gradient]:bg-[linear-gradient(200deg,#000_20%,#F37036_100%)] ${headingClassName}`}
          >
            {heading}
          </h1>
        </Reveal>
      )}
      {description && (
        <p
          data-variant={variant}
          className="text-center text-xl data-[variant=primary]:text-black data-[variant=secondary]:text-white"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default HeadingComponent;
