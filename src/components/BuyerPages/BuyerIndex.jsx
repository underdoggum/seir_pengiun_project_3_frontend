// import { useState } from "react"
// import { Link } from "react-router-dom"

// // this component shoudl receive ALL items from all seller users as props
// const BuyerIndex = (props) => {

//   // If props.allItems data has been fetched, return allItems
//   if (props.allItems) {
//     return (
//       <section className="buyIndex">
//         <div className="container">
//           <div className="row">
//             {props.allItems.map((item, idnex) =>(
//               <div className="card">
//                 <div className="card-title">Restaurant Name</div>
//                 <div className="card-text">
//                   <span>${item.price} {USD}</span>
//                   {/* nned to see if bootstrap will let us style the way the Miro board shows */}
//                 </div>
//                 <Link to={/>showItem/${item._id}}/>
//                   <img src={item.img} alt={item.name} className="card-img-bottom"/>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   } else {
//     return <h1>Loading...</h1>
//   }

// }

// export default BuyerIndex