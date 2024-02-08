import {PiHighlighterCircle} from 'react-icons/pi'
import HighlightDecorator from '../components/highlightDecorator'

const HighlightIcon = () => <PiHighlighterCircle />

export default {
  title: 'Highlight',
  name: 'highlight',
  type: 'object',
  icon: HighlightIcon,
  component: HighlightDecorator,
  fields: [
    {
      title: 'Highlight Color',
      name: 'highlightColor',
      type: 'string',
      options: {
        list: [
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          {title: 'Pink', value: 'pink'},
        ],
      },
    },
  ],
  preview: {
    select: {
      highlightColor: 'highlightColor',
    },
    prepare(selection) {
      return {
        title: selection.highlightColor,
        media: HighlightIcon,
      }
    },
  },
}
