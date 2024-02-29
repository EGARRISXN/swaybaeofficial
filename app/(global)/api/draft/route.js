import {draftMode} from 'next/headers'
import {redirect} from 'next/navigation'
import {validatePreviewUrl} from '@sanity/preview-url-secret'
import {client} from '@/sanity/lib/client'
import {token} from '@/sanity/lib/token'

const clientWithToken = client.withConfig({token})

export async function GET(request) {
  const {
    isValid,
    redirectTo = '/studio',
    studioOrigin,
  } = await validatePreviewUrl(clientWithToken, request.url)
  if (studioOrigin === 'http://localhost:3000') {
    console.log('This preview was initiated from the local development Studio')
  }
  if (!isValid) {
    return new Response('Invalid secret', {status: 401})
  }

  draftMode().enable()

  redirect(redirectTo)
}
