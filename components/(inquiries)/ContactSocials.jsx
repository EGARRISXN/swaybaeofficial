import {
  BsTwitch,
  BsYoutube,
  BsTwitter,
  BsDiscord,
  BsTiktok,
  BsInstagram,
} from "react-icons/bs";
export default function ContactSocials({ mobileStyle }) {
  const contactList = [
    {
      label: "Twitch",
      icon: <BsTwitch size="1.3rem" />,
      href: "https://www.twitch.tv/sway_bae",
    },
    {
      label: "Youtube",
      icon: <BsYoutube size="1.3rem" />,
      href: "https://www.youtube.com/swaybaetv",
    },
    {
      label: "Twitter",
      icon: <BsTwitter size="1.3rem" />,
      href: "https://twitter.com/sway_baetv",
    },
    {
      label: "TikTok",
      icon: <BsTiktok size="1.3rem" />,
      href: "https://www.tiktok.com/@sway_baetv",
    },
    {
      label: "Instagram",
      icon: <BsInstagram size="1.3rem" />,
      href: "https://www.instagram.com/sway_baetv",
    },
    {
      label: "Discord",
      icon: <BsDiscord size="1.3rem" />,
      href: "https://discord.com/invite/K73uN9k",
    },
  ];
  return (
    <div
      className={`bg-base-200 border-base-content text-base-content ${
        mobileStyle ? "mt-12" : ""
      } border-4 rounded-3xl shadow-xl shadow-purple-800/50 ${
        mobileStyle ? "py-4" : "py-8"
      } px-6`}
    >
      <h3 className="text-2xl text-primary text-center">Let&apos;s Connect!</h3>
      <hr className="my-4 border-secondary" />
      {mobileStyle ? (
        <div className="flex justify-center space-x-6">
          {contactList.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-secondary">
              {item.icon}
            </a>
          ))}
        </div>
      ) : (
        <ul className="mb-3 flex flex-col space-y-2">
          {contactList.map((item, index) => (
            <li key={index} className="flex items-center">
              <a
                href={item.href}
                className="flex items-center hover:text-secondary"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <hr className="my-3 border-secondary" />
      <p
        className={`text-${mobileStyle ? "sm" : "xs"} text-center hover:text-${
          mobileStyle ? "lg" : "sm"
        } hover:font-semibold`}
      >
        Feel free to email me directly <br />
        <span className={`text-primary hover:text-primary-focus `}>
          <a href="mailto:Sway.Bae9000@gmail.com">Sway.Bae9000@gmail.com</a>
        </span>
      </p>
    </div>
  );
}
