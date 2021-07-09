import classnames from "classnames"
import { useRouter } from "next/router";
import qs from 'query-string';
import { FC, MouseEvent, useEffect, useRef } from "react"

type MenuState = 'closed' | 'profile' | 'notifications' | 'search';

const menuImages: Record<MenuState, string> = {
  'profile': 'profile.png',
  'notifications': 'notifications.png',
  'search': 'search.png',
  'closed': ''
}

export const Nav: FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const { query, push } = useRouter();
  const menuState = query?.leap || 'closed' as MenuState;
  const isOpen = menuState !== 'closed';

  useEffect(() => {
    if (menuState === 'search' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [menuState])

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.className = 'overflow-hidden pr-[15px]';
      } else {
        document.body.className = 'overflow-visible';
      }
    }
  }, [isOpen])

  function toggleMenu<Element>(e: MouseEvent<Element>, state: MenuState) {
    e.stopPropagation();

    const leap = state === 'closed' ? undefined : state;
    push({
      pathname: '/',
      search: qs.stringify({ leap })
    })
  }

  const profileClassnames = classnames({
    'z-50': menuState === 'profile',
    'z-20': menuState !== 'profile'
  })
  
  const notificationsClassnames = classnames({
    'z-50': menuState === 'notifications',
    'z-20': menuState !== 'notifications'
  })
  
  const searchClassnames = classnames({
    'z-50 bg-white': menuState === 'search',
    'z-20 bg-washedGray': menuState !== 'search'
  })
  
  const lightboxClassnames = classnames({
    'z-30 flex': isOpen,
    'hidden': !isOpen
  })

  const overlayClassnames = classnames({
    'block cursor-pointer z-10 flex': isOpen,
    'hidden': !isOpen,
  })
  
  const menuClassnames = classnames({
    'z-40 flex': isOpen,
    'hidden': !isOpen,
  })
  
  return (
    <menu className="w-full max-w-3xl flex p-0 px-4 md:px-8">
      <button onClick={(e) => toggleMenu(e, 'profile')} className={`${profileClassnames} relative circle-button mr-2 bg-avatar-britney`} />
      <button onClick={(e) => toggleMenu(e, 'notifications')} className={`${notificationsClassnames} relative circle-button mr-2 bg-blue text-white`}>3</button>
      <input ref={inputRef} onClick={(e) => toggleMenu(e, 'search')} type='text' className={`${searchClassnames} relative rounded-full w-full pl-4`} placeholder="Search Landscape" />
      
      <div className={`${lightboxClassnames}  pointer-events-none bg-lightGray fixed top-0 left-0 w-screen h-screen`} />
      
      <div onClick={(e) => toggleMenu(e, 'closed')} className={`${overlayClassnames} bg-lightGray fixed top-0 left-0 w-screen h-screen max-w-full`} />
      
      <div className={`${menuClassnames} fixed flex justify-center left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none`}>
        <div className="h-auto max-h-[700px] px-4 rounded-2xl mt-20 overflow-y-auto">
          <img className="w-full rounded-2xl h-auto" src={menuImages[menuState]} />
        </div>
      </div>
    </menu>
  )
}