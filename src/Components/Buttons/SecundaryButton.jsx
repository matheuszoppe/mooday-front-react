

export function SecundaryButton({name, href}) {
  return (
  <a
    href={href}
    className="text-lg uppercase font-bold text-zinc-900 border-2 border-zinc-900 py-3 px-10 rounded-md hover:border-blue-500 hover:text-blue-500"
  >
    {name}
  </a>
  )
}
