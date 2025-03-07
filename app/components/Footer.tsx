export default function Footer() {
  const date = new Date()
  return (
    <footer className="text-gray-400 font-extralight text-xs">
      <p>&copy; {date.getFullYear()} Miguel Julio</p>
    </footer>
  )
}
