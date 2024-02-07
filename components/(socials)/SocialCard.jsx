import Link from 'next/link'
import Image from 'next/image'
import MyButton from '@/components/(ui)/MyButton'

export default function SocialCard({imageSrc, alt, label, username, href}) {
  return (
    <div className='card flex h-full w-full p-4'>
      <figure>
        <Link href={href}>
          <Image
            src={imageSrc}
            alt={alt}
            width={300}
            height={200}
            className='duration-300 ease-in hover:scale-110'
          />
        </Link>
      </figure>
      <div className='card-body rounded-b-2xl border-2 bg-pink-100/10 text-base-content'>
        <div className='lobster card-title justify-center text-center text-3xl'>{label}</div>
        <div className='card-actions justify-center'>
          <MyButton>
            <Link href={href}>{username}</Link>
          </MyButton>
        </div>
      </div>
    </div>
  )
}
