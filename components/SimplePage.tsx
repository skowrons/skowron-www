type Props = {
  children: JSX.Element | Array<JSX.Element>;
};

const SimplePage = ({ children }: Props) => {
  return (
    <div className="flex md:flex-row flex-col-reverse flex-start items-center justify-center">
      <div className="max-w-5xl text-justify prose">{children}</div>
    </div>
  );
};

export default SimplePage;
