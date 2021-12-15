type Props = {
  children: React.ReactNode;
};

const SlideParent: React.FC<Props> = ({ children }) => {
  return <div className={`w-full h-screen p-20 bg-background`}>{children}</div>;
};

export default SlideParent;
