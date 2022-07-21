export function PrimaryButton({name, href}) {
  return (
  <a
    href={href}
    className="text-lg uppercase font-bold text-zinc-100 border-2  border-blue-500 bg-blue-500 py-3 px-10 rounded-md hover:bg-blue-600 hover:border-blue-600"
  >
    {name}
  </a>
  )
}
