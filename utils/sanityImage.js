import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

// Barebones lazy-loaded image component
const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading='lazy'
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

// You'll now need to define your own image component
;<PortableText
  value={input}
  components={{
    // ...
    types: {
      image: Image,
    },
  }}
/>
