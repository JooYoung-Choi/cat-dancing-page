// 부위별로 애니메이션을 줄 수 있도록 그룹(class)을 나눈 벡터 고양이
export default function CatSvg() {
  return (
    <svg
      className="cat-svg"
      viewBox="0 0 300 360"
      role="img"
      aria-label="춤추는 고양이"
    >
      <ellipse className="cat-shadow" cx="150" cy="340" rx="85" ry="12" fill="rgba(0,0,0,0.18)" />

      {/* 꼬리 */}
      <g className="cat-tail">
        <path
          d="M200 270 C260 270 275 210 250 180 C240 168 225 175 235 190 C248 210 240 240 200 245 Z"
          fill="#f4a259"
          stroke="#c9742c"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>

      {/* 뒷다리 */}
      <g className="cat-leg cat-leg-left">
        <rect x="108" y="285" width="34" height="48" rx="16" fill="#f4a259" stroke="#c9742c" strokeWidth="3" />
      </g>
      <g className="cat-leg cat-leg-right">
        <rect x="158" y="285" width="34" height="48" rx="16" fill="#f4a259" stroke="#c9742c" strokeWidth="3" />
      </g>

      {/* 몸통 */}
      <g className="cat-body">
        <ellipse cx="150" cy="235" rx="66" ry="64" fill="#f4a259" stroke="#c9742c" strokeWidth="3" />
        <ellipse cx="150" cy="248" rx="38" ry="44" fill="#fde6c8" />
        <path d="M100 215 q8 -10 16 0 M184 215 q8 -10 16 0" stroke="#c9742c" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* 팔 */}
        <g className="cat-arm cat-arm-left">
          <rect x="68" y="205" width="30" height="66" rx="15" fill="#f4a259" stroke="#c9742c" strokeWidth="3" />
        </g>
        <g className="cat-arm cat-arm-right">
          <rect x="202" y="205" width="30" height="66" rx="15" fill="#f4a259" stroke="#c9742c" strokeWidth="3" />
        </g>
      </g>

      {/* 머리 */}
      <g className="cat-head">
        <polygon points="85,95 92,30 135,70" fill="#f4a259" stroke="#c9742c" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="215,95 208,30 165,70" fill="#f4a259" stroke="#c9742c" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="97,80 99,48 121,69" fill="#f9b8c4" />
        <polygon points="203,80 201,48 179,69" fill="#f9b8c4" />
        <ellipse cx="150" cy="120" rx="75" ry="62" fill="#f4a259" stroke="#c9742c" strokeWidth="3" />
        <path d="M135 62 v22 M150 58 v26 M165 62 v22" stroke="#c9742c" strokeWidth="4" strokeLinecap="round" />

        {/* 눈 */}
        <g className="cat-eyes">
          <ellipse cx="120" cy="122" rx="11" ry="14" fill="#fff" />
          <ellipse cx="180" cy="122" rx="11" ry="14" fill="#fff" />
          <circle cx="122" cy="124" r="7" fill="#2b2b2b" />
          <circle cx="178" cy="124" r="7" fill="#2b2b2b" />
          <circle cx="124" cy="121" r="2.5" fill="#fff" />
          <circle cx="180" cy="121" r="2.5" fill="#fff" />
        </g>

        {/* 코, 입, 수염 */}
        <polygon points="144,142 156,142 150,150" fill="#e8798c" />
        <path d="M150 150 v6 M150 156 q-9 9 -18 2 M150 156 q9 9 18 2" stroke="#7a3f1d" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="148" rx="10" ry="6" fill="#f08a8a" opacity="0.5" />
        <ellipse cx="200" cy="148" rx="10" ry="6" fill="#f08a8a" opacity="0.5" />
        <path d="M70 140 l-30 -6 M70 150 l-32 4 M230 140 l30 -6 M230 150 l32 4" stroke="#7a3f1d" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  )
}
