import Image from 'next/image'

export default function AboutPhoto() {
  return (
    <div className='h-full w-full py-1 '>
      <Image
        src='/biff.jpg'
        alt='Sway'
        width={1440}
        height={1800}
        quality={100}
        priority
        className='rounded-3xl border-4 shadow-lg shadow-purple-800/50'
      />
    </div>
  )
}
