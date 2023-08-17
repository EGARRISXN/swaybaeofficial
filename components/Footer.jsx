const Footer = () => {
  return (
    <div className="flex p-4 text-center items-center justify-center sticky bottom-0 z-[1]">
      <p className="text-base-content leading-4 ">
        2023{" "}
        <span className=" font-bold leading-4 bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
          Swaybae
        </span>
      </p>
      <div className="border-l border-accent pl-2 ml-2">
        <p className="text-base-content leading-4">Inc. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
