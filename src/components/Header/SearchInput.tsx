import { FaSearch } from 'react-icons/fa'

export default function SearchInput() {
  return (
    <div className="rounded-lg border px-1 py-2 focus:shadow-md dark:border-transparent dark:bg-[#333333] flex items-center space-x-3 pl-3">
      <FaSearch className="h-5 w-5 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300" />
      <input
        className="w-full bg-transparent text-gray-600 outline-none placeholder:text-sm dark:text-gray-300 md:placeholder:text-base"
        type="text"
        placeholder="Search items, collections, and accounts"
      />
    </div>
  )
}
