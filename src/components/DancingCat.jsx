import CatSvg from '../assets/images/CatSvg.jsx'

export default function DancingCat({ isPlaying, speed, onToggle }) {
  return (
    <button
      type="button"
      className={`dancing-cat ${isPlaying ? 'is-playing' : 'is-paused'}`}
      style={{ '--speed': speed }}
      onClick={onToggle}
      aria-label={isPlaying ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
    >
      <span className="note note-1" aria-hidden="true">♪</span>
      <span className="note note-2" aria-hidden="true">♫</span>
      <span className="note note-3" aria-hidden="true">♬</span>
      <div className="cat-stage">
        <CatSvg />
      </div>
    </button>
  )
}
