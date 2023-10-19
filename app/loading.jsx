export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-center text-gray-800 opacity-80 p-4">
        Loading...
      </h1>
      <div className="loader"></div>
    </div>
  )
}
