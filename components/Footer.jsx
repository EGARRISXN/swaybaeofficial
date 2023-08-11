const Footer = () => {
  return (
    // <div className="relative bottom-0 xl:px-20 lg:px-12 sm:px-6 px-4 py-4 mt-4">
    <div className="relative flex bottom-0 p-4 items-center justify-center">
      <p className="text-base leading-4 ">
        2023{" "}
        <span className="text-base font-bold leading-4 bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
          Swaybae
        </span>
      </p>
      <div className="border-l border-accent pl-2 ml-2">
        <p className="text-base leading-4">Inc. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
