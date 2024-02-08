const HighlightDecorator = (props) => (
  <span style={{backgroundColor: props.mark.highlightColor}}>{props.children}</span>
)

export default HighlightDecorator
