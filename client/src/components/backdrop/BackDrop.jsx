import "./BackDrop.css";

const BackDrop = ({ show , close }) => {
  return show && <div className="backdrop" onClick={close}></div>;
};

export default BackDrop;
