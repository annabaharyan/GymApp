import { SelectedPage } from '@src/types/enum';
import img1 from '@src/assets/image1.png';
import img2 from '@src/assets/image2.png';
import img3 from '@src/assets/image3.png';
import img4 from '@src/assets/image4.png';
import img5 from '@src/assets/image5.png';
import img6 from '@src/assets/image6.png';
import { motion } from 'framer-motion';
import HeadingText from '../shared/HeadingText';
import type { ClassType } from '@src/types/types';
import Class from './ClassItem';

type OurClassesProps = { setSelectedPage: (value: SelectedPage) => void };

const ourClasses: ClassType[] = [
  {
    name: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: img1,
  },
  {
    name: 'Yoga Classes',
    image: img2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: img3,
  },
  {
    name: 'Adventure Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: img4,
  },
  {
    name: 'Fitness Classes',
    image: img5,
  },
  {
    name: 'Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: img6,
  },
];

const OurClasses = ({ setSelectedPage }: OurClassesProps) => {
  return (
    <section className="bg-primary-100 w-full py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HeadingText>OUR CLASSES</HeadingText>
            <p className="my-5">
              Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel
              rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit
              risus sit. Nunc cursus sagittis.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {ourClasses.map((classItem) => (
              <Class key={classItem.name} classItem={classItem} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
