type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div className={`max-w-7xl mx-auto sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
