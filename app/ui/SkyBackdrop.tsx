const clouds = [
  { top: '2%', left: '-7%', width: '15rem', opacity: 0.92, duration: '46s', delay: '-18s' },
  { top: '7%', left: '76%', width: '14rem', opacity: 0.96, duration: '52s', delay: '-24s' },
  { top: '18%', left: '18%', width: '8.5rem', opacity: 0.72, duration: '34s', delay: '-8s' },
  { top: '33%', left: '84%', width: '9.5rem', opacity: 0.8, duration: '38s', delay: '-16s' },
  { top: '46%', left: '-8%', width: '14rem', opacity: 0.88, duration: '44s', delay: '-20s' },
  { top: '58%', left: '68%', width: '8rem', opacity: 0.76, duration: '36s', delay: '-11s' },
  { top: '72%', left: '79%', width: '15rem', opacity: 0.92, duration: '48s', delay: '-28s' },
  { top: '78%', left: '16%', width: '9rem', opacity: 0.7, duration: '32s', delay: '-7s' },
  { top: '86%', left: '-6%', width: '15.5rem', opacity: 0.92, duration: '46s', delay: '-21s' },
  { top: '90%', left: '66%', width: '12.5rem', opacity: 0.84, duration: '40s', delay: '-22s' },
];

export default function SkyBackdrop() {
  return (
    <div className="sky-backdrop" aria-hidden="true">
      <div className="sky-backdrop__glow" />
      {clouds.map((cloud) => (
        <div
          key={`${cloud.top}-${cloud.left}`}
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
          <span className="cloud__part cloud__part--left" />
          <span className="cloud__part cloud__part--center" />
          <span className="cloud__part cloud__part--right" />
          <span className="cloud__part cloud__part--base" />
        </div>
      ))}
    </div>
  );
}
