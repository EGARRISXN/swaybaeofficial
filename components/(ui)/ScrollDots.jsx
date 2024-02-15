// 'use client'
// import {useState, useEffect} from 'react'

// export default function TableOfContent() {
//   const [activeDot, setActiveDot] = useState(0)

//   const handleDotClick = (index) => {
//     setActiveDot(index)
//     const targetY = (index / 6) * document.body.clientHeight
//     window.scrollTo({top: targetY, behavior: 'smooth'})
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.scrollY
//       const totalHeight = document.body.clientHeight - window.innerHeight
//       const sectionHeight = totalHeight / 6

//       let activeIndex = Math.floor(currentPosition / sectionHeight)
//       if (activeIndex > 5) activeIndex = 5
//       setActiveDot(activeIndex)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className='fixed right-24 top-60 hidden flex-col rounded-full p-1 text-xl transition-transform lg:flex'>
//       {[...Array(6)].map((_, index) => (
//         <div className='mx-auto my-1' key={index}>
//           <button
//             style={{
//               width: '10px',
//               height: '10px',
//               border: '2px solid black',
//               borderRadius: '50%',
//               backgroundColor: index === activeDot ? 'black' : 'transparent',
//             }}
//             onClick={() => handleDotClick(index)}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// 'use client'
// import {useState, useEffect} from 'react'

// export default function TableOfContent() {
//   const [activeDot, setActiveDot] = useState(0)

//   const handleDotClick = (index) => {
//     setActiveDot(index)
//     const targetY = (index / 4) * window.innerHeight
//     window.scrollTo({top: targetY, behavior: 'smooth'})
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.scrollY
//       const totalHeight = document.body.clientHeight - window.innerHeight
//       const sectionHeight = totalHeight / 4

//       let activeIndex = Math.ceil(currentPosition / sectionHeight)
//       if (activeIndex > 3) activeIndex = 3 // Ensure index doesn't exceed 3

//       setActiveDot(activeIndex)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className='fixed right-5 top-40 z-50 hidden flex-col rounded-full p-1 text-xl lg:flex'>
//       {[...Array(4)].map((_, index) => (
//         <div className='mx-auto my-1' key={index}>
//           <button
//             style={{
//               width: '10px',
//               height: '10px',
//               border: '2px solid black',
//               borderRadius: '50%',
//               backgroundColor: index <= activeDot ? 'black' : 'transparent',
//             }}
//             onClick={() => handleDotClick(index)}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }
