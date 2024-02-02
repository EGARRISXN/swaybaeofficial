export default function PageName({ children }) {
  return (
    <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
      <p className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {children}
      </p>
    </div>
  );
}
