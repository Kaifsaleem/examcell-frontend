// Import necessary components for page layout
"use client"
import PageIllustration from "@/components/page-illustration";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState } from "react";

// Export metadata for the page
// export const metadata = {
//   title: "Documentation - Examcell",
//   description: "Guide for using and configuring the Examcell platform",
// };

// Sidebar Component with collapsible headings and subheadings
const Sidebar = ({ onSelectSection, activeSection }: { onSelectSection: (section: string, subheading: string | null) => void; activeSection: string | null }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  // Toggle function to open/close sections
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
    onSelectSection(section, null); // Load all content when a main heading is clicked
  };

  // Sidebar content structure
//   const sidebarSections = {
//     introduction: {
//       title: "Introduction",
//       subheadings: ["Overview", "Purpose"],
//     },
//     philosophy: {
//       title: "Philosophy",
//       subheadings: ["Approach", "Inspiration"],
//     },
//     installation: {
//       title: "Installation",
//       subheadings: ["Dependencies", "Configuration"],
//     },
//     features: {
//       title: "Features",
//       subheadings: ["Proctoring", "Analytics"],
//     },
//     configuration: {
//       title: "Configuration",
//       subheadings: ["Exam Setup", "Role Management"],
//     },
//     api: {
//       title: "API",
//       subheadings: ["Authentication", "Endpoints"],
//     },
    //   };
    const sidebarSections = {
  introduction: {
    title: "Introduction",
    subheadings: ["Purpose", "Key Features"]
  },
  userRolesAndAccess: {
    title: "User Roles and Access",
    subheadings: ["Institute Access", "Teacher Access", "Student Access"]
  },
  examManagement: {
    title: "Exam Management",
    subheadings: ["Exam Creation and Setup", "Exam Assignment", "Secure Exam Interface"]
  },
  aiMonitoringAndAntiCheatingMeasures: {
    title: "AI Monitoring and Anti-Cheating Measures",
    subheadings: ["Face Tracking", "Behavioral Analysis", "Real-Time Teacher Alerts"]
  },
  examCompletionAndAutoSubmission: {
    title: "Exam Completion and Auto-Submission",
    subheadings: ["Auto-Submission Functionality", "Review Before Submission"]
  },
  resultManagement: {
    title: "Result Management",
    subheadings: ["Automated Grading", "Exam Result Publishing", "Performance Insights"]
  },
  reportingAndAnalytics: {
    title: "Reporting and Analytics",
    subheadings: ["Comprehensive Exam Reports", "Class Performance Tracking", "Incident Reports"]
  },
  userDocumentationAndSupport: {
    title: "User Documentation and Support",
    subheadings: ["Help Center Resources", "Dedicated Technical Support"]
  },
  dataPrivacyAndSecurity: {
    title: "Data Privacy and Security",
    subheadings: ["Secure Data Encryption", "Ethical AI Standards"]
  },
  advancedFeatures: {
    title: "Advanced Features",
    subheadings: ["Adaptive AI Proctoring", "Integration Capabilities", "Scalable Infrastructure", "Customizable Reports and Analytics", "Compliance and Audit Trails"]
  }
};


  return (
    <div className="w-64  text-white p-4 h-screen fixed top-55 left-0 overflow-y-auto  border-r " style={{ borderColor: "#5A59EC" }}>
      <ul>
        {Object.entries(sidebarSections).map(([key, section]) => (
          <li key={key}>
            {/* Main heading */}
            <button
              onClick={() => toggleSection(key)}
              className="block py-2 text-left w-full font-bold"
            >
              {section.title}
            </button>
            {/* Subheadings */}
            {openSections[key] && (
              <ul className="pl-4">
                {section.subheadings.map((sub, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onSelectSection(key, sub)}
                      className={`block py-1 text-left w-full ${
                        activeSection === sub ? "font-semibold text-pink-500" : ""
                      }`}
                    >
                      {sub}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Document Component with Dynamic Section Rendering
export default function Document() {
  const [selectedSection, setSelectedSection] = useState<{ section: string; subheading: string | null }>({ section: "introduction", subheading: null });

  // Function to handle section and subheading selection
  const handleSelectSection = (section: string, subheading: string | null) => {
    setSelectedSection({ section, subheading });
  };

  // Section content data
//   const sections: { [key: string]: { [key: string]: string } } = {
//     introduction: {
//       Overview: "Examcell is designed to simplify online exams.",
//       Purpose: "Examcell aims to maintain exam integrity with proctoring.",
//     },
//     philosophy: {
//       Approach: "Our approach centers on security and reliability.",
//       Inspiration: "Inspired by industry standards for digital exams.",
//     },
//     installation: {
//       Dependencies: "Install necessary dependencies for Examcell.",
//       Configuration: "Setup configuration for the database and API.",
//     },
//     features: {
//       Proctoring: "AI-based monitoring for integrity.",
//       Analytics: "Detailed real-time analytics for administrators.",
//     },
//     configuration: {
//       "Exam Setup": "Customize your exam parameters.",
//       "Role Management": "Define roles for students and proctors.",
//     },
//     api: {
//       Authentication: "Handle user authentication via API.",
//       Endpoints: "Various endpoints for managing exams and users.",
//     },
    //   };
    const sections: { [key: string]: { [key: string]: string } } = {
  introduction: {
    Purpose: "ExamCell is an advanced online examination platform that enhances exam integrity through AI monitoring, providing institutions with a comprehensive toolset for secure, efficient exams.",
    KeyFeatures: "AI-powered proctoring, role-based access controls, secure exam environments, detailed analytics, and automated workflows for ease of management and operational efficiency."
  },
  userRolesAndAccess: {
    InstituteAccess: "Institutes manage exams, oversee exam schedules, and monitor exam status. Access is granted for full exam analytics, exam reports, and user management, ensuring control over all examination activities.",
    TeacherAccess: "Teachers create exams, define questions and timing, manage student access, and monitor real-time analytics. Teachers receive alerts for suspicious activities and access detailed incident reports.",
    StudentAccess: "Students register using institute-provided credentials, access assigned exams, and adhere to proctoring guidelines. Students can view exam results and performance analytics post-exam."
  },
  examManagement: {
    ExamCreationAndSetup: "Teachers set question types (MCQs, essays, etc.), schedule timings, and configure rules (e.g., shuffling questions, time limits). Advanced configurations for proctoring and grading modes are also available.",
    ExamAssignment: "Exams are assigned to specific students or groups, and notifications are sent to ensure timely participation.",
    SecureExamInterface: "A streamlined, distraction-free interface that provides instructions, a timer, and live AI proctoring for a controlled test-taking environment."
  },
  aiMonitoringAndAntiCheatingMeasures: {
    FaceTracking: "Utilizes facial recognition technology to verify student presence during the exam. Warnings are triggered if the student’s face is undetected, and repeated absence results in auto-submission.",
    BehavioralAnalysis: "Monitors and detects behaviors that may indicate cheating, such as gaze direction, multiple faces, or suspicious movements. Logs all detected incidents for post-exam review.",
    RealTimeTeacherAlerts: "Provides teachers with real-time alerts on flagged behaviors, allowing immediate intervention or incident logging for later examination."
  },
  examCompletionAndAutoSubmission: {
    AutoSubmissionFunctionality: "Automatically submits exams when the time limit is reached or if AI flags recurring suspicious behavior, ensuring integrity without manual intervention.",
    ReviewBeforeSubmission: "Students are given a final review opportunity before submitting answers, promoting thoroughness and reducing errors."
  },
  resultManagement: {
    AutomatedGrading: "Objective questions are graded automatically for speed and accuracy, with manual grading options for essay and descriptive responses.",
    ExamResultPublishing: "Exam results can be published individually or to the entire class, with incident flags and analytics available for review.",
    PerformanceInsights: "Detailed performance analytics enable students to understand strengths and weaknesses, while institutes access performance trends and insights across cohorts."
  },
  reportingAndAnalytics: {
    ComprehensiveExamReports: "Provides a thorough report on exam statistics, attendance, and behavior incidents, supporting data-driven decision-making.",
    ClassPerformanceTracking: "Monitors class progress over time, highlighting areas for curriculum improvement and student development needs.",
    IncidentReports: "Detailed logs of AI-detected incidents for each exam, allowing institutions to evaluate common behaviors and adjust policies as necessary."
  },
  userDocumentationAndSupport: {
    HelpCenterResources: "Comprehensive guides and FAQs for institutes, teachers, and students. Explains usage and best practices for leveraging ExamCell’s full capabilities.",
    DedicatedTechnicalSupport: "Includes prompt technical support for troubleshooting and feedback channels to continually enhance ExamCell based on user input."
  },
  dataPrivacyAndSecurity: {
    SecureDataEncryption: "All sensitive data, including exam results and student information, is encrypted in transit and at rest. Access is restricted based on authenticated user roles to maintain privacy.",
    EthicalAIStandards: "AI monitoring operates transparently, with clear communication to users. Data is only retained with consent, aligning with industry standards for privacy and ethical AI usage."
  },
  advancedFeatures: {
    AdaptiveAIProctoring: "Uses adaptive algorithms to improve monitoring accuracy, adjusting sensitivity based on behavior trends and reducing false positives.",
    IntegrationCapabilities: "Seamlessly integrates with Learning Management Systems (LMS) and Student Information Systems (SIS) for streamlined operations and centralized data management.",
    ScalableInfrastructure: "ExamCell is built on a scalable infrastructure to support large institutions and accommodate heavy exam loads, ensuring consistent performance.",
    CustomizableReportsAndAnalytics: "Institutes can customize reporting parameters to meet specific analytical needs, supporting targeted interventions and academic planning.",
    ComplianceAndAuditTrails: "Provides detailed audit trails for each exam, ensuring regulatory compliance and enabling institutes to trace incidents with timestamped accuracy."
  }
};


  return (
    <>
      <PageIllustration />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar onSelectSection={handleSelectSection} activeSection={selectedSection.subheading} />

        {/* Content Area */}
        <div className="flex-grow p-6 h-screen overflow-y-auto ml-64">
          {/* Dynamic Section Rendering */}
          {selectedSection.subheading ? (
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {selectedSection.subheading}
              </h2>
              <p className="text-lg">
                {sections[selectedSection.section][selectedSection.subheading]}
              </p>
            </section>
          ) : (
            Object.entries(sections[selectedSection.section]).map(
              ([subheading, content]) => (
                <section key={subheading} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">{subheading}</h2>
                  <p className="text-lg">{content}</p>
                </section>
              )
            )
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
