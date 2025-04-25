

const Button = ({type = 'button', onClick, variant, size = 'md', className, children, ...props}) => {

const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-50',
    };

    const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    };

  return (
   <button type={type}
        className={`rounded-md font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}>
    {children}
   </button>
  )
}

export default Button