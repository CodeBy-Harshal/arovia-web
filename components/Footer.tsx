export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500 flex justify-between">
        <div>© {new Date().getFullYear()} AROVIA</div>
        <div>Healthcare operations, done right.</div>
      </div>
    </footer>
  );
}
