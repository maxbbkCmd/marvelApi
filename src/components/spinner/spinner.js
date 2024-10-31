const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="200"
      height="200"
      style={{ shapeRendering: 'auto', display: 'block', background: 'rgb(255, 255, 255)' }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 50 50)`}>
            <rect
              fill="#71feb0"
              height="12"
              width="6"
              ry="6"
              rx="3"
              y="24"
              x="47"
            >
              <animate
                repeatCount="indefinite"
                begin={`-${(12 - i) / 12}s`} // Удобная формула расчета начала анимации
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              />
            </rect>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default Spinner;
