import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { Footer } from ".";
import {
  PiBehanceLogoFill,
  PiCodeBlockFill,
  PiCodeFill,
  PiEnvelopeSimpleFill,
  PiGithubLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiMoonFill,
} from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { Divider } from "../Divider";
import { HiLightBulb } from "react-icons/hi";

export function FooterCard() {
  const theme = useContext(ThemeContext);

  let cardStyle: string;

  switch (theme) {
    case "light":
      cardStyle = "bg-violet-200";
      break;
    case "dark":
      cardStyle = "bg-neutral-800";

      break;
    default:
      break;
  }

  return (
    <footer
      className={twMerge(
        "col-span-3 w-full rounded-md flex items-center py-4 px-4 lg:px-12 font-medium transition-all ease-linear",
        cardStyle!
      )}
    >
      <div className="w-full h-fit lg:h-16 flex flex-wrap items-center gap-2 md:gap-4 justify-start md:justify-center">
        <div className="flex gap-2 justify-between">
          <Footer.LinkButton
            icon={PiMoonFill}
            title="Pablo"
            href="https://pabloalbrnz.github.io/portfolio"
          />
          <Footer.LinkButton
            icon={PiGithubLogoFill}
            title="github"
            href="https://github.com/pabloalbrnz"
          />
          <Footer.LinkButton
            icon={PiLinkedinLogoFill}
            title="linkedin"
            href="https://linkedin.com/in/pabloalbrnz/"
          />
          <Footer.LinkButton
            icon={FaDiscord}
            title="discord"
            href="https://discord.com/invite/ErJHvmG99p"
          />
          <Footer.LinkButton
            icon={PiBehanceLogoFill}
            title="behance"
            href="https://behance.net/pulseim"
          />
          <Footer.LinkButton
            icon={PiInstagramLogoFill}
            title="insta"
            href="https://instagram.com/pabloalbrnz"
          />
          <Footer.LinkButton
            icon={PiEnvelopeSimpleFill}
            title="mail"
            href="mailto:pabloalbernazrincon@gmail.com"
          />
        </div>
        <Divider direction="v" />
        <div className="flex gap-2">
          <Footer.LinkButton icon={PiCodeFill} title="Paulo" />
          <Footer.LinkButton
            icon={PiGithubLogoFill}
            title="github"
            href="https://github.com/Paulo-Augusto12"
          />
          <Footer.LinkButton
            icon={PiLinkedinLogoFill}
            title="linkedin"
            href="https://linkedin.com/in/paulo-augusto-ribeiro-62730a237"
          />
          <Footer.LinkButton
            icon={PiEnvelopeSimpleFill}
            title="mail"
            href="mailto:paulo-augusto12@outlook.com"
          />
        </div>
        <Divider direction="v" />
        <div className="flex gap-2">
          <Footer.LinkButton icon={HiLightBulb} title="Otto" />
          <Footer.LinkButton
            icon={PiGithubLogoFill}
            title="github"
            href="https://github.com/OttoGC"
          />
          <Footer.LinkButton
            icon={PiLinkedinLogoFill}
            title="linkedin"
            href="https://linkedin.com/in/otto-gioia-57169b23a/"
          />
          <Footer.LinkButton
            icon={PiCodeBlockFill}
            title="codedex"
            href="https://codedex.io/@Otto"
          />
          <Footer.LinkButton
            icon={PiInstagramLogoFill}
            title="insta"
            href="https://instagram.com/otto.gioia/"
          />
          <Footer.LinkButton
            icon={PiEnvelopeSimpleFill}
            title="mail"
            href="mailto:ottogioia20@gmail.com"
          />
        </div>
      </div>
    </footer>
  );
}
