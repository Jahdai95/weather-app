import "./wrapper.css";

interface wrapperProps {
  children: React.ReactNode;
}

function Wrapper(props: wrapperProps) {
  const { children } = props;
  return (
    <div className="background">
      <div className="container">
        <div className="main">{children}</div>
      </div>
    </div>
  );
}

export default Wrapper;
