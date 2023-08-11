import Image from "next/image";
import Ava from "../../public/images/ava.jpg";

export default function Playground() {
  return (
    // <main className="container bg-black mx-auto text-center items-center p-16">
    <main className="container bg-white mx-auto text-center items-center p-16">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex-shrink-0 ">
          <Image className="h-12 w-12 rounded-full" src={Ava} alt="SwayBae" />
        </div>
        <div className="text-base font-medium text-white">
          <div className="text-base font-medium text-white">SwayBae</div>
          <div className="text-sm font-medium text-gray-400">SwayBae#9000</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="text-primary">text-primary</h1>
      <h1 className="text-primary-focus">text-primary-focus</h1>
      <h1 className="text-primary-content">text-primary-content</h1>
      <br />
      <h1 className="text-secondary">text-secondary</h1>
      <h1 className="text-secondary-focus">text-secondary-focus</h1>
      <h1 className="text-secondary-content">text-secondary-content</h1>
      <br />
      <h1 className="text-accent">text-accent</h1>
      <h1 className="text-accent-focus">text-accent-focus</h1>
      <h1 className="text-accent-content">text-accent-content</h1>
      <br />
      <h1 className="text-neutral">text-neutral</h1>
      <h1 className="text-neutral-focus">text-neutral-focus</h1>
      <h1 className="text-neutral-content">text-neutral-content</h1>
      <br />
      <h1 className="text-base-100">text-base-100</h1>
      <h1 className="text-base-200">text-base-200</h1>
      <h1 className="text-base-300">text-base-300</h1>
      <h1 className="text-base-content">text-base-content</h1>
      <br />
      <h1 className="text-info">text-info</h1>
      <br />
      <h1 className="text-success">text-success</h1>
      <br />
      <h1 className="text-warning">text-warning</h1>
      <br />
      <h1 className="text-error">text-error</h1>
      <br />
    </main>
  );
}
