import TeespringEmbed1 from "../../components/TeespringEmbed1";
import TeespringEmbed2 from "../../components/TeespringEmbed2";
import TeespringEmbed3 from "../../components/TeespringEmbed3";

export default function Merch() {
  return (
    <main>
      <div className="container mx-auto flex flex-col items-center justify-center py-16">
        <div className=" hidden lg:block">
          <TeespringEmbed1 />
        </div>
        <div className="hidden md:block lg:hidden">
          <TeespringEmbed2 />
        </div>
        <div className="block md:hidden">
          <TeespringEmbed3 />
        </div>
      </div>
    </main>
  );
}
