"use client";

import { useState } from "react";
import Link from "next/link";

function ExperienceSection() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  // Initial experiences (most recent 3)
  const initialExperiences = [
    {
      title: "Sr. Software Engineer (AI)",
      company: "Linkeen, LLC",
      period: "April 2024 - Present",
      achievements: [
        "Developed from scratch an AI code review platform that reduced code review time by 40% while improving security and code quality. (Evolua.io)",
        "Developed both frontend (Next.js) and backend web applications using Node.js, Typescript and AWS Bedrock as main AI platform.",
        "Developed full stack applications for leveraging the power of serverless architecture using AWS Lambdas, AppSync, Graphql, EventBridge and DynamoDB using Next.js in the frontend that supports millions of requests per seconds.",
        "Developed custom RAG solutions using vector databases like Pinecone and Supabase PostgreSQL/pgvector.",
        "Developed AI agents using Langchain/LangGraph/Python with Pinecone for similarity search.",
        "Developed a Next.js application for the international education industry that connected 10k schools worldwide.",
      ],
    },
    {
      title: "Staff Software Engineer",
      company: "Snap One, LLC",
      period: "January 2021 - April 2024",
      achievements: [
        "Developed and maintained web application solutions for home automation (IoT) and device management that helped thousands of homeowners manage their devices.",
        "Implemented an entire React and Node.js application using JavaScript/Typescript as the company hospitality solution.",
        "Architected cloud infrastructure solutions based on AWS (Amazon Web Services).",
        "Developed new APIs using Nest.js, PostgreSQL, and the TypeORM framework.",
        "Developed solutions based on the JAMstack (Next.js, Gatsby).",
        "Developed unit and integration tests for code quality.",
        "Developed workflows and strategies to improve the team's productivity.",
        "Mentored and guided other engineers.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Control4 Corporation",
      period: "January 2019 - December 2020",
      achievements: [
        "Architected and developed web software solutions for residential/home automation.",
        "Developed APIs using Nest.js and the TypeORM framework.",
        "Developed IoT solutions for the hospitality industry using Node.js, JavaScript, and Typescript.",
        "Integrated payment support using Stripe.js.",
        "Implemented web applications using the JAMstack (Next.js, Gatsby).",
        "Implemented and maintained web applications using React.js.",
        "Mentored engineers on best practices in software development.",
        "Led the team of software engineers defining best practices and reviewing work.",
        "Defined best practices in software development based on JavaScript and React.js.",
        "Developed CI/CD workflows using GitHub Actions and AWS (Amazon Web Services).",
        "Developed reusable libraries to be used by different teams using JavaScript, Node.js, and React.js.",
      ],
    },
  ];

  // Additional experiences to show when "Load More" is clicked
  const additionalExperiences = [
    {
      title: "Senior Software Engineer",
      company: "Edvisor.io",
      period: "March 2016 - December 2018",
      achievements: [
        "Developed and maintained web applications using Javascript/Typescript, Node.js, Angular.js, ORM, Relational and documented-oriented database (MySQL).",
        "Implemented backend API endpoints using technologies like Express, and Graphql.",
        "Led the team as a tech leader.",
        "Conducted tests and performed security and quality controls.",
        "Developed unit tests and end-to-end tests using Jest/Jasmine/AVA.",
        "Wrote reusable directives/components and modules to be reused across the development life-cycle.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Integritas Solutions Inc.",
      period: "May 2014 - March 2016",
      achievements: [
        "Developed new features and fixed issues in several web and mobile applications using JavaScript, TypeScript, and Node.js.",
        "Developed mobile solutions using Ionic.",
        "Created reusable components using Angular.js and JavaScript to be used across the company by different teams.",
        "Brainstormed, architected, and developed software for different projects.",
        "Developed containerization strategies to deploy web experiences and APIs.",
        "Developed the new backend APIs based on Node.js and Hapi.js as the HTTP framework.",
        "Implemented unit, integration, and end-to-end tests for code quality using Jest.",
      ],
    },
    {
      title: "Software Engineer",
      company: "People Ingles & Educacao Tecnologica",
      period: "November 2010 - April 2014",
      achievements: [
        "Implemented web and API solutions using JavaScript, TypeScript, and Node.js.",
        "Created tests using the TDD (Test Driven Development) strategy.",
        "Implemented and maintained cloud infrastructure using Amazon Web Services (AWS).",
        "Implemented containerization solutions to deploy web apps and APIs using Kubernetes.",
        "Led the development team as a scrum master.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Condumig",
      period: "April 2009 - September 2010",
      achievements: [
        "Implemented the company's first web solution allowing external employees to request quotes and submit orders.",
        "Architected and developed web and desktop solutions based on the Java platform using Java Database Connectivity (JDBC), and Java Persistence API (JPA).",
        "Created and maintained database tables using MySQL and JDBC (Java Database Connectivity)",
        "Implemented unit tests for code quality.",
      ],
    },
  ];

  const allExperiences = [...initialExperiences, ...additionalExperiences];
  const displayedExperiences = showAllExperiences
    ? allExperiences
    : initialExperiences;

  return (
    <section className="mb-20">
      <div className="mb-12 text-center">
        <h2 className="relative mb-6 text-5xl font-bold text-slate-900">
          <span className="relative">
            My Experience
            <div className="absolute -bottom-3 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-slate-700">
          Full Stack Engineer with 15+ years of experience building innovative
          web solutions
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-16 rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="mb-6 text-2xl font-bold text-slate-800">Skills</h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="mb-3 flex items-center font-bold text-slate-900">
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Javascript", "Typescript", "Python"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="mb-3 flex items-center font-bold text-slate-900">
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "React.js",
                "Next.js",
                "Angular",
                "Jest/Vitest",
                "Supabase",
                "AWS",
                "Vector Databases",
                "DynamoDB",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="mb-3 flex items-center font-bold text-slate-900">
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </span>
              AI
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS Bedrock",
                "LangChain",
                "LangGraph",
                "Prompt Engineering",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="space-y-8">
        {displayedExperiences.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            period={job.period}
            achievements={job.achievements}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAllExperiences(!showAllExperiences)}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {showAllExperiences ? (
            <>
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
              Show Less
            </>
          ) : (
            <>
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
              Load More Experience
            </>
          )}
        </button>
      </div>

      {/* Education & Certifications in a single row */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">Education</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-slate-800">
                B.S Computer Information System
              </h4>
              <p className="text-slate-700">
                Faculdade Pitagoras, Divinopolis, MG, Brazil
              </p>
              <p className="text-sm text-slate-600">July 2016</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-slate-50 p-6 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">
            Certifications
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start">
              <svg
                className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Systems Operations on AWS - Amazon Web Services
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Serverless Architecture Certification - AWS
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Adobe Flex Framework - Eng. DTP Multimedia
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Java Programming Language Certification - People Computacao
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function JobCard({
  title,
  company,
  period,
  achievements,
}: {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
      <div className="flex flex-col border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-lg text-blue-600">{company}</p>
        </div>
        <div className="mt-2 rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700 sm:mt-0">
          {period}
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex">
            <svg
              className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-slate-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-5 py-10">
      <ExperienceSection />
    </div>
  );
}
