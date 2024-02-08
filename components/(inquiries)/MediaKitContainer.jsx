import Image from 'next/image'
import Link from 'next/link'

export default function MediaKitPhoto() {
  return (
    <div className='pt-12'>
      <Link
        href='https://beacons.ai/sway_bae/mediakit'
        target='_blank'
        rel='noopener noreferrer'
        passHref
      >
        <Image
          className='duration-200 ease-in hover:scale-105'
          src='/mediakit.png'
          alt='Media Kit'
          width={600}
          height={350}
          quality={100}
          style={{
            width: 'auto',
            height: 'auto',
          }}
        />
      </Link>
    </div>
  )
}
