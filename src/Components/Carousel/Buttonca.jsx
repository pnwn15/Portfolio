function Buttonca({ name, icon }) {
  return (
    <div>
      <button className="border-2 tracking-widest hover:bg-[#C778DD] transition-colors  duration-300 border-[#C778DD] p-3">
        {name} {icon}
      </button>
    </div>
  );
}

function ButtonOutline({ name, icon }) {
  return (
    <div>
      <button className="border-2 border-white hover:bg-[#C778DD] hover:text-white transition-colors duration-300 p-3 tracking-widest ">
        {name} {icon}
      </button>
    </div>
  );
}

export default Buttonca;
export { ButtonOutline };
