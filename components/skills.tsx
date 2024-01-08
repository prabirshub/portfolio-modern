'use client'
import { skillsData } from '@/lib/data'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { animate, motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 relative'
      id='skills'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap items-center justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-white borderBlack px-5 py-3 rounded dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
