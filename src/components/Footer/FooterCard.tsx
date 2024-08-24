import { useContext, useState } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { Footer } from ".";
import {
  PiArrowBendUpLeftBold,
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
import { HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

type ThemeStyles = {
  card: string;
  link: string;
};

export function FooterCard() {
  const theme = useContext(ThemeContext);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const styles: ThemeStyles = {
    card: "",
    link: "bg-violet-300 hover:bg-violet-400 text-neutral-800 hover:text-violet-700",
    ...(theme === "light" && {
      card: "bg-violet-200",
      link: "bg-violet-300 hover:bg-violet-400 text-neutral-800 hover:text-violet-700",
    }),
    ...(theme === "dark" && {
      card: "bg-neutral-800",
      link: "bg-neutral-700 hover:bg-violet-700 text-violet-200 hover:text-violet-950",
    }),
  };

  const handlePersonClick = (person: string) => {
    setSelectedPerson(person);
  };

  const handleBackClick = () => {
    setSelectedPerson(null);
  };

  const transition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <footer
      className={twMerge(
        "col-span-3 w-full rounded-md flex items-center py-4 px-12 justify-center font-medium transition-all ease-linear",
        styles.card
      )}
    >
      <div className="w-full h-fit flex flex-wrap items-center gap-2 md:gap-4 justify-center">
        {selectedPerson === null ? (
          <motion.div
            className="grid grid-cols-3 grid-rows-2 md:flex gap-2 justify-between"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          >
            <Footer.LinkButton
              icon={PiMoonFill}
              title="Pablo"
              onClick={() => handlePersonClick("Pablo")}
            />
            <Footer.LinkButton
              icon={PiCodeFill}
              title="Paulo"
              onClick={() => handlePersonClick("Paulo")}
            />
            <Footer.LinkButton
              icon={HiLightBulb}
              title="Otto"
              onClick={() => handlePersonClick("Otto")}
            />
          </motion.div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-5 grid-rows-2 md:flex gap-2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              <motion.button
                className={twMerge(styles.link, "p-2 rounded")}
                onClick={handleBackClick}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition}
              >
                <PiArrowBendUpLeftBold size={24} />
              </motion.button>
              {selectedPerson === "Pablo" && (
                <>
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
                    title="instagram"
                    href="https://instagram.com/pabloalbrnz"
                  />
                  <Footer.LinkButton
                    icon={PiEnvelopeSimpleFill}
                    title="mail"
                    href="mailto:pabloalbernazrincon@gmail.com"
                  />
                </>
              )}
              {selectedPerson === "Paulo" && (
                <>
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
                </>
              )}
              {selectedPerson === "Otto" && (
                <>
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
                    title="instagram"
                    href="https://instagram.com/otto.gioia/"
                  />
                  <Footer.LinkButton
                    icon={PiEnvelopeSimpleFill}
                    title="mail"
                    href="mailto:ottogioia20@gmail.com"
                  />
                </>
              )}
            </motion.div>
          </>
        )}
      </div>
    </footer>
  );
}
