import { useState } from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { collectionData } from '~/helpers/collections'
import CollectionStats from '~/components/CollectionStats'
import Navbar from '~/components/Header/Navbar'

export default function HomePage() {
  const [collection] = useState(collectionData)
  return (
    <div>
      {/* <TopNavbarLayout> */}
      <Navbar />
      <div className="flex flex-col dark:bg-[#202226] relative">
        <div className="relative flex h-[650px] flex-col">
          {collection?.banner_image_url && (
            <div className="absolute h-1/3 w-full">
              <Image
                className="rounded-t-lg object-cover"
                src={collection?.banner_image_url}
                layout="fill"
                alt="banner"
              />
            </div>
          )}

          <div className="absolute inset-0 top-1/3 z-10 h-2/3 -translate-y-16">
            <div className="flex flex-col items-center space-y-4">
              {collection?.image_url && (
                <div className="flex items-center justify-center rounded-full border-4 border-gray-100">
                  <Image
                    className="rounded-full object-cover"
                    src={collection?.image_url}
                    height={128}
                    width={128}
                    alt="logo"
                  />
                </div>
              )}

              <div className="flex flex-col items-center space-y-6">
                <div className="text-4xl font-bold">{collection?.name}</div>

                <div className="flex items-center space-x-1">
                  <div className="text-sm font-medium text-gray-500">
                    Created by{' '}
                    <span className="cursor-pointer text-blue-500">
                      {/* {collection?.creator} */}
                    </span>
                  </div>
                  <MdVerified className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <CollectionStats {...collection?.stats} />
              <div className="max-w-3xl py-2 px-10 text-center text-gray-500">
                {collection?.description}
              </div>
            </div>
          </div>
        </div>

        {/* <Listings /> */}
      </div>
      {/* </TopNavbarLayout> */}
    </div>
  )
}
