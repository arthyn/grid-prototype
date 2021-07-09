import Link from 'next/link'
import { FC } from 'react'

interface TileProps {
  color: string; 
  name: string;
  href: string;
  light?: boolean;
  img?: string;
}

export const Tile: FC<TileProps> = ({ color, light, name, href, img }) => {
  return(
    <Link href={{
      pathname: href,
      query: { name: name, color: color },
    }} >
      <a target={name} className="relative before:block before:pb-[100%] rounded-xl" style={{backgroundColor: color || 'purple'}}>
        <h3 className={`${light ? 'text-midWhite' : 'text-gray'} absolute bottom-4 left-4 md:bottom-7 md:left-7`}>{name}</h3>
        {
          img
            ? <img className="absolute top-1/2 left-1/2 h-[40%] w-[40%] object-contain transform -translate-x-1/2 -translate-y-1/2" src={ img } />
            : null
        }
      </a>
    </Link>
  )
}