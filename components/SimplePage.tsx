type Props = {
  children: JSX.Element | Array<JSX.Element>;
  className?: string;
};

const SimplePage = ({ children, className }: Props) => {
  return (
    <div className="flex md:flex-row flex-col-reverse flex-start items-center justify-center">
      <div className={`max-w-5xl text-justify ${className}`}>{children}</div>
    </div>
  );
};

export default SimplePage;
