export default function NewsLetterBg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 450"
      opacity="0.83"
      className="absolute top-0 z-10 left-0 w-full h-full scale-125"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            stdDeviation="55"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="214"
          ry="204"
          cx="695.8754993785511"
          cy="13.68952664462006"
          fill="#0d672c"
        ></ellipse>
        <ellipse
          rx="214"
          ry="204"
          cx="38.891642483797966"
          cy="98.06693475896662"
          fill="#b50512"
        ></ellipse>
        <ellipse
          rx="214"
          ry="204"
          cx="425.95050048828125"
          cy="397.1913119229403"
          fill="#f97308"
        ></ellipse>
      </g>
    </svg>
  )
}
