const SPEEDS = [
  { label: '느리게', value: 0.6 },
  { label: '보통', value: 1 },
  { label: '빠르게', value: 1.8 },
]

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button type="button" className="btn btn-primary" onClick={onToggle} aria-pressed={isPlaying}>
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>
      <div className="speed-group" role="radiogroup" aria-label="춤 속도">
        {SPEEDS.map((s) => (
          <button
            key={s.value}
            type="button"
            role="radio"
            aria-checked={speed === s.value}
            className={`btn btn-speed ${speed === s.value ? 'active' : ''}`}
            onClick={() => onSpeedChange(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="hint">고양이를 클릭하거나 Space 키로도 시작/정지할 수 있어요</p>
    </div>
  )
}
