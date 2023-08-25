import {
  BsTwitch,
  BsYoutube,
  BsTwitter,
  BsDiscord,
  BsTiktok,
  BsInstagram,
} from "react-icons/bs";

export default function ContactList2() {
  return (
    <div className="bg-base-200 border-base-content mt-12 border-[6px] rounded-3xl shadow-xl shadow-purple-800/50 py-4">
      <h3 className="text-2xl mb-4 text-center hover:text-info">
        Let&apos; s Connect!
      </h3>
      <hr className="my-4 border-secondary" />
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.twitch.tv/sway_bae"
          className="hover:text-secondary"
        >
          <BsTwitch size="1.3rem" />
        </a>
        <a
          href="https://www.youtube.com/swaybaetv"
          className="hover:text-secondary"
        >
          <BsYoutube size="1.3rem" />
        </a>
        <a
          href="https://twitter.com/sway_baetv"
          className="hover:text-secondary"
        >
          <BsTwitter size="1.3rem" />
        </a>
        <a
          href="https://www.tiktok.com/@sway_baetv"
          className="hover:text-secondary"
        >
          <BsTiktok size="1.3rem" />
        </a>
        <a
          href="https://www.instagram.com/sway_baetv"
          className="hover:text-secondary"
        >
          <BsInstagram size="1.3rem" />
        </a>
        <a
          href="https://discord.com/invite/K73uN9k"
          className="hover:text-secondary"
        >
          <BsDiscord size="1.3rem" />
        </a>
      </div>
      <hr className="my-4 border-secondary" />
      <p className=" text-sm text-center font-bold hover:text-lg">
        Feel free to email me directly
        <br />
        <span className="text-primary hover:text-primary-focus font-bold">
          <a href="mailto:Sway.Bae9000@gmail.com">Sway.Bae9000@gmail.com</a>
        </span>
      </p>
    </div>
  );
}
