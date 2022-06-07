import { MdStyle, MdExpandMore } from 'react-icons/md'
import { themes, useTheme } from '~/hooks/useTheme'

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  return (
    <div className={className}>
      <div className="dropdown dropdown-end w-52">
        <div tabIndex={0} className="btn flex">
          <MdStyle className="text-xl" />
          <button className="mx-1 flex-1 capitalize">{theme} Theme</button>
          <MdExpandMore className="text-xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-neutral rounded-box w-52 py-2"
        >
          {themes.map((t, i) => (
            <li key={i} className="h-10 ">
              <button
                className={t === theme ? 'bg-primary-focus' : ''}
                onClick={() => setTheme(t)}
              >
                <span className="capitalize">{t} Theme</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
