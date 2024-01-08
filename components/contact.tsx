'use client'

import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/senEmail'
import SubmitBtn from './submit-btn'
import { useRef } from 'react'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id='contact'
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-40 w-[min(100%, 38rem)] text-center relative'
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a href='mailto:example@gmail.com'>example@gmail.com</a> or through this
        form.
      </p>
      <form
        ref={formRef}
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }
          toast.success('Email sent successfully!')
          formRef.current?.reset()
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:placeholder:text-black dark:outline-none transition-all'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          name='message'
          required
          maxLength={5000}
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:placeholder:text-black dark:outline-none transition-all'
          placeholder='Your message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
