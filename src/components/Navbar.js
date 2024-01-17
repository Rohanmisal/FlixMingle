import logo from "../assets/img/logo.svg";


const Navbar = () => {
  return (
    <div className="flex justify justify-between bg-pink-100 shadow-lg">
      <a href="/">
      <img className="w-[75%]" src={logo} alt="logoimg" />
      </a>
      <ul className="flex py-6 ">
        <li className="px-3 hover:rounded hover:bg-black/5 ">shows</li>
        <li className="px-3 hover:rounded hover:bg-black/5 ">Movies</li>
        <li className="px-3 hover:rounded hover:bg-black/5 ">MxDesi</li>
        <li className="px-3 hover:rounded hover:bg-black/5 ">K-Drama</li>
        <li className="px-3 hover:rounded hover:bg-black/5 ">BEst</li>
        <li className="px-3 hover:rounded hover:bg-black/5 ">shows</li>
      </ul>
    </div>
  );
};

// items-center bg-gradient-to-b from-[#000] from-50% flex flex-row h-16 justify-start left-[50%] m-auto max-w-screen-2xl opacity-100 py-0 px-[60px] fixed top-0 transform-[-50%, 0] transition-{transition-behavior:normal transition-duration: 0.5s transition-timing-function:ease transition-delay: 0s transition-property:all} select-none w-[100%] z-[6] box-border decoration-transparent
export default Navbar;
