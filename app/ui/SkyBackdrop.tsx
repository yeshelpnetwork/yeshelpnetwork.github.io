const clouds = [
  { shape: 1, top: '2%', left: '-4%', width: '16rem', opacity: 0.94, duration: '18s', delay: '-3s', alt: false },
  { shape: 2, top: '8%', left: '72%', width: '15rem', opacity: 0.96, duration: '22s', delay: '-8s', alt: true },
  { shape: 3, top: '19%', left: '14%', width: '10rem', opacity: 0.86, duration: '16s', delay: '-5s', alt: false },
  { shape: 2, top: '32%', left: '80%', width: '12rem', opacity: 0.9, duration: '20s', delay: '-11s', alt: true },
  { shape: 1, top: '45%', left: '-5%', width: '15.5rem', opacity: 0.92, duration: '19s', delay: '-7s', alt: false },
  { shape: 3, top: '56%', left: '66%', width: '9.5rem', opacity: 0.88, duration: '17s', delay: '-4s', alt: true },
  { shape: 2, top: '69%', left: '76%', width: '16rem', opacity: 0.94, duration: '21s', delay: '-14s', alt: false },
  { shape: 3, top: '78%', left: '12%', width: '10.5rem', opacity: 0.85, duration: '15s', delay: '-9s', alt: true },
  { shape: 1, top: '86%', left: '-4%', width: '16.5rem', opacity: 0.94, duration: '20s', delay: '-6s', alt: false },
  { shape: 2, top: '91%', left: '62%', width: '13.5rem', opacity: 0.9, duration: '18s', delay: '-12s', alt: true },
];

function CloudSvg({ shape }: { shape: number }) {
  if (shape === 1) {
    return (
      <svg viewBox="0 0 170 95" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <path
          d="M 42 78 C 24 78 12 66 12 50 C 12 36 22 26 36 24 C 42 11 56 4 72 4 C 90 4 105 15 110 32 C 117 30 124 30 130 35 C 139 42 140 52 137 61 C 146 64 152 70 152 78 C 152 87 143 92 133 92 L 42 92 Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }
  if (shape === 2) {
    return (
      <svg viewBox="0 0 190 85" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <path
          d="M 38 72 C 22 72 10 61 10 46 C 10 33 20 23 33 22 C 38 10 52 3 67 3 C 81 3 93 11 99 22 C 106 18 116 18 123 23 C 133 16 148 16 158 24 C 168 33 169 45 165 54 C 174 57 180 64 180 72 C 180 81 171 85 161 85 L 38 85 Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <path
        d="M 32 65 C 18 65 8 55 8 42 C 8 30 17 21 28 20 C 33 9 44 3 57 3 C 71 3 83 12 87 25 C 92 23 98 23 103 27 C 110 32 112 40 109 48 C 117 50 122 56 122 63 C 122 71 115 75 106 75 L 32 75 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function SkyBackdrop() {
  return (
    <div className="sky-backdrop" aria-hidden="true">
      <div className="sky-backdrop__glow" />
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`cloud ${cloud.alt ? 'cloud--alt' : ''}`}
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.width,
            opacity: cloud.opacity,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <CloudSvg shape={cloud.shape} />
        </div>
      ))}
    </div>
  );
}
