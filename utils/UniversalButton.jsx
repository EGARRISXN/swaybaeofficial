export default function UniversalButton({ children }) {
  return (
    <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
      {children}
    </button>
  )
}
