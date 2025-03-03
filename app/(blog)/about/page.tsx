import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-5 py-10">
      <section className="mb-20">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="relative mb-6 text-5xl font-bold text-slate-900">
            <span className="relative">
              About Me
              <div className="absolute -bottom-3 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-700">
            Software engineer, entrepreneur, and technology leader with a
            passion for innovation
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src="/profile.png"
                alt="Samuel Silva"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/samuelcastro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/samuelcasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/samuelcasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/samuelcasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-purple-600 text-white transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@samuelcasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">My Story</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                With over 15+ years of experience as a software engineer and
                technology leader, my career has been defined by a deep passion
                for solving complex problems and enabling innovation. From my
                early days in Brazil to Canada and then the USA, I&apos;ve
                gained a global perspective that fuels my drive to connect
                ideas, talent, and technology.
              </p>
              <p>
                Throughout my career, I&apos;ve worked across diverse
                industries, leveraging cutting-edge tools and methodologies to
                deliver impactful solutions. I specialize in building
                high-performing teams, driving strategic initiatives, and
                harnessing the power of emerging technologies like AI, cloud,
                and serverless to create scalable, secure, and efficient
                systems.
              </p>
              <p>
                I am passionate about fostering collaboration, mentoring others,
                and driving meaningful change through technology. Whether
                it&apos;s optimizing systems, enhancing user experiences, or
                leading cross-functional teams.
              </p>
              <p>
                Let&apos;s connect to share ideas, collaborate on challenging
                projects, or explore opportunities to drive the next wave of
                technological innovation together!
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
            My Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-slate-200"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <div className="ml-auto mr-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="ml-auto text-right md:ml-0">
                    <div className="inline-block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      2024
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Founded Linkeen
                    </h3>
                  </div>
                  <div className="mr-auto md:mr-0">
                    <p className="text-slate-700">
                      In 2024, I founded Linkeen.com, an IT Staff Augmentation
                      company that connected engineers and companies in North
                      America. At Linkeen, I managed teams of engineers to
                      develop web, cloud and AI solutions for different
                      industries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <div className="ml-auto mr-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="ml-auto text-right md:ml-0">
                    <div className="inline-block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      2024
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Developed Evolua.io
                    </h3>
                  </div>
                  <div className="mr-auto md:mr-0">
                    <p className="text-slate-700">
                      I developed Evolua.io, an AI code-platform for code review
                      focused on security and code quality, helping teams
                      deliver better software faster while maintaining high
                      standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <div className="ml-auto mr-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="ml-auto text-right md:ml-0">
                    <div className="inline-block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      2021
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Moved to the USA
                    </h3>
                  </div>
                  <div className="mr-auto md:mr-0">
                    <p className="text-slate-700">
                      In 2021, I relocated to the United States to pursue new
                      opportunities and expand my professional network in one of
                      the world&apos;s leading technology markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <div className="ml-auto mr-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="ml-auto text-right md:ml-0">
                    <div className="inline-block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      2019
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Created Booking Platform
                    </h3>
                  </div>
                  <div className="mr-auto md:mr-0">
                    <p className="text-slate-700">
                      Back in 2019, while still living in Vancouver, Canada, I
                      created a booking platform for the international education
                      industry, connecting students with educational
                      institutions worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative pt-10">
                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <div className="ml-auto mr-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="ml-auto text-right md:ml-0">
                    <div className="inline-block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                      2016
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Moved to Canada
                    </h3>
                  </div>
                  <div className="mr-auto md:mr-0">
                    <p className="text-slate-700">
                      In 2016, I embarked on an international journey by moving
                      to Canada, where I expanded my professional horizons and
                      gained valuable experience in the North American tech
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                  Evolua.io
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  AI Code Review Platform
                </h3>
                <p className="mb-4 text-slate-700">
                  An AI-powered platform that helps teams improve code quality
                  and security through automated reviews and suggestions.
                </p>
                <a
                  href="https://evolua.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
                >
                  Visit Project
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                  Linkeen
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  IT Staff Augmentation
                </h3>
                <p className="mb-4 text-slate-700">
                  Connecting talented engineers with companies in North America,
                  providing staffing solutions for web, cloud, and AI
                  development.
                </p>
                <a
                  href="https://linkeen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
                >
                  Visit Project
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 bg-gradient-to-r from-blue-300 to-purple-400">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                  Education Platform
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  International Education Booking
                </h3>
                <p className="mb-4 text-slate-700">
                  A platform connecting students with educational institutions
                  worldwide, streamlining the booking and enrollment process.
                </p>
                <span className="inline-flex items-center text-slate-500">
                  Private Project
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/samsilvas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              Book a Call
            </a>
            <a
              href="mailto:samuelcastrosilva@gmail.com"
              className="rounded-full border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
