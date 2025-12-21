type CardProps = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
};

const StickyCard = ({ title, description, src, link, color }: CardProps) => {
  return (
    <div
      className={
        "h-screen box-border flex w-[calc(100vw-32px)] items-center justify-center sticky top-0 px-4 sm:px-8 md:px-20"
      }
    >
      <div
        className={`bg-[linear-gradient(135deg,#000_20%,#F37036_100%)] box-border rounded-2xl flex text-white text-3xl items-center justify-center my-4 w-full min-h-[calc(100vh-50px)]`}
      >
        {title}
      </div>
    </div>
  );
};

export default StickyCard;
