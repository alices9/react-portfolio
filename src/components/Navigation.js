import React, { useState } from 'react'
import AboutMe from './AboutMe';

const Navigation = () => {
const [page, setPage] = useState(AboutMe);

const handlePage = () => {
    setPage(page)
}

    return (
        <div>
            <button type="button" onClick={handlePage}>
                About Me
            </button>
            <button type="button" onClick={handlePage}>
                Projects
            </button>
            <button type="button" onClick={handlePage}>
                Contact Me
            </button>
        </div>
    )
}






// const navStyle = { padding: "0px 10px" };

// const Navigation = () => {
//     return (
//         <nav className="navbar">
//             <section
//                 style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: 'flex-start',
//                     justifyContent: 'flex-start',
//                     padding: '5px'
//                 }}
//             >
//             <div style={navStyle}>
//                 <a href="#">About Me</a>
//             </div>
//             <div style={navStyle}>
//                 <a href="#">Projects</a>
//             </div>
//             <div style={navStyle}>
//                 <a href="#">Contact Me</a>
//             </div>
//             </section>
//         </nav>
//     )
// }

export default Navigation