import {
  BsTwitch,
  BsYoutube,
  BsTwitter,
  BsDiscord,
  BsTiktok,
  BsInstagram,
} from "react-icons/bs";

export default function ContactList1() {
  return (
    <div className="bg-base-200 border-base-content border-r-4 border-b-4 rounded-3xl shadow-xl shadow-purple-800/50 py-8 px-8">
      <h3 className="text-2xl text-center mb-3">Socials</h3>
      <hr className="my-4 border-secondary" />
      <ul className="mb-3 flex flex-col space-y-2">
        <li className="flex items-center">
          <a
            href="https://www.twitch.tv/sway_bae"
            className="flex items-center hover:text-secondary"
          >
            <BsTwitch size="1.3rem" />
            <span className="ml-2">Twitch</span>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://www.youtube.com/swaybaetv"
            className="flex items-center hover:text-secondary"
          >
            <BsYoutube size="1.3rem" />
            <span className="ml-2">Youtube</span>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://twitter.com/sway_baetv"
            className="flex items-center hover:text-secondary"
          >
            <BsTwitter size="1.3rem" />
            <span className="ml-2">Twitter</span>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://www.tiktok.com/@sway_baetv"
            className="flex items-center hover:text-secondary"
          >
            <BsTiktok size="1.3rem" />
            <span className="ml-2">TikTok</span>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://www.instagram.com/sway_baetv/"
            className="flex items-center hover:text-secondary"
          >
            <BsInstagram size="1.3rem" />
            <span className="ml-2">Instagram</span>
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://discord.com/invite/K73uN9k"
            className="flex items-center hover:text-secondary"
          >
            <BsDiscord size="1.3rem" />
            <span className="ml-2">Discord</span>
          </a>
        </li>
      </ul>
      <hr className="my-4 border-secondary" />
      <p className="text-xs">
        Feel free to email me directly <br />
        <span className="text-primary hover:text-primary-focus font-bold">
          <a href="mailto:Sway.Bae9000@gmail.com">Sway.Bae9000@gmail.com</a>
        </span>
      </p>
    </div>
  );
}
