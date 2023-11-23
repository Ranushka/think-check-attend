'use client'

import React, { useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

const HeroImage = () => {
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e

    const applyTransform = (
      id: string,
      translationFactor: number,
      cx: number,
      cy: number,
    ) => {
      const el = document.getElementById(id)
      if (el) {
        const translation = `translate(${clientX * translationFactor}, ${
          clientY * translationFactor
        })`
        const rotation = `rotate(${(clientY / 2) * 0.01 * -1}, ${cx}, ${cy})` // rotate around center
        el.setAttribute('transform', `${translation} ${rotation}`)
      }
    }

    applyTransform('group_a', 0.08, 200, 250)
    applyTransform('group_b', 0.046, 200, 250)
    applyTransform('group_c', 0.09, 200, 250)
    applyTransform('group_d', 0.05, 200, 250)
    applyTransform('group_e', 0.06, 200, 250)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="wrap"
        width={1669.02}
        height={764}
        // className="md:transform lg:-translate-x-1/4 xl:-translate-x-2/4 md:translate-x-1"
        // className="xl:-left-1/3 lg:-left-2/3"
        className="absolute left-[50%] transform md:-translate-x-[50%] -translate-x-[64%]"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1={711.28}
            x2={956.7}
            y1={924.98}
            y2={-160.98}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#4db5e5" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1={1158.44}
            x2={1134.58}
            y1={1280.68}
            y2={1946.57}
            gradientTransform="rotate(19.06 3797.354 598.05)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.01} stopColor="#f1f5ff" />
            <stop offset={0.99} stopColor="#007c84" />
          </linearGradient>
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-3"
            x1={1251.5}
            x2={1237.73}
            y1={1409.76}
            y2={1325.45}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-4"
            x1={1227.75}
            x2={1217.86}
            y1={1405.19}
            y2={1353.16}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-5"
            x1={1243.32}
            x2={1237.73}
            y1={1383.18}
            y2={1350.48}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-6"
            x1={1235.14}
            x2={1230.57}
            y1={1293.01}
            y2={1396.17}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-7"
            x1={194.94}
            x2={119.33}
            y1={-316.09}
            y2={372.36}
            gradientTransform="rotate(-3.61 11494.494 -9216.307)"
          />
          <linearGradient
            id="Red_Orange"
            x1={452.08}
            x2={406.23}
            y1={342.86}
            y2={624.19}
            data-name="Red Orange"
            gradientTransform="rotate(-.56 16724.308 -9173.731)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#f37e5f" />
            <stop offset={0.5} stopColor="#ec1c24" />
            <stop offset={1} stopColor="#cf232a" />
          </linearGradient>
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-2"
            x1={559.98}
            x2={514.14}
            y1={360.43}
            y2={641.72}
            data-name="Red Orange"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-3"
            x1={346.29}
            x2={300.44}
            y1={325.6}
            y2={606.95}
            data-name="Red Orange"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-4"
            x1={365.11}
            x2={319.27}
            y1={328.7}
            y2={610.01}
            data-name="Red Orange"
          />
          <linearGradient
            id="linear-gradient-8"
            x1={366.68}
            x2={406.35}
            y1={147.44}
            y2={-28.09}
            gradientTransform="rotate(-17.63 411.987 29.848)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#aedef3" />
          </linearGradient>
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-9"
            x1={406.51}
            x2={389.45}
            y1={1583.49}
            y2={2059.58}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-10"
            x1={471.75}
            x2={461.9}
            y1={1675.95}
            y2={1615.6}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-11"
            x1={454.93}
            x2={447.85}
            y1={1672.63}
            y2={1635.38}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-12"
            x1={465.95}
            x2={461.95}
            y1={1656.91}
            y2={1633.51}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-13"
            x1={460.17}
            x2={456.9}
            y1={1592.23}
            y2={1666.22}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-14"
            x1={995.95}
            x2={995.95}
            y1={1330.54}
            y2={809.59}
            gradientTransform="rotate(6.72 3747.223 -3015.91)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-8"
            id="linear-gradient-15"
            x1={1023.87}
            x2={1077.1}
            y1={146.82}
            y2={-88.69}
            gradientTransform="rotate(2.81 986.773 29.649)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-16"
            x1={489.18}
            x2={472.13}
            y1={1498.5}
            y2={1974.54}
            gradientTransform="rotate(12.28 5414.419 482.476)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-17"
            x1={554.4}
            x2={544.55}
            y1={1590.95}
            y2={1530.61}
            gradientTransform="rotate(12.28 5414.419 482.476)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-18"
            x1={537.57}
            x2={530.49}
            y1={1587.63}
            y2={1550.38}
            gradientTransform="rotate(12.28 5414.419 482.476)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-19"
            x1={548.6}
            x2={544.59}
            y1={1571.92}
            y2={1548.52}
            gradientTransform="rotate(12.28 5414.419 482.476)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-20"
            x1={542.82}
            x2={539.55}
            y1={1507.23}
            y2={1581.22}
            gradientTransform="rotate(12.28 5414.419 482.476)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-5"
            x1={962.52}
            x2={916.68}
            y1={28.56}
            y2={309.85}
            data-name="Red Orange"
            gradientTransform="rotate(-8.92 3705.824 -1140.826)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-6"
            x1={1070.43}
            x2={1024.59}
            y1={46.15}
            y2={327.44}
            data-name="Red Orange"
            gradientTransform="rotate(-8.92 3705.824 -1140.826)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-7"
            x1={856.74}
            x2={810.9}
            y1={11.32}
            y2={292.61}
            data-name="Red Orange"
            gradientTransform="rotate(-8.92 3705.824 -1140.826)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-8"
            x1={875.56}
            x2={829.72}
            y1={14.39}
            y2={295.68}
            data-name="Red Orange"
            gradientTransform="rotate(-8.92 3705.824 -1140.826)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-21"
            x1={898.71}
            x2={898.71}
            y1={988.5}
            y2={590.66}
            gradientTransform="rotate(-6.78 878.055 320.187)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-8"
            id="linear-gradient-22"
            x1={120.23}
            x2={167.61}
            y1={234.13}
            y2={24.48}
            gradientTransform="rotate(-6.78 878.055 320.187)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-23"
            x1={1165.86}
            x2={928.87}
            y1={332.46}
            y2={1759.87}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-24"
            x1={942.09}
            x2={921}
            y1={1504.83}
            y2={2093.25}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-25"
            x1={1022.72}
            x2={1010.54}
            y1={1619.1}
            y2={1544.51}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-26"
            x1={1001.93}
            x2={993.17}
            y1={1615}
            y2={1568.96}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-27"
            x1={1015.55}
            x2={1010.6}
            y1={1595.57}
            y2={1566.65}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-28"
            x1={1008.41}
            x2={1004.36}
            y1={1515.62}
            y2={1607.08}
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-9"
            x1={978.96}
            x2={933.1}
            y1={1134.6}
            y2={1416.02}
            data-name="Red Orange"
            gradientTransform="rotate(11.82 3551.26 -2949.804)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-10"
            x1={1086.83}
            x2={1040.99}
            y1={1152.16}
            y2={1433.47}
            data-name="Red Orange"
            gradientTransform="rotate(11.82 3551.26 -2949.804)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-11"
            x1={873.17}
            x2={827.3}
            y1={1117.31}
            y2={1398.78}
            data-name="Red Orange"
            gradientTransform="rotate(11.82 3551.26 -2949.804)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-12"
            x1={891.99}
            x2={846.14}
            y1={1120.47}
            y2={1401.82}
            data-name="Red Orange"
            gradientTransform="rotate(11.82 3551.26 -2949.804)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-8"
            id="linear-gradient-29"
            x1={1437.78}
            x2={1474.47}
            y1={212.59}
            y2={50.24}
            gradientTransform="rotate(-12.82 1364.322 109.198)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-30"
            x1={1151.07}
            x2={1151.07}
            y1={1107.1}
            y2={489.27}
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-13"
            x1={867.11}
            x2={821.26}
            y1={627.09}
            y2={908.43}
            data-name="Red Orange"
            gradientTransform="translate(-223.03 -58.95)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-14"
            x1={975.01}
            x2={929.17}
            y1={644.66}
            y2={925.95}
            data-name="Red Orange"
            gradientTransform="translate(-223.03 -58.95)"
          />
          <linearGradient
            xlinkHref="#Red_Orange"
            id="Red_Orange-15"
            x1={780.14}
            x2={734.3}
            y1={612.93}
            y2={894.24}
            data-name="Red Orange"
            gradientTransform="translate(-223.03 -58.95)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-8"
            id="linear-gradient-31"
            x1={633.92}
            x2={665.58}
            y1={238.33}
            y2={98.23}
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-32"
            x1={1514.05}
            x2={1500.45}
            y1={1414.41}
            y2={1793.94}
            gradientTransform="rotate(17.93 4029.131 443.256)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-33"
            x1={1557.66}
            x2={1549.81}
            y1={1488.05}
            y2={1439.99}
            gradientTransform="rotate(17.93 4029.131 443.256)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-34"
            x1={1545.92}
            x2={1540.32}
            y1={1485.27}
            y2={1455.78}
            gradientTransform="rotate(17.93 4029.131 443.256)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-35"
            x1={1553.08}
            x2={1549.9}
            y1={1472.88}
            y2={1454.25}
            gradientTransform="rotate(17.93 4029.131 443.256)"
          />
          <linearGradient
            xlinkHref="#linear-gradient-2"
            id="linear-gradient-36"
            x1={1549.18}
            x2={1546.55}
            y1={1420.98}
            y2={1480.45}
            gradientTransform="rotate(17.93 4029.131 443.256)"
          />
          <linearGradient
            id="linear-gradient-37"
            x1={-190.07}
            x2={52.8}
            y1={380.5}
            y2={380.5}
            gradientTransform="translate(1604 2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.17} stopColor="#fff" stopOpacity={0.77} />
            <stop offset={0.4} stopColor="#fff" stopOpacity={0.5} />
            <stop offset={0.6} stopColor="#fff" stopOpacity={0.29} />
            <stop offset={0.78} stopColor="#fff" stopOpacity={0.13} />
            <stop offset={0.92} stopColor="#fff" stopOpacity={0.04} />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            xlinkHref="#linear-gradient-37"
            id="linear-gradient-38"
            x1={-690.07}
            x2={-447.2}
            gradientTransform="translate(698 2)"
          />
          <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-2" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-2" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-3" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-3" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-4" filterUnits="userSpaceOnUse">
            <feOffset dx={8} dy={8} />
            <feGaussianBlur result="blur-4" stdDeviation={10} />
            <feFlood floodColor="#152c54" floodOpacity={0.1} />
            <feComposite in2="blur-4" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-5" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-5" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-5" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-6" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-6" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-6" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-7" filterUnits="userSpaceOnUse">
            <feOffset dx={8} dy={8} />
            <feGaussianBlur result="blur-7" stdDeviation={10} />
            <feFlood floodColor="#152c54" floodOpacity={0.1} />
            <feComposite in2="blur-7" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-8" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-8" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-8" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-9" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-9" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-9" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-10" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-10" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-10" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-11" filterUnits="userSpaceOnUse">
            <feOffset dx={8} dy={8} />
            <feGaussianBlur result="blur-11" stdDeviation={10} />
            <feFlood floodColor="#152c54" floodOpacity={0.1} />
            <feComposite in2="blur-11" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-12" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-12" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-12" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-13" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-13" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-13" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-14" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-14" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-14" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-15" filterUnits="userSpaceOnUse">
            <feOffset dx={8} dy={8} />
            <feGaussianBlur result="blur-15" stdDeviation={10} />
            <feFlood floodColor="#152c54" floodOpacity={0.1} />
            <feComposite in2="blur-15" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-16" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-16" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-16" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-17" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-17" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-17" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-18" filterUnits="userSpaceOnUse">
            <feOffset dx={8} dy={8} />
            <feGaussianBlur result="blur-18" stdDeviation={10} />
            <feFlood floodColor="#152c54" floodOpacity={0.1} />
            <feComposite in2="blur-18" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-19" filterUnits="userSpaceOnUse">
            <feOffset dx={-8} dy={-8} />
            <feGaussianBlur result="blur-19" stdDeviation={10} />
            <feFlood floodColor="#194166" floodOpacity={0.1} />
            <feComposite in2="blur-19" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <clipPath id="clippath">
            <path
              id="bg"
              d="M0 0h1669.02v764H0z"
              style={{
                strokeWidth: 0,
                fill: 'none',
              }}
            />
          </clipPath>
          <style>
            {
              '.cls-42,.cls-43,.cls-44,.cls-45,.cls-51,.cls-52,.cls-53{stroke-width:0}.cls-43{fill:#fab685}.cls-44{fill:#4f2020}.cls-45{fill:#4d4d4d}.cls-51{fill:#663200}.cls-52{fill:#f1f5ff}.cls-53{fill:#e49b32}'
            }
          </style>
        </defs>
        <g
          style={{
            clipPath: 'url(#clippath)',
          }}
        >
          <path
            id="bg-2"
            d="M-1.02 0H1669v764H-1.02z"
            data-name="bg"
            style={{
              fill: 'url(#linear-gradient)',
              strokeWidth: 0,
            }}
          />
          <g id="group_e">
            <g
              style={{
                filter: 'url(#drop-shadow-1)',
              }}
            >
              <path
                d="M1122.88 642.23c-17.94-51.73-35.05-101.11-34.76-135.35 2.85 4.13 8.35 6.87 13.71 9.55 2.5 1.25 5.1 2.54 7.33 3.93.53.33 1.13.49 1.73.49.69 0 3.04.72 3.58 1.39 3.01 3.71 6.96 5.67 11.41 5.67.89 0 1.81-.08 2.76-.25 8.86-1.65 17.23-7.88 24.21-18.03 10.69-15.54 15.76-36.94 12.6-53.21-1.13-6-3.92-16.37-7.43-21.33-17.31-24.52-49.86-39.3-74.3-47.24-31.39-10.2-62.39-13.83-79.39-13.83-1.81 0-3.54.04-5.15.11-28.9 1.34-60.57 13.75-94.11 36.87-29.55 20.38-59.94 48.55-90.3 83.73-39.12 45.33-75.63 99.4-102.82 152.26-26.21 50.97-39.74 93.56-37.13 116.85 4.11 36.57 14.4 69.78 30.59 98.72 15.07 26.94 35.21 50.14 59.85 68.97 23.1 17.65 49.8 31.21 79.37 40.33 28.23 8.7 58.26 13.11 89.24 13.11 36.61 0 73.87-6.39 107.78-18.48 35.35-12.61 66.22-30.76 91.74-53.93 63.28-57.47 24.07-170.55-10.52-270.31Z"
                className="cls-52"
              />
              <path
                d="M1155.36 436.9c-30.27-15.41-58.26 20.19-67.47 48.86-27.61 85.87 145.38 331.71 43.32 424.41-136.18 123.68-426 94.62-453.13-146.69-8.81-78.35 173.78-379.3 321.27-386.14 34.65-1.61 124.63 14.41 156.01 59.56Z"
                style={{
                  fill: 'url(#linear-gradient-2)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1114.08 449.49c12.52-11.49 25.28-16 36.98-10.33 6.8 2.24 9.63 9.42 11.21 17.84 4.96 25.61-11.87 63.32-34.21 67.48-11.55 2.03-17.93-12.35-14.82-26.31 3.77 2.42 7.55 4.45 11.18 7.08 4.28 3.32 9.85.99 14.2-3.93 9.12-10.18 10.89-30.26 1.44-35.13-8.68-5.59-17.38-10.92-25.98-16.69Z"
                style={{
                  fill: 'url(#linear-gradient-3)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1110.91 517.62c-8.28-5.13-19.9-8.41-21.34-15.43-1.55-7.59 1.67-17.85 4.81-24.91 4.11-9.24 9.6-17.15 15.95-24.03.92-1 1.54-1.18 2.43-.59 6.66 4.51 13.59 8.4 20.16 13.09-17.21 5.74-27.32 33.66-22.01 51.87Z"
                style={{
                  fill: 'url(#linear-gradient-4)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1118 483.53c4.49-7.77 9.7-13.37 16.52-14.06 5.34-.54 8.53 3.3 8.88 10.22.42 8.26-3.63 17.54-9.36 21.45-5.68 3.87-10.35.41-9.17-7.41.65-4.32-.23-6.16-2.77-7.2-1.3-.54-2.39-1.61-3.58-2.46-.16-.12-.29-.3-.52-.54Z"
                style={{
                  fill: 'url(#linear-gradient-5)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1121.54 499.51c-2.4-1.53-4.83-3.06-7.22-4.66-.21-.14-.35-.83-.24-1.18.72-2.24 1.53-4.46 2.38-6.91 1.99 1.22 3.87 2.34 5.7 3.56.27.18.47.8.42 1.25-.29 2.56-.66 5.13-1.04 7.94Z"
                style={{
                  fill: 'url(#linear-gradient-6)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="m-597.91 743.04 29.35-21.3c29.35-21.3 88.06-63.91 149.63-38.01 61.55 25.44 126.01 120.56 187.04 133.62 61.06 13.77 118.69-54.52 177.68-90.47 58.96-36.42 119.23-41.68 180.27-28.26 61.05 13.42 122.87 45.51 183.4 46.44 60.54 1.39 119.74-29.54 180.02-34.45 60.25-5.61 121.59 14.81 182.36 21.57 60.79 7.23 121.05 1.97 179.76-40.63 58.71-42.61 115.85-122.56 175.34-146.5 59.49-23.93 121.31 8.16 182.88 34.06 61.55 25.44 122.89 45.86 182.61 27.76 59.73-18.1 117.95-72.38 177.68-90.47 59.73-18.1 121.07 2.32 182.61 27.76 61.57 25.91 123.39 58 184.7 77.6 61.32 20.07 122.08 26.48 152.49 30.51l30.39 3.56 1.56 37.35-30.13 2.63-150.66 13.15c-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77-60.27 5.26-120.53 10.52-180.8 15.77l-150.66 13.15-30.13 2.63-7.8-186.74Z"
              style={{
                fill: 'url(#linear-gradient-7)',
                filter: 'url(#drop-shadow-2)',
                strokeWidth: 0,
              }}
            />
            <g
              style={{
                filter: 'url(#drop-shadow-3)',
              }}
            >
              <path
                d="M759.26 593.48c-3.76-1.44-7.6-2.76-11.49-3.84-13.71-3.79-27.67-6.34-41.76-8.22-14.49-1.92-29.04-3.11-43.66-2.92-8.65.12-17.31.46-25.94 1.16-8.24.66-16.43 1.88-24.61 2.93-2.85.36-5.67.94-8.54 1.42-.3-.98-.57-1.88-.86-2.77-2.97-9.21-7.61-17.57-12.87-25.63-7.55-11.54-17.11-20.88-29.52-27.09-2.59-1.3-5.4-2.25-8.21-2.97-2.71-.68-5.17 1.04-5.33 3.32-.06.81-.06 1.65.09 2.44 1.38 7.55 1.78 15.2 2.12 22.85.36 8.31.21 16.6-.69 24.88-.71 6.59-1.88 13.09-4.42 19.29-1.22 2.94-2.75 5.55-5.99 6.62-.16.06-.3.16-.46.25-14.5 8.01-28.68 16.56-42.72 25.38-16.24 10.21-33.8 17.76-51.51 24.96-.34.13-.97-.07-1.3-.32-1.33-1.08-2.53-2.33-3.9-3.37-2.7-2.06-5.67-3.6-9.16-3.81-2.85-.17-3.5.45-3.72 3.29-.28 3.43-.61 6.84-.94 10.27-.09.82-.5 1.31-1.37 1.62-16.83 5.77-33.89 10.67-51.41 13.88-1.08.2-1.5-.1-2.03-.95-2.29-3.64-4.54-7.31-7.02-10.81-11.51-16.28-25.18-30.42-41.78-41.61-4.5-3.03-9.15-5.82-14.3-7.66-2.08-.73-4.2-.96-6.35-.39-2.28.61-2.92 2.17-1.79 4.23.31.57.64 1.12.98 1.67 5.58 9.3 11.21 18.56 16.73 27.88 6.09 10.29 11.18 21.03 14.37 32.59 1.18 4.3 2.36 8.61 1.97 13.19-.83 9.89-2.7 19.58-5.36 29.12-2.44 8.71-5.2 17.29-9.31 25.38-1.13 2.22-2.18 4.49-3.17 6.78-.39.9-.64 1.93.16 2.8.79.86 1.79.64 2.77.4 2.75-.67 5.05-2.16 7.24-3.87 6.33-4.94 11.61-10.91 16.48-17.22 9.33-12.11 16.77-25.4 23.82-38.91.56-1.06 1.1-1.31 2.27-1.16 7.68.98 15.38 1.87 23.08 2.78 2.34.27 4.68.45 7.03.66.39 4.32-.02 8.31-2.36 11.94-.24.38-.41 1.14-.21 1.38.28.32.97.49 1.45.41 1.1-.16 2.18-.47 3.25-.8 6.9-2.08 13.11-5.23 17.59-11.13.21-.29.78-.46 1.18-.45 9.09.17 18.17.39 27.26.57 1.49.04 2.98-.02 4.67-.03-1.24 7.38-3.73 13.83-8.88 19.08-.43.43-.57 1.12-.83 1.7.6.23 1.2.66 1.81.66 3.96.06 7.79-.69 11.52-1.97 9.9-3.41 17.26-9.97 22.89-18.64.4-.63.74-1.08 1.65-1.14 10.1-.56 20.2-1.2 30.3-1.81 1.16-.08 2.33-.21 3.73-.33-.95 1.79-1.76 3.34-2.61 4.88-9.5 16.95-22.25 31.31-35.81 45.04-2.87 2.91-5.71 5.86-8.52 8.83-.71.76-1.77 1.76-.99 2.78.49.63 1.84 1 2.72.88 3.1-.45 6.23-.92 9.21-1.82 11.51-3.49 22.26-8.71 32.62-14.76 21.42-12.51 39.75-28.5 54.36-48.64.29-.38.87-.7 1.35-.78 12.04-1.84 24.08-3.64 36.12-5.5 1.16-.17 1.86.07 2.61 1.01 11.37 14.67 20.48 30.67 28.16 47.51 1.84 4.03 3.64 8.08 5.5 12.1.43.94 1.03 2.13 2.16 1.89.84-.18 1.79-1.07 2.19-1.88 1.02-2.08 1.96-4.23 2.58-6.45 4.53-16.34 4.11-32.66-.65-48.87-1.28-4.36-2.98-8.59-4.52-12.98.25-.08.66-.2 1.05-.3 10.87-2.9 21.51-6.45 31.86-10.85 9.32-3.97 18.41-8.41 26.43-14.7 3.58-2.8 6.85-5.92 8.79-10.15.2-.43.42-.89.43-1.34 0-1.79-.14-3.56-.13-5.35.02-1.41-.06-1.53-1.43-1.08-1.61.51-3.22 1.04-4.96 1.6-.06-.68-.11-1.16-.17-1.71 5.15-1.04 10.11-2.26 14.77-4.45.17-.08.53-.04.66.09.69.67 1.31.39 1.98 0 4.98-2.8 10.03-5.51 14.95-8.44 7.12-4.23 13.95-8.88 19.5-15.16 3.74-4.26 7.18-8.7 9.39-13.97 1.33-3.14.98-4.15-2.18-5.36Zm-452.83 31.03c.12-.1.22-.2.33-.29 1 1.13 2.01 2.26 3.11 3.51-1.12.16-3.22-2-3.44-3.22Zm248.6-77.18c.15-.03.31-.07.47-.1.17 1.19.36 2.4.57 3.83-.98-.61-1.37-2.49-1.04-3.72Zm149.3 51.84c-.95.04-1.59-.66-1.57-1.64.02-.89.66-1.53 1.55-1.53.91 0 1.68.76 1.61 1.64-.08.95-.63 1.49-1.59 1.53Z"
                className="cls-44"
              />
              <path
                d="M757.37 594.81c-6.57-2.15-13.22-4.14-19.94-5.77a276.95 276.95 0 0 0-39.84-6.65c-9.77-.91-19.57-1.68-29.38-1.89-9.25-.2-18.52.16-27.76.75-8.07.51-16.13 1.49-24.13 2.61-6.65.93-13.22 2.35-19.82 3.56-.84.16-1.57.05-1.52-.95.02-.38.59-.93 1-1.04 1.69-.47 3.41-.79 5.18-1.18-.1-.41-.16-.7-.24-.98-2.72-9.29-7.3-17.69-12.52-25.78-6.48-10.06-14.47-18.61-24.8-24.81-3.61-2.17-7.3-4.24-11.48-5.15-2.82-.62-3.95.52-3.44 3.32 1.4 7.64 1.96 15.37 2.09 23.11.14 7.56-.03 15.14-.47 22.69-.47 8.06-1.89 15.97-5.24 23.42-.08.17-.13.37-.27.83.72-.34 1.2-.57 1.68-.8 3.54-1.67 7.07-3.35 10.61-5.02.68-.32 1.32-.28 1.63.47.3.74-.11 1.19-.83 1.47-1.31.54-2.62 1.09-3.89 1.71-13.08 6.3-25.65 13.53-38.1 20.97-8.57 5.12-16.91 10.63-25.53 15.66-12.94 7.56-26.6 13.75-40.44 19.47-26.42 10.92-53.46 19.87-81.74 24.71-2.45.42-4.93.8-7.41 1.07-.45.05-.97-.54-1.46-.82.36-.4.69-.86 1.12-1.16.25-.17.66-.11 1-.16 1.99-.3 3.97-.61 6.14-.93-.41-.68-.72-1.23-1.05-1.78-4.91-8.01-10.41-15.6-16.56-22.72-10.09-11.66-21.34-22.02-34.56-30.04-3.4-2.07-7.1-3.65-10.76-5.25-1.65-.73-3.5-.78-5.32.23.28.51.51.97.77 1.4 5.52 9.18 11.1 18.33 16.56 27.54 6.09 10.27 11.33 20.94 14.76 32.43 1.83 6.13 3.17 12.26 2.38 18.78-1.38 11.3-3.79 22.36-7.14 33.23-2.54 8.2-5.79 16.09-9.78 23.69-.38.74-.63 1.55-1.08 2.67 1-.32 1.7-.41 2.26-.74 1.87-1.12 3.84-2.16 5.54-3.51 5.68-4.49 10.43-9.9 14.88-15.56 7.82-9.94 14.17-20.84 20.26-31.89 1.47-2.66 2.88-5.37 4.37-8.15-2.02-.36-3.88-.63-5.72-1.08-.48-.11-1.16-.76-1.16-1.17-.02-.89.79-.98 1.53-.84.22.04.42.07.64.11 4.38.69 8.73 1.57 13.13 2.05 11.39 1.23 22.77 2.51 34.19 3.32 10.64.76 21.33 1.05 32 1.34 6.8.19 13.61.02 20.41 0 .8 0 1.57.14 1.57 1.1-.01.91-.77 1-1.51.99-2.1 0-4.19.04-6.32.06-1.09 7.14-3.5 13.56-8.22 19.18h.74c6.01-.5 11.49-2.52 16.55-5.74 5.85-3.73 10.39-8.73 14-14.6.5-.79 1.02-1.25 2.04-1.26 2.67-.03 5.34-.1 8.01-.27 8.37-.57 16.74-1.27 25.12-1.72 2.29-.12 3.51-.96 4.13-3.09.43-1.45 1.11-2.82 1.77-4.44-23.41 2.53-46.57 3.77-69.79 4.23-14.59.3-67.54-.8-69.56-2.56.58-.05.97-.13 1.36-.1 3.86.24 7.73.56 11.6.76 17.25.91 34.52 1.45 51.79 1.11 13.82-.28 27.64-.73 41.45-1.48 10.74-.59 21.45-1.76 32.18-2.64 1.01-.09 1.51-.52 1.77-1.48.5-1.87 1.03-3.72 1.69-5.54.15-.41.85-.62 1.28-.93.23.48.48.95.69 1.45.04.13-.05.33-.11.5-1.89 5.07-3.5 10.27-5.75 15.17-5.74 12.54-13.65 23.73-22.74 34.02-7.43 8.42-15.35 16.41-23.06 24.59-.77.83-1.54 1.66-2.3 2.5.08.15.15.3.23.46 2.54-.57 5.13-.99 7.61-1.74 16.28-4.99 31.1-12.95 45.12-22.46 8.91-6.04 17.05-13.02 24.68-20.57 7.45-7.37 14.32-15.25 19.82-24.24 2.06-3.38 3.97-6.85 4.86-10.77.9-3.92-.52-7.07-3.78-8.54-.74-.33-1.94-.44-1.44-1.65.53-1.24 1.54-.51 2.35-.26.32.1.62.3.92.48 3.47 2.03 4.99 5.88 4.03 10.3-.92 4.23-2.99 7.94-5.17 11.61-.23.39-.46.78-.73 1.26.52 0 .86.03 1.2-.01 3.63-.51 7.25-1.03 10.87-1.55 16.41-2.36 32.76-5.09 48.98-8.54 18.58-3.97 36.6-9.67 53.69-18.04 7.1-3.47 13.92-7.39 19.75-12.82 2.05-1.91 3.88-4.01 5.09-6.72l-.24-.15c-.06-2.35-.11-4.42-.17-6.84-2.42 1.04-4.5 1.91-6.86 2.9-.29-2.02-.54-3.82-.85-5.95-2.13 1.24-3.96 2.29-6 3.47-.65-.22-1.31-.43-1.96-.64-.32-1.33-.61-2.58-.96-4.03-1.35.93-2.57 1.78-3.93 2.72-.63-.16-1.26-.3-1.91-.43-.34-.88-.65-1.67-.99-2.56-.8.69-1.51 1.28-2.27 1.94-.63-.11-1.25-.21-1.88-.3-.19-.46-.35-.91-.54-1.39-.47.4-.89.76-1.33 1.13-.5-.07-.99-.13-1.49-.18-.19-.57-.37-1.08-.57-1.68-.62.49-1.18.94-1.81 1.44-.46-.05-.94-.09-1.4-.13-2.38-.18-4.6.11-6.78 1.04-1.66.69-3.38 1.27-5.07 1.91-.71.27-1.47.62-1.87-.34-.41-1 .34-1.37 1.13-1.65.24-.09.47-.2.72-.29 4.69-1.55 9.33-3.29 14.09-4.63 10.55-2.96 21.26-4.79 32.28-3.56 4.53.5 8.92 1.49 12.59 4.48.26.2.97.07 1.35-.14 3.11-1.67 6.22-3.33 9.26-5.12 6.77-3.96 13.49-7.99 19.33-13.29.37-.34.8-.59 1.21-.88-.83-.48-1.36-.62-1.9-.71-12.43-2.33-24.94-2.93-37.55-2.3-14.3.72-28.32 3.11-42.06 7.05-10.15 2.91-20 6.66-29.52 11.22-.46.22-.98.34-1.47.5-.06-.15-.12-.31-.18-.47.33-.21.65-.46 1.02-.63 23.2-11.09 47.64-17.37 73.34-18.54 12.86-.59 25.66.1 38.31 2.7.38.07.97-.06 1.22-.32 4.03-4.16 7.66-8.64 10.14-13.92 1.6-3.41 1.66-3.12-1.66-4.2Zm-202.28-47.66c.16-.03.32-.07.47-.1.18 1.19.36 2.4.58 3.83-.98-.61-1.37-2.49-1.05-3.72Zm-1.14 43.15c-.12 0-.25-.02-.38-.03.8-6.15 1.93-12.29 2.29-18.47.37-6.17-.02-12.4-.09-18.6.2.02.42.04.63.05 1.16 12.49.58 24.86-2.45 37.05ZM306.5 624.33c.11-.1.22-.2.33-.29 1 1.13 1.99 2.26 3.09 3.51-1.12.16-3.21-2-3.43-3.22Zm4.43 5.52c.21-.12.44-.24.65-.36 10.78 13.28 19.97 27.51 25.6 43.83 1.26 3.66 2.38 7.37 2.86 11.21-.13.04-.27.09-.4.13-.12-.16-.32-.29-.35-.46-4.33-20.75-15.5-37.99-28.37-54.35Zm19.32 111.75c.72-1.17 1.33-2.42 2.8-2.83-.76 1.13-1.3 2.48-2.8 2.83Zm24.42-37.45c-2.48 6.05-5.4 11.9-8.98 17.37-3.39 5.17-7.08 10.15-10.64 15.2-.23.33-.54.61-.81.91-.11-.06-.21-.12-.31-.17 0-.19-.09-.46 0-.58 8.31-10.51 15.4-21.75 20.49-34.21.17.07.35.14.53.2-.09.42-.12.87-.29 1.27Zm97.95 14.55c-.09-.18-.18-.36-.26-.55.72-.36 1.45-.72 2.17-1.09.1.21.19.43.29.63-.73.34-1.46.67-2.19 1Zm15.53-14.46c.15.06.3.14.45.2-.12.39-.15.83-.35 1.18-1.82 3.01-4.23 5.53-6.97 7.71-1.41 1.13-2.92 2.12-4.41 3.15-.32.23-.7.38-1.05.57-.14-.17-.28-.34-.44-.51 5.08-3.28 9.73-6.97 12.77-12.3Zm-99.97-10.88c.9-.93 5.23-.57 6.15.5-2.15-.17-4-.33-6.15-.5Zm183.6-85.42c-2.56 1.08-4.83 2.04-7.34 3.11.54-1.37 6.06-3.71 7.34-3.11Zm-47.72 25.71c-2.02 1.39-3.97 2.88-5.98 4.28-.33.23-.79.28-1.19.41.23-.35.38-.79.69-1.02 8.13-6.13 16.69-11.58 25.61-16.43 5.7-3.09 11.55-5.92 17.34-8.87.41-.21.88-.31 1.32-.45.08.14.14.28.22.43-.42.26-.81.57-1.26.78-12.79 6.01-25.1 12.85-36.74 20.87Zm-3.55 108.96c.3-1.26 2.86-2.71 3.8-2.57.05.12.11.25.17.36-1.32.73-2.65 1.47-3.97 2.2Zm59.07-57.23c-.89 2.72-1.57 5.57-2.84 8.11-4.01 7.99-9.87 14.59-16.29 20.71-10.22 9.72-21.79 17.65-33.82 24.93-.29.18-.63.23-.94.35-.08-.16-.15-.32-.24-.47.51-.35 1.01-.72 1.53-1.04 10.6-6.46 20.83-13.46 30.1-21.78 7.4-6.64 14.09-13.91 18.83-22.76 1.45-2.7 2.59-5.53 2.97-8.61.02-.22.07-.42.13-.63.02-.06.12-.11.5-.42.05.68.22 1.19.08 1.6Zm102.46-18.3c-2.06.78-3.83 1.46-5.83 2.22.45-1.25 4.48-2.82 5.83-2.22Zm-28.38-35.96c-1.76.91-3.32 1.72-4.9 2.53-.07-.13-.13-.27-.2-.4.69-1.07 3.95-2.61 5.1-2.14Zm-23.73 8.58c4.16-7.71 8.3-15.45 12.44-23.18.04-.07.14-.1.4-.29-.36 1.07-.64 1.95-.94 2.83-2.46 7.01-4.92 14.03-7.43 21.03-.4 1.1-.41 2.11-.14 3.24 1.51 6.35 2.96 12.71 4.25 19.15-.62-1.23-1.25-2.45-1.83-3.7-2.28-5-4.54-10.02-6.83-15.02-.63-1.37-.67-2.68.08-4.06Zm-12.19 4.51c3.54-7 7.19-13.95 10.8-20.92.15.07.29.15.44.21-1.21 3.43-2.4 6.86-3.61 10.28-1.21 3.45-2.45 6.88-3.61 10.34-.22.65-.26 1.44-.11 2.11 1.24 5.53 2.53 11.04 3.6 16.66-.84-1.68-1.72-3.33-2.5-5.03-1.69-3.71-3.37-7.43-4.94-11.19-.31-.72-.42-1.8-.09-2.45Zm-10.79 3.33c2.88-5.71 5.86-11.37 8.81-17.05.13.06.26.13.38.19-.69 2.01-1.38 4.03-2.1 6.04-1.22 3.49-2.5 6.96-3.65 10.46-.26.8-.32 1.78-.14 2.6.85 4 1.81 7.96 2.74 11.94.07.26.06.55.09.82-.06.02-.14.04-.2.08-.66-1.34-1.36-2.66-1.98-4.01-1.33-2.94-2.67-5.87-3.88-8.85-.28-.65-.37-1.62-.08-2.22Zm66.39 22.11c-2.32 3.38-65.08 17.39-68.45 15.13 23.43-3.35 46.25-7.87 68.45-15.13Zm47.22-70.77c0-2.62 2.01-4.66 4.64-4.68s4.77 2.04 4.77 4.7c0 2.59-2.06 4.67-4.65 4.7-2.66.03-4.74-2.04-4.76-4.71Zm11.12 5.54c-1.91 2.18-5.4 3.51-6.91 2.27 5.21-.49 7.89-3.31 8.31-8.33 1.1 1.03.28 4.13-1.41 6.05Zm35.13-.15c-.74.58-1.72.83-2.25 1.09-1.48-.18-2.61-.23-2.85-1.53-.24-1.25.61-2 1.63-2.29.9-.26 1.96-.35 2.87-.15 1.44.33 1.78 1.95.61 2.88Z"
                style={{
                  fill: 'url(#Red_Orange)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M635.99 685.13c-7.13 1.53-14.11 3.03-21.17 4.55 1.31 1.53 2.61 2.95 3.8 4.46 1.2 1.52 2.34 3.09 3.43 4.69 1.11 1.64 2.17 3.31 3.18 5.01 2.5 4.19 2.48 4.2 2.18 5.28-.31-.45-.56-.76-.76-1.1-.47-.82-.9-1.66-1.38-2.48-3.09-5.34-6.48-10.47-10.84-14.88-.31-.32-.78-.74-1.13-.7-1.3.13-2.59.43-4.05.7.39.48.62.78.87 1.06 5.04 5.69 9.46 11.83 13.39 18.32 3.84 6.34 7.15 12.94 9.85 19.85.17.43.22.91.33 1.37-.16.05-.32.09-.48.14-.18-.35-.37-.7-.54-1.07-2-4.33-3.82-8.75-6.02-12.98-4.79-9.24-10.63-17.8-17.61-25.55-.3-.34-.72-.85-1.06-.83-1.16.07-2.31.34-3.66.57 14.61 18.65 25.19 39.25 34.21 60.75.17-.03.35-.07.52-.1.57-1.34 1.2-2.65 1.69-4.02 2.03-5.71 3-11.64 3.5-17.66 1.29-15.42-1.45-30.14-7.7-44.25-.18-.42-.41-.81-.58-1.12Zm-1.7 47.45c.69 1.5 1.28 2.68 1.36 4.25-1.06-.78-1.8-2.95-1.36-4.25Z"
                style={{
                  fill: 'url(#Red_Orange-2)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M410.97 703.91c-1.74 1.64-3.77 2.97-5.71 4.39-.29.21-.73.21-1.11.31-.02-.09-.05-.17-.07-.26 2.29-1.74 4.57-3.48 7.05-5.36-1.62-.51-2.59-.36-3.46.73-.57.72-1.45 1.2-2.22 1.74-.21.14-.54.1-.82.14-.04-.1-.07-.2-.11-.3 1-.84 2-1.69 3.24-2.73-3.12-.21-5.85-.39-8.71-.58.26 3.85-.08 7.43-1.63 11.04 6.66-1.94 12.46-4.67 16.89-9.94-1.43-.45-2.32-.14-3.35.82Z"
                style={{
                  fill: 'url(#Red_Orange-3)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M436.43 656.41c-1.45-1.07-2.93-2.09-4.38-3.15-.29-.21-.5-.51-.75-.77.1-.11.21-.22.31-.33 2.2.99 4.18 2.32 5.82 4.09.82.89 1.49.98 2.56.14-2.8-2.69-5.7-5.07-9.48-6.09-.74-.2-1.52-.29-2.28-.37-.82-.08-1.24.26-1.29 1.17-.18 3.5-.42 7-.65 10.61 3.64-1.35 7.35-2.72 11.25-4.17-.46-.48-.74-.87-1.1-1.14Zm-6.03-4.01-1.93-.76c.06-.18.13-.36.19-.55.66.21 1.32.42 1.99.63l-.24.69Z"
                style={{
                  fill: 'url(#Red_Orange-4)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="M512.89 79.57c-.43.04-.76.39-.77.83-.04 3.08.71 6.11.02 8.93-2.76 11.48-10.2 19.42-22.31 23.81-11.36 4.11-26.53 5.74-36.44-1.84a.837.837 0 0 0-.24-.14.728.728 0 0 0-.24-.07h-.01s-.11-.03-.16-.03h-.07c-.15 0-.3.04-.45.11-.05.02-.1.04-.15.09-.08.05-.16.12-.22.21-.14.2-.24.42-.24.67-.1 2.72-.08 5.44-1.04 8.02-6.79 18.25-25.35 30.74-43.73 34.75-19.42 4.24-34.58-1.71-45.49-17.84a.48.48 0 0 0-.57-.2c-.05.02-.09.03-.12.05-.01 0-.03.02-.04.04-.05.04-.09.1-.13.16-2.61 5.36-6.28 9.6-11.02 12.73-15.84 10.47-45.8 7.23-55.62-10.71-2.44-4.47-3.83-9.28-4.18-14.44a.754.754 0 0 0-.35-.62c-.13-.1-.3-.15-.47-.15-.02 0-.05-.01-.06 0-.15 0-.3.07-.43.16-10 7.2-24.78 10.28-35.48 2.8-14.59-10.2-14.17-28.48-1.83-40.9 4.79-4.35 10.42-7.69 16.91-10 .44-.17.64-.48.59-.94-1.47-15 4.24-26.39 17.17-34.17 9.48-5.72 19.26-6.54 29.33-2.46.09.03.18.05.28.05h.05c.08 0 .17 0 .24-.02s.13-.06.19-.09.1-.06.14-.11c.04-.01.08-.05.11-.1.05-.06.09-.14.14-.22.03-.08.05-.18.05-.26.37-5.76 1.7-11.31 3.98-16.65 11.86-27.57 37.65-45.12 67.7-44.07 18.67.64 34.16 8.96 46.46 24.95 1.73 2.23 3.03 4.56 3.94 6.99.02.07.07.14.12.21.04.07.1.13.17.18.06.06.13.11.21.14.09.06.18.08.28.09.07 0 .14.01.22.01.08-.01.16-.02.23-.05h.01l.05-.02c.04-.01.06-.03.09-.06.12-.05.22-.13.3-.22 9.08-10.71 19.95-14.85 32.62-12.41 9.33 1.78 16.88 7.06 20.38 15.82.32.79.86 1.01 1.62.63C515.28 3 538.36 7.17 549.66 28.54c12.39 29.61-9.34 48.35-36.79 51.03Z"
              style={{
                fill: 'url(#linear-gradient-8)',
                filter: 'url(#drop-shadow-4)',
                strokeWidth: 0,
              }}
            />
          </g>
          <g id="group_d">
            <g
              style={{
                filter: 'url(#drop-shadow-5)',
              }}
            >
              <path
                d="M299.94 608.45c-12.72-37.04-24.86-72.39-24.65-96.92 2.02 2.95 5.92 4.92 9.72 6.83 1.78.89 3.61 1.82 5.2 2.81.38.24.8.35 1.23.35.49 0 2.16.52 2.54.99 2.14 2.65 4.93 4.06 8.09 4.06.63 0 1.28-.06 1.96-.18 6.28-1.18 12.22-5.65 17.16-12.91 7.58-11.13 11.17-26.45 8.94-38.1-.8-4.3-2.78-11.72-5.27-15.28-12.28-17.56-35.36-28.14-52.69-33.83-22.26-7.31-44.24-9.9-56.3-9.9-1.28 0-2.51.03-3.65.08-20.49.96-42.95 9.84-66.73 26.4-20.96 14.59-42.5 34.76-64.03 59.95-27.74 32.46-53.63 71.17-72.91 109.02-18.59 36.5-28.18 66.99-26.33 83.67 2.91 26.18 10.21 49.96 21.69 70.68 10.69 19.29 24.97 35.9 42.44 49.38 16.38 12.63 35.31 22.35 56.28 28.87 20.02 6.23 41.31 9.39 63.28 9.39 25.96 0 52.38-4.58 76.42-13.23 25.07-9.03 46.95-22.02 65.05-38.62 44.87-41.15 17.07-122.11-7.46-193.55Z"
                className="cls-52"
              />
              <path
                d="M322.97 461.43c-21.46-11.03-41.31 14.46-47.85 34.99-19.58 61.49 103.09 237.51 30.72 303.88-96.55 88.56-302.07 67.75-321.3-105.04-6.25-56.1 123.23-271.59 227.81-276.49 24.57-1.15 88.37 10.32 110.62 42.65Z"
                style={{
                  fill: 'url(#linear-gradient-9)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M293.7 470.44c8.88-8.23 17.93-11.46 26.22-7.4 4.82 1.6 6.83 6.75 7.95 12.77 3.52 18.33-8.42 45.34-24.26 48.32-8.19 1.46-12.72-8.84-10.51-18.84 2.67 1.73 5.36 3.19 7.92 5.07 3.03 2.37 6.99.71 10.07-2.82 6.47-7.29 7.72-21.67 1.02-25.15-6.15-4-12.33-7.82-18.42-11.95Z"
                style={{
                  fill: 'url(#linear-gradient-10)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M291.45 519.22c-5.87-3.68-14.11-6.02-15.13-11.04-1.1-5.44 1.18-12.78 3.41-17.84 2.91-6.62 6.81-12.28 11.31-17.21.65-.72 1.09-.84 1.72-.43 4.73 3.23 9.64 6.01 14.3 9.37-12.21 4.11-19.38 24.1-15.61 37.14Z"
                style={{
                  fill: 'url(#linear-gradient-11)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M296.48 494.82c3.19-5.56 6.88-9.58 11.71-10.07 3.79-.38 6.05 2.36 6.3 7.32.3 5.91-2.57 12.56-6.64 15.36-4.03 2.77-7.34.3-6.5-5.31.46-3.09-.16-4.41-1.96-5.16-.92-.38-1.7-1.15-2.54-1.76-.12-.08-.21-.21-.37-.39Z"
                style={{
                  fill: 'url(#linear-gradient-12)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M298.99 506.26c-1.7-1.1-3.42-2.19-5.12-3.34-.15-.1-.25-.59-.17-.84.51-1.6 1.08-3.19 1.69-4.95 1.41.88 2.74 1.68 4.04 2.55.19.13.33.57.3.9-.2 1.83-.47 3.67-.74 5.69Z"
                style={{
                  fill: 'url(#linear-gradient-13)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="m-789.92 366.23 32.16-17.83c32.16-17.83 96.49-53.49 152.52-9.03 56.09 43.91 103.74 169.3 161.32 198.74 57.5 30.26 124.93-35.42 188.45-63.3 63.57-28.42 123.38-20.41 180.92 9.45 57.54 29.85 112.82 81.54 171.88 96.79 59 15.8 121.91-6.21 181.67 2.21 59.84 7.61 116.54 45.65 174.89 67.72 58.29 22.62 118.09 30.64 182.42-5.02 64.32-35.66 133.17-114.99 195.23-128.81 62.06-13.82 117.34 37.87 173.37 82.33 56.09 43.91 112.78 81.95 174.14 74.96 61.36-7 127.09-56.3 188.45-63.3 61.36-7 118.05 31.05 174.14 74.96 56.03 44.46 111.31 96.15 168.1 133.23 56.74 37.63 115.13 59.3 144.22 71.09l29.15 11.24-4.52 43.67-29.9-4.01c-29.9-4.01-89.7-12.02-149.51-20.04-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-179.41-24.05-59.8-8.02-119.6-16.03-149.51-20.04l-29.9-4.01 22.61-218.37Z"
              style={{
                fill: 'url(#linear-gradient-14)',
                filter: 'url(#drop-shadow-6)',
                strokeWidth: 0,
              }}
            />
            <path
              d="M1190.09 103.62a1.13 1.13 0 0 0-1.35.69c-1.49 3.85-1.98 8.01-4.16 11.24-8.85 13.14-21.93 19.64-39.21 19.49-16.21-.14-36.04-5.2-44.94-19.36a1.4 1.4 0 0 0-.23-.29c-.08-.09-.17-.15-.27-.21h-.02c-.05-.06-.12-.09-.19-.12-.03-.02-.05-.02-.09-.02-.19-.06-.4-.09-.61-.07-.07 0-.14.01-.23.04-.12.03-.25.08-.38.16-.27.18-.5.42-.62.73-1.4 3.38-2.66 6.8-5.07 9.6-17.1 19.77-46.29 26.78-71.27 23.21-26.4-3.76-42.67-18.34-48.82-43.71a.661.661 0 0 0-.63-.52h-.18c-.02 0-.05.01-.07.03-.09.03-.16.08-.24.15-5.8 5.52-12.4 9.13-19.83 10.84-24.82 5.75-60.97-12.34-64.9-39.49-.97-6.76-.47-13.46 1.52-20.11.1-.33.05-.68-.15-.94-.11-.18-.3-.33-.53-.41-.02-.02-.05-.04-.07-.04-.19-.06-.4-.05-.62 0-15.95 4.37-35.98 1.33-45.92-13.08-13.56-19.65-4.45-42.43 16.88-52.27 8.06-3.23 16.71-4.79 25.95-4.65.63 0 1.04-.3 1.19-.91 5.19-19.54 17.71-31.19 37.61-34.92 14.61-2.75 27.28.79 38.03 10.64.1.08.2.15.32.19.02.02.03.02.07.02.1.04.21.08.31.09s.19 0 .28-.02c.09-.01.16-.03.23-.08.05 0 .12-.03.18-.08.09-.05.18-.13.27-.22.07-.08.15-.2.19-.31 3.16-7.07 7.44-13.42 12.82-19.06 27.84-29.11 68.5-39.1 105.79-23.72 23.17 9.54 38.75 27.25 46.7 53.1 1.13 3.61 1.67 7.15 1.68 10.63 0 .11.02.21.05.32.01.11.06.21.13.31.05.11.11.2.2.27.08.11.18.18.3.24.09.04.17.08.28.12.1.02.21.05.31.05H1130.87c.05 0 .09-.01.14-.03.18 0 .34-.05.48-.13 16.44-9.22 32.04-9.33 46.83-.34 10.89 6.6 17.91 16.77 18.2 29.43.03 1.14.6 1.66 1.74 1.54 30.75-3.17 57.81 12.87 61.99 45.03 1.69 43.02-34.42 56.41-70.19 46.93Z"
              style={{
                fill: 'url(#linear-gradient-15)',
                filter: 'url(#drop-shadow-7)',
                strokeWidth: 0,
              }}
            />
          </g>
          <g id="group_c">
            <g
              style={{
                filter: 'url(#drop-shadow-8)',
              }}
            >
              <path
                d="M436.86 609.22c-17.01-35.28-33.24-68.96-35.93-93.33 2.35 2.7 6.46 4.19 10.46 5.64 1.87.68 3.8 1.38 5.49 2.18.4.19.84.25 1.26.2.49-.06 2.2.26 2.64.69 2.43 2.38 5.38 3.45 8.52 3.08.63-.07 1.27-.21 1.92-.41 6.1-1.91 11.46-7.05 15.52-14.84 6.22-11.95 7.97-27.58 4.37-38.89-1.3-4.17-4.15-11.31-7.04-14.55-14.27-15.99-38.43-23.77-56.32-27.38-22.96-4.63-45.1-4.62-57.07-3.19-1.27.15-2.49.32-3.62.51-20.24 3.37-41.48 14.84-63.14 34.08-19.09 16.96-38.09 39.53-56.5 67.08-23.71 35.5-44.85 77-59.51 116.86-14.14 38.43-20.07 69.85-16.25 86.19 5.99 25.65 16.05 48.41 29.89 67.63 12.89 17.89 29.03 32.71 47.98 44.04 17.76 10.62 37.71 18.03 59.3 22.04 20.62 3.83 42.13 4.45 63.95 1.86 25.78-3.06 51.48-10.72 74.32-22.15 23.83-11.92 44.02-27.4 60.03-46.02 39.69-46.15 2.52-123.27-30.28-191.31Z"
                className="cls-52"
              />
              <path
                d="M442.35 460.51c-22.62-8.42-39.31 19.22-43.38 40.38-12.17 63.36 130.43 223.7 66.41 298.14-85.42 99.32-291.95 102.89-331.47-66.42-12.83-54.97 90.27-284.22 193.54-301.41 24.27-4.04 88.98-.17 114.89 29.31Z"
                style={{
                  fill: 'url(#linear-gradient-16)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M414.36 472.91c7.84-9.22 16.45-13.49 25.16-10.44 4.98 1.02 7.58 5.89 9.4 11.75 5.66 17.79-3 46.01-18.38 50.84-7.96 2.41-13.67-7.28-12.66-17.47 2.86 1.41 5.7 2.53 8.47 4.1 3.29 2 7.02-.12 9.67-3.98 5.56-8 5.11-22.43-1.96-25.1-6.58-3.25-13.16-6.31-19.71-9.7Z"
                style={{
                  fill: 'url(#linear-gradient-17)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M417.89 521.62c-6.27-2.96-14.73-4.31-16.33-9.18-1.74-5.27-.34-12.83 1.28-18.11 2.11-6.92 5.31-13 9.2-18.42.56-.79.98-.97 1.66-.63 5.07 2.65 10.28 4.84 15.31 7.62-11.64 5.52-16.39 26.22-11.11 38.72Z"
                style={{
                  fill: 'url(#linear-gradient-18)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M420 496.79c2.51-5.9 5.7-10.32 10.44-11.38 3.72-.83 6.28 1.63 7.12 6.53 1 5.83-1.07 12.78-4.78 16.03-3.67 3.23-7.25 1.16-7.08-4.5.09-3.13-.68-4.36-2.56-4.89-.96-.27-1.82-.95-2.73-1.45-.12-.07-.23-.19-.42-.34Z"
                style={{
                  fill: 'url(#linear-gradient-19)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M423.84 507.86c-1.82-.89-3.66-1.77-5.48-2.71-.16-.08-.32-.56-.27-.82.32-1.65.7-3.3 1.09-5.12 1.5.7 2.92 1.34 4.32 2.05.2.1.4.53.4.86.01 1.84-.03 3.7-.06 5.73Z"
                style={{
                  fill: 'url(#linear-gradient-20)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <g
              style={{
                filter: 'url(#drop-shadow-9)',
              }}
            >
              <path
                d="M1401.51 499.85c-3.93-.88-7.92-1.62-11.93-2.13-14.12-1.76-28.3-2.25-42.51-2.07-14.62.2-29.18 1.14-43.62 3.45-8.54 1.37-17.06 2.97-25.49 4.91-8.05 1.85-15.98 4.25-23.93 6.47-2.77.77-5.47 1.75-8.24 2.64-.44-.92-.84-1.78-1.25-2.61-4.28-8.68-10.08-16.27-16.46-23.49-9.15-10.32-19.97-18.18-33.15-22.52-2.75-.91-5.67-1.44-8.55-1.74-2.78-.28-4.97 1.78-4.79 4.06.06.81.18 1.64.44 2.4 2.46 7.27 3.97 14.78 5.42 22.3 1.57 8.16 2.62 16.4 2.94 24.72.26 6.63.05 13.23-1.57 19.72-.78 3.09-1.91 5.89-4.96 7.42-.15.08-.27.21-.42.32-13.18 10.03-25.97 20.55-38.58 31.31-14.58 12.46-30.86 22.47-47.33 32.17-.32.18-.97.08-1.33-.13-1.47-.88-2.85-1.94-4.35-2.77-2.97-1.65-6.14-2.74-9.62-2.44-2.84.25-3.39.96-3.2 3.79.22 3.43.39 6.86.56 10.29.03.82-.31 1.37-1.12 1.8-15.81 8.15-31.98 15.48-48.85 21.2-1.03.36-1.5.11-2.15-.64-2.79-3.27-5.56-6.57-8.52-9.68-13.75-14.44-29.34-26.44-47.39-35.1-4.9-2.35-9.9-4.43-15.26-5.51-2.16-.42-4.3-.34-6.34.54-2.16.94-2.57 2.57-1.16 4.44.39.52.79 1.02 1.21 1.51 6.87 8.39 13.79 16.74 20.61 25.16 7.53 9.3 14.12 19.18 18.96 30.16 1.8 4.09 3.59 8.17 3.87 12.76.62 9.9.18 19.77-1.06 29.59-1.14 8.97-2.62 17.86-5.52 26.47-.8 2.36-1.5 4.76-2.15 7.17-.26.94-.35 2 .56 2.74.91.74 1.87.37 2.8 0 2.62-1.07 4.69-2.87 6.6-4.88 5.54-5.8 9.89-12.48 13.8-19.43 7.47-13.34 12.89-27.57 17.9-41.96.4-1.13.89-1.46 2.08-1.48 7.74-.15 15.49-.38 23.24-.6 2.35-.08 4.7-.24 7.05-.37 1.01 4.22 1.19 8.22-.6 12.15-.19.41-.24 1.19 0 1.4.33.28 1.03.34 1.49.19 1.06-.32 2.09-.79 3.1-1.26 6.52-3.06 12.21-7.08 15.79-13.57.17-.32.71-.57 1.1-.62 9.01-1.15 18.04-2.25 27.05-3.39 1.48-.18 2.95-.45 4.61-.71-.15 7.49-1.68 14.23-6 20.17-.36.49-.4 1.2-.58 1.8.62.14 1.29.47 1.88.39 3.92-.52 7.61-1.81 11.11-3.63 9.3-4.81 15.63-12.37 19.93-21.76.31-.68.58-1.18 1.47-1.36 9.91-2.02 19.81-4.12 29.72-6.2 1.14-.24 2.27-.54 3.64-.86-.68 1.9-1.25 3.56-1.88 5.21-6.93 18.15-17.45 34.21-28.87 49.76-2.42 3.3-4.79 6.62-7.15 9.98-.6.86-1.5 2-.57 2.89.58.55 1.97.73 2.82.47 3-.9 6.03-1.82 8.84-3.14 10.88-5.13 20.76-11.85 30.13-19.34 19.37-15.49 35.18-33.97 46.7-56.02.23-.42.76-.82 1.22-.97 11.64-3.57 23.29-7.09 34.94-10.68 1.12-.34 1.85-.2 2.73.62 13.39 12.86 24.73 27.37 34.77 42.92 2.41 3.72 4.77 7.47 7.2 11.17.56.87 1.33 1.96 2.42 1.56.8-.3 1.61-1.32 1.89-2.18.71-2.2 1.33-4.47 1.61-6.76 2.1-16.82-.69-32.91-7.76-48.25-1.9-4.12-4.2-8.07-6.36-12.18.23-.11.62-.29 1-.45 10.33-4.45 20.34-9.51 29.95-15.36 8.65-5.28 16.99-11 24.01-18.38 3.14-3.29 5.91-6.85 7.22-11.32.14-.46.29-.94.23-1.39-.27-1.77-.66-3.5-.9-5.27-.19-1.4-.28-1.5-1.58-.86-1.52.74-3.04 1.5-4.68 2.3-.16-.66-.28-1.13-.41-1.67 4.95-1.78 9.67-3.71 13.97-6.55.16-.1.52-.11.66 0 .78.56 1.35.19 1.96-.29 4.52-3.5 9.12-6.91 13.56-10.53 6.43-5.22 12.51-10.81 17.08-17.83 3.08-4.75 5.83-9.65 7.26-15.18.85-3.3.37-4.25-2.93-4.99Zm-443.5 96.45c.1-.11.19-.23.28-.34 1.16.97 2.31 1.95 3.58 3.02-1.08.32-3.48-1.51-3.87-2.68Zm234.72-112.46c.14-.06.3-.11.45-.17.35 1.15.7 2.32 1.12 3.7-1.05-.47-1.72-2.27-1.57-3.53Zm155.26 29.61c-.93.18-1.67-.42-1.79-1.4-.11-.89.43-1.61 1.31-1.74.9-.13 1.77.51 1.83 1.39.06.95-.41 1.57-1.35 1.75Z"
                className="cls-44"
              />
              <path
                d="M1399.83 501.44c-6.82-1.18-13.68-2.18-20.56-2.81-13.44-1.24-26.92-1.52-40.38-.79-9.8.52-19.61 1.18-29.34 2.4-9.18 1.14-18.3 2.85-27.36 4.77-7.91 1.68-15.74 3.82-23.5 6.09-6.44 1.88-12.74 4.24-19.1 6.4-.81.28-1.55.28-1.64-.72-.04-.38.45-1.01.84-1.18 1.6-.71 3.26-1.27 4.96-1.92-.16-.39-.26-.67-.38-.93-4.04-8.8-9.79-16.44-16.14-23.69-7.87-9.02-17.03-16.31-28.15-20.95-3.89-1.62-7.84-3.14-12.11-3.43-2.88-.2-3.83 1.09-2.92 3.78 2.5 7.35 4.18 14.92 5.43 22.56 1.24 7.46 2.17 14.99 2.84 22.52.71 8.04.45 16.07-1.78 23.93-.06.18-.07.38-.15.86.66-.44 1.1-.74 1.55-1.04 3.26-2.17 6.51-4.34 9.76-6.51.62-.41 1.27-.47 1.68.23.4.69.07 1.19-.6 1.58-1.22.72-2.43 1.46-3.6 2.25-12.03 8.13-23.41 17.11-34.64 26.28-7.73 6.31-15.18 12.97-22.98 19.2-11.7 9.36-24.32 17.46-37.18 25.13-24.55 14.64-50 27.43-77.27 36.32-2.37.77-4.76 1.51-7.18 2.14-.44.11-1.04-.39-1.57-.6.3-.45.56-.95.94-1.31.22-.21.63-.21.97-.3 1.93-.59 3.84-1.18 5.94-1.81-.5-.62-.89-1.11-1.3-1.6a171.999 171.999 0 0 0-19.69-20.07c-11.68-10.08-24.31-18.68-38.57-24.71-3.67-1.55-7.56-2.58-11.41-3.64-1.73-.48-3.58-.27-5.23 1.01.36.47.64.89.96 1.28 6.8 8.28 13.65 16.52 20.4 24.84 7.52 9.28 14.25 19.07 19.32 29.95 2.7 5.8 4.92 11.67 5.09 18.23.28 11.38-.49 22.67-2.23 33.91a139.82 139.82 0 0 1-6.23 24.86c-.27.78-.4 1.62-.68 2.8.94-.46 1.62-.66 2.12-1.06 1.69-1.38 3.48-2.69 4.97-4.28 4.96-5.27 8.88-11.31 12.46-17.55 6.29-10.97 10.99-22.67 15.4-34.5 1.07-2.85 2.07-5.73 3.14-8.7-2.05-.06-3.94-.06-5.82-.24-.49-.04-1.26-.59-1.32-.99-.15-.88.64-1.08 1.39-1.06.22 0 .43 0 .65.02 4.43.05 8.87.29 13.29.12 11.45-.43 22.9-.82 34.31-1.68 10.64-.8 21.26-2.06 31.86-3.32 6.76-.8 13.47-1.96 20.19-2.96.79-.12 1.58-.09 1.72.86.12.91-.61 1.1-1.35 1.2-2.08.31-4.14.65-6.25.98-.04 7.22-1.49 13.93-5.34 20.17.41-.07.58-.08.73-.12 5.87-1.37 11.01-4.17 15.54-8.08 5.24-4.54 9.01-10.15 11.73-16.48.38-.85.83-1.38 1.83-1.54 2.64-.41 5.27-.87 7.89-1.43 8.2-1.78 16.38-3.69 24.61-5.35 2.25-.45 3.34-1.46 3.64-3.65.21-1.49.69-2.95 1.1-4.65-22.79 5.9-45.52 10.49-68.44 14.32-14.39 2.42-66.94 9.01-69.19 7.57.57-.13.94-.27 1.33-.3 3.85-.32 7.73-.57 11.59-.93 17.2-1.61 34.36-3.58 51.4-6.42 13.64-2.28 27.24-4.74 40.79-7.48 10.54-2.14 20.96-4.86 31.46-7.28.99-.23 1.42-.74 1.54-1.72.22-1.92.48-3.83.87-5.72.09-.43.75-.74 1.14-1.1.3.44.62.87.9 1.33.06.12 0 .34-.04.51-1.13 5.29-1.97 10.67-3.48 15.84-3.85 13.24-10.05 25.45-17.54 36.96-6.12 9.41-12.79 18.47-19.23 27.68-.64.93-1.28 1.87-1.91 2.81.1.14.2.27.3.42 2.43-.94 4.93-1.72 7.28-2.83 15.38-7.3 28.88-17.33 41.37-28.78 7.93-7.27 14.97-15.35 21.42-23.94 6.3-8.37 11.95-17.17 16.08-26.86 1.54-3.64 2.93-7.36 3.24-11.36.32-4-1.54-6.92-4.98-7.9-.78-.22-1.99-.16-1.66-1.43.34-1.31 1.45-.73 2.28-.6.34.06.65.2.98.34 3.73 1.51 5.8 5.09 5.49 9.61-.29 4.32-1.81 8.29-3.42 12.24-.17.42-.34.84-.54 1.35.51-.08.86-.09 1.18-.19 3.51-1.03 7.03-2.07 10.53-3.11 15.89-4.71 31.67-9.79 47.21-15.56 17.81-6.63 34.8-14.88 50.49-25.64 6.52-4.46 12.7-9.33 17.68-15.55 1.75-2.19 3.26-4.53 4.05-7.39-.08-.04-.17-.07-.26-.11-.4-2.31-.75-4.36-1.17-6.75-2.25 1.38-4.17 2.54-6.36 3.86-.58-1.96-1.09-3.7-1.7-5.77-1.93 1.53-3.59 2.84-5.43 4.3-.67-.12-1.36-.23-2.03-.35-.51-1.27-.98-2.46-1.53-3.85-1.2 1.11-2.28 2.13-3.49 3.26-.64-.06-1.29-.11-1.95-.15-.47-.82-.89-1.56-1.36-2.39-.69.8-1.3 1.49-1.96 2.25-.64-.02-1.27-.03-1.9-.03-.25-.43-.48-.85-.74-1.3-.41.47-.77.88-1.15 1.31-.5 0-1 .02-1.5.04-.27-.54-.52-1.02-.8-1.58-.54.58-1.03 1.1-1.58 1.69-.47.02-.94.05-1.41.08-2.38.17-4.54.78-6.56 2.01-1.54.93-3.16 1.75-4.74 2.63-.66.37-1.36.82-1.9-.06-.55-.93.14-1.41.87-1.79.22-.12.44-.26.67-.39 4.42-2.22 8.75-4.61 13.27-6.62 10.01-4.46 20.33-7.83 31.42-8.2 4.56-.16 9.04.18 13.11 2.61.29.16.97-.08 1.31-.34 2.83-2.1 5.67-4.2 8.42-6.41 6.12-4.9 12.18-9.86 17.19-15.95.32-.39.71-.7 1.07-1.05-.89-.35-1.44-.42-1.99-.43-12.63-.5-25.1.72-37.49 3.18-14.05 2.79-27.57 7.19-40.59 13.08a188.84 188.84 0 0 0-27.58 15.39c-.42.28-.92.48-1.38.71-.08-.14-.17-.29-.24-.44.3-.25.58-.55.91-.78 21.34-14.34 44.61-24.11 69.86-28.99 12.64-2.45 25.4-3.62 38.3-2.89.38.02.95-.2 1.16-.5 3.38-4.7 6.32-9.66 8.01-15.24 1.09-3.6 1.19-3.32-2.25-3.92Zm-207.07-17.78c.15-.06.31-.11.45-.17.36 1.15.7 2.32 1.13 3.7-1.05-.47-1.72-2.27-1.58-3.53Zm5.15 42.85c-.12 0-.25.02-.38.03-.1-6.2.12-12.44-.43-18.61-.53-6.16-1.83-12.26-2.79-18.39.21-.01.42-.02.63-.04 2.96 12.19 4.19 24.51 2.97 37.01Zm-239.87 69.6.28-.34c1.16.97 2.3 1.95 3.57 3.02-1.08.32-3.47-1.52-3.86-2.68Zm5.19 4.82c.19-.15.4-.3.59-.45 12.6 11.58 23.76 24.32 31.71 39.65 1.78 3.44 3.43 6.95 4.46 10.67-.12.06-.25.13-.37.19-.14-.14-.35-.24-.41-.4-7.31-19.9-20.87-35.34-35.98-49.66Zm35.38 107.76c.54-1.26.97-2.59 2.35-3.2-.59 1.23-.93 2.64-2.35 3.2Zm18.71-40.59c-1.58 6.35-3.61 12.56-6.35 18.49-2.6 5.6-5.52 11.07-8.31 16.59-.18.36-.45.68-.67 1.02a2.3 2.3 0 0 0-.34-.12c-.03-.19-.16-.44-.08-.58 6.69-11.61 12.07-23.76 15.3-36.82.18.05.36.08.55.12-.03.43 0 .88-.1 1.3Zm99.03.17c-.11-.17-.23-.33-.34-.5.66-.46 1.33-.93 1.98-1.39.13.2.25.4.38.58-.67.44-1.35.88-2.02 1.31Zm13.26-16.56c.16.04.32.09.48.13-.06.4-.03.84-.18 1.22-1.37 3.24-3.38 6.09-5.78 8.64-1.23 1.33-2.58 2.52-3.9 3.76-.28.27-.63.48-.96.72-.17-.15-.33-.3-.51-.44 4.54-3.98 8.61-8.31 10.84-14.02Zm-100.5 3.75c.75-1.05 5.09-1.32 6.15-.4l-6.15.4Zm169.21-111.17c-2.38 1.44-4.48 2.72-6.81 4.14.33-1.44 5.46-4.55 6.81-4.14Zm-43.47 32.36c-1.8 1.67-3.51 3.43-5.3 5.1-.29.27-.75.39-1.12.58.18-.38.26-.84.53-1.11 7.15-7.24 14.82-13.88 22.95-19.97 5.19-3.89 10.56-7.54 15.86-11.29.37-.27.83-.43 1.24-.64.1.13.18.25.28.39-.37.32-.72.68-1.14.95-11.77 7.8-22.96 16.36-33.32 25.99Zm12.34 108.32c.11-1.29 2.44-3.09 3.39-3.09.07.11.14.23.22.34-1.2.92-2.41 1.84-3.6 2.75Zm50.11-65.2c-.48 2.82-.74 5.74-1.63 8.44-2.8 8.49-7.64 15.87-13.11 22.85-8.69 11.1-18.99 20.62-29.83 29.58-.26.22-.59.32-.88.49-.1-.15-.2-.3-.31-.43.46-.42.89-.86 1.36-1.25 9.55-7.94 18.65-16.34 26.61-25.92 6.36-7.64 11.91-15.81 15.31-25.26 1.04-2.89 1.75-5.84 1.68-8.95-.01-.22 0-.43.04-.64.01-.07.1-.12.43-.49.15.66.39 1.15.31 1.57Zm98.71-32.98c-1.93 1.08-3.58 2-5.44 3.04.26-1.3 4.02-3.44 5.44-3.04Zm-33.31-31.46c-1.61 1.16-3.04 2.19-4.48 3.22-.08-.12-.17-.25-.25-.36.53-1.16 3.53-3.16 4.73-2.86Zm-22.23 11.94c2.99-8.24 5.96-16.49 8.94-24.74.03-.07.12-.12.35-.35-.2 1.11-.35 2.03-.52 2.94-1.42 7.29-2.82 14.59-4.29 21.88-.23 1.15-.1 2.15.33 3.23 2.41 6.06 4.78 12.15 6.99 18.33-.79-1.13-1.6-2.24-2.34-3.39-2.98-4.62-5.95-9.25-8.94-13.87-.82-1.27-1.06-2.56-.51-4.03Zm-11.4 6.23c2.49-7.44 5.08-14.85 7.64-22.27.16.05.31.1.47.14l-2.07 10.7c-.69 3.58-1.43 7.16-2.06 10.75-.12.67-.04 1.47.2 2.1 2.03 5.29 4.11 10.55 5.99 15.96-1.07-1.54-2.19-3.04-3.2-4.62-2.21-3.42-4.42-6.86-6.51-10.35-.41-.67-.67-1.72-.44-2.41Zm-10.19 4.87c2.01-6.07 4.14-12.1 6.23-18.15.14.04.28.09.4.13-.39 2.09-.78 4.19-1.19 6.28-.7 3.63-1.46 7.24-2.09 10.88-.14.83-.05 1.81.24 2.59 1.42 3.83 2.95 7.61 4.44 11.42.1.25.14.53.21.79-.06.03-.13.06-.19.11-.85-1.23-1.73-2.43-2.54-3.68-1.75-2.71-3.49-5.42-5.13-8.19-.37-.61-.6-1.55-.4-2.18Zm68.9 12.24c-1.8 3.68-61.85 26.66-65.52 24.91 22.69-6.72 44.61-14.5 65.52-24.91Zm36.42-76.88c-.38-2.59 1.31-4.9 3.91-5.31 2.64-.41 5.02 1.33 5.4 3.96.38 2.57-1.35 4.92-3.92 5.32s-4.99-1.33-5.39-3.97Zm11.81 3.87c-1.57 2.44-4.83 4.25-6.5 3.25 5.08-1.24 7.32-4.42 7.01-9.44 1.24.86.88 4.05-.51 6.19Zm34.73-5.25c-.65.68-1.58 1.08-2.07 1.4-1.49.04-2.62.15-3.04-1.1-.42-1.2.31-2.06 1.28-2.5.86-.38 1.89-.63 2.81-.56 1.47.12 2.04 1.67 1.02 2.76Z"
                style={{
                  fill: 'url(#Red_Orange-5)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1292.89 608.42c-6.83 2.55-13.52 5.05-20.28 7.58 1.52 1.32 3.01 2.54 4.41 3.86 1.41 1.33 2.77 2.71 4.08 4.14 1.34 1.46 2.63 2.96 3.88 4.5 3.08 3.78 3.07 3.79 2.92 4.91-.38-.4-.67-.67-.91-.98-.59-.74-1.14-1.51-1.72-2.25-3.84-4.83-7.93-9.41-12.89-13.15-.35-.27-.88-.62-1.22-.53-1.27.32-2.5.81-3.9 1.28.45.41.73.68 1.02.92 5.81 4.9 11.08 10.33 15.92 16.18 4.72 5.71 8.96 11.77 12.64 18.21.23.4.35.87.53 1.3l-.45.21c-.23-.32-.47-.64-.69-.98-2.61-4-5.06-8.1-7.84-11.97-6.08-8.45-13.11-16.06-21.14-22.72-.35-.29-.84-.74-1.17-.67-1.14.24-2.23.68-3.53 1.1 17.17 16.33 30.64 35.18 42.69 55.13.17-.06.33-.12.5-.18.37-1.41.81-2.8 1.09-4.22 1.18-5.95 1.27-11.95.89-17.98-.97-15.45-5.82-29.61-14.06-42.66-.24-.38-.53-.74-.73-1.03Zm5.23 47.19c.9 1.39 1.65 2.46 1.96 4.01-1.16-.62-2.21-2.66-1.96-4.01Z"
                style={{
                  fill: 'url(#Red_Orange-6)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1072.99 659.68c-1.48 1.87-3.3 3.48-5.01 5.17-.25.25-.7.31-1.05.46-.04-.08-.07-.17-.11-.25 2.01-2.05 4.02-4.1 6.2-6.33-1.67-.27-2.61.02-3.31 1.22-.46.79-1.25 1.4-1.94 2.05-.18.17-.52.18-.79.26-.05-.09-.1-.18-.15-.28.87-.98 1.74-1.96 2.81-3.17-3.12.25-5.84.46-8.7.69.82 3.77 1 7.36 0 11.16 6.31-2.88 11.65-6.43 15.27-12.29-1.48-.24-2.32.2-3.2 1.3Z"
                style={{
                  fill: 'url(#Red_Orange-7)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1091.27 608.99c-1.59-.85-3.2-1.64-4.8-2.48-.31-.16-.57-.43-.85-.65.09-.12.18-.25.26-.37 2.32.66 4.47 1.69 6.35 3.21.94.76 1.62.75 2.55-.23-3.16-2.26-6.38-4.19-10.27-4.65-.76-.09-1.54-.07-2.31-.04-.83.04-1.19.44-1.1 1.34.33 3.49.6 6.99.9 10.59 3.4-1.86 6.88-3.76 10.52-5.76-.53-.41-.86-.75-1.26-.96Zm-6.55-3.09-2.02-.48c.04-.19.07-.38.11-.57l2.06.33c-.05.24-.09.48-.14.71Z"
                style={{
                  fill: 'url(#Red_Orange-8)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="m-407.58 807.79 27.68-22.18c27.68-22.18 83.04-66.53 146.54-42.54 63.44 23.52 135.15 116.54 197.12 127.72 62.05 11.88 114.37-58.09 170.52-95.8 56.1-38.18 115.89-45.28 177.9-33.75 62.01 11.53 126.24 41.68 186.77 40.75 60.58-.46 117.33-33.17 177.17-39.92 59.75-7.45 122.6 11.06 183.82 15.96 61.28 5.36 121.07-1.74 176.43-46.09 55.36-44.35 106.29-125.96 163.87-151.69 57.58-25.73 121.81 4.43 185.3 28.41 63.44 23.52 126.28 42.03 184.55 22.13 58.27-19.9 112.25-75.9 170.52-95.8 58.27-19.9 121.11-1.39 184.55 22.13 63.49 23.98 127.72 54.14 190.47 71.84 62.8 18.16 123.98 22.71 154.67 25.79l30.63 2.62 4.43 37.25-29.9 3.55-149.49 17.75-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-179.38 21.3-149.49 17.75-29.9 3.55-22.17-186.27Z"
              style={{
                fill: 'url(#linear-gradient-21)',
                filter: 'url(#drop-shadow-10)',
                strokeWidth: 0,
              }}
            />
            <path
              d="M259.71 259.34c-.51-.05-.97.29-1.09.81-.74 3.6-.55 7.32-1.98 10.48-5.82 12.84-16.34 20.49-31.53 22.92-14.25 2.27-32.41.78-42.32-10.34a.862.862 0 0 0-.25-.22.776.776 0 0 0-.27-.14h-.02a.4.4 0 0 0-.18-.07.11.11 0 0 0-.08 0 1.29 1.29 0 0 0-.55.03c-.06 0-.12.03-.2.07-.11.04-.21.1-.31.19-.21.2-.37.44-.43.73-.73 3.17-1.32 6.36-3.02 9.18-12.07 19.89-36.66 30.36-59.12 30.93-23.73.61-40.18-9.78-49.34-31.14-.09-.26-.36-.4-.63-.37-.06 0-.11.01-.15.03-.02 0-.04.02-.06.04-.07.04-.13.09-.19.16-4.27 5.7-9.53 9.85-15.79 12.45-20.94 8.72-55.35-1.8-62.83-25.05-1.86-5.79-2.41-11.74-1.65-17.88.04-.3-.06-.61-.27-.8a.887.887 0 0 0-.52-.28c-.02-.01-.05-.03-.07-.02a.873.873 0 0 0-.54.1c-13.35 6.2-31.38 6.5-42.25-4.68-14.82-15.24-10.2-36.59 7.06-48.38 6.6-4.03 13.96-6.68 22.09-7.93.56-.1.86-.42.91-.97 1.65-17.92 10.92-30 27.83-36.22 12.41-4.58 24.07-3.35 34.96 3.71.1.05.2.1.31.12.02.01.03.01.06 0 .1.02.19.04.29.03s.17-.04.25-.06c.08-.02.14-.05.19-.1.05 0 .11-.04.15-.1.07-.06.14-.14.21-.23.05-.08.1-.2.12-.3 1.73-6.68 4.54-12.88 8.42-18.63 20.11-29.67 54.32-44.47 89.34-36.49 21.76 4.94 38.06 18.18 48.88 39.7 1.52 3 2.53 6.03 3.05 9.08.01.09.05.18.1.27.03.09.08.18.16.25a.7.7 0 0 0 .21.21c.09.08.19.13.3.17.08.02.16.04.26.06H189.58c.05 0 .08-.02.12-.05.15-.03.29-.1.4-.19 13.06-10.52 26.74-12.94 41.05-7.24 10.54 4.18 18.21 12.07 20.34 23.14.2 1 .78 1.37 1.75 1.1 26.52-7.34 52.66 2.74 61.1 30.34 7.87 37.51-21.84 54.61-54.64 51.59Z"
              style={{
                fill: 'url(#linear-gradient-22)',
                filter: 'url(#drop-shadow-11)',
                strokeWidth: 0,
              }}
            />
          </g>
          <g id="group_b">
            <path
              d="m-374.76 521.52 33.02-28.22c33.02-28.22 99.05-84.67 165.09-37.57 66.04 46.39 132.07 198.09 198.11 225.78 66.04 28.75 132.07-66.5 198.11-112.89 66.04-47.1 132.07-47.1 198.11-18.87 66.04 28.22 132.07 84.67 198.11 94.02 66.04 10.05 132.07-28.75 198.11-28.22 66.04-.53 132.07 38.28 198.11 56.45 66.04 18.87 132.07 18.87 198.11-37.57 66.04-56.45 132.07-169.34 198.11-197.56 66.04-28.22 132.07 28.22 198.11 75.32 66.04 46.39 132.07 85.2 198.11 65.79 66.04-19.4 132.07-93.49 198.11-112.89 66.04-19.4 132.07 19.4 198.11 65.79 66.04 47.1 132.07 103.54 198.11 141.11 66.04 38.28 132.07 55.92 165.09 65.97l33.02 9.35v56.45H-374.76V521.53Z"
              style={{
                fill: 'url(#linear-gradient-23)',
                filter: 'url(#drop-shadow-12)',
                strokeWidth: 0,
              }}
            />
            <g
              style={{
                filter: 'url(#drop-shadow-13)',
              }}
            >
              <path
                d="M838.77 752.95c-15.72-45.78-30.72-89.48-30.46-119.78 2.5 3.65 7.32 6.08 12.02 8.45 2.2 1.1 4.47 2.25 6.43 3.47.47.29.99.43 1.52.43.61 0 2.67.64 3.14 1.23 2.64 3.28 6.1 5.01 10 5.01.78 0 1.59-.07 2.42-.22 7.76-1.46 15.1-6.98 21.21-15.95 9.37-13.76 13.81-32.69 11.04-47.09-.99-5.31-3.44-14.48-6.51-18.88-15.17-21.7-43.7-34.77-65.12-41.81-27.51-9.03-54.67-12.24-69.58-12.24-1.59 0-3.1.03-4.51.1-25.33 1.19-53.08 12.16-82.48 32.63-25.9 18.03-52.53 42.96-79.14 74.1-34.28 40.11-66.29 87.97-90.11 134.75-22.97 45.11-34.83 82.8-32.54 103.41 3.6 32.36 12.62 61.75 26.81 87.36 13.21 23.84 30.86 44.38 52.45 61.04 20.24 15.62 43.64 27.62 69.56 35.69 24.74 7.7 51.06 11.6 78.21 11.6 32.08 0 64.74-5.66 94.45-16.36 30.98-11.16 58.03-27.22 80.4-47.73 55.46-50.86 21.1-150.93-9.22-239.21Z"
                className="cls-52"
              />
              <path
                d="M867.23 571.23c-26.53-13.63-51.06 17.87-59.13 43.24-24.2 75.99 127.41 293.55 37.97 375.59-119.34 109.46-373.35 83.74-397.12-129.81-7.72-69.34 152.3-335.67 281.56-341.72 30.37-1.42 109.23 12.75 136.73 52.71Z"
                style={{
                  fill: 'url(#linear-gradient-24)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M831.06 582.38c10.97-10.17 22.16-14.16 32.41-9.14 5.96 1.98 8.44 8.34 9.82 15.79 4.35 22.66-10.4 56.04-29.98 59.72-10.12 1.8-15.72-10.93-12.99-23.29 3.3 2.14 6.62 3.94 9.79 6.26 3.75 2.93 8.63.88 12.45-3.48 7.99-9.01 9.55-26.78 1.27-31.09-7.6-4.95-15.23-9.66-22.77-14.77Z"
                style={{
                  fill: 'url(#linear-gradient-25)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M828.28 642.67c-7.26-4.54-17.44-7.44-18.7-13.65-1.36-6.72 1.46-15.8 4.21-22.05 3.6-8.18 8.42-15.18 13.98-21.27.81-.89 1.35-1.04 2.13-.53 5.84 3.99 11.91 7.43 17.67 11.59-15.09 5.08-23.95 29.79-19.29 45.9Z"
                style={{
                  fill: 'url(#linear-gradient-26)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M834.49 612.5c3.94-6.88 8.5-11.84 14.48-12.44 4.68-.47 7.47 2.92 7.78 9.05.37 7.31-3.18 15.52-8.21 18.98-4.98 3.42-9.07.37-8.04-6.56.57-3.82-.2-5.45-2.42-6.38-1.14-.47-2.1-1.43-3.13-2.17-.14-.1-.26-.26-.46-.48Z"
                style={{
                  fill: 'url(#linear-gradient-27)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M837.6 626.65c-2.1-1.36-4.23-2.71-6.33-4.13-.19-.13-.31-.73-.21-1.04.63-1.98 1.34-3.94 2.09-6.12 1.74 1.08 3.39 2.07 5 3.15.23.16.41.71.37 1.11-.25 2.26-.58 4.54-.91 7.03Z"
                style={{
                  fill: 'url(#linear-gradient-28)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <g
              style={{
                filter: 'url(#drop-shadow-14)',
              }}
            >
              <path
                d="M385.47 656.76c-3.37-2.21-6.83-4.32-10.4-6.21-12.58-6.64-25.66-12.12-39.02-16.98-13.74-4.98-27.7-9.25-42.02-12.2-8.48-1.74-17.01-3.26-25.58-4.42-8.19-1.12-16.45-1.68-24.67-2.41-2.86-.26-5.74-.3-8.65-.44-.08-1.02-.15-1.96-.24-2.89-.92-9.63-3.66-18.79-7.07-27.79-4.89-12.89-12.23-24.06-23.02-32.78-2.25-1.82-4.79-3.35-7.38-4.65-2.5-1.25-5.28-.09-5.92 2.1-.23.78-.41 1.6-.44 2.4-.28 7.67-1.53 15.23-2.84 22.77-1.43 8.19-3.36 16.26-6.02 24.15-2.11 6.29-4.64 12.39-8.46 17.89-1.82 2.61-3.87 4.83-7.27 5.19-.17.02-.33.1-.5.15-15.88 4.72-31.57 10.03-47.18 15.63-18.05 6.5-36.83 10.1-55.67 13.34-.36.06-.93-.27-1.2-.59-1.06-1.34-1.97-2.82-3.09-4.13-2.2-2.59-4.77-4.73-8.13-5.68-2.74-.77-3.51-.31-4.34 2.41-1.01 3.29-2.07 6.55-3.13 9.82-.26.78-.77 1.17-1.69 1.29-17.68 2.03-35.4 3.17-53.2 2.54-1.09-.03-1.44-.42-1.78-1.36-1.45-4.04-2.87-8.11-4.54-12.07-7.74-18.36-18.06-35.1-31.87-49.59-3.75-3.93-7.69-7.64-12.32-10.55-1.87-1.16-3.9-1.84-6.12-1.74-2.36.11-3.32 1.49-2.66 3.74.18.62.38 1.23.59 1.84 3.45 10.28 6.96 20.53 10.35 30.82 3.74 11.36 6.4 22.93 7.04 34.91.23 4.46.45 8.91-.91 13.3-2.93 9.48-6.84 18.55-11.49 27.3-4.25 7.98-8.79 15.78-14.54 22.8-1.58 1.92-3.09 3.92-4.55 5.94-.57.79-1.04 1.75-.45 2.77.59 1.01 1.62 1.01 2.62.99 2.83-.07 5.4-1.03 7.9-2.23 7.24-3.47 13.68-8.17 19.79-13.29 11.72-9.83 21.83-21.22 31.62-32.91.78-.92 1.35-1.05 2.47-.65 7.29 2.6 14.62 5.12 21.94 7.66 2.23.76 4.48 1.44 6.73 2.15-.55 4.31-1.8 8.11-4.87 11.15-.32.32-.65 1.03-.5 1.3.21.37.85.68 1.33.71 1.11.08 2.23 0 3.34-.08 7.18-.55 13.92-2.3 19.57-7.1.27-.24.86-.28 1.25-.19 8.84 2.11 17.66 4.28 26.5 6.4 1.44.36 2.92.62 4.56.97-2.8 6.95-6.62 12.71-12.77 16.74-.51.33-.8.98-1.18 1.48.53.35 1.03.9 1.62 1.03 3.85.9 7.76 1 11.68.54 10.4-1.21 19-6.04 26.36-13.3.53-.53.96-.9 1.85-.76 9.99 1.62 19.99 3.16 29.99 4.72 1.15.17 2.32.3 3.71.48-1.31 1.54-2.43 2.89-3.6 4.21-12.92 14.52-28.45 25.82-44.64 36.32-3.43 2.23-6.83 4.5-10.22 6.8-.86.59-2.11 1.34-1.56 2.5.34.72 1.58 1.38 2.47 1.44 3.12.22 6.28.43 9.38.19 11.99-.95 23.61-3.74 35.03-7.43 23.61-7.63 44.95-19.32 63.54-35.86.36-.31 1-.5 1.49-.47 12.15.78 24.3 1.61 36.46 2.37 1.17.08 1.81.47 2.33 1.54 7.96 16.76 13.42 34.34 17.3 52.44.93 4.33 1.82 8.67 2.77 12.99.22 1.01.55 2.3 1.71 2.31.86 0 1.98-.66 2.54-1.37 1.45-1.81 2.82-3.71 3.9-5.75 7.93-14.99 11.03-31.02 9.86-47.87-.32-4.53-1.07-9.03-1.63-13.65.26-.02.68-.06 1.09-.07 11.24-.51 22.39-1.7 33.45-3.77 9.96-1.88 19.79-4.27 28.97-8.7 4.1-1.97 7.96-4.32 10.76-8.03.29-.38.6-.78.71-1.22.38-1.75.63-3.51 1.02-5.25.32-1.37.27-1.5-1.17-1.37-1.68.15-3.37.33-5.19.5.09-.67.14-1.16.2-1.71 5.25.09 10.36-.04 15.38-1.18.18-.04.52.08.62.23.53.8 1.19.66 1.94.43 5.47-1.67 10.98-3.23 16.41-5.05 7.87-2.61 15.53-5.68 22.3-10.63 4.57-3.36 8.88-6.96 12.17-11.63 1.97-2.79 1.85-3.85-.97-5.7Zm-448.95-66.7c.14-.07.26-.14.39-.22.74 1.32 1.47 2.64 2.28 4.09-1.13-.08-2.71-2.65-2.67-3.88Zm259.39-22.13h.48c-.09 1.2-.17 2.42-.27 3.86-.82-.81-.8-2.73-.21-3.86Zm134.69 82.61c-.93-.16-1.41-.99-1.18-1.94.21-.87.98-1.36 1.84-1.17.88.2 1.48 1.1 1.22 1.95-.28.91-.94 1.32-1.88 1.16Z"
                className="cls-44"
              />
              <path
                d="M383.34 657.65c-5.96-3.51-12.02-6.88-18.23-9.9a278.082 278.082 0 0 0-37.48-15.03c-9.35-2.98-18.76-5.83-28.29-8.14-8.99-2.18-18.12-3.81-27.28-5.22-7.99-1.23-16.07-2-24.13-2.62-6.69-.52-13.42-.54-20.13-.77-.85-.02-1.55-.29-1.28-1.26.1-.36.78-.78 1.2-.8 1.75-.1 3.5-.04 5.32-.04-.01-.42 0-.72-.02-1.01-.66-9.66-3.33-18.84-6.69-27.86-4.17-11.22-10.14-21.27-18.9-29.55-3.06-2.89-6.22-5.71-10.11-7.49-2.62-1.21-3.97-.34-4.07 2.5-.27 7.76-1.39 15.43-2.92 23.02-1.49 7.42-3.29 14.78-5.33 22.06-2.19 7.77-5.28 15.19-10.15 21.75-.12.15-.2.33-.44.75.77-.18 1.3-.3 1.82-.42 3.82-.87 7.62-1.76 11.44-2.63.73-.17 1.35 0 1.49.81.13.79-.36 1.13-1.12 1.26-1.39.25-2.79.5-4.17.83-14.13 3.35-27.96 7.72-41.72 12.32-9.47 3.17-18.8 6.76-28.3 9.83-14.27 4.62-28.93 7.73-43.68 10.35-28.15 5.01-56.48 7.96-85.14 6.63-2.49-.11-4.98-.27-7.47-.54-.45-.05-.84-.74-1.25-1.12.44-.31.86-.69 1.34-.9.28-.12.67.03 1.01.06 2.01.13 4.01.26 6.2.41-.25-.76-.44-1.36-.65-1.96-3.07-8.88-6.82-17.47-11.29-25.74-7.35-13.56-16.11-26.07-27.31-36.75-2.88-2.75-6.15-5.09-9.38-7.44-1.45-1.06-3.25-1.52-5.25-.91.17.56.28 1.06.45 1.53 3.42 10.15 6.9 20.28 10.26 30.45 3.74 11.34 6.57 22.88 7.45 34.84.47 6.38.46 12.65-1.71 18.85-3.77 10.75-8.5 21.03-14.11 30.93-4.24 7.47-9.11 14.48-14.64 21.04-.53.64-.95 1.37-1.63 2.37 1.05-.1 1.75-.04 2.36-.24 2.07-.69 4.21-1.29 6.16-2.24 6.51-3.17 12.31-7.43 17.87-12.01 9.77-8.03 18.31-17.31 26.63-26.81 2.01-2.28 3.96-4.62 6.02-7.02-1.89-.78-3.66-1.45-5.36-2.29-.44-.21-.97-.99-.89-1.39.17-.88.98-.79 1.68-.5.2.09.4.16.6.25 4.13 1.61 8.19 3.41 12.39 4.81 10.86 3.65 21.7 7.33 32.68 10.57 10.23 3.02 20.61 5.6 30.97 8.17 6.6 1.64 13.29 2.93 19.93 4.38.78.16 1.51.47 1.3 1.42-.21.89-.96.81-1.69.65-2.05-.44-4.1-.86-6.19-1.29-2.6 6.74-6.33 12.5-12.14 16.98.41.09.57.13.73.15 5.98.8 11.77 0 17.4-2.06 6.51-2.39 12.02-6.3 16.81-11.26.66-.67 1.27-1 2.26-.79 2.62.55 5.24 1.05 7.89 1.45 8.29 1.24 16.63 2.34 24.91 3.7 2.27.38 3.64-.18 4.7-2.13.73-1.32 1.69-2.52 2.68-3.96-23.41-2.54-46.29-6.29-69.08-10.81-14.31-2.83-65.79-15.25-67.39-17.4.58.08.97.08 1.35.19 3.72 1.06 7.43 2.2 11.17 3.23 16.65 4.58 33.4 8.81 50.34 12.18 13.56 2.69 27.16 5.21 40.8 7.43 10.61 1.72 21.33 2.88 32 4.32 1.01.13 1.59-.18 2.05-1.07.89-1.72 1.81-3.42 2.84-5.05.23-.37.96-.43 1.45-.63.12.52.27 1.03.37 1.56.02.14-.12.32-.22.46-2.93 4.54-5.62 9.28-8.87 13.58-8.3 11.02-18.42 20.25-29.51 28.36-9.06 6.64-18.51 12.74-27.8 19.08-.93.64-1.86 1.29-2.79 1.95.04.16.09.33.13.5 2.6-.02 5.22.14 7.81-.07 16.97-1.39 33.16-5.99 48.9-12.27 10-3.99 19.45-9.06 28.52-14.81 8.86-5.6 17.26-11.83 24.56-19.43 2.73-2.86 5.35-5.84 7.06-9.48 1.72-3.63 1.01-7.01-1.86-9.15-.65-.48-1.8-.85-1.05-1.92.78-1.1 1.61-.17 2.35.25.29.17.54.42.8.66 2.95 2.73 3.61 6.81 1.73 10.93-1.8 3.93-4.63 7.11-7.54 10.23-.31.33-.61.66-.98 1.07.51.11.83.22 1.17.24 3.65.28 7.3.55 10.95.82 16.53 1.21 33.09 2.05 49.67 2.15 19 .1 37.82-1.6 56.31-6.12 7.68-1.87 15.19-4.24 22.05-8.29 2.41-1.43 4.65-3.08 6.41-5.48-.06-.07-.14-.13-.2-.2.45-2.3.84-4.34 1.3-6.72-2.59.49-4.8.9-7.32 1.36.15-2.04.29-3.84.45-6-2.35.75-4.36 1.39-6.61 2.1-.59-.35-1.19-.7-1.77-1.04-.02-1.37-.04-2.65-.07-4.14-1.52.62-2.89 1.19-4.42 1.81-.58-.29-1.17-.56-1.77-.83-.15-.93-.28-1.77-.42-2.72-.93.5-1.75.93-2.63 1.41-.59-.24-1.18-.48-1.77-.7-.08-.49-.15-.97-.23-1.48-.55.29-1.03.55-1.54.82-.47-.17-.94-.34-1.42-.49-.06-.6-.13-1.14-.19-1.77-.71.35-1.35.66-2.07 1.02-.44-.15-.9-.29-1.34-.42-2.29-.69-4.52-.88-6.84-.44-1.77.32-3.58.52-5.36.78-.75.11-1.57.29-1.75-.73-.19-1.06.63-1.26 1.45-1.37.25-.04.5-.09.76-.13 4.92-.51 9.82-1.21 14.76-1.5 10.94-.63 21.79-.13 32.29 3.44 4.32 1.46 8.39 3.37 11.33 7.08.21.25.93.27 1.34.15 3.39-.96 6.79-1.92 10.14-3.01 7.46-2.42 14.89-4.91 21.73-8.84.44-.25.91-.4 1.37-.6-.71-.64-1.2-.9-1.71-1.1-11.64-4.94-23.73-8.21-36.19-10.29-14.13-2.36-28.33-3.03-42.6-2.12-10.54.67-20.96 2.23-31.25 4.64-.5.12-1.03.13-1.54.17-.02-.16-.05-.33-.07-.5.37-.13.74-.31 1.13-.4 25.04-5.86 50.26-6.76 75.61-2.4 12.69 2.18 25.04 5.6 36.84 10.85.35.15.96.15 1.27-.05 4.83-3.2 9.34-6.8 12.9-11.42 2.3-2.98 2.29-2.69-.72-4.46ZM196 567.77h.48c-.08 1.2-.17 2.42-.26 3.86-.82-.81-.8-2.73-.23-3.86Zm-10.38 41.9c-.11-.03-.24-.07-.36-.11 2.1-5.84 4.52-11.59 6.2-17.55 1.69-5.95 2.64-12.12 3.91-18.18.2.06.4.13.6.18-1.55 12.45-4.77 24.4-10.35 35.66Zm-249-19.77c.13-.07.26-.14.39-.22.74 1.32 1.46 2.64 2.27 4.09-1.13-.08-2.7-2.64-2.66-3.88Zm3.14 6.34.72-.21c7.67 15.28 13.6 31.14 15.59 48.3.45 3.84.74 7.71.38 11.56-.14.02-.28.03-.42.04-.08-.18-.25-.35-.24-.52.23-21.2-6.98-40.43-16.04-59.16Zm-5.13 113.29c.96-.99 1.82-2.08 3.34-2.16-.99.94-1.8 2.14-3.34 2.16Zm31.89-31.34c-3.73 5.38-7.83 10.47-12.5 15.05-4.42 4.32-9.09 8.4-13.65 12.57-.3.27-.66.48-.99.72-.09-.08-.18-.16-.27-.23.04-.19.01-.47.13-.57 10.38-8.49 19.71-17.95 27.36-29.02.15.11.31.21.47.31-.18.39-.31.83-.56 1.18Zm92.55 35.19c-.05-.2-.09-.39-.14-.59l2.35-.6c.05.23.09.46.14.68-.79.18-1.57.34-2.35.51Zm18.27-10.79c.13.09.27.2.4.29-.2.35-.33.78-.6 1.07-2.43 2.55-5.32 4.49-8.46 6.04-1.62.8-3.31 1.44-4.98 2.14-.36.15-.76.23-1.15.33-.1-.2-.2-.39-.32-.59 5.66-2.12 11-4.73 15.11-9.28Zm-95.31-32.04c1.08-.72 5.23.57 5.9 1.8-2.06-.63-3.84-1.18-5.9-1.8Zm197.67-44.11-7.84 1.46c.82-1.23 6.72-2.32 7.84-1.46Zm-52.13 14.89c-2.27.92-4.5 1.96-6.76 2.9-.37.15-.84.1-1.25.15.3-.29.54-.69.89-.85 9.26-4.24 18.78-7.74 28.55-10.56 6.23-1.8 12.55-3.31 18.84-4.95.44-.12.93-.11 1.39-.16.04.15.08.3.12.47-.46.17-.92.38-1.4.49-13.78 3.13-27.27 7.17-40.37 12.52ZM100.7 747c.56-1.17 3.38-2.03 4.26-1.69.03.13.05.26.08.39-1.45.43-2.9.87-4.35 1.3Zm69.98-43.25c-1.45 2.47-2.73 5.1-4.52 7.31-5.63 6.95-12.77 12.14-20.36 16.73-12.07 7.31-25.07 12.57-38.38 17.11-.32.11-.67.09-1 .14-.04-.17-.08-.35-.14-.51.58-.23 1.14-.49 1.72-.69 11.75-4.04 23.23-8.69 34.07-14.82 8.66-4.9 16.75-10.57 23.28-18.2 2-2.33 3.71-4.84 4.74-7.77.07-.21.16-.4.27-.58.03-.06.14-.08.58-.31-.1.67-.04 1.21-.27 1.58Zm104 4.08c-2.18.32-4.06.6-6.17.92.71-1.13 4.98-1.8 6.17-.92Zm-20-41.2c-1.91.51-3.62.97-5.33 1.43-.04-.14-.07-.29-.11-.43.9-.9 4.42-1.7 5.44-1Zm-25.02 3.3c5.72-6.64 11.42-13.31 17.13-19.97.06-.05.16-.07.45-.2-.58.97-1.04 1.77-1.53 2.56-3.91 6.32-7.81 12.65-11.78 18.95-.63.99-.85 1.98-.83 3.14.11 6.52.16 13.05.04 19.61-.34-1.33-.7-2.66-.99-4-1.15-5.38-2.28-10.76-3.44-16.14-.32-1.47-.08-2.77.95-3.95Zm-12.87 1.8c4.96-6.08 10.02-12.09 15.04-18.12.13.1.25.21.39.3-1.92 3.1-3.82 6.18-5.73 9.27-1.92 3.11-3.87 6.19-5.74 9.32-.35.59-.56 1.36-.56 2.04.02 5.67.1 11.32-.06 17.04-.46-1.82-.97-3.62-1.36-5.45-.85-3.98-1.7-7.97-2.42-11.99-.15-.77-.02-1.85.44-2.41Zm-11.25.95c4.03-4.96 8.16-9.85 12.26-14.76.11.09.23.18.33.27-1.11 1.81-2.22 3.64-3.34 5.45-1.94 3.15-3.93 6.26-5.81 9.44-.43.72-.69 1.67-.69 2.51-.03 4.08.06 8.16.11 12.25.01.27-.06.55-.08.82-.07 0-.15.01-.22.03-.36-1.45-.76-2.89-1.07-4.34-.67-3.15-1.34-6.31-1.89-9.48-.13-.7-.01-1.66.4-2.18Zm60.1 35.82c-2.99 2.81-67.3 3.05-70.11.12 23.6 1.75 46.86 2.22 70.11-.12Zm61.32-59.01c.56-2.56 2.97-4.12 5.54-3.58s4.22 3.02 3.65 5.61c-.55 2.53-3.01 4.12-5.55 3.59s-4.19-3.01-3.63-5.62Zm9.67 7.79c-2.33 1.72-6.02 2.27-7.23.74 5.19.64 8.41-1.54 9.91-6.35.85 1.24-.62 4.09-2.67 5.61Zm34.34 7.38c-.84.41-1.86.45-2.43.58-1.4-.49-2.5-.79-2.45-2.11.03-1.27 1.02-1.82 2.08-1.89.94-.06 1.99.08 2.83.47 1.33.63 1.31 2.29-.02 2.94Z"
                style={{
                  fill: 'url(#Red_Orange-9)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="m245.39 719.87-21.66-.09c.95 1.77 1.92 3.44 2.76 5.17a80.82 80.82 0 0 1 2.35 5.31c.74 1.84 1.4 3.7 2.03 5.58 1.54 4.63 1.52 4.63.99 5.62-.21-.51-.39-.87-.51-1.24-.28-.9-.53-1.82-.81-2.72-1.87-5.88-4.08-11.61-7.39-16.86-.24-.37-.6-.89-.95-.93-1.3-.15-2.62-.13-4.1-.18.28.55.44.89.62 1.22 3.7 6.64 6.7 13.58 9.15 20.76 2.39 7.01 4.21 14.17 5.36 21.5.07.46.02.94.03 1.41l-.5.03c-.1-.38-.21-.77-.3-1.16-1.02-4.66-1.86-9.37-3.09-13.97-2.69-10.06-6.56-19.66-11.72-28.72-.22-.39-.52-.99-.86-1.04-1.15-.18-2.33-.16-3.7-.22 10.27 21.34 16.18 43.74 20.37 66.66.18 0 .35 0 .53.01.84-1.18 1.74-2.33 2.51-3.56 3.21-5.14 5.42-10.72 7.21-16.5 4.57-14.79 5.06-29.75 1.98-44.87-.09-.45-.23-.88-.32-1.22Zm-11.85 45.98c.35 1.62.67 2.89.41 4.44-.87-.99-1.12-3.26-.41-4.44Z"
                style={{
                  fill: 'url(#Red_Orange-10)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M21.58 690.01c-2.05 1.23-4.32 2.09-6.52 3.06-.33.14-.76.05-1.15.06 0-.09 0-.18-.01-.27 2.61-1.21 5.21-2.42 8.04-3.73-1.47-.85-2.45-.9-3.53-.03-.71.58-1.67.87-2.54 1.23-.23.1-.55-.02-.83-.04-.01-.1-.03-.21-.04-.31 1.16-.61 2.32-1.22 3.75-1.97-3-.87-5.63-1.63-8.38-2.43-.57 3.81-1.67 7.24-3.97 10.44 6.92-.47 13.18-1.89 18.63-6.09-1.3-.74-2.24-.64-3.45.09Z"
                style={{
                  fill: 'url(#Red_Orange-11)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M56.64 649.07c-1.18-1.35-2.41-2.67-3.6-4.02-.23-.26-.38-.61-.57-.91.13-.08.25-.17.38-.25 1.93 1.43 3.58 3.17 4.8 5.24.61 1.04 1.25 1.28 2.47.68-2.16-3.23-4.48-6.18-7.95-7.98-.68-.35-1.42-.61-2.15-.85-.79-.26-1.27-.01-1.51.87-.93 3.38-1.92 6.75-2.91 10.22 3.84-.54 7.77-1.09 11.88-1.66-.35-.57-.53-1-.83-1.34Zm-5.03-5.21-1.72-1.16c.1-.16.2-.33.3-.49.6.35 1.2.69 1.81 1.04-.13.21-.26.41-.39.62Z"
                style={{
                  fill: 'url(#Red_Orange-12)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="M1564.75 131.95c-.4 0-.73.3-.77.71-.27 2.83.18 5.68-.67 8.24-3.43 10.37-10.91 17.11-22.41 20.22-10.79 2.91-24.9 3.24-33.44-4.52a.74.74 0 0 0-.21-.15.603.603 0 0 0-.22-.09h-.01s-.1-.04-.15-.04h-.06c-.14 0-.28.01-.42.07-.05.01-.09.03-.15.07-.08.04-.15.1-.22.17-.15.17-.25.37-.27.6-.3 2.5-.5 5.01-1.58 7.31-7.67 16.3-25.75 26.37-43 28.64-18.22 2.4-31.74-4.26-40.54-19.96a.445.445 0 0 0-.51-.23c-.05.01-.08.02-.12.04-.01 0-.03.02-.04.03-.05.04-.09.08-.13.14-2.82 4.74-6.53 8.36-11.15 10.88-15.41 8.42-42.77 3.12-50.43-14.17-1.9-4.31-2.81-8.85-2.73-13.63 0-.24-.09-.46-.27-.6a.764.764 0 0 0-.43-.18c-.01 0-.04-.02-.05-.01-.14 0-.28.04-.41.12-9.78 5.86-23.64 7.56-32.92-.16-12.66-10.53-10.84-27.35 1.48-37.84 4.75-3.64 10.2-6.28 16.36-7.9.42-.12.63-.39.62-.82-.19-13.94 5.96-23.99 18.47-30.16 9.19-4.53 18.26-4.54 27.23 0 .08.03.16.06.25.07h.05c.08 0 .15.01.22 0s.13-.04.18-.07c.06-.03.1-.05.14-.09.04 0 .08-.04.1-.09.05-.05.1-.12.14-.19.03-.07.06-.16.07-.24.79-5.28 2.44-10.29 4.96-15.04 13.07-24.49 38.2-38.67 65.82-35.38 17.16 2.03 30.79 10.9 40.88 26.59 1.42 2.19 2.44 4.44 3.09 6.75.02.07.06.14.1.2.03.07.08.13.14.18.05.06.11.11.18.14.08.06.16.09.25.11.06.01.13.02.21.03.07 0 .15 0 .22-.02h.01l.05-.01c.04 0 .06-.03.09-.05.12-.04.21-.1.29-.18 9.2-9.17 19.54-12.14 31.02-8.92 8.46 2.36 15.01 7.81 17.56 16.16.23.75.71.99 1.44.7 19.83-7.81 40.78-2.18 49.53 18.39 9.12 28.25-12.36 43.83-37.87 44.18Z"
              style={{
                fill: 'url(#linear-gradient-29)',
                filter: 'url(#drop-shadow-15)',
                strokeWidth: 0,
              }}
            />
          </g>
          <g id="group_a">
            <path
              d="m-281.33 585.9 31.83-29.15c31.83-29.15 95.49-87.45 159.16-38.8 63.66 47.91 127.32 204.59 190.99 233.19 63.66 29.69 127.32-68.68 190.99-116.59 63.66-48.64 127.32-48.64 190.99-19.49 63.66 29.15 127.32 87.45 190.99 97.1 63.66 10.38 127.32-29.69 190.99-29.15 63.66-.55 127.32 39.53 190.99 58.3 63.66 19.49 127.32 19.49 190.99-38.8 63.66-58.3 127.32-174.89 190.99-204.04 63.66-29.15 127.32 29.15 190.99 77.79 63.66 47.91 127.32 87.99 190.99 67.95 63.66-20.04 127.32-96.55 190.99-116.59 63.66-20.04 127.32 20.04 190.99 67.95 63.66 48.64 127.32 106.94 190.99 145.74 63.66 39.53 127.32 57.75 159.16 68.13l31.83 9.66v58.3H-281.33V585.92Z"
              style={{
                fill: 'url(#linear-gradient-30)',
                filter: 'url(#drop-shadow-16)',
                strokeWidth: 0,
              }}
            />
            <g
              style={{
                filter: 'url(#drop-shadow-17)',
              }}
            >
              <path
                d="M856.55 662.27c-3.75-1.47-7.57-2.83-11.45-3.95-13.67-3.93-27.61-6.61-41.68-8.63-14.47-2.07-29.01-3.39-43.63-3.35-8.65.03-17.32.29-25.95.9-8.24.58-16.44 1.72-24.64 2.69-2.86.33-5.68.88-8.56 1.33-.29-.98-.55-1.88-.83-2.78-2.88-9.23-7.43-17.64-12.62-25.75-7.43-11.61-16.91-21.05-29.25-27.38-2.58-1.32-5.38-2.3-8.18-3.05-2.7-.71-5.18.99-5.37 3.27-.06.81-.08 1.65.07 2.44 1.3 7.57 1.63 15.22 1.9 22.87.28 8.31.04 16.61-.94 24.87-.78 6.59-2 13.08-4.61 19.24-1.25 2.93-2.8 5.52-6.06 6.56-.16.05-.3.16-.46.25-14.58 7.87-28.84 16.28-42.97 24.96-16.33 10.05-33.97 17.42-51.75 24.45-.35.13-.97-.08-1.29-.33-1.31-1.1-2.51-2.36-3.87-3.41-2.68-2.09-5.64-3.66-9.13-3.9-2.84-.19-3.5.42-3.75 3.25-.31 3.42-.68 6.83-1.05 10.26-.1.82-.52 1.3-1.39 1.6-16.88 5.61-34 10.34-51.55 13.38-1.08.19-1.5-.12-2.03-.97-2.25-3.66-4.47-7.35-6.92-10.88-11.35-16.39-24.88-30.66-41.37-42.02-4.47-3.08-9.09-5.91-14.22-7.8-2.07-.75-4.19-1-6.35-.45-2.28.59-2.94 2.14-1.83 4.21.3.57.63 1.13.96 1.68 5.48 9.35 11.02 18.67 16.45 28.05 5.99 10.35 10.97 21.14 14.05 32.73 1.14 4.32 2.27 8.63 1.84 13.21-.93 9.88-2.89 19.55-5.65 29.07-2.52 8.68-5.37 17.24-9.56 25.29-1.15 2.21-2.22 4.47-3.23 6.75-.4.89-.66 1.93.13 2.8.79.87 1.79.66 2.77.43 2.76-.65 5.07-2.11 7.27-3.8 6.38-4.88 11.71-10.79 16.65-17.06 9.45-12.02 17.01-25.24 24.2-38.68.57-1.05 1.11-1.3 2.28-1.14 7.67 1.05 15.37 2.02 23.05 3 2.34.29 4.68.5 7.03.73.34 4.33-.1 8.31-2.48 11.91-.25.38-.42 1.14-.23 1.38.28.32.97.5 1.44.42 1.1-.15 2.19-.45 3.25-.76 6.92-2.01 13.16-5.1 17.7-10.96.22-.29.79-.45 1.19-.44 9.08.26 18.17.57 27.25.84 1.49.05 2.98.01 4.67.01-1.31 7.37-3.87 13.8-9.06 19-.43.43-.58 1.12-.85 1.69.59.24 1.2.67 1.8.68 3.95.1 7.8-.61 11.54-1.86 9.93-3.31 17.36-9.8 23.07-18.41.41-.62.75-1.08 1.66-1.12 10.11-.46 20.21-1 30.32-1.52 1.16-.06 2.33-.18 3.73-.29-.97 1.78-1.79 3.33-2.66 4.85-9.66 16.85-22.55 31.09-36.25 44.68-2.9 2.88-5.76 5.8-8.61 8.75-.72.75-1.79 1.74-1.01 2.77.49.64 1.83 1.02 2.72.9 3.1-.42 6.24-.86 9.22-1.73 11.54-3.38 22.35-8.49 32.77-14.44 21.54-12.3 40.03-28.11 54.83-48.11.29-.38.87-.69 1.36-.76 12.06-1.72 24.11-3.4 36.17-5.14 1.16-.16 1.86.09 2.6 1.03 11.23 14.78 20.18 30.87 27.69 47.78 1.8 4.05 3.56 8.11 5.38 12.15.42.95 1.01 2.14 2.14 1.92.84-.17 1.8-1.05 2.21-1.86 1.04-2.07 2-4.21 2.64-6.42 4.69-16.29 4.43-32.62-.17-48.87-1.24-4.37-2.9-8.62-4.4-13.02.25-.08.66-.19 1.06-.29 10.89-2.8 21.57-6.24 31.97-10.54 9.36-3.87 18.49-8.23 26.57-14.44 3.61-2.77 6.91-5.85 8.89-10.06.2-.43.43-.88.44-1.33.01-1.79-.11-3.56-.08-5.35.03-1.41-.04-1.53-1.42-1.1-1.62.5-3.23 1.01-4.98 1.55-.05-.68-.1-1.16-.15-1.71 5.16-.99 10.13-2.16 14.82-4.3.17-.08.53-.03.66.1.68.68 1.3.4 1.98.02 5.01-2.76 10.09-5.41 15.03-8.3 7.17-4.16 14.04-8.74 19.64-14.97 3.78-4.22 7.26-8.63 9.52-13.87 1.36-3.13 1.02-4.14-2.12-5.38Zm-453.11 26.59c.12-.1.23-.19.33-.29.99 1.14 1.98 2.28 3.07 3.54-1.12.15-3.2-2.03-3.41-3.25Zm249.34-74.74c.15-.03.31-.06.47-.1.16 1.19.33 2.4.53 3.83-.97-.62-1.35-2.51-1-3.73Zm148.78 53.29c-.95.03-1.58-.68-1.55-1.66.03-.89.68-1.53 1.56-1.52.91.01 1.67.77 1.59 1.66-.09.95-.65 1.49-1.61 1.52Z"
                className="cls-44"
              />
              <path
                d="M854.64 663.58c-6.55-2.22-13.18-4.27-19.88-5.96-13.08-3.3-26.36-5.67-39.77-7.04-9.76-1-19.56-1.87-29.36-2.17-9.24-.29-18.52-.02-27.77.47-8.07.43-16.14 1.33-24.16 2.38-6.66.86-13.24 2.22-19.86 3.37-.84.15-1.57.03-1.51-.97.02-.38.6-.93 1.01-1.03 1.69-.45 3.42-.75 5.19-1.13-.1-.41-.15-.7-.23-.98-2.63-9.32-7.12-17.76-12.26-25.9-6.38-10.13-14.29-18.75-24.56-25.05-3.59-2.21-7.26-4.32-11.43-5.26-2.81-.65-3.95.48-3.47 3.28 1.32 7.65 1.81 15.39 1.86 23.13.06 7.57-.18 15.14-.69 22.69-.55 8.05-2.05 15.95-5.47 23.36-.09.17-.13.37-.28.83.72-.33 1.21-.56 1.69-.79 3.56-1.64 7.1-3.28 10.66-4.92.68-.31 1.32-.27 1.63.48.29.74-.12 1.18-.84 1.46-1.31.53-2.63 1.07-3.91 1.67-13.15 6.17-25.78 13.28-38.3 20.6-8.62 5.04-17.01 10.46-25.69 15.41-13.02 7.44-26.73 13.48-40.63 19.07-26.53 10.67-53.65 19.35-81.98 23.91-2.46.4-4.94.75-7.42 1-.45.04-.97-.55-1.45-.84.37-.4.7-.85 1.13-1.15.25-.17.66-.11 1-.15 1.99-.28 3.98-.57 6.15-.87-.4-.69-.71-1.24-1.03-1.79-4.83-8.06-10.26-15.7-16.33-22.88-9.98-11.76-21.12-22.22-34.26-30.38-3.38-2.1-7.07-3.72-10.71-5.36-1.64-.74-3.49-.82-5.32.18.28.52.5.98.75 1.41 5.43 9.23 10.92 18.44 16.29 27.7 5.99 10.33 11.12 21.05 14.44 32.58 1.77 6.15 3.05 12.29 2.2 18.8-1.49 11.29-4.01 22.32-7.47 33.16a139.57 139.57 0 0 1-10.01 23.59c-.39.73-.65 1.54-1.11 2.66 1-.31 1.7-.4 2.26-.72 1.89-1.1 3.86-2.12 5.57-3.45 5.72-4.43 10.53-9.79 15.03-15.41 7.92-9.86 14.37-20.7 20.57-31.69 1.5-2.65 2.93-5.34 4.45-8.1-2.01-.38-3.88-.67-5.71-1.14-.47-.12-1.15-.77-1.15-1.18-.01-.89.8-.97 1.54-.83.22.04.42.08.64.12 4.37.73 8.72 1.66 13.11 2.17 11.38 1.35 22.75 2.73 34.16 3.66 10.63.86 21.32 1.26 31.99 1.66 6.8.26 13.61.15 20.41.2.8 0 1.57.15 1.56 1.12-.02.91-.78.99-1.52.98-2.1-.01-4.19 0-6.33 0-1.16 7.12-3.63 13.53-8.4 19.1.42 0 .58.01.74 0 6.01-.44 11.52-2.41 16.6-5.57 5.88-3.67 10.47-8.63 14.15-14.46.51-.79 1.03-1.24 2.05-1.24 2.67 0 5.34-.04 8.02-.19 8.37-.48 16.75-1.11 25.14-1.47 2.29-.1 3.52-.93 4.16-3.05.44-1.44 1.14-2.81 1.81-4.42-23.44 2.3-46.6 3.31-69.83 3.55-14.59.16-67.53-1.46-69.53-3.24.58-.04.97-.12 1.36-.09 3.86.28 7.73.64 11.59.87 17.24 1.08 34.5 1.79 51.77 1.61 13.82-.14 27.65-.46 41.46-1.08 10.74-.48 21.46-1.55 32.21-2.32 1.01-.08 1.52-.51 1.79-1.46.52-1.86 1.07-3.71 1.75-5.52.15-.41.85-.61 1.29-.91.23.48.47.96.68 1.45.04.13-.05.33-.12.5-1.94 5.05-3.6 10.23-5.89 15.11-5.86 12.48-13.88 23.59-23.07 33.79-7.51 8.35-15.51 16.26-23.3 24.37-.78.82-1.55 1.65-2.33 2.48.08.15.15.3.23.46 2.54-.55 5.14-.94 7.63-1.67 16.32-4.83 31.23-12.65 45.34-22.02 8.96-5.95 17.17-12.85 24.88-20.33 7.52-7.3 14.47-15.11 20.05-24.04 2.09-3.36 4.04-6.81 4.97-10.72.94-3.91-.45-7.07-3.7-8.58-.73-.33-1.94-.46-1.42-1.67.54-1.24 1.54-.5 2.35-.24.32.11.61.3.92.48 3.45 2.07 4.94 5.93 3.93 10.34-.96 4.22-3.07 7.91-5.28 11.56-.24.39-.46.77-.74 1.25.52 0 .86.04 1.2 0 3.63-.47 7.26-.96 10.88-1.44 16.43-2.2 32.81-4.77 49.06-8.06 18.62-3.79 36.69-9.31 53.86-17.51 7.13-3.4 14-7.25 19.88-12.62 2.07-1.89 3.92-3.97 5.15-6.67l-.24-.15c-.03-2.35-.06-4.42-.11-6.84-2.43 1.01-4.51 1.86-6.88 2.83-.27-2.02-.51-3.82-.79-5.96-2.14 1.22-3.99 2.25-6.03 3.41-.65-.23-1.3-.44-1.95-.66-.3-1.33-.58-2.58-.92-4.04-1.36.91-2.59 1.75-3.95 2.68-.63-.16-1.26-.31-1.91-.45-.33-.88-.64-1.68-.97-2.57-.81.68-1.52 1.27-2.28 1.92-.63-.12-1.25-.23-1.87-.32-.18-.46-.35-.91-.53-1.4-.47.4-.89.75-1.34 1.12-.5-.08-.99-.14-1.49-.19-.18-.57-.36-1.09-.55-1.69-.63.48-1.19.93-1.82 1.42-.46-.05-.94-.1-1.4-.14-2.38-.2-4.6.06-6.79.97-1.67.68-3.39 1.24-5.09 1.86-.71.26-1.48.6-1.86-.36-.4-1 .36-1.37 1.14-1.64.24-.09.47-.19.72-.28 4.71-1.51 9.36-3.2 14.14-4.49 10.58-2.85 21.3-4.58 32.31-3.24 4.53.55 8.9 1.58 12.54 4.61.26.2.97.08 1.35-.13 3.12-1.64 6.25-3.27 9.31-5.03 6.81-3.9 13.57-7.86 19.46-13.1.38-.33.81-.58 1.22-.87-.83-.48-1.36-.63-1.9-.73-12.4-2.45-24.91-3.17-37.53-2.67-14.31.58-28.35 2.83-42.13 6.64a189.323 189.323 0 0 0-29.63 10.93c-.46.22-.98.33-1.48.48-.05-.15-.12-.31-.17-.47.33-.2.66-.45 1.02-.62 23.31-10.86 47.81-16.91 73.52-17.82 12.87-.46 25.66.36 38.28 3.08.38.08.97-.05 1.23-.31 4.07-4.12 7.75-8.57 10.28-13.82 1.64-3.39 1.69-3.1-1.62-4.22Zm-201.8-49.63c.16-.03.32-.06.47-.1.17 1.19.33 2.4.54 3.83-.97-.62-1.35-2.51-1.01-3.73Zm-1.56 43.13-.38-.03c.86-6.15 2.05-12.27 2.47-18.45.43-6.17.1-12.4.1-18.6.2.02.42.04.63.05 1.03 12.51.33 24.86-2.81 37.02Zm-247.77 31.61c.11-.1.23-.19.33-.29.99 1.14 1.97 2.28 3.06 3.54-1.12.15-3.19-2.03-3.39-3.25Zm4.37 5.56.66-.36c10.65 13.39 19.7 27.7 25.17 44.08 1.23 3.67 2.31 7.39 2.75 11.24-.13.04-.27.09-.4.13-.12-.16-.31-.29-.34-.46-4.13-20.79-15.13-38.14-27.83-54.63Zm18.22 111.94c.73-1.16 1.36-2.41 2.82-2.8-.78 1.12-1.32 2.46-2.82 2.8Zm24.78-37.2c-2.54 6.03-5.52 11.85-9.15 17.28-3.44 5.13-7.18 10.08-10.79 15.1-.24.32-.55.6-.82.9-.11-.06-.2-.12-.31-.17 0-.19-.09-.46.01-.58 8.42-10.43 15.61-21.6 20.83-34.01.17.08.34.14.53.2-.1.42-.13.87-.3 1.27Zm97.8 15.51c-.09-.18-.17-.37-.26-.55.72-.35 1.45-.71 2.18-1.07.1.22.18.43.28.64-.73.33-1.47.66-2.2.98Zm15.67-14.3c.15.06.3.14.45.2-.12.39-.16.83-.37 1.17-1.85 2.99-4.29 5.49-7.05 7.64-1.42 1.12-2.94 2.09-4.44 3.11-.32.23-.7.38-1.06.56l-.43-.52c5.11-3.23 9.79-6.88 12.89-12.17Zm-99.86-11.86c.9-.93 5.24-.52 6.14.56-2.14-.19-4-.37-6.14-.56Zm184.42-83.62c-2.58 1.05-4.85 1.99-7.37 3.03.55-1.37 6.1-3.65 7.37-3.03Zm-47.97 25.24c-2.04 1.37-4 2.84-6.02 4.22-.33.23-.8.27-1.2.4.24-.34.39-.79.7-1.01 8.19-6.05 16.8-11.42 25.77-16.18 5.73-3.03 11.6-5.81 17.42-8.7.41-.2.88-.3 1.33-.44.08.14.14.28.22.43-.42.26-.82.56-1.27.76-12.84 5.89-25.22 12.6-36.95 20.51Zm-4.62 108.92c.31-1.26 2.89-2.68 3.82-2.53.05.12.11.25.16.37l-3.99 2.16Zm59.63-56.65c-.92 2.71-1.63 5.55-2.92 8.08-4.08 7.95-10.01 14.5-16.5 20.54-10.31 9.62-21.96 17.43-34.06 24.6-.29.17-.64.23-.95.34-.08-.16-.15-.32-.24-.47.52-.34 1.01-.71 1.54-1.02 10.67-6.36 20.96-13.26 30.31-21.48 7.47-6.56 14.22-13.78 19.05-22.58 1.48-2.69 2.64-5.5 3.05-8.58.02-.22.08-.42.14-.62.02-.06.12-.11.51-.42.04.68.2 1.19.06 1.6Zm102.63-17.29c-2.07.76-3.85 1.42-5.85 2.16.46-1.25 4.5-2.78 5.85-2.16Zm-28.03-36.24c-1.77.89-3.34 1.69-4.92 2.49-.06-.13-.13-.27-.19-.4.7-1.07 3.98-2.57 5.12-2.09Zm-23.81 8.35c4.23-7.67 8.45-15.37 12.67-23.05.04-.06.14-.1.4-.29-.37 1.07-.66 1.95-.97 2.82-2.53 6.98-5.05 13.98-7.64 20.95-.41 1.1-.43 2.11-.17 3.24 1.44 6.36 2.83 12.74 4.06 19.19-.6-1.24-1.23-2.46-1.79-3.71-2.23-5.03-4.44-10.06-6.68-15.09-.61-1.38-.65-2.69.12-4.06Zm-12.23 4.39c3.61-6.96 7.33-13.88 11-20.81.15.08.29.15.44.22-1.24 3.42-2.47 6.83-3.71 10.25-1.24 3.43-2.52 6.86-3.71 10.3a4.09 4.09 0 0 0-.13 2.11c1.18 5.54 2.42 11.06 3.44 16.69-.82-1.69-1.69-3.35-2.45-5.06-1.65-3.72-3.3-7.46-4.83-11.24-.3-.72-.4-1.81-.06-2.45Zm-10.82 3.23c2.93-5.68 5.97-11.31 8.98-16.96.13.06.26.13.38.19-.71 2-1.42 4.01-2.15 6.02-1.25 3.48-2.56 6.93-3.75 10.43-.27.8-.33 1.78-.16 2.59.81 4 1.74 7.97 2.62 11.97.06.26.05.55.09.82-.06.02-.14.04-.2.08-.65-1.35-1.34-2.67-1.94-4.03-1.3-2.95-2.61-5.9-3.79-8.89-.27-.66-.36-1.63-.05-2.22Zm66.17 22.76c-2.35 3.36-65.24 16.76-68.59 14.46 23.46-3.12 46.32-7.41 68.59-14.46Zm47.92-70.31c.02-2.62 2.06-4.64 4.69-4.64s4.75 2.09 4.72 4.75c-.02 2.59-2.1 4.65-4.7 4.65s-4.72-2.09-4.71-4.76Zm11.07 5.65c-1.93 2.16-5.43 3.45-6.93 2.21 5.21-.44 7.92-3.23 8.39-8.24 1.09 1.04.24 4.13-1.47 6.04Zm35.13.19c-.74.57-1.72.82-2.26 1.07-1.48-.19-2.61-.26-2.83-1.56-.23-1.25.63-1.99 1.65-2.27.91-.25 1.96-.33 2.87-.12 1.43.34 1.76 1.97.58 2.88Z"
                style={{
                  fill: 'url(#Red_Orange-13)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M732.38 752.7c-7.15 1.46-14.14 2.89-21.21 4.34 1.3 1.54 2.58 2.98 3.76 4.49 1.19 1.53 2.31 3.11 3.39 4.72 1.1 1.65 2.13 3.33 3.13 5.04 2.46 4.21 2.44 4.22 2.13 5.3-.31-.46-.56-.77-.75-1.11-.46-.82-.89-1.67-1.35-2.49-3.04-5.37-6.38-10.53-10.69-14.99-.31-.32-.77-.75-1.12-.71-1.3.12-2.59.41-4.05.66.38.48.61.78.86 1.07 4.98 5.74 9.34 11.92 13.21 18.45 3.78 6.38 7.03 13.01 9.66 19.94.17.43.21.91.32 1.37-.16.04-.32.09-.48.13-.18-.36-.36-.71-.53-1.07-1.95-4.35-3.74-8.79-5.89-13.04-4.7-9.29-10.46-17.9-17.36-25.72-.3-.34-.71-.86-1.05-.84-1.16.06-2.31.32-3.66.54 14.43 18.79 24.81 39.5 33.61 61.08.17-.03.35-.06.52-.1.58-1.33 1.23-2.64 1.73-4 2.09-5.69 3.11-11.61 3.67-17.62 1.44-15.41-1.15-30.15-7.27-44.32-.18-.42-.41-.82-.56-1.13Zm-2.16 47.43c.67 1.51 1.25 2.69 1.31 4.26-1.05-.79-1.77-2.97-1.31-4.26Z"
                style={{
                  fill: 'url(#Red_Orange-14)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M533.11 722.04c-1.44-1.08-2.91-2.12-4.35-3.19-.28-.21-.5-.51-.74-.77.11-.11.21-.22.32-.33 2.19 1.01 4.16 2.36 5.78 4.15.81.9 1.48.99 2.56.17-2.77-2.72-5.65-5.13-9.42-6.18-.74-.21-1.51-.31-2.28-.4-.82-.09-1.24.25-1.3 1.16-.21 3.5-.49 7-.75 10.6 3.65-1.31 7.38-2.65 11.29-4.06-.46-.49-.73-.87-1.09-1.15Zm-5.99-4.07-1.93-.78c.07-.18.13-.36.2-.55.66.22 1.32.43 1.98.65-.08.23-.17.46-.25.68Z"
                style={{
                  fill: 'url(#Red_Orange-15)',
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="M734.81 206.66a.668.668 0 0 0-.78.45c-.77 2.33-.94 4.82-2.14 6.8-4.87 8.07-12.46 12.31-22.73 12.72-9.63.39-21.57-2.04-27.27-10.2a.612.612 0 0 0-.15-.17.5.5 0 0 0-.17-.11h-.01s-.07-.05-.12-.06c-.02-.01-.03-.01-.05-.01a.916.916 0 0 0-.37-.02.44.44 0 0 0-.14.03c-.07.02-.15.05-.22.1-.16.11-.28.26-.35.45-.73 2.05-1.38 4.12-2.73 5.85-9.58 12.24-26.72 17.26-41.67 15.87-15.79-1.46-25.89-9.65-30.28-24.55-.04-.18-.21-.29-.39-.29-.04 0-.07 0-.1.01-.01 0-.03.01-.04.02a.55.55 0 0 0-.14.09c-3.28 3.45-7.1 5.79-11.46 7.02-14.58 4.14-36.59-5.56-39.72-21.57-.77-3.99-.67-7.98.31-11.99.05-.2.01-.41-.12-.55a.633.633 0 0 0-.32-.23.076.076 0 0 0-.04-.02.676.676 0 0 0-.37.02c-9.35 3.06-21.34 1.84-27.67-6.44-8.63-11.28-3.88-25.08 8.5-31.55 4.7-2.15 9.79-3.33 15.28-3.52.38-.02.61-.21.68-.57 2.51-11.76 9.61-19.05 21.33-21.85 8.6-2.06 16.23-.32 22.91 5.21.06.04.13.08.2.1.01.01.02.01.04.01.06.02.13.04.19.04s.12-.01.17-.02c.05-.01.09-.02.14-.05.03 0 .07-.02.1-.05.05-.03.1-.08.16-.14.04-.05.08-.13.1-.19 1.67-4.29 4.03-8.19 7.06-11.7 15.69-18.11 39.56-25.23 62.16-17.18 14.05 4.99 23.82 15.06 29.3 30.19.77 2.11 1.2 4.2 1.31 6.27 0 .06.02.13.04.19.01.06.04.13.08.18.03.06.07.11.13.16.05.06.12.1.19.14.05.02.1.04.17.06.06.01.13.02.19.02h.05s.05-.01.08-.02c.1-.01.2-.04.28-.09 9.5-5.95 18.76-6.48 27.81-1.57 6.66 3.6 11.13 9.44 11.67 16.96.05.68.41.97 1.08.87 18.18-2.78 34.73 5.97 38.15 24.95 2.26 25.51-18.81 34.52-40.33 29.93Z"
              style={{
                fill: 'url(#linear-gradient-31)',
                filter: 'url(#drop-shadow-18)',
                strokeWidth: 0,
              }}
            />
            <path
              d="m1087.39 179.86-.98 8.23c-7.45 2.25-15.13 3.09-23.05 2.52a.32.32 0 0 0-.34.29v.03l.03 4.92c0 .29-.24.53-.53.53-.08 0-.15-.02-.22-.05l-1.6-.77c-.63-.3-1.39-.04-1.7.6-.04.09-.07.18-.1.28-.48 2.21-.09 4.28 1.15 6.21.16.25.15.57 0 .81l-4.77 6.98c-5.65-1.91-9.81-7.32-13.5-11.76-.14-.16-.11-.39.05-.53a.4.4 0 0 1 .27-.09l3.99.29c.28.02.53-.2.55-.48a.472.472 0 0 0-.15-.39c-2.47-2.5-4.64-5.28-6.53-8.36a.453.453 0 0 1-.07-.27c0-.15.06-.25.2-.31 2.62-1.16 5.35-1.68 8.18-1.55.31.02.36-.09.15-.31-2.9-3.14-5.64-6.8-9.31-9a.659.659 0 0 1-.22-.92c.08-.13.2-.23.34-.28 6.31-2.22 13.09-4.28 19.88-3.52.21.03.41-.12.44-.33a.408.408 0 0 0-.15-.37l-3.06-2.39a.37.37 0 0 1-.07-.53c.06-.08.16-.14.26-.15 2.86-.36 5.53.17 8.02 1.61.12.08.29.04.37-.08.07-.11.05-.27-.06-.35a6.865 6.865 0 0 1-2.08-3.05c-.15-.42-.02-.54.38-.34 5.45 2.75 11.88 3.39 17.78 4.91 4.1 1.06 6.26 3.72 6.48 7.98Z"
              className="cls-51"
            />
            <path
              d="M1086.41 188.09c1.03 4.86 1.48 10.37 1.33 16.52a1.23 1.23 0 0 1-1.1 1.2c-3.07.35-4.64 2.06-4.71 5.15-2.08-.71-3.69-1.18-4.82-1.41-2.14-.43-2.25-.13-.33.91 1.44.78 2.98 1.38 4.63 1.8l-2.1 6.2c-.17.5-.68.81-1.2.72l-5.34-.85a.689.689 0 0 0-.79.57v4.66c-.08.88-.13 1.77-.17 2.65 0 .23.03.43.11.58.16.29.35.39.58.29-.08 0-.16.03-.23.06-.2.09-.29.26-.27.48l.54 6.23-1-6.74c-.04-.27-.2-.37-.46-.29-6.98 1.97-13.24.63-18.8-4.04l-.39-1.98c1.66-2.62 4.74-7.2 3.39-10.36l4.77-6.98c.16-.25.17-.56 0-.81-1.24-1.93-1.62-4-1.15-6.21a1.273 1.273 0 0 1 1.8-.87l1.6.77c.27.12.58 0 .71-.26.03-.07.05-.15.05-.22l-.03-4.92c0-.17.13-.32.3-.32h.03c7.92.57 15.6-.27 23.05-2.52Zm-2.39 4.5-.15-.97a.212.212 0 0 0-.26-.17l-.14.02c-2.98.48-5.35 1.17-5.29 1.53s.01.08.01.08c.06.36 2.53.27 5.51-.21l.14-.02c.12-.02.2-.14.17-.26Zm-6.35 5.07c1.37.6 3.57.9 5.01.44.29-.09.44-.29.43-.59v-1.11c0-.24-.2-.43-.44-.43h-.05l-4.81.65c-.3.05-.51.32-.47.62.03.19.15.35.33.42Z"
              className="cls-43"
            />
            <path
              d="M1084.02 192.59c.02.12-.06.23-.17.26l-.14.02c-2.98.48-5.44.57-5.51.21V193c-.08-.37 2.29-1.05 5.27-1.53l.14-.02c.12-.02.23.06.26.17s.15.97.15.97Z"
              className="cls-51"
            />
            <path
              d="M1082.68 198.09c-1.45.46-3.64.17-5.01-.44-.28-.12-.41-.44-.28-.72.08-.18.24-.3.43-.33l4.81-.65c.24-.03.45.14.48.37V197.48c.01.31-.13.51-.42.59Z"
              className="cls-42"
            />
            <path
              d="m1051.89 220.79.39 1.98-3.95 22.92c-.06.36.18.7.54.76.05 0 .1.01.16 0 5.08-.35 8.45-2.66 10.1-6.94 1.05-2.72.09-6.14-.3-9.03-.03-.25.05-.5.23-.68 2.81-2.86 5.51.14 5.8 3.05 1.19 12.29-5.92 18.9-17.1 21.45-1.38.32-2.13 1.02-2.56 2.28-2.52 7.46-6.01 14.19-10.48 20.2-.79 1.06-.9 2.22-.34 3.49.03.06.03.13.01.2l-.65 2.31c-.06.22.04.45.25.54l3.75 1.67c.27.67.32 1.35.14 2.02-.71.33-1.6.8-2.65 1.42-.82.48-1.53 1.15-2.14 2.02a53.547 53.547 0 0 1-5.29 6.39c-.19.2-.4.25-.66.15-.81-.31-1.63-.45-2.45-.41l-11.75-3.51c-.23-.07-.47-.08-.71-.03-7.85 1.7-19.17 2.18-22.31-6.95l-.99-5.21c-.09-1.28.3-2.15 1.15-2.62 8.16-4.38 15.12-9.56 20.87-15.53 4.05-4.21 7.07-7.28 10.01-11.56a.88.88 0 0 0-.23-1.22.96.96 0 0 0-.57-.15c-4.36.38-8.42 1.89-12.2 4.53-1.3.9-2 1.12-3.29.21-1.73-1.23-3.4-2.47-5.02-3.73-.46-.36-.62-.99-.38-1.52 1.73-3.81 2.94-7.3 6.82-9.54 6.89-3.96 13.24-3.35 20.41-.75 1.98.72 3.01.72 4.25-1.01.43-.6.29-1.43-.31-1.86-.11-.08-.24-.14-.37-.19-6.12-1.98-12.43-3.87-18.94-5.66-2.72-.75-4.57-1.68-7.26-.52-9.45 4.06-19.04 8.01-28.79 11.86-1.62-3.73-3.55-6.89-5.78-9.46-.53-1.87 2.64-3.2 4.01-3.78 9.15-3.9 18.29-7.8 27.43-11.72 1.68-.72 3.61-.96 5.81-.72 15.01 1.59 30.12 3.21 45.36 4.87Z"
              className="cls-53"
            />
            <path
              d="M1081.93 210.95c-.49.88-.66 1.31-.52 1.3-1.65-.42-3.19-1.02-4.63-1.8-1.92-1.04-1.81-1.34.33-.91 1.14.23 2.74.7 4.82 1.41Z"
              style={{
                fill: '#cd362f',
                strokeWidth: 0,
              }}
            />
            <path
              d="M960.42 239.89c.08 1.45-.35 2.79-1.28 4.04-.85-.37-1.89-.42-3.12-.14-.32.07-.53.4-.45.72.03.14.12.27.24.35l9.23 6.47c.41.29.98.18 1.26-.23.16-.22.2-.51.13-.77-.23-.8-.57-1.47-1.02-2 .65-.47 1.03-.95 1.11-1.43.66.22 1.49.27 2.5.15.32.29.47 1.06.46 2.29l-.52 3.54c-.11.77.22 1.54.85 1.98 2.48 1.71 8.61 5.19 9.44 7.95.49 1.61.37 3.18-.34 4.69a814.176 814.176 0 0 1-15.89 31.69c-.22.41-.67.65-1.14.62-5.33-.42-8.5-2.3-13.06-5.83-12.36-9.56-24.69-19.11-36.98-28.66-.56-.43-.67-1.24-.23-1.81.03-.04.07-.09.11-.13l12.14-12.1c4.3-4.3 8.59-8.54 12.88-12.74 6.18-6.06 10.21 2.41 15.78 3.3.25.04.49.01.72-.09 2.33-1 4.72-1.63 7.18-1.88Z"
              className="cls-53"
            />
            <path
              d="M975.07 241.6c-1.46 1.34-2.79 3.24-4 5.7-.11.23-.29.35-.55.35h-.43c-.37 0-.57.2-.58.57l-.02 1.13c0-1.23-.14-2-.46-2.29-.06-.92-.5-1.35-1.33-1.27-.46.04-.85.41-1.18 1.12-.09.49-.46.97-1.11 1.43-2.29-.93-4.38-2.4-6.27-4.41.93-1.25 1.36-2.59 1.28-4.04 2.28-3.31 5.24-5.9 8.87-7.75 2.23 2.57 4.16 5.72 5.78 9.46Z"
              className="cls-43"
            />
            <path
              d="M1072.54 233.83c1.04 11.65.07 22.92-1.1 34.48-.33 3.16.11 5.96.58 9.02 0 1.31.39 2.46 1.16 3.43a4.6 4.6 0 0 1-.1 2.18l-13.59 3.7-5.56.31c-5.44-.07-10.84-.73-16.19-1.96l-3.75-1.67a.45.45 0 0 1-.25-.54l.65-2.31c.02-.06.01-.13-.01-.2-.56-1.27-.45-2.44.34-3.49 4.47-6.01 7.97-12.74 10.48-20.2.42-1.26 1.17-1.96 2.56-2.28 11.18-2.55 18.29-9.16 17.1-21.45-.28-2.91-2.99-5.9-5.8-3.05-.18.18-.26.43-.23.68.38 2.89 1.35 6.31.3 9.03-1.65 4.27-5.01 6.59-10.1 6.94a.652.652 0 0 1-.7-.61v-.16l3.95-22.92c5.56 4.66 11.82 6.01 18.8 4.04.27-.08.42.02.46.29l1 6.74Zm-15.72 34.15c.11.01.33-1.07.51-2.43.17-1.35.23-2.46.12-2.48-.11-.01-.33 1.07-.51 2.43-.17 1.35-.23 2.46-.12 2.48Zm-.33 13.43c.16.01.42-1.38.58-3.11.16-1.73.15-3.15-.01-3.17-.16-.01-.42 1.38-.58 3.11-.16 1.73-.15 3.15.01 3.17Z"
              style={{
                fill: '#e6e6e6',
                strokeWidth: 0,
              }}
            />
            <path
              d="M1072.5 227.06c.53-.04 1.19.09 2 .4 13.96 5.45 28.14 11.02 42.54 16.69.92.36 1.95.26 2.78-.27 6.65-4.27 13.46-8.56 20.42-12.87 1.16-.72 2.26-.84 3.29-.37 1.31 2.84 3.06 5.23 5.26 7.18.35 1.14-.39 2.35-1.37 3.07-11.86 8.79-19.75 14.45-23.67 16.99-1.08.7-3.02.17-4.43-.21-10.93-2.97-21.87-5.91-32.82-8.82-3.35-.89-3.58.8-4.75 3.53a145.72 145.72 0 0 0-5.82 16.34c-.32.65-.79 2.03-1.43 4.13-.32 1.08-1.09 1.89-2.31 2.41a.55.55 0 0 0-.33.56l.14 1.51c-.46-3.05-.9-5.86-.58-9.02 1.17-11.56 2.14-22.83 1.1-34.48l-.54-6.23c-.02-.23.07-.39.27-.48.07-.03.14-.05.23-.06Z"
              className="cls-53"
            />
            <path
              d="M1148.79 237.82c-2.19-1.95-3.94-4.34-5.26-7.18 2.02-3.7 1.85-9.23 5.94-11.1.5-.23 1.1-.01 1.33.49.12.25.12.54.02.8l-.95 2.36c-.06.17.03.37.2.43.13.05.28 0 .37-.1 1.76-2.2 3.42-4.27 5-6.22.39-.49.89-.73 1.5-.71 2.09.05 3.12 1.11 3.08 3.2-.04 2.85.62 6.84-1.84 9.06a232.02 232.02 0 0 0-9.39 8.98Z"
              className="cls-43"
            />
            <path
              d="m1075.93 268.73-2.76 12.03c-.77-.97-1.15-2.11-1.16-3.43l-.14-1.51c-.02-.24.11-.46.33-.56 1.21-.53 1.98-1.33 2.31-2.41.64-2.1 1.11-3.47 1.43-4.13Z"
              className="cls-45"
            />
            <ellipse
              cx={1056.77}
              cy={278.27}
              rx={3.15}
              ry={0.3}
              style={{
                fill: '#c1c1bf',
                strokeWidth: 0,
              }}
              transform="rotate(-84.85 1056.827 278.246)"
            />
            <path
              d="M1037.73 284.99a76.484 76.484 0 0 0 16.19 1.96c.22.59.28 1.22.17 1.89-.49.38-1.23.6-2.2.66-5.23.31-9.9-.52-14.02-2.49.18-.67.13-1.35-.14-2.02Z"
              className="cls-42"
            />
            <image
              xlinkHref="data:image/png;base64,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"
              width={236}
              height={121}
              style={{
                opacity: 0.45,
              }}
              transform="translate(971 310)"
            />
            <path
              d="M1236.7 338.77c1.3 15.07-27.85 34.47-115.22 41.98-87.37 7.5-207.26 8.81-208.55-6.26-1.3-15.07 69.74-18.78 157.11-26.28 87.37-7.5 165.37-24.51 166.67-9.43Z"
              style={{
                fill: '#cdd8cb',
                strokeWidth: 0,
              }}
            />
            <path
              d="M1234.85 334.3c1.3 15.07-27.85 34.47-115.22 41.98-87.37 7.5-207.26 8.81-208.55-6.26-1.3-15.07 69.74-18.78 157.11-26.28 87.37-7.5 165.37-24.51 166.67-9.43Z"
              style={{
                fill: '#599a52',
                strokeWidth: 0,
              }}
            />
            <path
              d="M1037.87 287.01c4.12 1.97 8.8 2.8 14.02 2.49.97-.06 1.7-.28 2.2-.66l4.85-.29a.43.43 0 0 0 .36-.21c.04-.06.08-.13.12-.2.71.55 1.58.7 2.6.45 3.2-.78 8.92-1.23 11.38-3.29.12.15.27.27.44.35 12.54 6.17 23.96 13.89 34.25 23.15.39.36.62.8.67 1.33 1.15 10.89 1.87 21.85 2.15 32.88.43.45-.01 1.19-1.33 2.22-3.17.21-6.51.94-10.04 2.2-.75-.96-1.2-2.04-1.34-3.23l-3.54-29.27a.914.914 0 0 0-.6-.76c-4.92-1.78-9.86-3.55-14.84-5.3-13.4-4.72-21.32-7.51-33.18-.33a164.17 164.17 0 0 0-18.64 13.13c-1.31 1.06-2.02 2.37-2.14 3.93-.55 6.78-.67 14.09-.36 21.93.05 1.3-.33 2.75-.57 4.09-.18 2.07-.69 3.88-1.54 5.41-2.43-1.23-5.74-1.31-9.91-.24l-.46-4.24c-.42-10-1.13-19.92-2.12-29.78-.06-.57.06-1.09.35-1.55 5-7.99 10.32-15.77 15.96-23.32.14-.2.12-.37-.07-.51-.5-.38-1.12-.65-1.86-.81.82-.04 1.64.1 2.45.41.25.1.47.05.66-.15 1.93-2.01 3.7-4.14 5.29-6.39.61-.87 1.32-1.54 2.14-2.02 1.05-.61 1.94-1.09 2.65-1.42Z"
              className="cls-45"
            />
            <path
              d="m1073.07 282.94.33 2.36c-2.46 2.06-8.19 2.51-11.38 3.29-1.02.25-1.89.1-2.6-.45l.07-1.5 13.59-3.7Z"
              className="cls-42"
            />
            <path
              d="m1053.92 286.95 5.56-.31-.07 1.5c-.04.07-.08.14-.12.2-.09.13-.21.2-.36.21l-4.85.29c.11-.67.06-1.31-.17-1.89Z"
              style={{
                fill: '#b5bdb4',
                strokeWidth: 0,
              }}
            />
            <path
              d="M1012.87 356.78c4.17-1.07 7.47-.99 9.91.24 1.11 2.77 1.07 5.3-.11 7.59a.66.66 0 0 1-.54.38l-3.34.39a.62.62 0 0 1-.65-.4l-.59-1.59c-.09-.26-.25-.31-.48-.16-5.18 3.46-10.79 5.43-16.85 2.7a.823.823 0 0 1-.4-1.09c.11-.23.31-.4.56-.45 4.03-.87 9.29-5.08 12.48-7.6ZM1109.58 345.23c3.99 2.06 8.01 3.47 12.05 4.23a.648.648 0 0 1 .38 1.04c-3.35 4.17-10.42 3.69-15.09 2.4a.9.9 0 0 0-1.08.56c-.78 2.13-4.58 3.67-5.83.89-.62-1.38-.78-3.68-.47-6.92 3.53-1.26 6.88-1.99 10.04-2.2Z"
              className="cls-42"
            />
            <g
              style={{
                filter: 'url(#drop-shadow-19)',
              }}
            >
              <path
                d="M1352.1 737.45c-8.05-28.52-15.73-55.74-15.1-75.04 1.34 2.23 3.99 3.58 6.58 4.9 1.21.62 2.46 1.25 3.53 1.96.26.17.55.24.84.22.34-.02 1.48.3 1.74.66 1.42 1.98 3.33 2.95 5.51 2.8.44-.03.89-.11 1.35-.24 4.36-1.24 8.55-5.04 12.11-10.99 5.46-9.13 8.24-21.35 6.92-30.41-.47-3.34-1.69-9.08-3.34-11.76-8.13-13.21-23.86-20.41-35.72-24.04-15.23-4.66-30.35-5.63-38.68-5.04-.89.06-1.73.14-2.52.24-14.17 1.76-29.85 9.84-46.61 24.03-14.76 12.5-30.04 29.42-45.41 50.29-19.8 26.89-38.45 58.61-52.51 89.33-13.56 29.62-20.79 54.08-19.84 67.11 1.5 20.45 6.07 38.81 13.58 54.55 7 14.65 16.53 27.03 28.33 36.78 11.06 9.14 23.94 15.86 38.3 19.97 13.7 3.92 28.34 5.37 43.52 4.3 17.93-1.27 36.27-6.16 53.04-14.14 17.49-8.33 32.86-19.62 45.69-33.56 31.8-34.57 14.2-96.9-1.32-151.9Z"
                className="cls-52"
              />
              <path
                d="M1370.91 620.66c-14.6-7.63-28.81 13.39-33.73 29.86-14.73 49.33 66.5 181.81 15.21 237.56-68.44 74.38-209.95 68.05-219.82-66.94-3.2-43.83 90.47-219.67 162.79-228.63 16.99-2.11 60.83 3.8 75.56 28.15Z"
                style={{
                  fill: 'url(#linear-gradient-32)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1350.52 629.18c6.29-6.91 12.61-9.89 18.26-7.1 3.3 1.03 4.58 4.97 5.24 9.66 2.07 14.25-6.71 36.08-17.71 39.2-5.69 1.55-8.61-6.33-6.89-14.31 1.81 1.23 3.64 2.24 5.37 3.6 2.05 1.72 4.81.22 7.01-2.71 4.61-6.05 5.76-17.42 1.2-19.84-4.17-2.85-8.36-5.55-12.49-8.5Z"
                style={{
                  fill: 'url(#linear-gradient-33)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1348 667.67c-3.98-2.61-9.63-4.05-10.23-7.95-.65-4.22 1.07-10.11 2.71-14.2 2.14-5.35 4.94-9.99 8.15-14.09.47-.6.77-.72 1.2-.42 3.2 2.31 6.54 4.26 9.69 6.68-8.51 3.83-13.86 19.91-11.51 29.98Z"
                style={{
                  fill: 'url(#linear-gradient-34)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1351.96 648.22c2.31-4.53 4.94-7.87 8.29-8.49 2.62-.49 4.13 1.56 4.2 5.45.09 4.64-2.03 10.01-4.89 12.41-2.84 2.38-5.07.59-4.39-3.86.38-2.46-.03-3.46-1.25-3.96-.63-.26-1.15-.83-1.72-1.26-.08-.06-.14-.16-.25-.29Z"
                style={{
                  fill: 'url(#linear-gradient-35)',
                  strokeWidth: 0,
                }}
              />
              <path
                d="M1353.47 657.1c-1.15-.78-2.32-1.56-3.47-2.38-.1-.07-.16-.45-.1-.65.39-1.29.81-2.56 1.27-3.98.96.62 1.86 1.19 2.74 1.81.13.09.22.43.19.69-.18 1.45-.4 2.91-.62 4.51Z"
                style={{
                  fill: 'url(#linear-gradient-36)',
                  strokeWidth: 0,
                }}
              />
            </g>
          </g>
          <path
            d="M1406 0h263v765h-263z"
            style={{
              fill: 'url(#linear-gradient-37)',
              strokeWidth: 0,
            }}
            transform="rotate(180 1537.5 382.5)"
          />
          <path
            d="M0 0h263v765H0z"
            style={{
              fill: 'url(#linear-gradient-38)',
              strokeWidth: 0,
            }}
          />
        </g>
      </svg>
    </div>
  )
}

export default HeroImage
