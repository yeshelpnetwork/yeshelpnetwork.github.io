const clouds = [
  { top: '2%', left: '-7%', width: '16rem', opacity: 0.94, duration: '18s', delay: '-3s', alt: false },
  { top: '7%', left: '74%', width: '15rem', opacity: 0.96, duration: '22s', delay: '-8s', alt: true },
  { top: '18%', left: '16%', width: '10rem', opacity: 0.86, duration: '16s', delay: '-5s', alt: false },
  { top: '33%', left: '82%', width: '11.5rem', opacity: 0.9, duration: '20s', delay: '-11s', alt: true },
  { top: '46%', left: '-8%', width: '15.5rem', opacity: 0.92, duration: '19s', delay: '-7s', alt: false },
  { top: '58%', left: '67%', width: '9.5rem', opacity: 0.88, duration: '17s', delay: '-4s', alt: true },
  { top: '71%', left: '77%', width: '16rem', opacity: 0.94, duration: '21s', delay: '-14s', alt: false },
  { top: '78%', left: '14%', width: '10.5rem', opacity: 0.85, duration: '15s', delay: '-9s', alt: true },
  { top: '86%', left: '-6%', width: '16.5rem', opacity: 0.94, duration: '20s', delay: '-6s', alt: false },
  { top: '91%', left: '64%', width: '13.5rem', opacity: 0.9, duration: '18s', delay: '-12s', alt: true },
];

export default function SkyBackdrop() {
  return (
    <div className="sky-backdrop" aria-hidden="true">
      <div className="sky-backdrop__glow" />
      {clouds.map((cloud) => (
        <div
          key={`${cloud.top}-${cloud.left}`}
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
          <span className="cloud__part cloud__part--left" />
          <span className="cloud__part cloud__part--center" />
          <span className="cloud__part cloud__part--right" />
          <span className="cloud__part cloud__part--base" />
        </div>
      ))}
    </div>
  );
}
