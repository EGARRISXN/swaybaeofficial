import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {dashboardTool} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {schemaTypes} from './schemas/index.js'
import {projectId, dataset, apiVersion, googleYouTubeApiKey} from './environment.js'

export default defineConfig({
  name: 'default',
  title: 'Sway Bae Studio',
  projectId: projectId || '',
  dataset: dataset || '',

  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion || ''}),
    dashboardTool({widgets: []}),
    media(),
    unsplashImageAsset(),
    youtubeInput({apiKey: googleYouTubeApiKey || ''}),
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
