import { useEffect, useState } from 'react'

function useRoleSwitcher(roles: any) {
  const [role, setRole] = useState<string>('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole((prev) => roles[(roles.indexOf(prev) + 1) % roles.length])
    }, 1800)

    return () => clearInterval(intervalId)
  }, [role])

  return role
}

export default useRoleSwitcher
