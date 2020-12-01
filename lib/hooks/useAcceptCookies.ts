import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const COOKIE_NAME = 'accept_cookies'

export const useAcceptCookies = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(true)
  console.log('asd', acceptedCookies,setAcceptedCookies )
  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookies(false)
    }
  }, [])

  const onAcceptCookies = () => {
    console.log('klick me')
    setAcceptedCookies(true)
    Cookies.set(COOKIE_NAME, 'accepted', {
      expires: 365,
    })
  }

  return {
    acceptedCookies,
    onAcceptCookies,
  }
}
