// import {PortableText} from '@portabletext/react'

// const BlockContent = ({blocks, heading, text}) => {
//   const serializers = {
//     list: (props) => {
//       const {type} = props
//       const bullet = type === 'bullet'
//       if (bullet) {
//         return <UnorderedList>{props.children}</UnorderedList>
//       }
//       return <OrderedList>{props.children}</OrderedList>
//     },
//     listItem: (props) => <ListItem>{props.children}</ListItem>,

//     types: {
//       image: ({node}) => {
//         const {alt} = node
//         return <Image alt={alt} src={imageUrlFor(buildImageObj(asset)).url()} />
//       },
//     },
//     marks: {
//       link: ({mark, children}) => {
//         return <LinkBlock link={mark} children={children} />
//       },
//     },
//   }
//   return <PortableText blocks={blocks} serializers={serializers} />
// }
// export default BlockContent
