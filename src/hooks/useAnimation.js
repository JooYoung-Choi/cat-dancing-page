import { useCallback, useEffect, useState } from 'react'

// 애니메이션 재생 상태, 속도, 키보드 단축키(Space)를 관리하는 훅
export default function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)

  const toggle = useCallback(() => setIsPlaying((prev) => !prev), [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code !== 'Space') return
      // 버튼/입력 요소에 포커스가 있으면 기본 동작(클릭)에 맡긴다
      const tag = e.target.tagName
      if (tag === 'BUTTON' || tag === 'SELECT' || tag === 'INPUT') return
      e.preventDefault()
      toggle()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle])

  return { isPlaying, speed, setSpeed, toggle }
}
