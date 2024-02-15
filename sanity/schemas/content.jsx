import {CiImageOn, CiYoutube} from 'react-icons/ci'
import {BsLink45Deg} from 'react-icons/bs'
import {LuHighlighter} from 'react-icons/lu'
import {MdOutlineLaunch} from 'react-icons/md'

const HighlightIcon = () => <LuHighlighter />

const HighlightDecorator = (props) => (
  <span style={{backgroundColor: 'yellow', color: 'black'}}>{props.children}</span>
)

const ExternalLinkRenderer = (props) => (
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <MdOutlineLaunch />
    </a>
  </span>
)

export const blockContent = {
  title: 'Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      // of: [],
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {
            title: 'Highlight',
            value: 'highlight',
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
        ],
        annotations: [
          {
            type: 'textColor',
          },
          {
            type: 'highlightColor',
          },
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            icon: BsLink45Deg,
            component: ExternalLinkRenderer,
            fields: [
              {
                title: 'Link Type',
                name: 'linkType',
                type: 'string',
                options: {
                  list: [
                    {title: 'Internal Page', value: 'internal'},
                    {title: 'External URL', value: 'external'},
                  ],
                  layout: 'radio',
                  direction: 'horizontal',
                },
                initialValue: 'internal',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Internal Page',
                name: 'page',
                type: 'reference',
                to: [{type: 'tag'}, {type: 'post'}],
                hidden: ({parent}) => parent.linkType !== 'internal',
              },
              {
                title: 'External URL',
                name: 'url',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
                hidden: ({parent}) => parent.linkType !== 'external',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      icon: CiImageOn,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      type: 'youtubeEmbed',
      icon: CiYoutube,
    },
  ],
}
