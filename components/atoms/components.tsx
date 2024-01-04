import React, { ReactNode, Ref, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
/* eslint-disable react/display-name */

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean
        reversed: boolean
      } & any
    >,
    ref: Ref<HTMLSpanElement>,
  ) => (
    <span
      {...props}
      ref={ref}
      className={`
        ${className}
        cursor-pointer flex items-center px-1 h-8
        ${
          reversed
            ? active
              ? 'text-white'
              : 'text-gray-400'
            : active
            ? 'text-black'
            : 'text-gray-300'
        }
      `}
    />
  ),
)

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
      {
        value: any
      } & any
    >,
    ref: Ref<null>,
  ) => {
    const textLines = value.document.nodes
      .map((node: any) => node.text)
      .toArray()
      .join('\n')
    return (
      <div
        ref={ref}
        {...props}
        className={`
          ${className}
          mt-3 mb-0
        `}
      >
        <div
          className={`
            text-sm px-5 py-2 text-gray-600 
          `}
        >
          Slates value as text
        </div>
        <div
          className={`
            text-gray-600 font-mono whitespace-pre-wrap px-5 py-2
          `}
        >
          {textLines}
        </div>
      </div>
    )
  },
)

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<any>,
    ref: Ref<HTMLSpanElement>,
  ) => (
    <span
      {...props}
      ref={ref}
      className={`
        ${className}
        text-xs align-text-bottom
      `}
    />
  ),
)

export const Instruction = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<any>, ref: Ref<any>) => (
    <div
      {...props}
      ref={ref}
      className={`
        ${className}
        whitespace-pre-wrap mb-2 px-5 py-2 text-sm bg-gray-100
      `}
    />
  ),
)

export const Menu = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<any>, ref: Ref<any>) => (
    <div
      {...props}
      data-test-id="menu"
      ref={ref}
      className={`
        ${className}
        inline-block
      `}
    />
  ),
)

export const Portal = ({ children }: { children?: ReactNode }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null
}

export const Toolbar = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<any>, ref: Ref<any>) => (
    <Menu
      {...props}
      ref={ref}
      className={`flex relative py-1 flex-wrap gap-x-2 mb-2`}
    />
  ),
)

// function Button(
//   {
//     className,
//     active,
//     reversed,
//     ...props
//   }: PropsWithChildren<
//     {
//       active: boolean
//       reversed: boolean
//     } & any
//   >,
//   ref: Ref<HTMLSpanElement>,
// ) {
//   return (
//     <span
//       {...props}
//       ref={ref}
//       className={`
//         ${className}
//         cursor-pointer
//         ${
//           reversed
//             ? active
//               ? 'text-white'
//               : 'text-gray-400'
//             : active
//             ? 'text-black'
//             : 'text-gray-300'
//         }
//       `}
//     />
//   )
// }

// function EditorValue(
//   {
//     className,
//     value,
//     ...props
//   }: PropsWithChildren<
//     {
//       value: any
//     } & any
//   >,
//   ref: Ref<null>,
// ) {
//   const textLines = value.document.nodes
//     .map((node: any) => node.text)
//     .toArray()
//     .join('\n')
//   return (
//     <div
//       ref={ref}
//       {...props}
//       className={`
//         ${className}
//         mt-3 mb-0
//       `}
//     >
//       <div
//         className={`
//           text-sm px-5 py-2 text-gray-600 border-t-2 border-gray-200 bg-gray-100
//         `}
//       >
//         Slates value as text
//       </div>
//       <div
//         className={`
//           text-gray-600 font-mono whitespace-pre-wrap px-5 py-2
//         `}
//       >
//         {textLines}
//       </div>
//     </div>
//   )
// }

// function Icon(
//   { className, ...props }: PropsWithChildren<any>,
//   ref: Ref<HTMLSpanElement>,
// ) {
//   return (
//     <span
//       {...props}
//       ref={ref}
//       className={`
//         ${className}
//         text-xs
//         align-text-bottom
//       `}
//     />
//   )
// }

// function Instruction(
//   { className, ...props }: PropsWithChildren<any>,
//   ref: Ref<HTMLDivElement>,
// ) {
//   return (
//     <div
//       {...props}
//       ref={ref}
//       className={`
//         ${className}
//         whitespace-pre-wrap
//         mb-2
//         px-5 py-2
//         text-sm
//         bg-gray-100
//       `}
//     />
//   )
// }

// function Menu(
//   { className, ...props }: PropsWithChildren<any>,
//   ref: Ref<HTMLDivElement>,
// ) {
//   return (
//     <div
//       {...props}
//       data-test-id="menu"
//       ref={ref}
//       className={`
//         ${className}
//         inline-block
//         ${className && 'ml-4'}
//       `}
//     />
//   )
// }

// function Portal({ children }: { children?: ReactNode }) {
//   return typeof document === 'object'
//     ? ReactDOM.createPortal(children, document.body)
//     : null
// }

// function Toolbar(
//   { className, ...props }: PropsWithChildren<any>,
//   ref: Ref<HTMLDivElement>,
// ) {
//   return (
//     <Menu
//       {...props}
//       ref={ref}
//       className={`
//         ${className}
//         relative
//         py-1 px-6
//         -mx-5
//         border-b-2 border-gray-200
//         mb-5
//       `}
//     />
//   )
// }

// export { Button, EditorValue, Icon, Instruction, Menu, Portal, Toolbar }
