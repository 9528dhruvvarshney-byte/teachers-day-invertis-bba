// Purely decorative, stylised illustration of the classroom.
// All interaction happens through real <button> hotspots layered
// on top of this in Classroom.jsx — this file only draws the scene.
export default function ClassroomScene() {
  return (
    <svg
      className="scene-svg"
      viewBox="0 0 1440 960"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c4638" />
          <stop offset="100%" stopColor="#233a2e" />
        </linearGradient>
        <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a381f" />
          <stop offset="100%" stopColor="#3f2714" />
        </linearGradient>
        <radialGradient id="lightGlow" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="#f4ecd8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#f4ecd8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wall + floor */}
      <rect x="0" y="0" width="1440" height="640" fill="url(#wallGrad)" />
      <rect x="0" y="620" width="1440" height="340" fill="url(#floorGrad)" />
      <rect x="0" y="612" width="1440" height="14" fill="#c9a24b" opacity="0.5" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1={i * 130} y1="640" x2={i * 130 + 70} y2="960" stroke="#2c1a0e" strokeWidth="2" opacity="0.35" />
      ))}
      <rect x="0" y="0" width="1440" height="640" fill="url(#lightGlow)" />

      {/* Window (left) */}
      <g>
        <rect x="55" y="70" width="230" height="290" rx="8" fill="#1a2b22" stroke="#c9a24b" strokeWidth="6" />
        <rect x="63" y="78" width="214" height="274" fill="#2f4a3e" />
        <rect x="63" y="78" width="214" height="274" fill="#f4ecd8" opacity="0.06" />
        <line x1="170" y1="78" x2="170" y2="352" stroke="#c9a24b" strokeWidth="4" opacity="0.6" />
        <line x1="63" y1="215" x2="277" y2="215" stroke="#c9a24b" strokeWidth="4" opacity="0.6" />
        {/* curtains */}
        <path d="M40 60 Q60 220 40 380 L85 380 Q65 220 85 60 Z" fill="#7a2f2f" opacity="0.85" />
        <path d="M300 60 Q280 220 300 380 L255 380 Q275 220 255 60 Z" fill="#7a2f2f" opacity="0.85" />
        <rect x="30" y="50" width="280" height="16" rx="4" fill="#4a2d19" />
      </g>

      {/* Memory wall / corkboard */}
      <g>
        <rect x="60" y="410" width="300" height="200" rx="6" fill="#8a6a4a" stroke="#4a2d19" strokeWidth="8" />
        <g transform="translate(95,435) rotate(-6)">
          <rect width="70" height="82" fill="#f7f5ee" />
          <rect x="6" y="6" width="58" height="52" fill="#9fb9a8" />
        </g>
        <g transform="translate(180,450) rotate(4)">
          <rect width="70" height="82" fill="#f7f5ee" />
          <rect x="6" y="6" width="58" height="52" fill="#c9a24b" opacity="0.7" />
        </g>
        <g transform="translate(140,510) rotate(-3)">
          <rect width="70" height="82" fill="#f7f5ee" />
          <rect x="6" y="6" width="58" height="52" fill="#7a5a8a" opacity="0.7" />
        </g>
        <g transform="translate(255,500) rotate(7)">
          <rect width="60" height="72" fill="#f7f5ee" />
          <rect x="5" y="5" width="50" height="45" fill="#a86a4a" opacity="0.7" />
        </g>
      </g>

      {/* Blackboard */}
      <g>
        <rect x="430" y="90" width="480" height="330" rx="4" fill="#4a2d19" />
        <rect x="450" y="108" width="440" height="270" fill="#1c2a22" stroke="#0f1a14" strokeWidth="2" />
        <text x="670" y="150" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="26" fill="#e8e2cf" opacity="0.85">
          Invertis University · Dept. of BBA
        </text>
        <text x="670" y="200" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="42" fill="#f4ecd8" opacity="0.92">
          Happy Teachers&apos; Day
        </text>
        <line x1="500" y1="230" x2="840" y2="230" stroke="#e8e2cf" strokeWidth="2" opacity="0.3" />
        <text x="670" y="270" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="24" fill="#e8e2cf" opacity="0.55">
          things our teachers taught us...
        </text>
        <rect x="450" y="378" width="440" height="18" fill="#8a6a4a" />
        <rect x="470" y="384" width="26" height="8" fill="#f7f5ee" opacity="0.9" />
        <rect x="505" y="384" width="20" height="8" fill="#e0c583" opacity="0.9" />
      </g>

      {/* Clock */}
      <g>
        <circle cx="1010" cy="150" r="58" fill="#f4ecd8" stroke="#4a2d19" strokeWidth="8" />
        <circle cx="1010" cy="150" r="4" fill="#221d18" />
        <line x1="1010" y1="150" x2="1010" y2="115" stroke="#221d18" strokeWidth="4" strokeLinecap="round" />
        <line x1="1010" y1="150" x2="1035" y2="150" stroke="#221d18" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Bookshelf + trophies on top */}
      <g>
        <rect x="1090" y="150" width="300" height="420" fill="#5a381f" stroke="#3a220f" strokeWidth="6" />
        {[0, 1, 2, 3].map((row) => (
          <rect key={row} x="1096" y={200 + row * 100} width="288" height="8" fill="#3a220f" />
        ))}
        {[0, 1, 2, 3].map((row) =>
          Array.from({ length: 11 }).map((_, i) => (
            <rect
              key={`${row}-${i}`}
              x={1102 + i * 25}
              y={130 + row * 100}
              width="20"
              height="68"
              rx="2"
              fill={["#7a2f2f", "#3a5a4a", "#c9a24b", "#4a3a6a", "#8a6a3a"][(row + i) % 5]}
              opacity="0.88"
            />
          ))
        )}
        {/* trophies sitting on top of the shelf */}
        <g transform="translate(1150,95)">
          <rect x="-8" y="24" width="16" height="14" fill="#8a6a3a" />
          <path d="M-16 0 h32 v10 a16 16 0 0 1 -32 0 z" fill="#e0c583" />
          <rect x="-4" y="10" width="8" height="16" fill="#e0c583" />
        </g>
        <g transform="translate(1220,100)">
          <rect x="-7" y="20" width="14" height="12" fill="#8a6a3a" />
          <path d="M-14 0 h28 v9 a14 14 0 0 1 -28 0 z" fill="#c9a24b" />
          <rect x="-3" y="9" width="6" height="14" fill="#c9a24b" />
        </g>
        <g transform="translate(1290,90)">
          <rect x="-8" y="26" width="16" height="14" fill="#8a6a3a" />
          <path d="M-16 0 h32 v11 a16 16 0 0 1 -32 0 z" fill="#e0c583" />
          <rect x="-4" y="11" width="8" height="18" fill="#e0c583" />
        </g>
      </g>

      {/* Letter box on a post (right foreground) */}
      <g>
        <rect x="1215" y="640" width="16" height="180" fill="#4a2d19" />
        <rect x="1160" y="580" width="130" height="90" rx="14" fill="#7a2f2f" stroke="#4a2d19" strokeWidth="6" />
        <rect x="1160" y="580" width="130" height="34" rx="14" fill="#93413f" />
        <rect x="1212" y="600" width="26" height="8" fill="#f4ecd8" opacity="0.85" />
        <path d="M1290 610 l26 -14 v10 l-26 14 z" fill="#c9a24b" />
      </g>

      {/* Teacher's chair (behind desk) */}
      <g opacity="0.95">
        <rect x="600" y="560" width="130" height="16" rx="6" fill="#3a220f" />
        <rect x="610" y="470" width="110" height="100" rx="10" fill="#5a381f" />
        <rect x="605" y="565" width="16" height="70" fill="#3a220f" />
        <rect x="710" y="565" width="16" height="70" fill="#3a220f" />
      </g>

      {/* Teacher's desk (foreground, main) */}
      <g>
        <rect x="470" y="640" width="500" height="150" rx="10" fill="#6b4226" stroke="#4a2d19" strokeWidth="6" />
        <rect x="470" y="640" width="500" height="26" fill="#7d4f2c" />
        <rect x="520" y="700" width="120" height="70" rx="4" fill="#4a2d19" opacity="0.5" />
        <rect x="800" y="700" width="120" height="70" rx="4" fill="#4a2d19" opacity="0.5" />
        {/* papers */}
        <rect x="560" y="618" width="80" height="26" rx="2" fill="#f4ecd8" transform="rotate(-3 600 630)" />
        <rect x="640" y="622" width="70" height="22" rx="2" fill="#efe4c9" transform="rotate(4 675 632)" />
        {/* apple */}
        <g transform="translate(880,608)">
          <circle r="16" fill="#8a2f2f" />
          <rect x="-2" y="-24" width="4" height="10" fill="#3a5a3a" />
        </g>
        {/* bell */}
        <g transform="translate(760,600)">
          <path d="M-16 8 a16 16 0 0 1 32 0 z" fill="#e0c583" stroke="#8a6a3a" strokeWidth="2" />
          <rect x="-18" y="7" width="36" height="6" rx="3" fill="#c9a24b" />
          <circle r="3" cy="12" fill="#8a6a3a" />
        </g>
      </g>

      {/* Student desks (decorative, background rows) */}
      <g opacity="0.9">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${60 + i * 340},860)`}>
            <rect width="220" height="20" rx="4" fill="#4a3220" />
            <rect x="10" y="20" width="14" height="50" fill="#3a220f" />
            <rect x="196" y="20" width="14" height="50" fill="#3a220f" />
          </g>
        ))}
      </g>
    </svg>
  );
}
