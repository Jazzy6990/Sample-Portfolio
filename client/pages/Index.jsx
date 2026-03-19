import { useEffect } from "react";
import Typed from "typed.js";


export default function Index() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      {" "}
      {/* Hero Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {" "}
        <div className="flex-1">
          {" "}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {" "}
            Vishal Shobhit{" "}
          </h1>{" "}
          <p className="text-xl md:text-2xl text-gray-300 mb-6" id="element">
            {" "}
            Computer Science Undergraduate | Java & AI Developer | Web
            Developer{" "}
          </p>{" "}
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {" "}
            B.Tech Computer Science student passionate about building AI-driven
            systems and scalable backend solutions. Currently interning as a
            Java Developer while exploring machine learning applications for
            real-world problem solving.{" "}
          </p>{" "}
          <div className="flex gap-4">
            {" "}
            <a
              href="#projects"
              className="bg-bright-yellow text-black px-8 py-3 font-semibold rounded hover:brightness-90 transition"
            >
              {" "}
              View Projects{" "}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/vishal-shobhit-679861326"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-bright-yellow text-bright-yellow px-8 py-3 font-semibold rounded hover:bg-bright-yellow hover:text-black transition"
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex-1 hidden md:block">
          {" "}
          <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
            {" "}
            <img
              src="programmer-software-developer-coding-in-computer-office-flat-purple-illustration-design-concept-vector.jpg"
              alt="Developer illustration"
              className="w-full h-full object-cover rounded-lg"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Professional Experience Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">
          Professional Experience
        </h2>{" "}
        <div className="grid md:grid-cols-2 gap-8">
          {" "}
          {/* Experience Card 1 */}{" "}
          <div className="border border-gray-600 bg-dark-gray p-8 rounded-lg">
            {" "}
            <div className="flex items-center mb-6">
              {" "}
              <div className="w-12 h-12 bg-bright-yellow rounded flex items-center justify-center text-black font-bold">
                {" "}
                👔{" "}
              </div>{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mb-2">
              Java Development Intern
            </h3>{" "}
            <p className="text-gray-400 mb-6">Pinnacle Labs | 2024</p>{" "}
            <ul className="space-y-3 text-gray-300">
              {" "}
              <li>
                {" "}
                • Developed desktop applications using Java, OOP principles, and
                GUI frameworks{" "}
              </li>{" "}
              <li>
                {" "}
                • Built robust backend systems with multithreading and database
                integration{" "}
              </li>{" "}
              <li>
                {" "}
                • Collaborated with cross-functional teams to deliver scalable
                solutions{" "}
              </li>{" "}
              <li>
                {" "}
                • Refactored legacy code to improve maintainability and
                performance{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Experience Card 2 */}{" "}
          <div className="border border-gray-600 bg-dark-gray p-8 rounded-lg">
            {" "}
            <div className="flex items-center mb-6">
              {" "}
              <div className="w-12 h-12 bg-bright-yellow rounded flex items-center justify-center text-black font-bold">
                {" "}
                🤖{" "}
              </div>{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              AI Training & Internship{" "}
            </h3>{" "}
            <p className="text-gray-400 mb-6">
              Triple One Solutions | 2024
            </p>{" "}
            <ul className="space-y-3 text-gray-300">
              {" "}
              <li>
                {" "}
                • Mastered AI/ML fundamentals including supervised and
                unsupervised learning{" "}
              </li>{" "}
              <li>
                {" "}
                • Built predictive models using real-world datasets and problem
                scenarios{" "}
              </li>{" "}
              <li>
                {" "}
                • Worked with Python libraries including NumPy, Pandas, and
                Scikit-learn{" "}
              </li>{" "}
              <li>
                {" "}
                • Applied data preprocessing, model evaluation, and optimization
                techniques{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Education Section */}{" "}
      <section className="bg-bright-yellow text-black px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-16">Education</h2>{" "}
        <div className="relative max-w-5xl mx-auto">
          {" "}
          {/* Central Timeline Line */}{" "}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-black"></div>{" "}
          {/* Timeline Items */}{" "}
          <div className="space-y-16">
            {" "}
            {/* Item 1 - Left Side */}{" "}
            <div className="relative flex items-start">
              {" "}
              {/* Left Content */}{" "}
              <div className="w-1/2 pr-12 text-right">
                {" "}
                <h3 className="text-2xl font-bold mb-2">
                  {" "}
                  B.Tech Computer Science & Engineering{" "}
                </h3>{" "}
                <p className="text-gray-700 font-semibold mb-3">
                  {" "}
                  Siksha 'O' Anusandhan University | 2023-2027{" "}
                </p>{" "}
                <p className="text-gray-800 leading-relaxed">
                  {" "}
                  Current student specializing in AI/ML, backend development,
                  and software engineering principles{" "}
                </p>{" "}
              </div>{" "}
              {/* Center Circle */}{" "}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                {" "}
                <div className="w-12 h-12 bg-black text-bright-yellow rounded-full flex items-center justify-center font-bold text-xl border-4 border-bright-yellow">
                  {" "}
                  1{" "}
                </div>{" "}
              </div>{" "}
              {/* Right Empty */} <div className="w-1/2 pl-12"></div>{" "}
            </div>{" "}
            {/* Item 2 - Right Side */}{" "}
            <div className="relative flex items-start">
              {" "}
              {/* Left Empty */} <div className="w-1/2 pr-12"></div>{" "}
              {/* Center Circle */}{" "}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                {" "}
                <div className="w-12 h-12 bg-black text-bright-yellow rounded-full flex items-center justify-center font-bold text-xl border-4 border-bright-yellow">
                  {" "}
                  2{" "}
                </div>{" "}
              </div>{" "}
              {/* Right Content */}{" "}
              <div className="w-1/2 pl-12 text-left">
                {" "}
                <h3 className="text-2xl font-bold mb-2">
                  Class XII – Science
                </h3>{" "}
                <p className="text-gray-700 font-semibold mb-3">
                  {" "}
                  Higher Secondary Education | 2023{" "}
                </p>{" "}
                <p className="text-gray-800 leading-relaxed">
                  {" "}
                  Physics, Chemistry, Mathematics, Computer Science{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Item 3 - Left Side */}{" "}
            <div className="relative flex items-start">
              {" "}
              {/* Left Content */}{" "}
              <div className="w-1/2 pr-12 text-right">
                {" "}
                <h3 className="text-2xl font-bold mb-2">
                  Class X – Secondary
                </h3>{" "}
                <p className="text-gray-700 font-semibold mb-3">
                  {" "}
                  Secondary School | 2021{" "}
                </p>{" "}
                <p className="text-gray-800 leading-relaxed">
                  {" "}
                  Foundation in mathematics and logical reasoning{" "}
                </p>{" "}
              </div>{" "}
              {/* Center Circle */}{" "}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                {" "}
                <div className="w-12 h-12 bg-black text-bright-yellow rounded-full flex items-center justify-center font-bold text-xl border-4 border-bright-yellow">
                  {" "}
                  3{" "}
                </div>{" "}
              </div>{" "}
              {/* Right Empty */} <div className="w-1/2 pl-12"></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* About Me Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">About Me</h2>{" "}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {" "}
          <div>
            {" "}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {" "}
              I'm a Computer Science undergraduate at Siksha 'O' Anusandhan
              University, passionate about leveraging artificial intelligence to
              solve meaningful problems. My journey combines a strong foundation
              in data structures and algorithms with hands-on experience in
              AI/ML systems and full-stack web development. I thrive on
              transforming complex technical challenges into elegant solutions,
              whether building predictive models for disaster management or
              creating responsive web applications, balancing academic
              coursework with industry internships to bridge theory and
              practice.{" "}
            </p>{" "}
            <p className="text-gray-300 text-lg leading-relaxed">
              {" "}
              My core values: continuous learning, collaborative
              problem-solving, and building technology that makes a tangible
              impact.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
            {" "}
            <img
              src="programmer-sitting-cloud-computing-symbol-process-coding-software-development-concept_294791-672.avif"
              alt="Developer illustration"
              className="w-full h-full object-cover rounded-lg"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Technical Skills Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>{" "}
        <div className="grid md:grid-cols-2 gap-12">
          {" "}
          {/* Programming Column */}{" "}
          <div>
            {" "}
            <h3 className="text-2xl font-bold mb-8">Programming</h3>{" "}
            <div className="space-y-6">
              {" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">Java</h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  Core Java, OOP, multithreading, GUI development{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  Python
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  AI/ML development, data analysis, automation scripts{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  JavaScript{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  Frontend development, Node.js backend, React ecosystem{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mt-12 mb-8">
              AI & Data Science
            </h3>{" "}
            <div className="space-y-6">
              {" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Machine Learning{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  Supervised/unsupervised learning, model evaluation,
                  hyperparameter tuning{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Libraries & Frameworks{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  NumPy, Pandas, Scikit-learn, TensorFlow, Keras{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Generative AI{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  LLMs, prompt engineering, AI-powered application
                  development{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Web & Backend Column */}{" "}
          <div>
            {" "}
            <h3 className="text-2xl font-bold mb-8">Web & Backend</h3>{" "}
            <div className="space-y-6">
              {" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Frameworks{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  Flask, Django, Express.js, Spring Boot{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  Databases
                </h4>{" "}
                <p className="text-gray-400">MySQL, MongoDB, PostgreSQL</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  API Development{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  RESTful services, GraphQL, WebSocket implementation{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mt-12 mb-8">
              Tools & DevOps
            </h3>{" "}
            <div className="space-y-6">
              {" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Version Control{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  Git, GitHub, GitLab workflows
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Cloud Platforms{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  AWS fundamentals, cloud deployment strategies{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-bright-yellow font-bold mb-2">
                  {" "}
                  Design Tools{" "}
                </h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  Figma for UI/UX prototyping, wireframing{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Featured Project Section */}{" "}
      <section
        id="projects"
        className="bg-bright-yellow text-black px-4 md:px-12 lg:px-20 py-20"
      >
        {" "}
        <h2 className="text-4xl font-bold mb-4">Featured Project</h2>{" "}
        <h3 className="text-3xl font-bold mb-12">
          {" "}
          AI Rockfall Predictor for Open Pit Mines{" "}
        </h3>{" "}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {" "}
          <div>
            {" "}
            <p className="text-gray-800 text-lg mb-6">
              {" "}
              An ML-powered system that predicts rockfall risk in mining
              operations by analyzing geological parameters including slope
              angle, rock composition, weather conditions, and historical
              incident data.{" "}
            </p>{" "}
            <p className="font-bold mb-2">Technology Stack:</p>{" "}
            <p className="text-gray-800 mb-6">
              {" "}
              Python, Random Forest Algorithm, Flask API, Pandas for data
              manipulation, Scikit-learn for ML, Leaflet.js for
              visualization{" "}
            </p>{" "}
            <p className="text-gray-800 text-lg mb-6">
              {" "}
              The system processes real-time sensor data and provides risk
              probability scores, enabling proactive safety measures. Achieved{" "}
              <strong>87% accuracy</strong> on test datasets.{" "}
            </p>{" "}
            <div className="flex gap-4">
              {" "}
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/Jazzy6990?tab=repositories",
                    "_blank",
                    "noopener noreferrer",
                  )
                }
                className="bg-black text-bright-yellow px-6 py-3 font-semibold rounded hover:brightness-90 transition"
              >
                {" "}
                GitHub Repository{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
            {" "}
            <img
              src="/17.jpg"
              alt="Rockfall Image"
              className="w-full h-full object-cover rounded-lg"
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* Feature Cards */}{" "}
        <div className="grid md:grid-cols-3 gap-6">
          {" "}
          <div className="bg-black text-white p-6 rounded-lg">
            {" "}
            <div className="text-4xl mb-4">⚡</div>{" "}
            <h4 className="text-xl font-bold mb-2">High Accuracy</h4>{" "}
            <p className="text-gray-300">
              {" "}
              87% prediction accuracy using ensemble methods{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-black text-white p-6 rounded-lg">
            {" "}
            <div className="text-4xl mb-4">⏱️</div>{" "}
            <h4 className="text-xl font-bold mb-2">Real-Time Processing</h4>{" "}
            <p className="text-gray-300">
              {" "}
              Live data integration from IoT sensors{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-black text-white p-6 rounded-lg">
            {" "}
            <div className="text-4xl mb-4">📊</div>{" "}
            <h4 className="text-xl font-bold mb-2">Visual Dashboard</h4>{" "}
            <p className="text-gray-300">
              Interactive maps showing risk zones
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Other Projects Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">Other Projects</h2>{" "}
        <div className="grid md:grid-cols-3 gap-8">
          {" "}
          {/* Project 1 */}{" "}
          <div>
            {" "}
            <div className="bg-gray-700 aspect-video rounded-lg mb-6 flex items-center justify-center">
              {" "}
              <img
                src="/unnamed.png"
                alt="Simon game illustration"
                className="w-full h-full object-cover rounded-lg"
              />{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mb-2">Simon Game</h3>{" "}
            <p className="text-gray-400 mb-4">
              {" "}
              Classic memory game built with JavaScript, HTML, and CSS. Features
              responsive design, increasing difficulty levels, and local score
              tracking.{" "}
            </p>{" "}
            <p className="text-bright-yellow font-semibold">
              {" "}
              stack: JavaScript, HTML5, CSS3{" "}
            </p>{" "}
          </div>{" "}
          {/* Project 2 */}{" "}
          <div>
            {" "}
            <div className="bg-gray-700 aspect-video rounded-lg mb-6 flex items-center justify-center">
              {" "}
              <img
                src="/free-map-illustration-vector.jpg"
                alt="map illustration"
                className="w-full h-full object-cover rounded-lg"
              />{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mb-2">CityScout</h3>{" "}
            <p className="text-gray-400 mb-4">
              {" "}
              Hackathon project that earned 2nd prize. Smart city navigation app
              suggesting optimal routes based on traffic, weather, and user
              preferences.{" "}
            </p>{" "}
            <p className="text-bright-yellow font-semibold">
              {" "}
              Stack: React Native, Node.js, MongoDB{" "}
            </p>{" "}
          </div>{" "}
          {/* Project 3 */}{" "}
          <div>
            {" "}
            <div className="bg-gray-700 aspect-video rounded-lg mb-6 flex items-center justify-center">
              {" "}
              <img
                src="/1000_F_670780115_VK3mLFJUc9ceN5XTXCwAIMXM3MgukwjR.jpg"
                alt="Presentation room illustration"
                className="w-full h-full object-cover rounded-lg"
              />{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mb-2">PitchPal</h3>{" "}
            <p className="text-gray-400 mb-4">
              {" "}
              AI-powered pitch deck analyzer that evaluates startup
              presentations and provides improvement suggestions using NLP
              techniques.{" "}
            </p>{" "}
            <p className="text-bright-yellow font-semibold">
              {" "}
              Stack: Python, TensorFlow, Flask{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Certifications Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">Certifications</h2>{" "}
        <div className="grid md:grid-cols-2 gap-8">
          {" "}
          {/* Cert 1 */}{" "}
          <div className="border border-gray-600 bg-dark-gray p-8 rounded-lg">
            {" "}
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Software Development Essentials{" "}
            </h3>{" "}
            <p className="text-bright-yellow font-semibold mb-4">
              {" "}
              Microsoft & LinkedIn{" "}
            </p>{" "}
            <p className="text-gray-300">
              {" "}
              Comprehensive training covering programming fundamentals, software
              architecture, and development best practices{" "}
            </p>{" "}
          </div>{" "}
          {/* Cert 2 */}{" "}
          <div className="border border-gray-600 bg-dark-gray p-8 rounded-lg">
            {" "}
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              GitHub Professional Certificate{" "}
            </h3>{" "}
            <p className="text-bright-yellow font-semibold mb-4">GitHub</p>{" "}
            <p className="text-gray-300">
              {" "}
              Advanced Git workflows, collaboration strategies, and GitHub
              ecosystem tools for professional development{" "}
            </p>{" "}
          </div>{" "}
          {/* Cert 3 */}{" "}
          <div className="border border-gray-600 bg-dark-gray p-8 rounded-lg">
            {" "}
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Generative AI for Productivity{" "}
            </h3>{" "}
            <p className="text-bright-yellow font-semibold mb-4">
              Microsoft
            </p>{" "}
            <p className="text-gray-300">
              {" "}
              Practical applications of large language models for content
              creation, code generation, and workflow automation{" "}
            </p>{" "}
          </div>{" "}
          {/* Cert 4 */}{" "}
          <div className="border border-gray-600 bg-dark-gray p-8 rounded-lg">
            {" "}
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Cloud Computing & DevOps{" "}
            </h3>{" "}
            <p className="text-bright-yellow font-semibold mb-4">
              {" "}
              Infosys Springboard{" "}
            </p>{" "}
            <p className="text-gray-300">
              {" "}
              Cloud infrastructure fundamentals, CI/CD pipelines,
              containerization, and deployment automation{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Honors & Awards Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">Honors & Awards</h2>{" "}
        <div className="max-w-3xl">
          {" "}
          <div className="relative pl-12">
            {" "}
            {/* Timeline line */}{" "}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-bright-yellow"></div>{" "}
            {/* Award 1 */}{" "}
            <div className="mb-12">
              {" "}
              <div className="absolute left-0 top-0 w-8 h-8 bg-bright-yellow rounded-full"></div>{" "}
              <h3 className="text-2xl font-bold mb-2">
                {" "}
                Smart India Hackathon 2025{" "}
              </h3>{" "}
              <p className="text-bright-yellow font-semibold mb-3">
                {" "}
                Journey Participant — AI for Disaster Management{" "}
              </p>{" "}
              <p className="text-gray-300">
                {" "}
                Selected among top teams nationwide to develop AI-powered
                solutions for disaster prediction and management. Project
                focused on early warning systems using satellite imagery and ML
                algorithms.{" "}
              </p>{" "}
            </div>{" "}
            {/* Award 2 */}{" "}
            <div>
              {" "}
              <div className="absolute left-0 top-32 w-8 h-8 bg-bright-yellow rounded-full"></div>{" "}
              <h3 className="text-2xl font-bold mb-2">
                {" "}
                Xensis Project Fair 2024{" "}
              </h3>{" "}
              <p className="text-bright-yellow font-semibold mb-3">
                {" "}
                2nd Prize Winner — CityScout{" "}
              </p>{" "}
              <p className="text-gray-300">
                {" "}
                Awarded second place for innovative city navigation application
                among 50+ student projects. Key features included real-time
                routing, traffic prediction, and multi-modal transit
                integration.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Get in Touch Section */}{" "}
      <section className="px-4 md:px-12 lg:px-20 py-20">
        {" "}
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>{" "}
        <div className="grid md:grid-cols-2 gap-16">
          {" "}
          {/* Contact Info */}{" "}
          <div>
            {" "}
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>{" "}
            <p className="text-gray-400 text-lg mb-6">
              {" "}
              I'm always interested in discussing new opportunities,
              collaborative projects, or anything related to AI and software
              development.{" "}
            </p>{" "}
            <p className="text-bright-yellow font-semibold text-lg mb-8">
              {" "}
              shobhitvishal377@gmail.com{" "}
            </p>{" "}
            <div className="flex gap-4 mb-12">
              {" "}
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vishal-shobhit-679861326",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="border border-bright-yellow text-bright-yellow px-6 py-3 font-semibold rounded hover:bg-bright-yellow hover:text-black transition"
              >
                {" "}
                LinkedIn{" "}
              </button>{" "}
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/Jazzy6990",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="border border-bright-yellow text-bright-yellow px-6 py-3 font-semibold rounded hover:bg-bright-yellow hover:text-black transition"
              >
                {" "}
                GitHub{" "}
              </button>{" "}
            </div>{" "}
            <h3 className="text-2xl font-bold mb-6">Available For</h3>{" "}
            <ul className="space-y-3 text-gray-300">
              {" "}
              <li>• Software Engineering Internships</li>{" "}
              <li>• AI/ML Development Roles</li>{" "}
              <li>• Full-Stack Development Projects</li>{" "}
              <li>• Research Collaborations</li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Language Proficiency */}{" "}
          <div>
            {" "}
            <h3 className="text-2xl font-bold mb-12">
              {" "}
              Technical Proficiencies{" "}
            </h3>{" "}
            <div className="space-y-12">
              {" "}
              {/* English - 90% */}{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div className="relative w-48 h-48 mb-6">
                  {" "}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full -rotate-90"
                  >
                    {" "}
                    {/* Background circle - dark gray */}{" "}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#2d2d2d"
                      strokeWidth="14"
                    />{" "}
                    {/* Progress circle - 90% - bright yellow */}{" "}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#ffeb3b"
                      strokeWidth="14"
                      strokeDasharray="475.5 628.3"
                      strokeLinecap="round"
                    />{" "}
                  </svg>{" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-5xl font-bold">90%</div>{" "}
                      <div className="text-gray-400 text-sm">
                        Proficiency
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="text-xl font-bold">English</h4>{" "}
                <p className="text-gray-400">Professional proficiency</p>{" "}
              </div>{" "}
              {/* Hindi - 90% */}{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div className="relative w-48 h-48 mb-6">
                  {" "}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full -rotate-90"
                  >
                    {" "}
                    {/* Background circle - dark gray */}{" "}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#2d2d2d"
                      strokeWidth="14"
                    />{" "}
                    {/* Progress circle - 90% - bright yellow */}{" "}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#ffeb3b"
                      strokeWidth="14"
                      strokeDasharray="475.5 628.3"
                      strokeLinecap="round"
                    />{" "}
                  </svg>{" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-5xl font-bold">90%</div>{" "}
                      <div className="text-gray-400 text-sm">
                        Proficiency
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="text-xl font-bold">Hindi</h4>{" "}
                <p className="text-gray-400">
                  {" "}
                  Professional working proficiency{" "}
                </p>{" "}
              </div>{" "}
              {/* German - 30% */}{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div className="relative w-48 h-48 mb-6">
                  {" "}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full -rotate-90"
                  >
                    {" "}
                    {/* Background circle - dark gray */}{" "}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#2d2d2d"
                      strokeWidth="14"
                    />{" "}
                    {/* Progress circle - 30% - bright yellow */}{" "}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#ffeb3b"
                      strokeWidth="14"
                      strokeDasharray="155.4 628.3"
                      strokeLinecap="round"
                    />{" "}
                  </svg>{" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-5xl font-bold">30%</div>{" "}
                      <div className="text-gray-400 text-sm">
                        Proficiency
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <h4 className="text-xl font-bold">German</h4>{" "}
                <p className="text-gray-400">Basic communication skills</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
