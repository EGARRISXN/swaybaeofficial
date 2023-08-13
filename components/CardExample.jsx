import Image from "next/image";
import Discord from "../public/images/discordblue.jpeg";

export default function CardExample() {
  return (
    <div className="container mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={Discord}
            alt="Shoes"
            width={500}
            height={500}
            className="rounded-t-md"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
