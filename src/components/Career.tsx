import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSIT</h4>
                <h5>C V Raman Global University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              B.Tech in Computer Science and Information Technology at C V Raman
              Global University, Bhubaneswar, Odisha. Currently maintaining a
              CGPA of 8.22. Expected graduation: Aug 2028.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>NPTEL, IIT Bombay & More</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Innovation by Design (NPTEL, IIT Bombay) — Elite grade with 71%
              score. Digital Productivity with AI — 95% score. Java Programming
              Fundamentals — Completed Feb 2026.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements</h4>
                <h5>DSA & Competitive Coding</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Solved 200+ Data Structures and Algorithms problems in C++ and
              Python across LeetCode and GeeksforGeeks. Achieved University Rank
              under 90 on GeeksforGeeks coding leaderboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
