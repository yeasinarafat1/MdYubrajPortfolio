import type React from "react"

interface PaymentButtonProps {
  /** The color of the button background and icon container */
  color?: string
  /** The text to display on the button */
  text?: string
  /** Optional click handler */
  onClick?: () => void
  /** Optional CSS class name */
  className?: string
  /** Optional disabled state */
  disabled?: boolean
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  color = "#00ad54",
  text = "Payments",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`group relative flex items-center rounded-3xl overflow-hidden bg-white transition text-gray-900 shadow-lg cursor-pointer border-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      style={{ "--button-color": color } as React.CSSProperties}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {/* Button decoration/background */}
      <div
        className={`absolute inset-0 transform -translate-x-full ${!disabled ? "group-hover:translate-x-0" : ""} transition-transform duration-300`}
        style={{ backgroundColor: color }}
      />

      {/* Button content wrapper */}
      <div className="relative flex items-center font-semibold overflow-hidden">
        {/* Icon container */}
        <div className="w-12 h-10 grid place-items-center" style={{ backgroundColor: color }}>
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6">
            <circle opacity="0.5" cx="25" cy="25" r="23" fill="url(#icon-gradient)" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
              fill="#fff"
            />
            <path
              d="M34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z"
              fill="#fff"
            />
            <defs>
              <linearGradient id="icon-gradient" x1="25" y1="2" x2="25" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" stopOpacity="0.71" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Button text */}
        <span className="inline-block px-6 pl-3 py-0.5 transition-colors duration-200 overflow-hidden whitespace-nowrap text-ellipsis max-w-[150px] group-hover:text-white">
          {text}
        </span>
      </div>
    </button>
  )
}

export default PaymentButton

