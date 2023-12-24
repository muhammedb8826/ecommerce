
type ErrorType = {
    error: string;
    }


const ErrorComponent = ({error}: ErrorType) => {
  return (
    <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-white bg-red-600">
    <svg className="mr-1 h-4 w-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M10 14 L21 3 3 21 L10 14 Z" />
    </svg>
    {error}
  </span>
  )
}

export default ErrorComponent
