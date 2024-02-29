'use client'
import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config'

export function Studio() {
  return <NextStudio config={config} />
}

// 'use client'
// import {NextStudio} from 'next-sanity/studio'
// import config from '../../../sanity.config'
// import {StudioProvider, StudioLayout} from 'sanity'
// function StudioPage() {
//   return (
//     <NextStudio config={config}>
//       <StudioProvider config={config}>
//         {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
//         <StudioLayout />
//       </StudioProvider>
//     </NextStudio>
//   )
// }
