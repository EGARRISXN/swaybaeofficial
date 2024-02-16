import Image from 'next/image'
import {urlFor} from '@/utils/image'

const BlockComponent = ({value, children}) => {
  const style = value.style || 'normal'
  if (/^h\d/.test(style)) {
    const HeadingTag = style
    return (
      <HeadingTag id={value._key}>
        {value.children.map((child) => (
          <span key={child._key}>{child.text}</span>
        ))}
        <a href={`#${value._key}`}>#</a>
      </HeadingTag>
    )
  } else {
    return <p>{children}</p>
  }
}

const LinkComponent = ({value, children}) => {
  const rel = (value?.href || '').startsWith('http') ? 'noindex nofollow' : undefined
  return (
    <a href={value?.href} rel={rel}>
      {children}
    </a>
  )
}

const TextColorComponent = ({children, value}) => {
  if (!value) return null
  return <span style={{color: value.value}}>{children}</span>
}

const HighlightComponent = ({children, value}) => {
  if (!value) return null
  return <span style={{background: value.value}}>{children}</span>
}

const HighlightColorComponent = ({children, value}) => {
  if (!value) return null
  return <span style={{background: value.value}}>{children}</span>
}

const ImageComponent = ({value, isInline}) => {
  return (
    <Image
      src={urlFor(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || 'No alt text provided for this image.'}
      loading='lazy'
      style={{
        display: isInline ? 'inline-block' : 'block',
      }}
      width={800}
      height={800}
    />
  )
}

const YoutubeComponent = ({value}) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${value.video.id}`}
      allow='accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      style={{flex: 1, aspectRatio: '16 / 9'}}
      className='h-full w-full rounded-lg shadow-lg'
    ></iframe>
  )
}

export const PortableTextComponents = {
  block: BlockComponent,
  marks: {
    link: LinkComponent,
    textColor: TextColorComponent,
    highlight: HighlightComponent,
    highlightColor: HighlightColorComponent,
  },
  types: {
    image: ImageComponent,
    youtubeEmbed: YoutubeComponent,
  },
}
