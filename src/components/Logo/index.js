import React from 'react'
import { Svg } from './styles'
import { Link } from '@reach/router'

export const Logo = (props) => {
  return (
    <Link to='/'>
      <Svg
        width={395.6}
        height={124.44}
        viewBox="52.2 12.78 395.6 124.44"
        style={{
          background: "#fff 0 0",
        }}
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <defs>
          <filter id="prefix__editing-extrude-glow">
            <feFlood floodColor="#c93328" result="flood-1" />
            <feMorphology radius={1} in="SourceAlpha" result="erode" />
            <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
            <feConvolveMatrix
              order="3,3"
              divisor={1}
              in="comp1"
              result="convolve"
              kernelMatrix="0 0 0 1 1 1 0 0 0"
            />
            <feOffset dx={-3} in="convolve" result="extrude" />
            <feComposite
              operator="in"
              in="flood-1"
              in2="extrude"
              result="comp-extrude"
            />
            <feFlood floodColor="#3e6d8d" result="flood-2" />
            <feComposite
              operator="in"
              in="flood-2"
              in2="SourceAlpha"
              result="comp2"
            />
            <feMorphology
              operator="dilate"
              radius={1}
              in="comp2"
              result="dilate"
            />
            <feOffset dx={-4.5} in="dilate" result="offset" />
            <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
            <feComponentTransfer in="blur" result="shadow">
              <feFuncA type="linear" slope={0.8} intercept={-0.2} />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="comp-extrude" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#prefix__editing-extrude-glow)">
          <path
            d="M141.485 54.71q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07l-7.36 38.59h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07zm41.92 31.87q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm22.2 11.39q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm48-14.21l12.93-1.15q-4.61 10.11-4.61 21.82-1.72 1.22-4.25 1.22-2.53 0-4.13-1.18-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.59.96-5.35.96-2.75 0-5.15-.9-2.4-.89-4.25-2.88-4.1-4.35-4.1-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.74 3.14-.73 1.44-1.88 2.59-2.76 2.56-6.15 2.56-1.34 0-2.62-.45.25-1.92.25-4.16t-.16-3.26q-.16-1.02-.54-1.86-.83-1.72-2.66-1.72-1.82 0-3.84 1.95-2.01 1.95-3.61 5.15-3.52 7.17-3.52 15.81 0 3.97 1.53 6.78 1.67 3.07 4.61 3.07 1.03 0 1.95-.51.93-.51 1.32-.89l2.04-12.87zm36.1 2.63q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02l-3.33 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62l-3.97 20.16-12.48 1.28 3.46-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.49 6.66l-3.91 20.16-12.61 1.28 6.72-33.92 10.44-1.28-1.09 6.46q1.66-3.45 4.73-4.96 3.08-1.5 7.88-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28z"
            fill="#f9a947"
          />
        </g>
        <style />
      </Svg>
    </Link>
  )
}
