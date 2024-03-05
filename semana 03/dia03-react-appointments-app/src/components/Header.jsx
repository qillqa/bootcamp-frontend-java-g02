const Header = ({ title, subtitle }) => {
  return (
    <h1 className="text-4xl text-center mt-4">
      {title} {subtitle}
    </h1>
  )
}

export default Header


// const Header = (props) => {
//   return (
//     <h1 className="text-4xl text-center mt-4">
//       {props.title}
//     </h1>
//   )
// }

// export default Header