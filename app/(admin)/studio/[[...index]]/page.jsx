import {metadata as studioMetadata} from 'next-sanity/studio/metadata'
import {viewport as studioViewport} from 'next-sanity/studio/viewport'
import {Studio} from './Studio'

// Set the right `viewport`, `robots`, and `referer` meta tags
const metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: 'Loading Studio…',
}

const viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: 'resizes-content',
}

export {metadata, viewport}

export default function StudioPage() {
  return <Studio />
}
