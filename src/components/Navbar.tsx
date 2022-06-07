import ThemeSwitcher from './ThemeSwitcher'
import { MdMenu } from 'react-icons/md'

export default function Navbar() {
  return (
    <nav className="m-2 p-1 flex items-center shadow-lg bg-neutral text-neutral-content rounded-box">
      <button className="lg:hidden btn btn-square btn-ghost mx-3">
        <MdMenu className="text-4xl " />
      </button>

      <div className="flex items-center">
        {/* <Image src="/logo.png" width={50} height={30} alt="Logo" /> */}
        <h1 className="pl-3 text-xl">
          <strong className="text-green-600">Web3 </strong> Template
        </h1>
      </div>
      <div className="flex-1" />
      <ThemeSwitcher />
    </nav>
  )
}
