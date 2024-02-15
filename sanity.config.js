/* This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route. Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works. Add and edit the content schema in the "./schemas" folder. Vision is a tool that lets you query your content with GROQ in the studio: https://www.sanity.io/docs/the-vision-plugin */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {dashboardTool} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {projectId, dataset, apiVersion, googleYouTubeApiKey} from './sanity/lib/env.js'
import {schemaTypes} from './sanity/schemas/index.js'

export default defineConfig({
  name: 'default',
  basePath: '/studio',
  projectId: projectId || 'i9qt6ktn',
  dataset: dataset || 'production',

  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion || '2024-02-01'}),
    dashboardTool({widgets: []}),
    media(),
    youtubeInput({apiKey: googleYouTubeApiKey || 'AIzaSyAhP427Sqw4WMfOpfKXk4WkhNg4xRWHrQg'}),
    unsplashImageAsset(),
    simplerColorInput({
      defaultColorFormat: 'rgba',
      defaultColorList: [
        {label: 'Light', value: '#fefce8'},
        {label: 'Dark', value: '#f8f7ee'},
        {label: 'Electric Blue', value: '#00ceff'},
        {label: 'Light Purple', value: '#b567ad'},
        {label: 'Muted Blue', value: '#418192'},
        {label: 'Bright Pink', value: '#fd509d'},
        {label: 'Indigo', value: '#330f5f'},
        {label: 'Lavender', value: '#c085df'},
        {label: 'Muted Grey', value: '#d4d4d8'},
        {label: 'Barbie Pink', value: '#ff6b6b'},
        {label: 'Firecracker Red', value: '#ff3f34'},
        {label: 'Burnt Orange', value: '#ff9f1c'},
        {label: 'Highlighter Yellow', value: '#ffea00'},
        {label: 'Sweet Lime', value: '#a8ff00'},
        {label: 'Custom...', value: 'custom'},
      ],
      enableSearch: true,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
