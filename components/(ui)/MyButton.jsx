export default function MyButton({ onClick, children, type, disabled }) {
  return (
    <>
      <button
        type={type || "button"}
        onClick={onClick}
        disabled={disabled}
        className="btn-sm w-40 h-12 btn-secondary hover:scale-105 ease-in duration-200 shadow-md rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white"
      >
        {children}
      </button>
    </>
  );
}
