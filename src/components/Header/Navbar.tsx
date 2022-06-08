import Logo from './Logo'
import { FaSearch, FaList, FaCreditCard, FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import SearchInput from './SearchInput'
import ThemeSwitcher from './ThemeSwitcher'

const styles = {
  icons: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white`,
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-2 shadow-md dark:bg-gray-900 flex items-center justify-between space-x-6">
      <div className="xl:pr-40">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="ml-8 hidden flex-1 sm:block">
        <SearchInput />
      </div>

      <div className="hidden pr-6 lg:block xl:pl-8">
        <NavMenus />
      </div>

      <div className="flex items-center space-x-6">
        <FaUserCircle className={`${styles.icons} hidden lg:block`} />
        <FaCreditCard className={`${styles.icons} hidden lg:block`} />
        <div className="hidden lg:flex ">
          <ThemeSwitcher />
        </div>
        <FaSearch className={`${styles.icons} sm:hidden`} />
        <FaList className={`${styles.icons} lg:hidden`} />
      </div>
    </header>
  )
}

function NavMenus() {
  const menus = [
    {
      name: 'Explore',
      href: '#',
    },
    {
      name: 'Stats',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
    {
      name: 'Create',
      href: '#',
    },
  ]
  return (
    <nav>
      <ul className="flex space-x-10">
        {menus.map((menu, index) => (
          <li key={index}>
            <a
              href={menu.href}
              className="font-semibold text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
