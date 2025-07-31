import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import useMediaQuery from '@src/hooks/useMediaQueries';
import { SelectedPage } from '@src/types/enum';
import ActionButton from '@src/components/shared/ActionButton';
import HomePageText from '@src/assets/HomePageText.png';
import HomePageGraphic from '@src/assets/HomePageGraphic.png';
import SponsorRedBull from '@src/assets/SponsorRedBull.png';
import SponsorForbes from '@src/assets/SponsorForbes.png';
import SponsorFortune from '@src/assets/SponsorFortune.png';

type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: HomeProps) => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  return (
    <section id="home" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-(--image-evolvetext)">
                <img alt="home page" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
              Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <span>Learn More</span>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-items-end">
          <img alt="home page graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreen && (
        <div className="bg-primary-100 h-[150px] w-full py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
