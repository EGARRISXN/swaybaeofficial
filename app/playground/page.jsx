import Image from "next/image";
import Ava from "../../public/images/ava.jpg";
import CardExample from "../../components/CardExample";

export default function Playground() {
  return (
    // <main className="container bg-black mx-auto text-center items-center p-16">
    <main className="container  mx-auto text-center items-center p-16">
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
      <br />
      <CardExample />
      <br />
      <br />
      <br />
      <br />

      <h4 className="text-primary">text-primary</h4>
      <h4 className="text-primary-focus">text-primary-focus</h4>
      <h4 className="text-primary-content">text-primary-content</h4>
      <br />
      <h4 className="text-secondary">text-secondary</h4>
      <h4 className="text-secondary-focus">text-secondary-focus</h4>
      <h4 className="text-secondary-content">text-secondary-content</h4>
      <br />
      <h4 className="text-accent">text-accent</h4>
      <h4 className="text-accent-focus">text-accent-focus</h4>
      <h4 className="text-accent-content">text-accent-content</h4>
      <br />
      <h4 className="text-neutral">text-neutral</h4>
      <h4 className="text-neutral-focus">text-neutral-focus</h4>
      <h4 className="text-neutral-content">text-neutral-content</h4>
      <br />
      <h4 className="text-base-100">text-base-100</h4>
      <h4 className="text-base-200">text-base-200</h4>
      <h4 className="text-base-300">text-base-300</h4>
      <h4 className="text-base-content">text-base-content</h4>
      <br />
      <h4 className="text-info">text-info</h4>
      <br />
      <h4 className="text-success">text-success</h4>
      <br />
      <h4 className="text-warning">text-warning</h4>
      <br />
      <h4 className="text-error">text-error</h4>
      <br />
    </main>
  );
}
