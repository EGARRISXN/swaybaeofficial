import {MdLaunch} from 'react-icons/md'

const ExternalLinkRenderer = (props) => (
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <MdLaunch />
    </a>
  </span>
)

export default ExternalLinkRenderer
