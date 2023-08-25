import Image from "next/image";
import Discord from "../../public/images/discordblue.jpeg";

export default function CardExample() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={Discord}
          alt="Shoes"
          width={400}
          height={400}
          className="rounded-t-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
