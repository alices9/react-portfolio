import React, { useState } from 'react'
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"


const Navigation = () => {
const [page, setPage] = useState("AboutMe");

const currentPage = () => {
    if (page==="AboutMe") {
        return <AboutMe />
    } else if (page==="Portfolio") {
        return <Portfolio />
    } else if (page==="Contact") {
        return <Contact />
    }
}

const changePage = (page) =>{
    setPage(page)
}

    return (
        <div>
            <button type="button" onClick={changePage}>
                About Me
            </button>
            <button type="button" onClick={changePage}>
                Projects
            </button>
            <button type="button" onClick={changePage}>
                Contact Me
            </button>
            <div>
                {currentPage(page)}
            </div>
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