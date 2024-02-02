import Link from "next/link";
import { socialMediaData } from "@/utils/socialMediaData";

export default function ContactSocials({ mobileStyle }) {
  return (
    <div
      className={`bg-base-200 border-base-content text-base-content ${
        mobileStyle ? "mt-12" : ""
      } border-4 rounded-3xl shadow-xl shadow-purple-800/50 ${
        mobileStyle ? "py-4" : "py-8"
      } px-6`}
    >
      <div className="lobster text-2xl text-primary text-center">
        Let&apos;s Connect!
      </div>
      <hr className="my-4 border-secondary" />
      {mobileStyle ? (
        <div className="flex justify-center space-x-6">
          {socialMediaData.map((item, index) => (
            <Link key={index} href={item.href} className="hover:text-secondary">
              {item.icon}
            </Link>
          ))}
        </div>
      ) : (
        <ul className="mb-3 flex flex-col space-y-2">
          {socialMediaData.map((item, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={item.href}
                className="flex items-center hover:text-secondary"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr className="my-3 border-secondary" />
      <p className={`text-${mobileStyle ? "sm" : "xs"} text-center`}>
        Feel free to email me directly <br />
        <span className="text-primary hover:text-primary-focus">
          <Link href="mailto:Sway.Bae9000@gmail.com">
            Sway.Bae9000@gmail.com
          </Link>
        </span>
      </p>
    </div>
  );
}
