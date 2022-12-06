import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <section id="work">
                <h2>Previous Works</h2>

                <div id="recent-project-container">
                    <section class="recent-project-card">
                        <header class="project-header">Sport Spot</header>
                        <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank"><img class="recent-project-img" src="./assets/images/sportspotss.png" alt="screenshot of sports spot site" /></a>
                    </section>
                </div>
            </section>


            <section class="older-project-container">
                <div class="older-project-card">
                    <header class="project-header">Astrologica</header>
                    <a href="https://cwyan2483.github.io/astrologica/" target="_blank"><img class="older-project-img" src="./assets/images/astrologica.png" alt="screenshot of astrologica site" /></a>
                </div>

                <div class="older-project-card">
                    <header class="project-header">Coming soon</header>
                    <a href="" target="_blank"><img class="older-project-img" src="./assets/images/coming-soon.jpg" alt="coming soon" /></a>
                </div>

                <div class="older-project-card">
                    <header class="project-header">Coming soon</header>
                    <a href="" target="_blank"><img class="older-project-img" src="./assets/images/coming-soon.jpg" alt="coming soon" /></a>
                </div>

                <div class="older-project-card">
                    <header class="project-header">Coming soon</header>
                    <a href="" target="_blank"><img class="older-project-img" src="./assets/images/coming-soon.jpg" alt="coming soon" /></a>
                </div>

                <div class="older-project-card">
                    <header class="project-header">Coming soon</header>
                    <a href="" target="_blank"><img class="older-project-img" src="./assets/images/coming-soon.jpg" alt="coming soon" /></a>
                </div>

            </section>
        </div>
    )
}

export default Portfolio