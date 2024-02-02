export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-1 p-4 items-center justify-center sticky bottom-1 z-10">
        <div>
          <p className="text-base-content leading-4 ">© 2024</p>
        </div>
        <div className="border-l border-accent pl-2 ml-2">
          <p className="font-bold leading-4 bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
            Sway Bae
          </p>
        </div>
        <div className="border-l border-accent pl-2 ml-2">
          <p className="text-base-content leading-4">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
