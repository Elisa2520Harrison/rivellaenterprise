export default function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-lg border bg-white text-gray-800 shadow-sm p-6 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div
      className={`p-4 transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
