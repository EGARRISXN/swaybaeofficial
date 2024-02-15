export default function MyButton({onClick, children, value, type, disabled}) {
  const content = children || value

  return (
    <>
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        className='text- btn-secondary btn-sm h-12 w-40 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-white shadow-md duration-200 ease-in hover:scale-105'
      >
        {content}
      </button>
    </>
  )
}
