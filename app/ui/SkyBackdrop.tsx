const clouds = [
  { shape: 1, top: '2%', left: '-5%', width: '16rem', opacity: 0.88, duration: '46s', delay: '-18s' },
  { shape: 2, top: '7%', left: '74%', width: '16rem', opacity: 0.92, duration: '52s', delay: '-24s' },
  { shape: 3, top: '18%', left: '15%', width: '9.5rem', opacity: 0.72, duration: '36s', delay: '-8s' },
  { shape: 2, top: '32%', left: '82%', width: '11.5rem', opacity: 0.78, duration: '40s', delay: '-16s' },
  { shape: 1, top: '45%', left: '-6%', width: '15rem', opacity: 0.84, duration: '44s', delay: '-20s' },
  { shape: 3, top: '57%', left: '68%', width: '9rem', opacity: 0.74, duration: '38s', delay: '-12s' },
  { shape: 2, top: '70%', left: '78%', width: '15.5rem', opacity: 0.88, duration: '48s', delay: '-28s' },
  { shape: 3, top: '78%', left: '14%', width: '9.5rem', opacity: 0.7, duration: '34s', delay: '-7s' },
  { shape: 1, top: '86%', left: '-5%', width: '16rem', opacity: 0.88, duration: '46s', delay: '-22s' },
  { shape: 2, top: '91%', left: '64%', width: '13rem', opacity: 0.8, duration: '42s', delay: '-24s' },
];

function CloudSvg({ shape }: { shape: number }) {
  if (shape === 1) {
    return (
      <svg viewBox="0 0 170 95" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <path
          d="M 42 78 C 24 78 12 66 12 50 C 12 36 22 26 36 24 C 42 11 56 4 72 4 C 90 4 105 15 110 32 C 117 30 124 30 130 35 C 139 42 140 52 137 61 C 146 64 152 70 152 78 C 152 87 143 92 133 92 L 42 92 Z"
          fill="white"
          fillOpacity="0.94"
        />
      </svg>
    );
  }
  if (shape === 2) {
    return (
      <svg viewBox="0 0 190 85" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <path
          d="M 38 72 C 22 72 10 61 10 46 C 10 33 20 23 33 22 C 38 10 52 3 67 3 C 81 3 93 11 99 22 C 106 18 116 18 123 23 C 133 16 148 16 158 24 C 168 33 169 45 165 54 C 174 57 180 64 180 72 C 180 81 171 85 161 85 L 38 85 Z"
          fill="white"
          fillOpacity="0.92"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <path
        d="M 32 65 C 18 65 8 55 8 42 C 8 30 17 21 28 20 C 33 9 44 3 57 3 C 71 3 83 12 87 25 C 92 23 98 23 103 27 C 110 32 112 40 109 48 C 117 50 122 56 122 63 C 122 71 115 75 106 75 L 32 75 Z"
        fill="white"
        fillOpacity="0.9"
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
          className="cloud"
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
