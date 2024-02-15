import Link from 'next/link'
import Image from 'next/image'
import MyButton from '../(ui)/MyButton'

export default function SocialCard({imageSrc, alt, label, username, href}) {
  return (
    <div className='card mx-4 my-6 rounded-3xl border-4 bg-base-100 px-4 pt-4 shadow-lg shadow-purple-800/50 '>
      <div className='lobster card-title mx-auto pb-2 pl-1 font-light text-primary md:mx-0'>
        {label}
      </div>
      <figure>
        <Link href={href}>
          <Image src={imageSrc} alt={alt} width={300} height={200} />
        </Link>
      </figure>
      <div className='card-body'>
        <Link href={href}>
          <MyButton value={username} />
        </Link>
      </div>
    </div>
  )
}
