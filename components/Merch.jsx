import TeespringEmbed1 from "./(merch)/TeespringEmbed"

export default function Merch() {
  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
          <h1 className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Merch
          </h1>
        </div>
        <br />
        <div className="grid mx-auto justify-center mt-16 xs:px-2 sm:px-10 md:px-12 lg:px-16">
            <TeespringEmbed1 />
        </div>
      </div>
    </div>
  )
}
