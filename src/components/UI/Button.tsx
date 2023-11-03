import { ButtonProps } from "../../types"

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-stone-700 rounded-md text-gray-300 py-3 px-4 w-1/2 text-lg font-semibold"
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;
