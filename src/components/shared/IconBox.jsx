/**
 * Reusable icon container with hover effects
 * @param {React.ReactNode} children - The icon element
 * @param {string} className - Additional CSS classes
 * @param {boolean} hoverable - Enable hover effect (default: true)
 */
export default function IconBox({ 
  children, 
  className = "", 
  hoverable = true 
}) {
  return (
    <div 
      className={`
        flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
        bg-yellow-400/10 transition-all duration-300
        ${hoverable ? "group-hover:bg-yellow-400" : ""}
        ${className}
      `}
    >
      <div className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900">
        {children}
      </div>
    </div>
  );
}