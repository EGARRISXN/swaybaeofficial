export default function MyButton({onClick, children, value, type, disabled}) {
  const content = children || value

  return (
    <>
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        className='btn-secondary btn-sm h-12 w-40 rounded-2xl bg-gradient-to-r from-lavender to-pink font-semibold text-light shadow-md transition-all duration-200 ease-in hover:text-dark'
      >
        {content}
      </button>
    </>
  )
}
