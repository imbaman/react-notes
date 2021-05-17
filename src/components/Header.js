import { BiSun, BiMoon } from "react-icons/bi";

const Header = ({ handleDarkMode, darkmode }) => {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button
        className='darkmode'
        onClick={() => {
          handleDarkMode((s) => !s);
        }}>
        {darkmode ? (
          <BiSun style={{ color: "yellow" }} size='1.5em' />
        ) : (
          <BiMoon size='1.5em' />
        )}
      </button>
    </div>
  );
};

export default Header;
