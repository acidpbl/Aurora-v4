import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../functions/String";
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

interface FooterCardProps {
  title?: string;
}

export function FooterCard({ title = "Footer" }: FooterCardProps) {
  const theme = useContext(ThemeContext);

  let cardStyle: string, titleStyle: string;

  switch (theme) {
    case "light":
      cardStyle = "bg-violet-200";
      titleStyle = "text-neutral-900 hover:text-violet-800";
      break;
    case "dark":
      cardStyle = "bg-neutral-950";
      titleStyle = "text-violet-600 hover:text-violet-500";
      break;
    default:
      break;
  }

  return (
    <footer
      className={twMerge(
        "w-full min-h-36 max-h-36 rounded-xl flex flex-col items-center gap-4 py-4 px-12 font-poppins font-medium transition-all ease-linear",
        cardStyle!
      )}
    >
      <span
        className={twMerge(
          titleStyle!,
          "cursor-default select-none transition-all ease-linear"
        )}
      >
        {capitalize(title)}
      </span>
      <div className="w-full h-16 flex items-center justify-between">
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
        <Divider direction="v" />
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
        <Divider direction="v" />
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
    </footer>
  );
}
