export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-semibold rounded-full px-6 py-3 border
                 font-medium"
    >
      {children}
    </button>
  );
}
