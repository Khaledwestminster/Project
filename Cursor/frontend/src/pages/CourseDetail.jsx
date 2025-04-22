import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseDetails } from '../utils/api';

const CourseDetail = () => {
  const { language, level } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchCourseDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getCourseDetails(language, level);
        setCourse(data);
      } catch (err) {
        setError('Failed to load course details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
  }, [language, level, navigate]);

  if (isLoading) {
    return (
      <>
        <header>
          <h1>Polyglot Practice</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/courses" className="active">Courses</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>
          <section id="courses-section">
            <p>Loading course details...</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2025 Polyglot Practice. All rights reserved.</p>
        </footer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <header>
          <h1>Polyglot Practice</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/courses" className="active">Courses</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>
          <section id="courses-section">
            <div className="error-messages">{error}</div>
          </section>
        </main>
        <footer>
          <p>&copy; 2025 Polyglot Practice. All rights reserved.</p>
        </footer>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <header>
          <h1>Polyglot Practice</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/courses" className="active">Courses</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>
          <section id="courses-section">
            <p>Course not found</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2025 Polyglot Practice. All rights reserved.</p>
        </footer>
      </>
    );
  }

  return (
    <>
      <header>
        <h1>Polyglot Practice</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/courses" className="active">Courses</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <main>
        <section id="courses-section">
          <h2>{course.title}</h2>
          <div className="course-card">
            <div className="course-info">
              <div className="course-badges">
                <span className="badge">{course.language}</span>
                <span className="badge">{course.level}</span>
              </div>
              <p>{course.description}</p>
            </div>

            <div className="course-content">
              {course.sections.map((section, index) => (
                <div key={index} className="section">
                  <h3>{section.title}</h3>
                  <p>{section.content}</p>
                  {section.examples && (
                    <div className="examples">
                      <h4>Examples:</h4>
                      <ul>
                        {section.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Polyglot Practice. All rights reserved.</p>
      </footer>
    </>
  );
};

export default CourseDetail; 