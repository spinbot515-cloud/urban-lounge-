export default function Logo({ size = 36, withText = false, stacked = false }) {
  return (
    <div className={`logo ${stacked ? 'logo-stacked' : ''}`}>
      <img
        className="logo-mark"
        src="/urban-lounge-mark.svg"
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
        draggable="false"
      />
      {withText && <span className="logo-word">urban lounge</span>}
    </div>
  );
}
