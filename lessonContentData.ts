import { LessonContent } from './types';
import { sprintTopics } from './curriculumData';

export const lessonContentData: Record<string, LessonContent> = {
  // Sprint Overviews
  "Sprint 1: Overview": {
    title: "Sprint 1 — Building Basics and Introduction to Robotics",
    description: "This sprint introduces students to the fundamentals of robotics, focusing on what robots are, how they work, and how mechanical design connects to programming. Students progress from exploring VEX IQ components to building their first functioning robot — the Clawbot.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will learn the foundational concepts of robotics and engineering through hands-on building. They will identify key parts of the VEX IQ kit, follow build instructions, and collaborate to complete a fully functional <strong>Clawbot</strong> by the end of the sprint.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 1 — Building Basics</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week; total 8 hours)</li><li><strong>Focus:</strong> Robot fundamentals, teamwork, and hands-on building.</li></ul><hr>`,
        `<h3>Engineering and Collaboration Foundations</h3><p>Before beginning the robot build, students will also learn how to document their progress in <strong>Engineering Notebooks</strong> and practice <strong>partner collaboration</strong> for both building and coding.</p><h4>Engineering Notebooks</h4><p>Students are introduced to proper documentation habits used by engineers. Each pair of students maintains one shared notebook to record:</p><ul><li>Date and sprint week</li><li>Objectives for the session</li><li>Notes, sketches, and observations</li><li>Problems encountered and solutions found</li><li>Reflection on teamwork and learning progress</li></ul><p>Notebooks serve as both technical journals and team portfolios, helping students track growth throughout all future sprints.</p><h4>Partner Collaboration</h4><p>Since all projects are completed in pairs, students learn how to divide tasks equally and communicate effectively.</p><ul><li>During building, teams alternate by step number (e.g., Student A builds Steps 1–9, Student B builds Steps 10–19).</li><li>During coding, teams alternate between <strong>Driver (Coder)</strong> and <strong>Navigator (Debugger)</strong> roles.</li><li>Roles rotate each class session to ensure balanced participation.</li></ul><p>By establishing these systems early, students build habits that support fairness, communication, and accountability across all sprints.</p><hr>`,
        `<h3>Learning Goals</h3><ul><li>Understand what a robot is and how it combines sensors, motors, and logic.</li><li>Identify and correctly use VEX IQ components.</li><li>Follow step-by-step build instructions and work collaboratively.</li><li>Assemble and test the <strong>Clawbot</strong>, understanding the function of each subsystem.</li><li>Develop teamwork and problem-solving skills through hands-on engineering.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>VEX IQ 2nd Generation Education Kits (one per team)</li><li>VEX IQ build instructions (Base Bot and Clawbot)</li><li>Screwdrivers and storage bins</li><li>Labeled build mats or workstations</li><li>Engineering Notebooks</li><li>Computers or tablets for viewing digital build guides</li></ul><hr>`,
        `<h3>Final Project — The Clawbot Build</h3><p>Students will complete the sprint by building a fully functional <strong>Clawbot</strong>. The project emphasizes teamwork, mechanical understanding, and accuracy in assembly.</p><p><strong>Goal:</strong> Build a robot that can drive, turn, and use its claw to grab and move objects.</p><strong>Requirements:</strong><ul><li>Complete the full Clawbot build following official VEX IQ instructions.</li><li>Test drive and verify claw operation.</li><li>Record notes and reflections in the Engineering Notebook.</li><li>Present the completed robot and explain its functions.</li></ul><hr>`,
        `<h3>Weekly Breakdown</h3><p>Each session lasts two hours, for a total of four sessions (8 hours). The sprint moves from introduction to completion of the Clawbot build.</p><h4>Week 1 — Introduction to Robotics and Base Bot Build</h4><p><strong>Focus:</strong> Understanding what robots are and starting the Base Bot.</p><p><strong>Activities:</strong></p><ul><li>Discuss: What is a robot? How do humans use them?</li><li>Explore the VEX IQ kit: sensors, motors, and structural parts.</li><li>Begin building the <strong>Base Bot</strong> using provided instructions.</li></ul><p><strong>Deliverable:</strong> Completed robot base with functioning drivetrain.</p><h4>Week 2 — Simple Clawbot and Driving Practice</h4><p><strong>Focus:</strong> Expanding the Base Bot with a simple claw and learning robot control.</p><p><strong>Activities:</strong></p><ul><li>Add the claw assembly and verify motion.</li><li>Practice driving and maneuvering with the controller.</li><li>Introduce basic teamwork and troubleshooting.</li></ul><p><strong>Deliverable:</strong> Working claw mechanism and basic driving test.</p><h4>Week 3 — Full Clawbot Assembly</h4><p><strong>Focus:</strong> Completing the full robot structure.</p><p><strong>Activities:</strong></p><ul><li>Add the arm assembly and mount all sensors.</li><li>Check gear alignments and wiring.</li><li>Continue testing claw and drivetrain operation.</li></ul><p><strong>Deliverable:</strong> Nearly complete Clawbot ready for final adjustments.</p><h4>Week 4 — Final Clawbot Completion and Testing</h4><p><strong>Focus:</strong> Finalizing and reviewing the complete build.</p><p><strong>Activities:</strong></p><ul><li>Inspect for stability, alignment, and wiring accuracy.</li><li>Perform full motion test: drive, lift, grab, and release.</li><li>Reflect as a team on the building process and teamwork.</li></ul><p><strong>Deliverable:</strong> Fully functional Clawbot and completed Engineering Notebook entry.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody><tr><td class="border-b p-2 border-slate-700"><strong>Build Accuracy</strong></td><td class="border-b p-2 border-slate-700">All parts assembled correctly; robot fully functional</td><td class="border-b p-2 border-slate-700">Minor build errors but mostly functional</td><td class="border-b p-2 border-slate-700">Incomplete or requires teacher support</td><td class="border-b p-2 border-slate-700">Major errors; robot nonfunctional</td></tr><tr><td class="border-b p-2 border-slate-700"><strong>Teamwork</strong></td><td class="border-b p-2 border-slate-700">Excellent collaboration and communication</td><td class="border-b p-2 border-slate-700">Good teamwork with minor conflicts</td><td class="border-b p-2 border-slate-700">Uneven participation</td><td class="border-b p-2 border-slate-700">Minimal teamwork</td></tr><tr><td class="border-b p-2 border-slate-700"><strong>Problem Solving</strong></td><td class="border-b p-2 border-slate-700">Independently resolves build issues</td><td class="border-b p-2 border-slate-700">Resolves most problems with guidance</td><td class="border-b p-2 border-slate-700">Needs frequent help</td><td class="border-b p-2 border-slate-700">Unable to troubleshoot</td></tr><tr><td class="border-b p-2 border-slate-700"><strong>Understanding Components</strong></td><td class="border-b p-2 border-slate-700">Clearly identifies and explains part functions</td><td class="border-b p-2 border-slate-700">Understands most part purposes</td><td class="border-b p-2 border-slate-700">Limited understanding</td><td class="border-b p-2 border-slate-700">Unclear about components</td></tr><tr><td class="border-b p-2 border-slate-700"><strong>Notebook Documentation</strong></td><td class="border-b p-2 border-slate-700">Detailed, organized notes and reflections</td><td class="border-b p-2 border-slate-700">Notes mostly complete</td><td class="border-b p-2 border-slate-700">Minimal documentation</td><td class="border-b p-2 border-slate-700">No documentation</td></tr></tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: [
            "Encourage exploration: let students identify and name parts before building.",
            "Emphasize safety when using tools and handling components.",
            "Reinforce that teamwork and communication are as important as the build itself.",
            "If time allows, host a simple “Drive Challenge” at the end where teams navigate a small course.",
            "Ensure all robots are labeled with team names for storage between sessions."
        ]
    },
    proTips: {
        title: "References",
        points: [
            "VEX Education Build Instructions: https://education.vex.com/stemlabs/iq/builds",
            "VEX Robotics: https://www.vexrobotics.com/iq"
        ]
    }
  },
  "Sprint 2: Overview": {
    title: "Sprint 2 — Robotics with VEX IQ: Foundational Coding",
    description: "This sprint brings the Clawbot to life by introducing the fundamentals of programming with VEXcode IQ. Students will progress from basic movements and turns to using loops and logic to complete autonomous tasks, culminating in the Treasure Hunt Challenge.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will learn to program their VEX IQ Clawbot to perform autonomous movements using VEXcode IQ. This sprint covers drivetrain commands, turning, and the use of loops to create repeatable patterns like driving in a square.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 2 — Foundational Coding</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Programming fundamentals, loops, and conditionals.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Write a simple program to make the robot drive forward and reverse.</li><li>Program the robot to make precise turns in degrees.</li><li>Use loops to repeat a sequence of commands efficiently.</li><li>Understand the difference between autonomous control and driver control.</li><li>Apply mathematical concepts to program the robot to navigate geometric paths.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>Fully Assembled VEX IQ Clawbot with Optical Sensor</li><li>VEXcode IQ (Blocks or Python)</li><li>Field tiles and colored cubes for challenges</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "Treasure Hunt Challenge"</h3><p>Students will program their robot to autonomously navigate a small field, detect a colored 'treasure' using the Optical Sensor, and move it to a target zone. This project integrates movement, turning, loops, and conditional logic.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: Variables and Operators</h4><p><strong>Focus:</strong> Introduction to programming logic, variables, and basic robot movements.</p>
        <h4>Week 2: Loops</h4><p><strong>Focus:</strong> Using loops to create efficient, repeatable actions like driving in a square.</p>
        <h4>Week 3: Conditional Statements</h4><p><strong>Focus:</strong> Making the robot 'smart' by having it make decisions based on sensor input.</p>
        <h4>Week 4: Treasure Hunt Challenge</h4><p><strong>Focus:</strong> Integrating all learned concepts to complete the final project.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Coding Logic</strong></td><td class="border-b p-2 border-slate-700">Effectively uses variables, loops, and conditionals</td><td class="border-b p-2 border-slate-700">Functional code with minor errors</td><td class="border-b p-2 border-slate-700">Partial use of concepts</td><td class="border-b p-2 border-slate-700">Manual control only</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Sensor Integration</strong></td><td class="border-b p-2 border-slate-700">Optical Sensor accurate and reliable</td><td class="border-b p-2 border-slate-700">Occasional errors</td><td class="border-b p-2 border-slate-700">Limited sensor function</td><td class="border-b p-2 border-slate-700">No sensor integration</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Problem Solving</strong></td><td class="border-b p-2 border-slate-700">Debugs and optimizes independently</td><td class="border-b p-2 border-slate-700">Occasional teacher support</td><td class="border-b p-2 border-slate-700">Frequent guidance needed</td><td class="border-b p-2 border-slate-700">Unable to debug</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Start with the 'Drivetrain' template in VEXcode IQ to simplify the initial setup.", "Use masking tape on the floor to create paths and shapes for the students to program their robots to follow.", "Introduce the concept of pseudocode (writing out the program steps in plain English) before they start coding."]
    },
    proTips: {
        title: "References",
        points: ["VEXcode IQ Documentation: https://codeiq.vex.com", "VEX Education STEM Labs: https://education.vex.com/stemlabs/iq"]
    }
  },
  "Sprint 3: Overview": {
    title: "Sprint 3 — Advanced Robotics with Sensors",
    description: "This sprint dives into the world of sensors, teaching students how to make their robots 'smart' by reacting to their environment. Students will use all four main VEX IQ sensors and learn to organize complex code using MyBlocks (functions).",
    stepByStep: [
        `<h3>Objective</h3><p>Students will integrate the Optical, Distance, Bumper, and Inertial sensors into their robot's programming to complete complex autonomous tasks. They will also learn to create MyBlocks (functions) to write modular, reusable, and more organized code.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 3 — Advanced Robotics</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Sensor integration, modular programming (MyBlocks), and collaborative engineering.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Program the robot to make decisions using sensor input and conditional statements.</li><li>Use the Distance Sensor for obstacle avoidance.</li><li>Use the Optical Sensor to detect and sort objects by color.</li><li>Use the Bumper Switch to detect contact with a wall or object.</li><li>Use the Inertial Sensor to make precise, repeatable turns.</li><li>Create and use MyBlocks to simplify complex programs.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>VEX IQ Clawbot with all four sensors attached</li><li>VEXcode IQ</li><li>Field tiles, cubes, and other obstacles for the final mission</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "Autonomous Rescue Mission"</h3><p>Working in pairs, students will program their robot to autonomously navigate a course, locate a specific colored cube ('survivor'), avoid other colored cubes ('hazards'), and deliver the survivor to a safe zone, using all four sensors and at least one MyBlock.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: Advanced Sensors & Partner Coding</h4><p><strong>Focus:</strong> Introduce advanced sensors and the partner coding workflow. Deliverable: Sensor calibration tests.</p>
        <h4>Week 2: Modular Programming with MyBlocks</h4><p><strong>Focus:</strong> Learn and create MyBlocks for reusable code. Deliverable: One tested MyBlock (e.g., Search or Retrieve).</p>
        <h4>Week 3: Logic Integration</h4><p><strong>Focus:</strong> Integrate all sensors and refine logic for the mission. Deliverable: A working prototype.</p>
        <h4>Week 4: Final Mission Run & Presentation</h4><p><strong>Focus:</strong> Complete the autonomous mission and present results. Deliverable: Successful run and notebook review.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Coding Logic</strong></td><td class="border-b p-2 border-slate-700">Fully modular program using all key concepts</td><td class="border-b p-2 border-slate-700">Functional code with minor issues</td><td class="border-b p-2 border-slate-700">Partial logic integration</td><td class="border-b p-2 border-slate-700">Minimal use of advanced features</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Sensor Integration</strong></td><td class="border-b p-2 border-slate-700">All sensors purposeful and calibrated</td><td class="border-b p-2 border-slate-700">Minor inconsistencies</td><td class="border-b p-2 border-slate-700">Limited or unstable integration</td><td class="border-b p-2 border-slate-700">Missing or unused sensors</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Collaboration</strong></td><td class="border-b p-2 border-slate-700">Clear role rotation, active communication</td><td class="border-b p-2 border-slate-700">Mostly balanced teamwork</td><td class="border-b p-2 border-slate-700">Uneven contribution</td><td class="border-b p-2 border-slate-700">One-sided effort</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Engineering Notebook</strong></td><td class="border-b p-2 border-slate-700">Thorough, organized, includes sketches, tests, and reflections</td><td class="border-b p-2 border-slate-700">Mostly complete and clear</td><td class="border-b p-2 border-slate-700">Partial entries</td><td class="border-b p-2 border-slate-700">Sparse or missing content</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Dedicate time to calibrating sensors, as environmental factors like lighting can affect their readings.", "Introduce the Partner Coding System (Driver/Navigator) to promote collaboration on more complex projects.", "Review Engineering Notebooks to see their thought process and how they are debugging problems."]
    },
    proTips: {
        title: "References",
        points: ["VEX Education Sensor Overview: https://education.vex.com/stemlabs/iq/sensors", "VEXcode IQ Docs: MyBlocks Reference"]
    }
  },
  "Sprint 4: Overview": {
    title: "Sprint 4 — Design & Prototyping with 3D Printing",
    description: "This sprint introduces students to the exciting world of 3D printing, guiding them through the full engineering design cycle to create a custom, functional upgrade for their VEX IQ robot using Tinkercad.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will learn to design, plan, and prototype a custom VEX IQ component using <strong>Tinkercad</strong> and 3D printing. The sprint guides students through the engineering design cycle: <strong>Define → Design → Prototype → Test → Refine</strong>, culminating in the creation of a functional 3D-printed upgrade for their robot.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 4 — Design & Prototyping</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> CAD design, engineering design cycle, and rapid prototyping using 3D printing.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Understand the relationship between design, precision, and functionality in robotics.</li><li>Use <strong>Tinkercad</strong> to model, scale, and export 3D-printable parts.</li><li>Apply measurement, tolerance, and fitting concepts to ensure compatibility with VEX IQ parts.</li><li>Follow the engineering design cycle from concept to final prototype.</li><li>Document the design process, iterations, and testing results in an <strong>Engineering Notebook</strong>.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>Tinkercad accounts (one per student or pair)</li><li>FDM 3D printer (PLA filament) and Slicing software</li><li>Digital calipers or rulers</li><li>Sample VEX IQ components for measurement</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "Robot Upgrade Challenge"</h3><p>Design and 3D print a custom part that improves or personalizes a VEX IQ Clawbot.</p><ul><li><strong>Examples:</strong> Extended claw tip for better cube grip, Sensor mount for Optical or Distance Sensor, Cable clip or wire organizer, Arm stabilizer bracket, Team badge or decorative robot accessory.</li><li><strong>Requirements:</strong> Design must be created entirely in Tinkercad, Print must connect or interact with the robot’s structure, Document the design process, testing, and revisions, Present the final part and explain its function.</li></ul><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1 — Introduction to 3D Design and Printing</h4><p><strong>Focus:</strong> Understanding 3D printing and CAD fundamentals. Deliverable: Export first STL file.</p>
        <h4>Week 2 — Measurement & Modeling for Robotics</h4><p><strong>Focus:</strong> Designing precise, functional parts. Deliverable: First functional part draft or concept sketch.</p>
        <h4>Week 3 — Prototype Development & Testing</h4><p><strong>Focus:</strong> Designing, printing, and testing prototypes. Deliverable: Working 3D model ready for full print.</p>
        <h4>Week 4 — Final Print, Integration, and Presentation</h4><p><strong>Focus:</strong> Presenting a completed design and reflecting on process. Deliverable: Final print, installation, and presentation.</p><hr>`,
        `<h3>Assessment Rubric</h3>
         <table class="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th class="border-b-2 p-2 border-slate-600">Category</th>
                    <th class="border-b-2 p-2 border-slate-600">4 – Excellent</th>
                    <th class="border-b-2 p-2 border-slate-600">3 – Proficient</th>
                    <th class="border-b-2 p-2 border-slate-600">2 – Developing</th>
                    <th class="border-b-2 p-2 border-slate-600">1 – Beginning</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="border-b p-2 border-slate-700"><strong>Design Thinking</strong></td><td class="border-b p-2 border-slate-700">Problem clearly defined and solved effectively</td><td class="border-b p-2 border-slate-700">Good problem-solution link</td><td class="border-b p-2 border-slate-700">Basic concept, limited purpose</td><td class="border-b p-2 border-slate-700">No clear design goal</td></tr>
                <tr><td class="border-b p-2 border-slate-700"><strong>3D Modeling</strong></td><td class="border-b p-2 border-slate-700">Accurate, complex, and well-scaled model</td><td class="border-b p-2 border-slate-700">Minor measurement or fit issues</td><td class="border-b p-2 border-slate-700">Simple design</td><td class="border-b p-2 border-slate-700">Incomplete or inaccurate model</td></tr>
                <tr><td class="border-b p-2 border-slate-700"><strong>Prototype Functionality</strong></td><td class="border-b p-2 border-slate-700">Fully compatible with robot and performs intended function</td><td class="border-b p-2 border-slate-700">Works with small adjustments</td><td class="border-b p-2 border-slate-700">Partially functional</td><td class="border-b p-2 border-slate-700">Non-functional or unrelated</td></tr>
                <tr><td class="border-b p-2 border-slate-700"><strong>Iteration & Documentation</strong></td><td class="border-b p-2 border-slate-700">Detailed testing notes and multiple refinements</td><td class="border-b p-2 border-slate-700">Some documentation</td><td class="border-b p-2 border-slate-700">Limited evidence of iteration</td><td class="border-b p-2 border-slate-700">Minimal notes or reflection</td></tr>
                <tr><td class="border-b p-2 border-slate-700"><strong>Presentation</strong></td><td class="border-b p-2 border-slate-700">Clear explanation of design purpose and process</td><td class="border-b p-2 border-slate-700">Mostly clear</td><td class="border-b p-2 border-slate-700">Somewhat unclear</td><td class="border-b p-2 border-slate-700">Lacks preparation or explanation</td></tr>
            </tbody>
         </table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: [
            "Use group demonstrations to explain slicing and printer setup.",
            "Keep printer queue organized by assigning filenames (e.g., TeamName_PartName.stl).",
            "Encourage students to test fit with partial prints before full runs.",
            "Reinforce that engineering involves learning from mistakes and redesigning.",
            "Optional enrichment: introduce parametric design or basic tolerance testing."
        ]
    },
    proTips: {
        title: "References",
        points: [
            "Tinkercad Tutorials: https://www.tinkercad.com/learn",
            "VEX Education: https://education.vex.com",
            "REC Foundation: https://recf.org"
        ]
    }
  },
  "Sprint 5: Overview": {
    title: "Sprint 5 — Midterm Robotics Project",
    description: "This sprint is a capstone project that challenges students to integrate all the skills they've learned in Sprints 1-4. They will work in teams to design, build, and program a robot to solve a complex challenge defined by the instructor.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will apply their knowledge of building, programming, sensors, and (optionally) 3D design to complete a comprehensive midterm project. The focus is on teamwork, project management, and creative problem-solving.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 5 — Midterm Project</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Project integration, teamwork, and presentation.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Integrate mechanical design and programming to achieve a complex goal.</li><li>Manage a multi-week project from conception to completion.</li><li>Work effectively in a team, dividing tasks and communicating progress.</li><li>Document their entire process in an Engineering Notebook.</li><li>Present their final solution to the class, explaining their design choices and programming logic.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>VEX IQ Kits and all previously used components</li><li>A defined game field and objects for the challenge</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "The Midterm Challenge"</h3><p>The final project for this sprint is the midterm challenge itself, which will be provided by the instructor. It will be a game or task-based challenge that requires a combination of building and programming skills to succeed.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: Deconstruct the Challenge & Brainstorm</h4><p><strong>Focus:</strong> Understand the rules and constraints of the challenge; brainstorm and sketch initial ideas.</p>
        <h4>Week 2: Prototyping & Building</h4><p><strong>Focus:</strong> Build the first iteration of the robot and key mechanisms.</p>
        <h4>Week 3: Programming & Testing</h4><p><strong>Focus:</strong> Program the robot's core functions and begin iterative testing and refinement.</p>
        <h4>Week 4: Final Practice & Competition</h4><p><strong>Focus:</strong> Finalize the robot, practice for the competition, and present the final result.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Project Integration</strong></td><td class="border-b p-2 border-slate-700">Seamlessly combines build and code to solve the challenge</td><td class="border-b p-2 border-slate-700">Functional integration with minor issues</td><td class="border-b p-2 border-slate-700">Partial integration</td><td class="border-b p-2 border-slate-700">Build and code are disconnected</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Strategy & Design</strong></td><td class="border-b p-2 border-slate-700">Innovative and effective strategy</td><td class="border-b p-2 border-slate-700">Solid strategy that meets requirements</td><td class="border-b p-2 border-slate-700">Basic strategy</td><td class="border-b p-2 border-slate-700">No clear strategy</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Teamwork</strong></td><td class="border-b p-2 border-slate-700">Excellent collaboration and role management</td><td class="border-b p-2 border-slate-700">Good collaboration</td><td class="border-b p-2 border-slate-700">Uneven participation</td><td class="border-b p-2 border-slate-700">Minimal teamwork</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Presentation</strong></td><td class="border-b p-2 border-slate-700">Clear, confident, and well-documented</td><td class="border-b p-2 border-slate-700">Mostly clear presentation</td><td class="border-b p-2 border-slate-700">Unclear presentation</td><td class="border-b p-2 border-slate-700">Unprepared</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Provide a clear and detailed rubric for the midterm project at the beginning of the sprint.", "Act as a project manager or client, holding regular check-in meetings with teams to monitor progress and provide feedback.", "Encourage teams to assign roles (e.g., Lead Builder, Lead Programmer, Project Manager/Documenter)."]
    },
    proTips: {
        title: "Tips for Success",
        points: ["Plan your project before you start building! A good plan will save you a lot of time later.", "Test each part of your robot and code as you go. Don't wait until the end to test everything at once.", "Communicate with your teammates! Make sure everyone is on the same page and understands their role."]
    }
  },
  "Sprint 6: Overview": {
    title: "Sprint 6 — Electrical Engineering I: Power and Circuits",
    description: "This sprint provides a foundational understanding of electrical engineering concepts as they apply to VEX robotics, focusing on how the brain, motors, and sensors are powered and communicate.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will learn about basic circuits, power management, and the electronic components that make up the VEX IQ system. The focus is on understanding how electricity flows through the robot to make it function.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 6 — Electrical Engineering</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Circuits, power, VEX electronics, and wire management.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Understand the function of the VEX IQ Robot Brain and Battery.</li><li>Learn how Smart Motors receive power and commands.</li><li>Identify the different types of sensors and how they connect to the Brain.</li><li>Practice proper wire management to create a reliable and tidy robot.</li><li>Understand the concepts of voltage, current, and resistance at a high level.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>VEX IQ Kits with Brain, Battery, and various motors/sensors</li><li>Multimeter (optional, for demonstration)</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "Power Management Challenge"</h3><p>Students will be tasked with building a robot that can perform a specific task for the longest possible time on a single battery charge, forcing them to think about mechanical and programming efficiency to conserve power.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: The Brain and the Battery</h4><p><strong>Focus:</strong> Understanding the robot's power source and central processor.</p>
        <h4>Week 2: Smart Motors</h4><p><strong>Focus:</strong> Exploring how motors work and draw power.</p>
        <h4>Week 3: Sensors and Communication</h4><p><strong>Focus:</strong> Learning how sensors are powered and send data back to the Brain.</p>
        <h4>Week 4: Final Challenge & Wire Management</h4><p><strong>Focus:</strong> Competing in the Power Management Challenge and practicing good wiring techniques.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Understanding of Concepts</strong></td><td class="border-b p-2 border-slate-700">Clearly explains how components are powered</td><td class="border-b p-2 border-slate-700">Explains most concepts correctly</td><td class="border-b p-2 border-slate-700">Partial understanding</td><td class="border-b p-2 border-slate-700">Unable to explain concepts</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Wire Management</strong></td><td class="border-b p-2 border-slate-700">Neat, secure, and out of the way of moving parts</td><td class="border-b p-2 border-slate-700">Functional but could be neater</td><td class="border-b p-2 border-slate-700">Messy or interferes with function</td><td class="border-b p-2 border-slate-700">No attempt at wire management</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Challenge Performance</strong></td><td class="border-b p-2 border-slate-700">Robot is highly efficient and runs for a long time</td><td class="border-b p-2 border-slate-700">Robot is moderately efficient</td><td class="border-b p-2 border-slate-700">Robot is inefficient</td><td class="border-b p-2 border-slate-700">Robot does not complete the task</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Use the VEX IQ Brain's dashboard to show students real-time battery voltage and motor current draw.", "Discuss the difference between a short circuit and an open circuit.", "Show examples of good and bad wire management and discuss why it's important for reliability."]
    },
    proTips: {
        title: "References",
        points: ["VEX IQ Electronics Overview: https://kb.vex.com/hc/en-us/sections/360005959371-Electronics"]
    }
  },
  "Sprint 7: Overview": {
    title: "Sprint 7 — Electrical Engineering II: Diagnostics & Troubleshooting",
    description: "Building on the previous sprint, students will explore more advanced electrical concepts and learn how to troubleshoot common electronic issues with their robots.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will deepen their understanding of robot electronics, learning how to read the Brain's device info and use diagnostic tools to identify and fix problems efficiently.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 7 — Electricity II</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Advanced circuits, diagnostics, schematics, and troubleshooting.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Understand how data is transmitted through smart cables.</li><li>Use the Brain's 'Devices' screen to troubleshoot sensor and motor issues.</li><li>Learn about firmware and why it's important to keep it updated.</li><li>Explore the internal workings of a VEX IQ Smart Motor through diagrams.</li><li>Develop a systematic approach to troubleshooting electrical problems.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>VEX IQ Kits</li><li>VEXcode IQ for firmware updates</li><li>"Broken" robots prepared by the instructor for the final project</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "Robot Medic"</h3><p>Instructors will present teams with a 'broken' robot (e.g., with unplugged motors, incorrect sensor configurations, or a simple coding bug). Teams must use their diagnostic skills to identify and fix all the problems as quickly as possible.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: The 'Devices' Screen</h4><p><strong>Focus:</strong> Learning to read and interpret the live data from the Brain's device menu.</p>
        <h4>Week 2: Firmware and Updates</h4><p><strong>Focus:</strong> Understanding what firmware is and how to update it on the Brain, controller, and smart devices.</p>
        <h4>Week 3: Systematic Troubleshooting</h4><p><strong>Focus:</strong> Developing a checklist for diagnosing problems (e.g., Check physical connections -> Check port numbers -> Check code -> etc.).</p>
        <h4>Week 4: The Robot Medic Challenge</h4><p><strong>Focus:</strong> Applying diagnostic skills in a timed challenge to fix a malfunctioning robot.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Troubleshooting Process</strong></td><td class="border-b p-2 border-slate-700">Follows a clear, systematic process to find the root cause</td><td class="border-b p-2 border-slate-700">Identifies the problem with some trial and error</td><td class="border-b p-2 border-slate-700">Requires significant guidance to find the problem</td><td class="border-b p-2 border-slate-700">Unable to diagnose the problem</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Use of Tools</strong></td><td class="border-b p-2 border-slate-700">Effectively uses the Brain's device screen to diagnose</td><td class="border-b p-2 border-slate-700">Uses the device screen with some help</td><td class="border-b p-2 border-slate-700">Relies only on visual inspection</td><td class="border-b p-2 border-slate-700">Does not use available tools</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Speed and Efficiency</strong></td><td class="border-b p-2 border-slate-700">Quickly and accurately fixes all issues</td><td class="border-b p-2 border-slate-700">Fixes all issues, but takes more time</td><td class="border-b p-2 border-slate-700">Fixes some, but not all, issues</td><td class="border-b p-2 border-slate-700">Unable to fix the issues</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Demonstrate how to update VEX IQ firmware using VEXcode.", "Use the 'Device Info' screen to show students the data coming from a sensor in real-time.", "Create a 'troubleshooting checklist' for students to follow when their robot isn't working as expected."]
    },
    proTips: {
        title: "References",
        points: ["VEX Knowledge Base: Troubleshooting: https://kb.vex.com/hc/en-us/categories/360002333191-VEX-IQ"]
    }
  },
  "Sprint 8: Overview": {
    title: "Sprint 8 — Mechanical Engineering: Mechanisms & Simple Machines",
    description: "This sprint focuses on the mechanical side of robotics, exploring concepts like gear ratios, friction, and simple machines. Students will conduct experiments to understand and apply these principles to their robot builds.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will learn about key mechanical engineering concepts and how they affect robot performance. They will apply this knowledge to design and build mechanisms that provide mechanical advantage, speed, or torque.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 8 — Engineering Design</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Mechanical advantage, gears, friction, and the engineering design process.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Understand and calculate gear ratios for speed and torque.</li><li>Explore the concepts of friction and center of gravity through experimentation.</li><li>Identify and build simple machines like levers, pulleys, and inclined planes using VEX parts.</li><li>Apply the engineering design process to solve a mechanical challenge.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>VEX IQ Kits</li><li>Rulers, stopwatches, and other measurement tools for experiments</li><li>Engineering Notebooks</li></ul><hr>`,
        `<h3>Final Project — "Simple Machines Challenge"</h3><p>Students will be challenged to build a device that uses at least two different simple machines to accomplish a task, such as lifting a heavy object or launching a small projectile a certain distance.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: Gears, Speed, and Torque</h4><p><strong>Focus:</strong> Understanding how gear ratios affect robot performance.</p>
        <h4>Week 2: Friction and Center of Gravity</h4><p><strong>Focus:</strong> Conducting experiments to see how friction and balance impact design.</p>
        <h4>Week 3: Simple Machines</h4><p><strong>Focus:</strong> Building levers, inclined planes, and pulleys with VEX parts.</p>
        <h4>Week 4: Final Challenge</h4><p><strong>Focus:</strong> Applying knowledge of simple machines to complete the final project.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Understanding of Concepts</strong></td><td class="border-b p-2 border-slate-700">Clearly explains the mechanical principles used in their design</td><td class="border-b p-2 border-slate-700">Explains most concepts correctly</td><td class="border-b p-2 border-slate-700">Partial understanding</td><td class="border-b p-2 border-slate-700">Unable to explain concepts</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Design & Build Quality</strong></td><td class="border-b p-2 border-slate-700">Robust, creative, and effective design</td><td class="border-b p-2 border-slate-700">Functional design that meets requirements</td><td class="border-b p-2 border-slate-700">Design is fragile or only partially functional</td><td class="border-b p-2 border-slate-700">Design does not meet requirements</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Problem Solving</strong></td><td class="border-b p-2 border-slate-700">Independently iterates and improves the design</td><td class="border-b p-2 border-slate-700">Improves design with some guidance</td><td class="border-b p-2 border-slate-700">Requires significant help to improve</td><td class="border-b p-2 border-slate-700">Unable to improve design</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Set up stations for different experiments (e.g., a 'Get a Grip' station for testing tire friction, a 'Gear Ratio' station).", "Connect the concepts to real-world examples (e.g., the gears on a bicycle).", "Encourage students to document their experiments and findings in their Engineering Notebooks."]
    },
    proTips: {
        title: "References",
        points: ["VEX Education - Mechanisms: https://education.vex.com/stemlabs/iq/mechanisms"]
    }
  },
  "Sprint 9: Overview": {
    title: "Sprint 9 — Final Capstone Project",
    description: "The final sprint is a culminating capstone experience where students get to showcase everything they have learned throughout the course. They will work in teams to design and build a unique robot to solve a final, complex challenge.",
    stepByStep: [
        `<h3>Objective</h3><p>Students will work in teams to complete a comprehensive final project that demonstrates their mastery of building, programming, sensor integration, and the engineering design process. The project will be open-ended to encourage creativity and innovation.</p><hr>`,
        `<h3>Sprint Context</h3><ul><li><strong>Sprint:</strong> 9 — Final Project</li><li><strong>Program:</strong> iCode White Belt (Elementary Robotics, Ages 8–10)</li><li><strong>Duration:</strong> 4 Weeks (2 hours per week)</li><li><strong>Focus:</strong> Capstone project, documentation, demonstration, and innovation.</li></ul><hr>`,
        `<h3>Learning Goals</h3><ul><li>Apply the full engineering design process to an open-ended problem.</li><li>Demonstrate advanced programming and building skills.</li><li>Collaborate effectively in a team over a long-term project.</li><li>Create thorough documentation and present a final project with confidence.</li></ul><hr>`,
        `<h3>Materials Required</h3><ul><li>All VEX IQ materials from previous sprints</li><li>A defined game field and objects for the final challenge</li><li>Presentation tools (e.g., slides, poster board)</li></ul><hr>`,
        `<h3>Final Project — "The Grand Challenge"</h3><p>The final project is the Grand Challenge itself, which will be an exciting, game-based competition that requires students to combine all their skills to design, build, and program a winning robot.</p><hr>`,
        `<h3>Weekly Breakdown</h3>
        <h4>Week 1: The Reveal & Strategy</h4><p><strong>Focus:</strong> The final challenge is revealed. Teams analyze the game, strategize, and begin initial designs in their notebooks.</p>
        <h4>Week 2: Prototyping and Building</h4><p><strong>Focus:</strong> Teams build and test their core mechanisms and chassis designs.</p>
        <h4>Week 3: Programming and Integration</h4><p><strong>Focus:</strong> Teams integrate their mechanisms and write both driver control and autonomous programs.</p>
        <h4>Week 4: The Competition</h4><p><strong>Focus:</strong> Final testing, practice, and the in-class final competition and presentations.</p><hr>`,
        `<h3>Assessment Rubric</h3><table class="w-full text-left border-collapse"><thead><tr><th class="border-b-2 p-2 border-slate-600">Category</th><th class="border-b-2 p-2 border-slate-600">Excellent</th><th class="border-b-2 p-2 border-slate-600">Proficient</th><th class="border-b-2 p-2 border-slate-600">Developing</th><th class="border-b-2 p-2 border-slate-600">Beginning</th></tr></thead><tbody>
        <tr><td class="border-b p-2 border-slate-700"><strong>Robot Performance</strong></td><td class="border-b p-2 border-slate-700">Robot is highly effective and reliable in the challenge</td><td class="border-b p-2 border-slate-700">Robot is functional and completes most tasks</td><td class="border-b p-2 border-slate-700">Robot is unreliable or completes few tasks</td><td class="border-b p-2 border-slate-700">Robot is non-functional</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Engineering Design Process</strong></td><td class="border-b p-2 border-slate-700">Notebook shows a clear, iterative design process with testing and reflection</td><td class="border-b p-2 border-slate-700">Notebook shows a good design process</td><td class="border-b p-2 border-slate-700">Notebook is incomplete or lacks detail</td><td class="border-b p-2 border-slate-700">Notebook is missing</td></tr>
        <tr><td class="border-b p-2 border-slate-700"><strong>Teamwork & Collaboration</strong></td><td class="border-b p-2 border-slate-700">Excellent communication, shared workload, and positive attitude</td><td class="border-b p-2 border-slate-700">Good collaboration with minor issues</td><td class="border-b p-2 border-slate-700">Uneven participation or communication problems</td><td class="border-b p-2 border-slate-700">Poor or no collaboration</td></tr>
        </tbody></table>`
    ],
    levelUp: {
        title: "Teacher Notes",
        points: ["Reveal the final challenge with a fun kickoff event.", "Act as a facilitator and mentor, guiding teams through their design process rather than giving them solutions.", "Invite other classes, parents, or school administrators to watch the final competition."]
    },
    proTips: {
        title: "Tips for Success",
        points: ["Read the rules of the challenge carefully!", "A simple, reliable robot is often better than a complex robot that breaks down.", "Practice, practice, practice! The more you test and drive your robot, the better you will perform in the competition.", "Have fun and be proud of what you've accomplished!"]
    }
  },

  // Sprint 1
  "Get in Shape": {
    title: "Get in Shape",
    description: "VEX IQ connectors allow you limitless options to connect beams and plates. Can you get your parts in shape?",
    stepByStep: [
      "Using at least 2 connectors, build a set of rails out of plates and/or beams.",
      "Using at least 2 connectors, build a triangle out of plates and/or beams.",
      "Using at least 4 connectors, build a rectangle out of plates and/or beams.",
      "Using at least 6 connectors, build a cube out of plates and/or beams."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Challenge a classmate to see who can make a shape the quickest.",
        "Using connectors, plates and/or beams build an octagon shape."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Rails are useful in supporting both sides of wheel, gear, and sprocket shafts.",
        "Triangles are useful in supporting robot towers.",
        'An octagon shape can be used for a holonomic drivetrain called an "x-drive."'
      ]
    },
    standards: "CCSS.MATH.CONTENT.5.G.B.3: Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories of that category."
  },
  "Signs": {
    title: "Signs",
    subtitle: "Pins, Standoffs, and Connectors",
    description: "Signs are a very important part of our everyday life. They provide directions, warnings, and valuable information. Can you build a sign?",
    stepByStep: [
      "Using pins, standoffs, and connectors design and build a free-standing sign from your VEX IQ Kit.",
      "You can only select 30 parts from the IQ Kit: 15 pins, 5 standoffs, and 5 connectors; 5 beams or plates.",
      "You have a five minute time limit to design and create your sign.",
      "Change your design to try for the tallest sign in the class!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Create a design with a 40 parts limit.",
        "Design a free-standing sign which would hang out over a roadway."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Use the Pin Tool to help when you assemble your sign."
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Can You Name That Part?": {
    title: "Can You Name That Part?",
    description: "It is very helpful to know the name of a part from your VEX IQ Kit and the category of parts the part is found. This game will help with both.",
    stepByStep: [
      "Find a classmate to play the game with.",
      "Select a part from your VEX IQ Kit. Ask your opponent what the name of the part is and the category it comes from. Your opponent cannot use the poster to look up the answer.",
      "Award one point for the correct category and two points for the correct part name. Provide the correct response for any wrong answer. Use the Parts Poster as a reference.",
      "Return your part to the kit. Now it is your opponent's turn to select a part and ask you the questions.",
      "The first person to collect 21 points is the winner.",
      "Can you think up another game to help identify the parts in the VEX IQ kit?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Ask a 3rd question: What is the size of the part? This question will be worth three points."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Parts also have specific part numbers which help identify each part."
      ]
    },
    standards: "ISTE (3) IKnowledge Constructor- 3a: Students plan and employ effective research strategies to locate information and other resources for their intellectual or creative pursuits."
  },
  "Scavenger Hunt": {
    title: "Scavenger Hunt",
    description: "Use the Interactive Parts Poster to learn more about your VEX IQ (2nd gen) Kit and find all the pieces described.",
    stepByStep: [
        "Open the Interactive Parts poster on your tablet or computer.",
        "Select a part to view more information about it. Can you find the pieces that fit the following descriptions? Document your findings: <br/> a. A piece that can hold two beams or plates together <br/> b. A piece to write your name on <br/> c. A tool to remove pins <br/> d. 3 pieces that are the same shape, but different sizes <br/> e. 2 pieces that are used in a pulley build <br/> f. 3 pieces that can create angles in a build <br/> g. A piece that can be used as an axle in a build <br/> h. 3 parts from the “Electronics” category <br/> i. 10 white pieces that are different shape <br/> j. 2 pieces that connect 2 pieces but leave a space between them"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Make your own scavenger hunt - Use what you have learned working with the Interactive Parts Poster to create your own scavenger hunt and share with a classmate! Can they find all the pieces that you describe? Be sure that your descriptions are easy to follow.",
        "How many? - Is there more than one piece that fits the description? How many pieces can you find that fit each of the scavenger hunt descriptions?"
      ]
    },
    proTips: {
      title: "Test the Pieces",
      points: [
        "Once you have found the pieces on the Interactive Parts Poster, find them in the IQ Kit. Test them to see how they match the descriptions.",
        "Can you use a pin or other connector to attach 2 beams?",
        "Can you make a pulley?",
        "Can you think of possibilities the white pieces could be used in?"
      ]
    },
    standards: "ISTE (3) Knowledge Constructor 3c - Students curate information from digital resources using a variety of tools and methods to create collections of artifacts that demonstrate meaningful connections or conclusions."
  },
  "To the Left, To the Right": {
    title: "To the Left, To the Right",
    description: "Code the BaseBot to turn left and right.",
    stepByStep: [
        "Build the BaseBot and open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ.",
        "Drag in a [Turn for] block and attach it to the {When started} block. What do you expect the BaseBot to do?",
        "Download the project to the Brain and run it.",
        "Change the dropdown on the block to “left”, download, and run the project. Now what does the BaseBot do?",
        "Use masking or colored tape on the floor or tiles to create a path with at least two turns for the BaseBot to travel.",
        "What order should the robot drive forward and turn right or left? Plan your project flow in your engineering notebook. Then add additional [Drive for] and [Turn for] blocks to make the BaseBot travel the path."
    ],
    levelUp: {
        title: "'LEVEL UP'",
        points: ["Changing Angles - Change the parameter of the [Turn for] block to have the BaseBot turn at different angles."]
    },
    proTips: {
        title: "Pro Tips",
        points: ["Outline your planned path in a VEXcode IQ project using [Comment] blocks!"]
    },
    standards: "CSTA 1B-AP-11: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process."
  },
  "Drive Forward and Reverse (Autonomous)": {
    title: "Drive Forward and Reverse",
    subtitle: "Autonomously move your robot forward and backwards!",
    description: "Autonomously move your robot forward and backwards!",
    stepByStep: [
        "Build the BaseBot and open VEXcode IQ.",
        "Drag in a [Drive for] block. Change the parameter to “12” and the dropdown menu to inches. This will make the BaseBot travel 12 inches, or the length of a VEX IQ Field Tile.",
        "Download the project to the Brain and run it.",
        "Add another [Drive for] block, but this time change the dropdown to “reverse.” What do you think the robot will do? How will adding a new block with a changed dropdown menu alter the robot's movements? Download and run the project to find out."
    ],
    levelUp: {
        title: "'LEVEL UP'",
        points: [
            "Go Beyond! - Change the parameters to have the robot drive longer distances.",
            "Remix - Change the order of the blocks. How does this change the movements of the robot?"
        ]
    },
    proTips: {
        title: "Pro Tips",
        points: ["The [Set drive velocity] block can be used to increase or decrease the BaseBot's velocity. The default velocity is 50%."]
    },
    standards: "CSTA 1A-AP-10 - Develop programs with sequences and simple loops, to express ideas or address a problem."
  },

  // Sprint 2
  "Build a Wagon": {
    title: "Build a Wagon",
    description: "Create an addition to the BaseBot to carry an IQ Cube up an inclined plane!",
    stepByStep: [
      "Build the BaseBot, then create an addition so that it can carry a cube.",
      "Create an inclined plane with pieces in the VEX IQ Kit or classroom materials.",
      "Code the BaseBot to drive up the inclined plane in VEXcode IQ.",
      "Experiment with different wheel combinations to find one that will enable your BaseBot to carry the cube up the inclined plane without slipping."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Add weight - Add more weight to the wagon and see test the wheel combinations.",
        "Steeper incline - Make the inclined plane higher, and see how this affects the BaseBot's ability to carry the cube."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Do some research on the Center of Gravity. Does it help you plan your design?"
      ]
    },
    standards: "NGSS MS-PS2-2 Motion and Stability: Forces and Interactions - Plan an investigation to provide evidence that the change in an object's motion depends on the sum of the forces on the object and the mass of the object."
  },
  "Get a Grip": {
    title: "Get a Grip",
    description: "Whether your robot is pulling something, pushing something, or climbing something, the more grip your tires have the better. This activity will help you test the grip of your different VEX IQ tires!",
    stepByStep: [
      "Build a wheel test cart. Insert the double side of a 1x2 Connector Pin into each end hole of a 1x3 Center Lock Plate. Attach a 1x8 Beam in the middle to each side of the Center Lock Plate. Insert a 4x Pitch Shaft through the square hole of the Center Lock Plate. Add the wheels to test with Shaft Collars onto the Shaft.",
      "Place the wheel test cart on the edge of a field tile. Gently lift the edge of the tile to create a ramp. Lift until the wheels lose their grip and begin to slide. Measure the height of the ramp. Test another set of wheels. Which wheels have the most grip (highest ramp height)?",
      "Do you think the surface of the ramp will change the tire's grip? Design a test for this, such as taping sand paper or aluminum foil on the field tile."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Design a wheel cart to test four wheels."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The amount of grip is known as the coefficient of friction."
      ]
    },
    standards: "NGSS MS-PS2-2: Plan an investigation to provide evidence that the change in an object's motion depends on the sum of the forces on the object and the mass of the object."
  },
  "Wheel Turns": {
    title: "Wheel Turns",
    subtitle: "How far is one wheel turn?",
    description: "Use your VEX IQ wheels and a ruler to measure how far a wheel travels each time it turns.",
    stepByStep: [
      "Take out a wheel from your VEX IQ Kit, and place a pin or standoff in the wheel.",
      "Lay a ruler on the table. Line up the wheel on the ruler, so the pin lines up with the '0' on the ruler.",
      "Roll the wheel along the ruler until the pin ends up back in its original position, and mark the distance on the ruler, measuring in either inches or millimeters (mm). This distance is the measure of the outside of the wheel, which is also called the circumference.",
      "Check your work - Cut a piece of paper to the exact distance you just measured. Wrap it around the wheel. It should go exactly around the wheel.",
      "Now that you have physically measured the circumference of the wheel, calculate it using the formula circumference = π • d where d is the diameter of the wheel. Do you obtain the same measurement for circumference using both methods? Compare both values."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "What else has a circumference? - Use the same methods to figure out the measurements of other circular pieces in your VEX IQ Kit.",
        "Chart it - Make a chart showing the distance of 1, 2, 3, 4, and 5 wheel turns in a row. Write the number of turns in one column, the inch measurement in a second column, and the mm measurement in the third."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Be careful when measuring.",
        "Remember to start your wheel with the pin inserted and lined up exactly with the '0' of the ruler.",
        "Do not stop rolling until the pin is in the exact position it started in."
      ]
    },
    standards: "CCSS.MATH.CONTENT.7.G.B.4: Know the formulas for the area and circumference of a circle and use them to solve problems; give an informal derivation of the relationship between the circumference and area of a circle."
  },
  "How Big Are Your Teeth?": {
    title: "How Big Are Your Teeth?",
    description: "Can you calculate the pitch of your gears and sprockets?",
    stepByStep: [
      "Print the VEX IQ Parts Ruler or gather another measuring tool.",
      "VEX IQ gears need the same size teeth to work together. VEX IQ sprockets also need their teeth size to match. The tooth size for gears and sprockets is called pitch.",
      "Select a 12 Tooth Gear and a 36 Tooth Gear. Be sure to count the number of teeth. Measure the gear's diameter in inches from the tip of 1 tooth directly across the gear to the tip of the tooth on the other side. Divide the number of teeth by the diameter of the gear. How does the pitch of the 36 Tooth Gear compare to the 12 Tooth Gear?",
      "Select an 8 Tooth Sprocket and a 16 Tooth Sprocket. Be sure to count the number of teeth. Measure the sprocket's diameter in inches from the tip of 1 tooth directly across the sprocket to the tip of the tooth on the other side. Divide the number of teeth by the diameter of the sprocket. How does the pitch of the 16 Tooth Sprocket compare to the 8 Tooth Sprocket?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Gear Comparison - In your engineering notebook create a chart to compare the number of teeth, diameter, and pitch for each size gear in your VEX IQ kit.",
        "Sprocket Comparison - In your engineering notebook create a chart to compare the number of teeth, diameter, and pitch for each size sprocket in your VEX IQ kit."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The mechanical advantage of a gear or sprocket system can be determined by the gear/sprocket ratio. Gear Ratio = # of Driven Gear Teeth (Output) / # of Driving Gear Teeth (Input)"
      ]
    },
    standards: "NGSS (5-PS1.3)Structure and Properties of Matter - Make observations and measurements to identify materials based on their properties."
  },
  "VEX Teasers": {
    title: "VEX Teasers",
    description: "Use your VEX IQ pieces to solve some spatial reasoning brain teasers.",
    stepByStep: [
      "Cover the second set of pictures below with a piece of paper to hide the solutions.",
      "Try to solve one of the brain teasers below: Move one beam to reverse the counting order. Change 3 triangles into 5 triangles by only moving 3 beams.",
      "Use the solutions below to check your work. Can you solve it in a different way?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Pulley Problem - Design a brain teaser using pulleys."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Trace the shapes on a piece of paper in order to easily go back to the original brain teaser design."
      ]
    },
    standards: "CCSS.MATH.CONTENT.8.G.A.1- Verify experimentally the properties of rotations, reflections, and translations."
  },
  "Tallest Tower Challenge": {
    title: "Tallest Tower Challenge",
    subtitle: "Too tall tips over!",
    description: "Can you build a taller freestanding tower than your partner using the same 10 pieces?",
    stepByStep: [
      "Player 1 will pick a VEX IQ piece from a Kit and Player 2 will find that same piece from a 2nd Kit.",
      "Player 2 will pick a VEX IQ piece and Player 1 will find that same piece. The players will alternate picking pieces until both have 10 VEX IQ pieces. (Each player picks 5 times)",
      "Each player will then use as many pins and standoffs necessary to build the tallest freestanding tower out of the 10 VEX IQ pieces within 10 minutes.",
      "The player with the tallest freestanding tower will win."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Independent Materials - Each player gets to select their own 10 VEX IQ pieces.",
        "Less Time - Can you build a 10 piece VEX IQ Tower in 5 minutes?"
      ]
    },
    proTips: {
      title: "Don't Give Up",
      points: [
        "A wider base allows for a taller tower.",
        "Re-build if your design does not work, but keep track of the time!"
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4d: Students exhibit a tolerance for ambiguity, perseverance, and the capacity to work with open-ended problems."
  },

  // Sprint 3
  "Driver Configurations": {
    title: "Driver Configurations",
    description: "Test your robot driving skills with four different driving configurations!",
    stepByStep: [
      "Build the BaseBot and connect the Controller. Place your BaseBot on a 3'x3' field with a cube or other obstacle in the center. The goal is to drive around the cube without touching it, as fast as you can.",
      "Select a driver configuration! There are four of them: Left Arcade, Right Arcade, Split Arcade, Tank Drive.",
      "Place your robot at the starting line and run the Driver Control Program with your selected driving configuration. How fast can you lap around the cube? Record your time.",
      "Once you've successfully driven around the cube in one configuration, move on to another one. Try them all, recording each time to see which configuration allows you to drive the fastest and is the easiest to control!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Go Beyond! - Add some obstacles, such as additional cubes.",
        "Reverse - Try driving around the cube, but in reverse! Is it easier or more challenging?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Keep a detailed record of which configuration you tested and how long it took to lap the cube using that configuration."
      ]
    },
    standards: "ISTE 1.5 - Computational Thinker- Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods to develop and test solutions."
  },
  "Square Dance": {
    title: "Square Dance",
    description: "Code the BaseBot to drive in a square!",
    stepByStep: [
      "Build the BaseBot and open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ.",
      "Drag in a [Drive for] block and change the parameter to “12” and the dropdown to inches.",
      "Drag in a [Turn for] block, placing it under the [Drive for] block. These two blocks will make the first corner of the square.",
      "Add additional blocks to code your robot to drive in a square.",
      "Download the project to the Brain and run it.",
      "In order to make a complete square with fewer blocks, you can repeat the actions of making one corner. Drag in a [Repeat] block, and wrap it around the first [Drive for] and [Turn for] blocks. How many times should the blocks be repeated to make a complete square?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Upsize - Change the parameters to make a bigger square.",
        "Rectangle Challenge - Now that you can make a square, how can you use the repeat block to make a rectangle?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "In order to better understand looping and repetitions, write out each action the BaseBot will take to drive in a complete square. Note where steps repeat."
      ]
    },
    standards: "CSTA 1A-AP-10: Develop programs with sequences and simple loops, to express ideas or address a problem."
  },
  "Turn Around": {
    title: "Turn Around",
    description: "Learn about the BaseBot's heading to push cubes!",
    stepByStep: [
      "Build the BaseBot and open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ. Place 3 cubes around the BaseBot.",
      "Add a [Turn to heading] block and attach it to the {When started} block. What degree measurement should be put in the block so that the BaseBot is facing the first cube?",
      "Change the parameter in the block. Then download and run the project. Was your degree parameter accurate? Try additional parameters until the robot successfully turns to face the first cube.",
      "Now add a [Drive for] block to push the cube forward, away from the BaseBot. Add an additional block to have the robot drive in reverse to the starting location. Download and run the project to test your parameters.",
      "Continue to add onto your project so that the BaseBot turns to each cube and pushes them away!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Tick Tock Clock - Place additional cubes around the BaseBot like a clock face. Start with the BaseBot facing 12 o'clock and turn to 2 o'clock. What degrees did you use as a parameter? Try turning to different 'times' on the clock and record the degree turn in your engineering notebook."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Keep the BaseBot heading image handy, so that you can easily reference the degree measurements."
      ]
    },
    standards: "CSTA 1B-AP-15 - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended."
  },
  "Stop and Go": {
    title: "Stop and Go",
    description: "Code the BaseBot to travel to different locations!",
    stepByStep: [
      "Build the BaseBot and open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ.",
      "Mark three different locations on an IQ Field using a dry erase marker or tape. Label the locations A, B, and C.",
      "Measure the distance between the locations, and plan a route for the BaseBot in your engineering notebook. Your robot should begin at location A and stop at the other marked locations.",
      "Drag in a [Drive for] block. Change the parameter to the distance from the starting position to the first location. Download and run the project.",
      "Continue adding [Drive for] and [Turn for] blocks to travel to the next two locations on the field. Download and run the project."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Over Here - Add more locations for the BaseBot to stop.",
        "Shortcut - What is the shortest route from each of the different locations? Measure the distance and the angle to travel the smallest distance from each location to the next."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Add a [Wait] block when you reach each location. The BaseBot will wait a given number of seconds before travelling to the next location."
      ]
    },
    standards: "CSTA 1B-AP-15 - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended."
  },
  "Forward, Lift, Reverse": {
    title: "Forward, Lift, Reverse",
    description: "Which direction is faster when moving an object?",
    stepByStep: [
      "Build the Simple Clawbot and set up a Field that is 3'x3' and includes the Field Walls. Using colored tape, like orange, mark the first black horizontal line going across the bottom of the Field. The area below the line will be considered the “Home” zone.",
      "Set one cube of any color on the cross at the top of the Field.",
      "Place the Simple Clawbot, with its back Omni wheels touching the back wall, anywhere along the back wall.",
      "Use the Driver Control Program to drive the Simple Clawbot forward, pick up the cube, and then drive in reverse back to the 'Home' zone.",
      "Record the time of the Simple Clawbot moving forward and reverse. Which is faster?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Start Location - Change the starting location of the Simple Clawbot along the back wall and determine how that changes the recorded times.",
        "Obstacle - Place an object, like a pulley, that the Simple Clawbot will have to drive around to complete the task."
      ]
    },
    proTips: {
      title: "Pro Tip",
      points: [
        "Adjust the R button from forward to reverse on the Brain to determine which direction is easier to use."
      ]
    },
    standards: "ISTE (1) Empowered Learner 1c - Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways."
  },

  // Sprint 4
  "Intro to 3D Printing & Tinkercad": {
    title: "Intro to 3D Printing & Tinkercad",
    subtitle: "Concept Foundations",
    description: "Demystify what 3D printing is, how it fits into robotics, and learn the basics of Tinkercad.",
    stepByStep: [
      "Watch a time-lapse of a 3D printer creating an object to see the process in action.",
      "Handle pre-printed VEX parts (like a connector, cube, or claw) to understand the final product.",
      "Understand the key concept: 3D printing is about building with precise measurements, not just drawing.",
      "Follow a Tinkercad walkthrough to learn the basic controls: move, rotate, align, group, and measure.",
      "<strong>Activity:</strong> Model and export your own simple keychain or name tag. This will help you master the basic controls."
    ],
    levelUp: {
      title: "Challenge Yourself",
      points: [
        "Add complex shapes to your keychain.",
        "Try to emboss your initials instead of just adding them on top."
      ]
    },
    proTips: {
      title: "Design Principles",
      points: [
        "Always start with basic shapes.",
        "The 'Align' tool is your best friend for making parts fit together perfectly."
      ]
    }
  },
  "Designing for Robotics: Measurement & Precision": {
    title: "Designing for Robotics: Measurement & Precision",
    subtitle: "Applied Design",
    description: "Connect digital design to the physical robot by learning the importance of precise measurements and tolerances.",
    stepByStep: [
      "Learn about <strong>measurement</strong> and <strong>tolerance</strong>. Use calipers or a ruler to measure a real VEX part like a beam.",
      "<strong>Activity:</strong> Recreate a basic VEX part (like a 1x4 beam or a corner connector) in Tinkercad, matching its real-world dimensions exactly.",
      "Learn how to export your design as an STL file and preview it in a 'slicer' program to see how the printer would build it.",
      "In your team, brainstorm what part of your robot could be improved with a custom 3D-printed part.",
      "Sketch one of your upgrade ideas in your engineering notebook."
    ],
    levelUp: {
      title: "Challenge Yourself",
      points: [
        "Try modeling a more complex part, like a gear.",
        "Research what 'tolerance' means in engineering and why it's crucial for parts that need to fit together."
      ]
    },
    proTips: {
      title: "Design Principles",
      points: [
        "Measure twice, model once! Accuracy is key.",
        "VEX IQ holes are on a standard 0.5-inch grid. Use this to your advantage when designing parts that need to connect to beams."
      ]
    }
  },
  "From Digital to Physical: Prototyping Your Part": {
    title: "From Digital to Physical: Prototyping Your Part",
    subtitle: "Prototype Development",
    description: "Create, print, and test a functional prototype part for your robot, learning the iterative design process.",
    stepByStep: [
      "Based on your brainstorm, design a small, single-function part that attaches to your robot. Examples: a new phone holder, a custom sensor mount, or a specialized gripper.",
      "Export your design and prepare it for printing.",
      "<strong>Test Print:</strong> Print a short test version of your part (e.g., at half height) to quickly check if the holes align and it fits correctly on your robot.",
      "Analyze the test print. Does it fit? Is it strong enough? Is it too big or too small?",
      "Update your design in Tinkercad based on your test results. This is the 'iteration' part of the engineering design process.",
      "Once you are confident in your revised design, prepare the final model for a full print."
    ],
    levelUp: {
      title: "Challenge Yourself",
      points: [
        "Add features to your part to make it stronger, like fillets or ribs.",
        "Design a part with moving components."
      ]
    },
    proTips: {
      title: "Design Principles",
      points: [
        "Printing a small test piece saves a lot of time compared to printing a full part that doesn't fit.",
        "Think about the direction the printer will build your part. This affects its strength."
      ]
    }
  },
  "At a Distance": {
    title: "At a Distance",
    description: "Use the Distance Sensor to avoid cubes!",
    stepByStep: [
      "Build the BaseBot and attach a Distance Sensor to the front plate. Open VEXcode IQ, open the BaseBot (Drivetrain 2-motor) template, and configure the Distance Sensor. Set up the Field by using Connector Pins to secure 2 cubes to the Tiles as shown in the image.",
      "Build the code shown in the image to get started.",
      "The Distance Sensor reports the numbered distance between an object and the Sensor. When an object is closer to the Distance Sensor, the reading will be a smaller number. In order to stop driving before an object, the BaseBot must wait until the Distance Sensor reading is less than a designated amount. Add the parameters in the <Less than> block to stop driving before touching the cube.",
      "Start by having the BaseBot face a cube on the Field. Download and run the project to test.",
      "Add additional [Drive] and [Turn for] blocks to continue driving to the second cube and stop before touching the cube."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Swerving - Pin more cubes to the Field Tiles. Can you drive while avoiding them?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Printing the Distance Sensor reading using the [Print] block may help you better understand what values the sensor is reporting."
      ]
    },
    standards: "CSTA 1B-AP-12: Modify, remix, or incorporate portions of an existing program into one's own work, to develop something new or add more advanced features."
  },
  "Magic Movement": {
    title: "Magic Movement",
    description: "Use the Distance Sensor to magically move your BaseBot!",
    stepByStep: [
      "Build the BaseBot and attach a Distance Sensor to the front plate.",
      "Open VEXcode IQ. Open the BaseBot (Drivetrain 2-motor) template, and configure the (2nd gen) Distance Sensor.",
      "Build the code shown in the image.",
      "The Distance Sensor reports the numbered distance between an object and the Sensor. When an object (your hand) is closer to the Distance Sensor, the reading will be a smaller number. In order to start driving, the BaseBot must wait until the Distance Sensor reading is less than the designated amount. The forever block has the Basebot continually checking to see how close the object (your hand) is to the Basebot."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Race - Team up against a partner and race your BaseBots.",
        "Reverse, Reverse! - Change the program so that the Basebot drives forward unless your hand is placed in front of the distance sensor."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Not sure how far away your hand is from the Distance Sensor? Use the Sensor Dashboard on the 2nd gen Brain to see Distance Sensor data in real time!"
      ]
    },
    standards: "CSTA 1B-AP-10: Create programs that include sequences, events, loops, and conditionals."
  },
  "Navigate the Maze (Bumper Switch)": {
    title: "Navigate the Maze",
    subtitle: "Use the Bumper Switch to solve a cube maze!",
    description: "Use the Bumper Switch to solve a cube maze!",
    stepByStep: [
      "Build the BaseBot and attach a Bumper Switch to the front plate. Open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ and configure the Bumper Switch. Set up the Field by using Connector Pins to secure 'walls' of cubes to the tiles.",
      "The Bumper Switch will return “True” when the switch is pressed and 'False' when the switch is not pressed. In this activity, the Bumper Switch will be used to detect the walls of the maze. Build the code in the image to the right.",
      "Place the robot at the start of the maze, as shown in the image above. Download and run the project to test it.",
      "Add additional [Drive] and [Turn for] blocks to escape the maze."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Reverse - Move the Bumper Switch to the back of the BaseBot and code it to navigate the maze in reverse!",
        "Labyrinth - Make the maze more complex, add more walls or dead ends. Can you still solve the maze?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Draw the maze in your engineering notebook and solve it by hand. Use the solved maze to plan the project flow. When will the robot need to turn left or right?"
      ]
    },
    standards: "CSTA 1B-AP-10: Create programs that include sequences, events, loops, and conditionals."
  },
  "Color Sensing": {
    title: "Color Sensing",
    description: "Use the Optical Sensor to travel from cube to cube!",
    stepByStep: [
      "Build the BaseBot and attach an Optical Sensor to the front plate. Open VEXcode IQ and make sure to configure the Optical Sensor. Set up the Field by using Connector Pins to secure 3 blue cubes to the tiles.",
      "Build the code shown in the image to the right. Download and run the project.",
      "Add additional blocks to navigate to the next two cubes."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Mix it Up! - Pin different color cubes to the tiles. How will this affect the code?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The Optical Sensor uses light to detect color. Use the [Set optical light] block to increase the brightness of the LED for more accurate color detection."
      ]
    },
    standards: "CSTA (1B-AP-10) - Create programs that include sequences, events, loops, and conditionals."
  },
  "Follow the Light": {
    title: "Follow the Light",
    description: "Drive your robot using a flashlight!",
    stepByStep: [
      "Using black construction paper, create a straight path.",
      "Build the BaseBot and attach an Optical Sensor to the front plate facing down. Open VEXcode IQ, select the BaseBot (Drivetrain 2-motor) template, and configure the Optical Sensor.",
      "Create a project in which the Optical Sensor detects the light of the flashlight causing the robot to move forward along the construction paper path.",
      "Shine a light on the path in front of the Optical Sensor. Keep moving the light in front of the Optical Sensor as the Basebot moves forward to keep it moving."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Light It Up- Try different light sources and path colors to determine how that affects the Basebot's movements.",
        "Altered Path- Try making the BaseBot turn on the path."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Make sure your flashlight is shining light directly in the area where the Optical Sensor will be able to sense it."
      ]
    },
    standards: "NGSS (MS-PS4-2) - Develop and use a model to describe that waves are reflected, absorbed, or transmitted."
  },
  "Secret Code": {
    title: "Secret Code",
    description: "Can you create a VEXcode IQ project that uses your robot's controller to control the colored light coming from the Touch LED Sensor? Then use this key to flash out a coded message to your classmates?",
    stepByStep: [
      "Build the BaseBot with Sensors and open VEXcode IQ. Configure your robot by adding a Touch LED device and a Controller device.",
      "Create the following project.",
      "Save, download, and run the project.",
      "Write down a series of three letters from the code chart, such as: DAD. Use your controller to flash out the three color light codes to a classmate. The controller's E Up button should flash green, the E Down button should flash yellow, and the F Up button should flash red. Next, have your classmates flash you a code. Do you think you could come up with your own secret code?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Button button - Can you adjust your project to have different controller buttons control the LED Touch Sensor?",
        "More color- Can you adjust your project to have the LED Touch Sensor flash different colors?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The [Wait until] block with a <not> operator allows you to control two behaviors with the same Controller button. These behaviors are usually turning a device like a motor or LED on and off."
      ]
    },
    standards: "CSTA 1B-AP-12: Modify, remix, or incorporate portions of an existing program into one's own work, to develop something new or add more advanced features."
  },

  // Sprint 5
  "Triple Transfer": {
    title: "Triple Transfer",
    description: "How fast can you move three blocks to a new location?",
    stepByStep: [
      "Build the Simple Clawbot and set up a field that is 3'x3' and includes the Field Walls. Using colored tape, such as red or orange, mark the first black horizontal line going across the bottom of the Field. The area below the line will be considered the “Home” zone.",
      "Set one cube of each color (red, green, and blue) across the top of the field where the third black horizontal line meets the three vertical lines.",
      "Place the Simple Clawbot, with its back Omni wheels touching the back wall, anywhere along the back wall.",
      "Using the Driver Control Program, drive and move each colored cube to the “Home” zone. Cubes have to be inside the home zone, and cubes that are on the line do not count.",
      "Record the time it takes to move all three cubes. Can you do it even faster?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Stack It - Set a second cube on top of each current cube on the Field, and move all six to the Home zone, one at a time.",
        "Obstacle - Place objects, like pulleys or corner connectors, for the Simple Clawbot to drive around to complete the task."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "When having to complete a multi-step task, divide the task into smaller sections and use [Comment] blocks when coding to help keep organized."
      ]
    },
    standards: "ISTE (1) Empowered Learner 1c - Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways."
  },
  "The Claw!": {
    title: "The Claw!",
    description: "Use your Clawbot to strategically remove VEX pieces from a pile.",
    stepByStep: [
      "The object of this activity is to successfully pick up the most VEX pieces and pull them from the pile. Rescue robots are sent into building collapses to pull debris from unstable areas in much the same way.",
      "Take a handful of various VEX pieces from your kit and drop them in a pile.",
      "Build the Clawbot and open the Clawbot (Drivetrain 2-motor) template in VEXcode IQ.",
      "Build the code shown. The Clawbot should move forward, close the Claw (hopefully grabbing a VEX piece!) and then move in reverse, pulling a piece from the pile if it did grab one.",
      "Run your project five times. Were you able to successfully pull out 5 VEX pieces from the pile? Can you modify the program to grab pieces at a different height?"
    ],
    codeSnippet: {
      lang: "python",
      code: `claw_motor.spin(REVERSE)
drivetrain.drive_for(FORWARD, 500, MM)
claw_motor.spin(FORWARD)
drivetrain.drive_for(REVERSE, 500, MM)
claw_motor.spin(REVERSE)`
    },
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Points! - Assign a point value to each type of VEX piece (beams, wheels, etc.) Modify your project to pick up the pieces with the highest values. Challenge a classmate to see who can earn the most points after each player takes six turns.",
        "Negatives- Assign negative points to some of the VEX pieces and observe how that affects the game."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Learn the names of the VEX parts as you complete the activity. This will make it easier when building and completing challenges with others."
      ]
    },
    standards: "ISTE- Empowered Learner 1.1.c - Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways."
  },
  "Defend the Castle": {
    title: "Defend the Castle",
    description: "Drive your Clawbot to build a wall and defend your castle!",
    stepByStep: [
      "Build the Clawbot and connect the Controller.",
      "The object of this activity is to build a wall with cubes using your Clawbot and a Controller. The wall should be two cubes high, and three cubes across to start.",
      "The Clawbot should be on a 3'x3' Field with walls. There should be six cubes of any color randomly placed around the Field. The Clawbot should start with the back Omni wheels touching any of the four Field walls.",
      "Using the Driver Control Program, pick up and stack cubes using the Controller.",
      "Time yourself! How fast can you protect your royal jewels by building a wall? How do you think you can improve your time?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Points! - Assign point values to certain color cubes. Imagine the red cubes are cement bases, so try putting all reds on the bottom.",
        "Reinforcements - Add another layer of cubes to the top! See how many cubes you can stack to keep invaders out!"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Go slowly when carrying a cube. Rapid movements combined with your new center of gravity means a high tipping risk. Plus, slow movements allow for greater precision when placing cubes."
      ]
    },
    standards: "ISTE (1) Empowered Learner 1.1c - Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways."
  },
  "Block Party": {
    title: "Block Party",
    description: "How fast can you move three cubes to a new location using the Controller?",
    stepByStep: [
      "Build the Simple Clawbot, connect the Controller, and set up a 3'x3' field with walls. Using colored tape, such as red or orange, mark the perimeter of one of the center four black squares as your scoring location.",
      "Place three cubes across the top of the field. The color of the cubes does not matter.",
      "Place the Simple Clawbot, with the back Omni wheels touching the back wall, opposite to the three cubes.",
      "Using the Driver Control Program, drive and move each cube to the scoring location. Cubes have to be fully inside the scoring location. Cubes that are touching the line do not count.",
      "Record the time it takes to move all three cubes together. Can you do it even faster?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "More Cubes - Add more cubes to the field, can you still place them in the scoring location? How many can you fit?",
        "Obstacle - Build obstacles on the field using beams, plates, or corner connectors for the Simple Clawbot to drive around while moving the cubes."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "You can change the direction of motor movement for certain buttons on the Controller from 'Forward' to 'Reverse.' For example, you can change if the R Up button on the Controller spins to open, or close the Claw."
      ]
    },
    standards: "ISTE (1) Empowered Learner - 1.c - Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways."
  },
  "Cube Crasher Challenge": {
    title: "Cube Crasher Challenge",
    description: "Code the BaseBot to knock down cubes!",
    stepByStep: [
      "Build the BaseBot and open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ. Create a stack of 3 cubes.",
      "Place the BaseBot at a starting location approximately 12 inches away from the stack.",
      "Use Drivetrain blocks to move the robot towards the stack of cubes. What blocks will you need to move towards the cube stack? What order should the blocks be in?",
      "Try to knock down the cube stack!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Many Stacks - Add more stacks of cubes and try to knock down all of them.",
        "Cube Crasher Race - How fast can you drive to the stacks of cubes and knock them down? Time yourself or practice with a friend."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The [Set drive velocity] block can be used to increase or decrease the BaseBot's velocity. The default velocity is 50%."
      ]
    },
    standards: "CSTA (1B-AP-10) - Create programs that include sequences, events, loops, and conditionals."
  },
  "Cube Pusher": {
    title: "Cube Pusher",
    description: "Code the BaseBot to push cubes out of the square!",
    stepByStep: [
      "Build the BaseBot and attach an Optical Sensor pointing down from the front plate. Open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ and configure the Optical Sensor.",
      "Use red tape to create a 3'x3' square using the black lines on the Tiles as a guide, and place 3 cubes inside the square, as shown in the image above. The color of the cubes does not matter.",
      "How can we use the Optical Sensor to keep the BaseBot in the square, as well as pushing the cubes? The Optical Sensor will detect the red tape as the edge of the square. When the BaseBot detects red with the Optical Sensor, it will back up and turn right, in order to push more cubes.",
      "Place the BaseBot at the starting location shown in the image above, and build the code in the image to the right. Input parameters in the [Drive for] and [Turn for] blocks to determine how far the BaseBot should back up and turn.",
      "Download and run the project to test it! Change the parameters in the [Drive for] and [Turn for] blocks to keep the BaseBot in the square as needed."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "More Cubes - Add additional cubes inside the square for the BaseBot to push out.",
        "Cube Crasher Race - How fast can you push all the cubes out? Time yourself or practice with a friend."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The [Set drive velocity] block can be used to increase or decrease the BaseBot's velocity. The default velocity is 50%."
      ]
    },
    standards: "CSTA (2-AP-12) Algorithms and Programming- Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals."
  },
  
  // Sprint 6
  "Traffic Signals": {
    title: "Traffic Signals",
    description: "How many cards does it take to get to the finish line?",
    stepByStep: [
        "Use tape to mark starting and finish lines 50cm (500mm) apart.",
        "Use white index cards or construction paper to create 12 cards that have either red or green colored dots on them. Shuffle and stack the cards.",
        "Build the BaseBot and attach an Optical Sensor to the front plate. Open VEXcode IQ and make sure to configure the Optical Sensor.",
        "Build the code shown. The Basebot will move forward 3 inches if the color senses green and move in reverse 1 inch if it reads red.",
        "Place your robot at the starting line. Take the first card off the pile and place it in front of the Optical Sensor, letting the robot move either forward or reverse depending on what the Optical Sensor reads. How many cards does it take to move to the finish line? If you don't make it to the finish line, shuffle the cards and try again."
    ],
    codeSnippet: {
      lang: 'python',
      code: `while True:
  if optical_9.is_near_object():
    if optical_9.color() == Color.RED:
      drivetrain.drive_for(FORWARD, 100, MM)
    if optical_9.color() == Color.GREEN:
      drivetrain.drive_for(REVERSE, 50, MM)`
    },
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Add Color - Add to your project, instructing the robot to make a 180 degree turn if the color sensor detects blue.",
        "Pair up - Partner up with another student and see who crosses the finish line first."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "If you are just starting Python and want to double check your work, you can see your code in the block programming language at any point in time by clicking on the code viewer console."
      ]
    },
    standards: "ISTE- Empowered Learner 1.1.c - Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways."
  },
  "Decision Maker": {
    title: "Decision Maker",
    description: "Use Operator blocks to make decisions in VEXcode IQ",
    stepByStep: [
      "Build the BaseBot with Sensors and open the BaseBot with Sensors (Drivetrain 2-motor) template in VEXcode IQ. Place three IQ Cubes along one side of a 3' by 3' Field with walls. The colors should be randomized for each test.",
      "Place the BaseBot against the far wall from the cubes with the wheels touching the back wall.",
      "Code your robot in VEXcode IQ find each of the three colored cubes on the Field. The Touch LED should glow the color of the found cube when the Optical Sensor detects the color AND when the Distance Sensor is less than 100mm away from the cube. This behavior should repeat for each of the three cubes, regardless of the order or color of the cubes.",
      "Test your project! Did it work as intended? Debug and try again."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Many Cubes - Have your robot store the information using variables and the Touch LED glow 2 seconds for each color detected at the end of the project."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Use a combination of Operator blocks, Control blocks (like the [If then else] block), and Sensing blocks to create your project."
      ]
    },
    standards: "CSTA 2-AP-12: Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals."
  },
  "1..2..3.. Green Light": {
    title: "1..2..3.. Green Light",
    description: "Can you create a VEXcode IQ project to control the behavior of your robot using the colored light from the Touch LED Sensor?",
    stepByStep: [
      "Build the BaseBot with Sensors and open the example project BaseBot with Sensors template in VEXcode IQ. Use a Beam and two Corner Connectors to place the LED Touch Sensor in front of the Optical Sensor like in the diagram above.",
      "Create the following project using a My Block.",
      "Save, download, and run the project.",
      "Your robot should drive forward when the Touch LED is green and stop driving when it is not green."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Spin dance - Can you adjust your project to have your robot turn to the left when the Touch LED is green?",
        "More color control- Can you adjust your project to add a second color to control a second behavior for your robot. Such as, when the Touch LED is red it makes the robot reverse back to its starting position."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "The project's flow can be faster than the reaction time of some sensors. Adding a short 0.1 second pause can add to the accuracy of the sensor's recording.",
        "Some electronics can use an infrared (IR) remote control that sends pulses of IR light to the receiver of a device to control its behavior."
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Marker Maze": {
    title: "Marker Maze",
    description: "Can your BaseBot turn at the correct angle to avoid knocking over the markers?",
    stepByStep: [
      "Create a maze using various markers on a flat surface. The path through the maze should be big enough for the Basebot to travel through and contain two right angles.",
      "Build the BaseBot and open VEXcode IQ. Use the BaseBot (Drivetrain 2-motor) template and create a project that directs the Basebot to travel through the maze without knocking down any markers.",
      "Complete one practice run, and then do a second run, recording your time. If you knock down a marker, start again.",
      "Can you reiterate on your project to make it travel through the maze faster without knocking anything down? Change your project if needed, and test it again until you are successful."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Obtuse, Acute- Change the path to include an obtuse and or/acute angle.",
        "Reverse!- Have the Basebot complete the maze and then travel back through the maze in reverse."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Try using the [Turn Velocity] block to help with precise turning."
      ]
    },
    standards: "CSTA 1B-AP-15 - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended."
  },
  "It's All Relative": {
    title: "It's All Relative",
    description: "Use multiplication to reduce a scale model.",
    stepByStep: [
      "Build the BaseBot and tape a rectangle 30cm (300mm) by 24cm (240mm) to the floor.",
      "Build the code shown in the image to the right. Download and run the project. The project will direct the BaseBot to 'trace' over the taped rectangle.",
      "Think about what you would need to do if the full scale is too large. Can you make a rectangle half the size of the original?",
      "Use the Scale Factor of ½ (the number all lengths are multiplied by) to find the new height and width and replace the original parameters with the new scaled ones.",
      "Place your BaseBot exactly halfway down the longer line and run the program. It should make a rectangle as shown in the picture.",
      "What happens if you scale it down again by half?"
    ],
    codeSnippet: {
      lang: "python",
      code: `def when_started1():
  for repeat_count in range(2):
    drivetrain.drive_for(FORWARD, 300, MM)
    drivetrain.turn_for(LEFT, 90, DEGREES)
    drivetrain.drive_for(FORWARD, 240, MM)
    drivetrain.turn_for(LEFT, 90, DEGREES)`
    },
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Scale it Up- Use a scale factor of 2 and explore how the Basebot enlarges the rectangle.",
        "Triangles- Measure out a large triangle. Follow the same steps as you did for the rectangle and try to scale it down by ½."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "To autofill a command line in VEXcode, right click on an open command line, then press CTRL and the space bar at the same time. This will open a window with a collection of commands you can pick."
      ]
    },
    standards: "CSTA-AP-13: Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs."
  },

  // Sprint 7
  "Spin Your Wheels": {
    title: "Spin Your Wheels",
    description: "Can you calculate how fast your wheel spins using measurements from a VEXcode IQ Project?",
    stepByStep: [
      "Build the BaseBot and open VEXcode IQ to create a new project.",
      "Configure a Motor device to your project in Port 1. This will allow you to control the left drive motor.",
      "Recreate the project shown to the right. Save, download, and run the project.",
      "Divide the 1 revolution of the wheel by the time indicated in seconds measured by the project (displayed on the Brain). This will give you the wheel speed in revolutions per second. Multiply your value by 60 seconds per minute. This will give you the wheel speed in the standardized revolutions per minute (RPM). Record your results.",
      "Change the parameter in the [Set motor velocity] block to 60%. Download and run the adjusted project. Using the step above to calculate the new wheel speed in RPMs. Repeat this step for 70%, 80%, 90%, and 100%. Record your results for each velocity value.",
      "Test to see if there is a difference in the wheel speed with the BaseBot elevated (the wheels not touching the ground) and with the BaseBot driving on the ground."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Picture your Data - Create a line graph of RPM versus percent velocity from the data you collected. Can you use the graph to predict how fast your wheel will spin at 75% velocity?",
        "Ground Travel - The 200 mm wheel will travel 20 cm for every turn. Can you calculate how far the wheel will travel in one minute at 100% velocity? Can you calculate the wheel's ground speed in centimeters per second (cm/s) at 100% velocity?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Ensuring the motor is securely fastened to the drivetrain and the shaft is not bent will reduce friction and increase your wheel speed.",
        "Engineers can use a handheld tachometer to measure the RPMs of a motor shaft."
      ]
    },
    standards: "CCSS.MATH.CONTENT.7.RP.A.2.B: Identify the constant of proportionality (unit rate) in tables, graphs, equations, diagrams, and verbal descriptions of proportional relationships."
  },
  "Wheel It!": {
    title: "Wheel It!",
    subtitle: "Design and Build a Compound Machine",
    description: "Design a Wheelbarrow that incorporates more than one simple machine.",
    stepByStep: [
        "Wheelbarrows consist of two simple machines, a lever and a wheel and axle. A wheelbarrow is designed to be pushed and guided by a single person using two handles.",
        "First, design your Wheelbarrow on paper and label the two simple machines that make up the wheelbarrow.",
        "Build your design. Does it look like how you intended? Why not? What can you change to make it work better?",
        "When your wheelbarrow is complete, test out your creation. How well does your wheelbarrow move? Change your design if you have any challenges moving it smoothly."
    ],
    levelUp: {
        title: "'LEVEL UP'",
        points: [
            "Make it Move! - Do different types of surfaces affect your wheelbarrow? Test different surfaces and redesign your wheelbarrow if needed.",
            "Fit it In! - How much can your wheelbarrow hold? Guess how many IQ parts you can fit in your design. Test your guess by pushing your wheelbarrow forward 60 centimeters (~24 inches) without losing any pieces."
        ]
    },
    proTips: {
        title: "Wheels and Axles",
        points: ["Try using different sized wheels on your axle to see how it changes the wheelbarrow's design. You can use different kinds of pieces as a wheel as well, like a pulley."]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Wheel and Axle Lunar Rover": {
    title: "Wheel and Axle Lunar Rover",
    description: "Design and build a Lunar Rover that will need to have an axle and wheel to drive on the moon. Use as many axles and wheels as you need.",
    stepByStep: [
      "Think of how a robot or car would move on the moon. Today we are going to design a vehicle called a lunar rover to take samples from the moon's surface.",
      "Now, we are going to need at least one wheel and axle to make our lunar rover move on the surface of the moon.",
      "First, design your lunar rover on paper. Make sure to label each part of your design.",
      "Build your design. Does it look like you intended? Why not? What can you change to make it work better?",
      "When your lunar rover is complete, test out your creation. Will your rover move? Change your design if you have any challenges moving."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Make it Move Over a Hill - How will your lunar rover get over a hill on the moon? Test out and redesign your rover if needed.",
        "Super Sized Rover - Can your rover take a Sammy around the moon? Make your design larger to fit Sammy."
      ]
    },
    proTips: {
      title: "Axle and Wheel Construction",
      points: [
        "Using Spacers helps to allow your wheels to stay put on the shafts. Try using different kinds of pins and standoffs to put the pieces around the axle and wheel together.",
        "While there are many wheels in your kit, you are able to use any circular piece as a substitute for a wheel!"
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Rubber Band Car": {
    title: "Rubber Band Car",
    description: "Can you design and build a car powered only by a single rubber band?",
    stepByStep: [
      "Design problems usually have constraints or limits within them. For this challenge, you must design a car which will move under the power of just a single rubber band.",
      "Ideas: Join together with one or two partners and brainstorm ideas on how to build a rubber band powered car. Decide on a design to build. Document the reasons why you decided on this design.",
      "Build: Assemble your rubber band car design. Be sure to document and diagram the parts needed, the steps taken to build the car, and any problems encountered during the build.",
      "Test: Test out how well your car moves. Document the results of your test. Remember measurements always add strength to the reporting of your test. How did your rubber band powered car work? Did your test help you come up with any new ideas?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Built for Speed- Layout a meter long drag strip. Challenge your classmates to find out who has the fastest rubber band powered car.",
        "Go the Distance - Challenge your classmates to find out which car will travel the farthest using only the power from a single rubber band."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Leaving a tiny amount of space between the shaft collar and the structural piece (enough space to slide in a piece of paper) will allow your car's shafts to spin faster.",
        "The acceleration of your car will be equal to the force from the rubber band divided by the car's mass. If all other things are equal, the lighter your car, the faster it will go."
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Sammy Rescue": {
    title: "Sammy Rescue",
    description: "Use your design skills to create a contraption to rescue Sammy!",
    stepByStep: [
      "First, set up your scene. You should set up Sammy's 'crater' about 30 centimeters (~one foot) down from the table you are working on. You can use a chair, an upside-down box, or something similar. Place Sammy there, and a VEX IQ Field Tile on the table above. Look through the VEX IQ pieces, and collect those that you think might help you create a contraption with a pulley.",
      "Keeping the pieces in mind, draw an initial sketch of your rescue contraption.",
      "Build your design, and test it by trying to rescue Sammy. Is it working? If so, what can you do to make it work better? If not, how can you improve the design so that it works?",
      "Rebuild your rescue contraption using what you learned during the first build, and test it again. Were you able to rescue Sammy? If you need to try again, that's ok! Keep trying until you have a design that is successful.",
      "Once you are able to rescue Sammy, do a final drawing of your design, labeling the parts. Give your rescue contraption a name, and share with a classmate!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Deluxe Contraption - A pulley is a simple machine. Can you add another simple machine to your design to make it more effective? Research the types of simple machines, and give it a try!",
        "Complex Rescue - Add distance between the pulley and Sammy and try a new design, or create a contraption that can rescue multiple Sammys."
      ]
    },
    proTips: {
      title: "Pulley Research",
      points: [
        "Do some research on different kinds of pulleys and how they work, to help with your design ideas!"
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Ramp Racers": {
    title: "Ramp Racers",
    description: "Modify the wheel on your VEX IQ Inclined Plane and race a friend! Test out the effects of adding weight to the wheel on your inclined plane by racing a friend!",
    stepByStep: [
      "Find a classmate. Each of you should build the Inclined Plane.",
      "Next, add an axle to your wheel by finding the 6x Pitch Shaft (that's the longest metal shaft) and two Shaft Collars. Slide the 6x Pitch Shaft through the middle holes on the connected Wheels and secure them with a shaft collar on either side.",
      "Next, look through your VEX IQ pieces and find 2 or 3 that you can attach to the shaft by sliding them through a middle hole. The gears, the 2x2 Beam and the 1x Wide Spool are examples. You will need two of each piece you choose, because you are going to add them to either side of the wheel.",
      "Both racers should choose the pieces they want to add for the first race. Add the same piece or pieces to each side, and make them as symmetrical as you can. Create a race track by clearing a space on the floor and marking a starting line with tape. Set up both of your inclined planes at the starting line, count to three, and let them go at the same time.",
      "Which racer won that round? What pieces were added to the winning wheel? Why do you think that racer won? Race at least two more times, using different pieces, and see what happens. Can you draw any conclusions about why certain designs are faster than others?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Curvy Racers - See what happens if you add different pieces to each axle. Try to create the racer that can make the sharpest turn.",
        "Measure the Distance - Practice your measurement skills by measuring the distance the racer travels in centimeters and inches."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Be sure the pieces you choose don't hit the sides of your inclined plane!",
        "If you are short on room to race, try using one of the lower levels on the inclined plane."
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4d: Students exhibit a tolerance for ambiguity, perseverance, and the capacity to work with open-ended problems."
  },
  "Pendulum Time!": {
    title: "Pendulum Time!",
    description: "Explore how the Pendulum works. Make changes to the Pendulum to see how it affects its swing.",
    stepByStep: [
      "Create the Pendulum build. Set the Pendulum on the edge of your desk and attach the tire as shown above.",
      "Using a stopwatch, record the time it takes to complete the whole swing forward and backward, releasing the Wheel from different heights. Notice a pattern?",
      "The time it takes for the pendulum to swing forward and backwards one full time is determined by the length of the string, not weight at the end of the string or the distance from which it is dropped. Try moving the standoff holding the string to a different hole on the beam and record the time it takes to complete a whole swing back and forth. What happened?",
      "Try moving the Standoff a few more times and record the times that the wheel swings. Do you see a pattern? The greater the length of the string, the longer time for the back-and-forth motion."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Different Weights! - Using a different item, try changing the weight on the end of the string.",
        "Research it!! - Find information about Pendulum clocks and write a paragraph explaining how they work."
      ]
    },
    proTips: {
      title: "The Length of String",
      points: [
        "The longer the string, the longer it will take for the weight at the end of the string to swing backwards and forward."
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4a: Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },

  // Sprint 8
  "Hang Out": {
    title: "Hang Out",
    description: "VEX IQ beams and plates make up the structure of your devices. Can you build a device that hangs out the largest distance off your desk?",
    stepByStep: [
      "Using plates and/or beams, build a device that hangs out the largest distance off your desk.",
      "Pins, standoffs, and connectors can be used to connect the plates and beams, but they can not be used to extend the distance.",
      "A field tile can not be used as the base of your device.",
      "Distance is measured from the edge of the desktop to the farthest part of the device."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Challenge a classmate to see whose device can extend the most.",
        "Build a bridge to span the greatest distance between two desktops."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "As soon as the balance point of your device moves off of the support of the desktop, the device will fall.",
        "The balance point is called the center of mass."
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4C Students develop, test and refine prototypes as part of a cyclical design process."
  },
  "Build It, Make It, Engineer It": {
    title: "Build It, Make It, Engineer It",
    description: "Can you build a house? Will it stay up during a windstorm? Let's find out!",
    stepByStep: [
      "Think of how a house is engineered to hold off a storm. Use VEX IQ pieces to create a strong house that will withstand a large storm.",
      "First, choose how many walls you need to add. You can be as creative as you want.",
      "In order to make your building steady, use pins and other materials to secure your structure.",
      "Test your creation using wind from a sheet of paper or piece of cardboard and increase the speed. Does anything fall down or fall off? Now make hail by using small pieces of crumpled paper thrown at the building. Does your structure still stand up? How can you improve your design?",
      "Redesign and don't give up until you've finished your creation!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Troubleshooting - What other weather related catastrophes can your building withstand?",
        "Earthquake Base - Is your base strong enough to withstand an earthquake? Test it out and debug if you need to."
      ]
    },
    proTips: {
      title: "Creativity is Key",
      points: [
        "A house doesn't have to have 4 walls. You can be as creative with your house and base as possible. Remember to test out your creativity and never give up!"
      ]
    },
    standards: "ISTE (4) Innovative Designer - 4d: Students exhibit a tolerance for ambiguity, perseverance, and the capacity to work with open-ended problems."
  },
  "Navigate the Maze with Driver Control": {
    title: "Navigate the Maze with Driver Control",
    description: "Drive your BaseBot using the Controller to solve a cube maze!",
    stepByStep: [
      "Build the BaseBot and connect a Controller. Set up a Field by using Connector Pins to secure 'walls' of cubes to the tiles, or use IQ Field Walls.",
      "Place the robot at the start of the maze, and run the Driver Control Program on the Brain. The object of the activity is to escape the maze as quickly as possible. The time will be displayed on the Brain's screen the entire time the program is running.",
      "Try not to hit any maze walls, and see if you can improve your driving skills!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Reverse - Navigate the maze again, this time in reverse! Does it get more challenging?",
        "Labyrinth - Make the maze more complex, add more walls or dead ends. Can you still solve the maze?",
        "Driver configurations - can you try other driver configurations? (Split arcade, Tank drive, Right arcade, Left arcade)"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Draw the maze in your engineering notebook and solve it by hand. Use the solved maze to plan your route. When will the robot need to turn left or right?"
      ]
    },
    standards: "ISTE 1.5 - Computational Thinker- Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods to develop and test solutions."
  },
  "Navigate the Maze - Autonomous": {
    title: "Navigate the Maze - Autonomous",
    description: "Code your robot to solve a cube maze!",
    stepByStep: [
      "Build the BaseBot and set up a Field by using Connector Pins to secure “walls' of cubes to the tiles, or use IQ Walls.",
      "Create pseudocode to plan a path for the robot to solve the maze.",
      "Open the Basebot (Drivetrain 2-motor) template in VEXcode IQ. Use your plan to create a project in VEXcode IQ for the robot to solve the maze! Download your project to the robot.",
      "Place the robot at the start of the maze, and run your project.",
      "After running the project, make any edits to your code and run the project again until you solve the maze!"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Reverse - Navigate the maze again, this time in reverse! Does it get more challenging?",
        "Labyrinth - Make the maze more complex, add more walls or dead ends. Can you still solve the maze?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Draw the maze in your engineering notebook and solve it by hand. Use the solved maze to plan your route. When will the robot need to turn left or right?"
      ]
    },
    standards: "CSTA 1B-AP-15 - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended."
  },
  "BaseBot Driver": {
    title: "BaseBot Driver",
    description: "Navigate a city maze using the Controller. First, build the city, then drive in it!",
    stepByStep: [
      "Build the BaseBot and pair your Controller.",
      "Build a city on an IQ Field using classroom items. Tape a red square and a green square to the Field to show the start and stop locations. The red lines represent where classroom items should go to represent buildings or other city structures.",
      "Run the Driver Control program on the IQ Brain, and use the Controller to navigate through your city.",
      "Start at the green square and end on the red square.",
      "Then, open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ and add blocks to have the BaseBot autonomously navigate the city instead of using the Controller. Which is faster? Which is more accurate?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Add Sensors - Use build instructions to add sensors to your BaseBot. Add colors to your maze and code it to navigate the city based on the colors detected by the Optical Sensor!"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Driver Control Options - Experiment with different driver configurations to find the one that works best for you. Do you prefer Tank Drive, Right Arcade, Left Arcade, or Split Arcade?",
        "Use [Comment] blocks to organize your code!"
      ]
    },
    standards: "CSTA 1B-AP-15 - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended."
  },
  "Golf Course Mower": {
    title: "Golf Course Mower",
    description: "Code your BaseBot to drive over the entire golf course, while avoiding the sandpits!",
    stepByStep: [
      "Build the BaseBot and set up a 4'x4' field as shown on the right. The marked areas are the sandpits. Mark the sandpits with pieces from the IQ Kit or other classroom materials.",
      "Open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ, and create a project that has the BaseBot drive over all of the unmarked areas over the field which represents grass.",
      "Avoid the sandpits! If your BaseBot drives into a sandpit you must start again from the beginning.",
      "Start the BaseBot in the location shown in the image to the right. Download and run your project to test. Make changes to your project as needed and test again.",
      "Try starting from different areas. How fast can you drive around the entire course?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Add a Bumper Switch! - code your BaseBot to back up and turn when it touches a wall on the course.",
        "Add a ramp - use a binder or other classroom material to create a ramp on the golf course that the BaseBot needs to travel across as it mows the grass."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Use [Comment] blocks to organize your code!"
      ]
    },
    standards: "CSTA 1B-AP-15 - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended."
  },
  "Advanced Scavenger Hunt": {
    title: "Advanced Scavenger Hunt",
    description: "Use the Interactive Parts Poster and your Kit to learn how pieces work together.",
    stepByStep: [
      "Open the Interactive Parts poster on your tablet or computer.",
      "Select a part to view more information about it. Can you create the assemblies that fit the following descriptions?",
      "a. Connect two light gray beams with no space between to make a pair of scissors. Why is your creation able to move in a 'scissor-like' motion?",
      "b. Connect another pin to both beams in this build. How functional are your scissors now? Can you explain why they can or cannot move?",
      "c. Put the orange pin in a motor and attach a claw gear. Can you hear the motor move when spinning the gear?",
      "d. Turn the claw gear around and attach it to the orange pin. Can you hear the motor move when spinning the gear? Why do you think you cannot hear the motor move anymore?",
      "e. Connect two gray large beams with space between them. What pieces did you use to create the space?",
      "f. Retry the last step, but this time use different pieces. What are some benefits to using this step over the last?"
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Make your own scavenger hunt - Use what you have learned working with the Interactive Parts Poster to create your own scavenger hunt and share with a classmate! Can they make all the builds that you describe?",
        "How many? - Is there more than one piece that fits the description? How many pieces can you find that fit each of the scavenger hunt descriptions?"
      ]
    },
    proTips: {
      title: "Orient the Pieces",
      points: [
        "Orient the builds similar to how they are shown above in your hand. Doing so will connect the movements in your hand to the picture in your mind and ensure you are building correctly."
      ]
    },
    standards: "ISTE (6) Creative Communicator - 6b - Students create original works or responsibly repurpose or remix digital resources into new creations."
  },

  // Sprint 9
  "Pinball Wizard": {
    title: "Pinball Wizard",
    description: "Create a pinball game that includes simple machines using VEX IQ parts!",
    stepByStep: [
      "You will need a pencil, paper, and a marble for this activity.",
      "Sketch a pinball machine using VEX IQ parts. Be sure to include a lever and an inclined plane. Only use parts that do not require power.",
      "Build your pinball machine by elevating the tiles to create a slope, and test out your design. Does it work as intended? What improvements can you make?",
      "Create a second iteration of your pinball machine based on your test. Play again!",
      "Keep testing and iterating until you are happy with your design."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "More machines! Can you find a way to include a wheel and axle in your design? What about a pulley?",
        "Double Trouble! Find a way to use two marbles at one time in your design."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "If you are not sure where to start, look at some pictures of pinball machines and observe their features. Look for pieces in the IQ Kit that would work to recreate them!",
        "Use rubber bands when creating the levers on the bottom to flip the balls back into the game!"
      ]
    },
    standards: "NGSS MS-ETS1-3: Analyze data from tests to determine similarities and differences among several design solutions to identify the best characteristics of each that can be combined into a new solution to better meet the criteria for success."
  },
  "Covered Maze Box": {
    title: "Covered Maze Box",
    description: "Design a maze that a marble can move through, then add walls and a roof, so the player can't see the course.",
    stepByStep: [
      "Think about how big or small you want your maze box to be, and gather the plates that will make the base.",
      "Plan your maze on a piece of scrap paper, then gather the needed VEX IQ pieces.",
      "Attach your maze walls to the base to create the pathway. Is your marble path flat, so it can roll easily?",
      "Use corner connectors to add walls around the base of your maze. Then, use standoffs and larger plates to create a top. Make sure to leave an opening for the marble to enter and exit the maze.",
      "Test it out! Can you do your maze? Give it to a friend, and see if they can move the marble from start to finish."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Open it up - If you remove the top of your maze, what could you add or change to keep it challenging? Try a new iteration on your maze box, but with it open on top."
      ]
    },
    proTips: {
      title: "Standoffs vs. Pins",
      points: [
        "Both of these connectors will help you to create a build, but in this case, a standoff can raise a piece high enough that the marble couldn't roll over it. Pins will keep your walls tight to the plates, and might not be tall enough to work the way you need them to."
      ]
    },
    standards: "ISTE (1) Empowered Learner - 1a: Students articulate and set personal learning goals, develop strategies leveraging technology to achieve them and reflect on the learning process itself to improve learning outcomes."
  },
  "Tread Art": {
    title: "Tread Art",
    description: "Use your VEX IQ wheels to create a piece of abstract art!",
    stepByStep: [
      "Use parts from your IQ kit to Build a rolling paint wheel like the images above and to the right.",
      "Tape a piece of large drawing paper on your desk.",
      "Using a paintbrush, paint a thin layer of paint on the wheel tread.",
      "Roll the paint wheel across a piece of large drawing paper. Create several more lines to create an original piece of work."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Rainbow Rotations- Wash the paint wheel and try different colors.",
        "Tread Change-Try different IQ wheels (or even pulleys) to change the pattern on the paper."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Be sure to use a water-based paint that washes off easily.",
        "Wash your IQ parts thoroughly before the paint dries on them, and dry any metal parts used. Keep a toothpick handy for any hard to wash off areas."
      ]
    },
    standards: "ISTE (6a) Creative Communicator- Students choose the appropriate platforms and tools for meeting the desired objectives of their creation or communication."
  },
  "Pitch Pointillism": {
    title: "Pitch Pointillism",
    description: "Use your VEX IQ Pitch Shafts to create a piece of original art!",
    stepByStep: [
      "Pointillism is the practice of applying small dots (or points) of paint to a surface so that they visually blend together from a distance to form an image.",
      "Place a piece of drawing paper on your desk. Lightly sketch the outline of an object.",
      "Dip an IQ Pitch Shaft into some tempera paint. Do your best to apply paint only to the tip of the shaft. Press down lightly to make a small dot. Try to fill up as much of the paper as possible with color.",
      "After the paint dries, erase the pencil marks that were used as a guide."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Colorful Points- Try just using primary colors placed next to each other instead of secondary colors. For example, place blue and yellow dots together and see if you see green when you look at the picture from a distance.",
        "Pointy Parts- Are there other IQ parts that can be used to create dots in your creation?"
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Use a longer Pitch Shaft to avoid smudging your work with your fingers.",
        "If there is too much paint on the tip of the shaft, tap it slightly to get the excess paint off."
      ]
    },
    standards: "ISTE: 4a Innovative Designer- Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems."
  },
  "Basketball Drills": {
    title: "Basketball Drills",
    description: "Use My Blocks to pass parameters and organize your code in VEXcode IQ.",
    stepByStep: [
      "Build the BaseBot and open the BaseBot (Drivetrain 2-motor) template in VEXcode IQ. Create a starting line for your robot. Then, measuring from the starting line, mark three additional lines 200 millimeters (mm) apart from each other.",
      "Place the center of the BaseBot's front wheels on the starting line.",
      "Code your robot in VEXcode IQ to drive forward to the first line and then back to the starting line. Repeat this process for each of the three lines. Use My Blocks in order to pass parameters and organize your code.",
      "Test your project! Did it work as intended? Debug and try again."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Don't reverse!- code the robot to drive to line one, stop, and return back to the starting line without using the 'reverse' parameter. The robot will need to turn around to drive back to the first position."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "Use a combination of blocks from the Drivetrain and Operators categories in order to define your My Blocks."
      ]
    },
    standards: "CSTA 2-AP-14: Create procedures with parameters to organize code and make it easier to reuse."
  },
  "Code a Code!": {
    title: "Code a Code!",
    description: "Send a secret message using the Touch LED.",
    stepByStep: [
      "In this project, you are going to create a code by assigning flashes of the Touch LED to alphabet letters. For example, “A”= 1 flash of red, “B” = 2 flashes of green, 'C' = 1 flash of blue and 1 flash of red. Make sure you pause in between each letter, so it does not get confusing.",
      "For this activity, you will need a robot Brain and a Touch LED. Open VEXcode IQ and configure the Touch LED.",
      "Build the code shown in the image to the right.",
      "Download and run your project. Write out the letters that the Touch LED indicates. The project should have spelled out the word 'CAB'.",
      "Now, develop and write your own code and create a project that uses the Touch LED to spell out a short word of your choosing. Create a key to give to another person and see if they can figure out the word you spelled when they watch your project run."
    ],
    levelUp: {
      title: "'LEVEL UP'",
      points: [
        "Sound off!- To help understand when a letter is complete, program the BaseBot to make a sound after completing the flashes of a letter.",
        "Sentence Sleuth- Assign words to your code instead of letters and see what sentences you can create."
      ]
    },
    proTips: {
      title: "Pro Tips",
      points: [
        "To turn the Touch LED off, set the color to Color.BLACK"
      ]
    },
    standards: "CSTA 1A-AP-09- Model the way programs store and manipulate data by using numbers or other symbols to represent information."
  }
};

// This loop generates placeholder content for Final Projects.
// The new, specific project content will overwrite these placeholders.
sprintTopics.forEach(sprint => {
    const projectTitle = `Sprint ${sprint.sprint}: Final Project`;
    
    // Default placeholder content
    let content: LessonContent = {
        title: projectTitle,
        subtitle: `Culminating Activity for ${sprint.title}`,
        description: "This project is designed to test your understanding and application of all the skills you've learned in this sprint. Please see your instructor for the specific project brief, requirements, and rubric.",
        stepByStep: [
            "Receive the project brief from your instructor.",
            "Brainstorm ideas and sketch your initial designs in your engineering notebook.",
            "Create a plan and a timeline for completing the project.",
            "Build and program your solution, testing and iterating as you go.",
            "Prepare a presentation or demonstration of your final project.",
            "Submit your project and present your work."
        ],
        levelUp: {
            title: "Project Extensions",
            points: [
                "Incorporate concepts from a previous sprint into your project.",
                "Add a unique feature that goes beyond the basic requirements.",
                "Create detailed documentation for your build and code."
            ]
        },
        proTips: {
            title: "Tips for Success",
            points: [
                "Manage your time effectively. Don't leave everything to the last minute.",
                "Collaborate with your classmates. Share ideas and help each other troubleshoot.",
                "Document your process thoroughly in your engineering notebook. It's a key part of the engineering design process."
            ]
        }
    };

    // Specific content for Sprint 1 Final Project
    if (sprint.sprint === 1) {
        content = {
            title: `Sprint 1: Final Project`,
            subtitle: "Build the Clawbot Arm",
            description: "The final project for Sprint 1 is to complete the construction of your robot by adding the arm and claw mechanism. This will transform your BaseBot into a fully functional Clawbot, ready for the programming challenges in the next sprint.",
            stepByStep: [
                "Gather all necessary parts for the arm and claw assembly from your VEX IQ kit.",
                "Follow the 'Clawbot 2.0' build instructions to construct the arm and claw. You can find these in the 'Build' section of the app.",
                "Carefully attach the arm assembly to your robot's main chassis.",
                "Connect the motor for the arm and the motor for the claw to the correct ports on the VEX IQ Brain.",
                "Test the arm and claw's range of motion manually to ensure it's built correctly and moves freely without catching on any wires.",
                "Congratulations! Your Clawbot is now complete and ready for programming!"
            ],
            levelUp: {
                title: "Project Extensions",
                points: [
                    "Experiment with different gear ratios on the arm to see how it affects lifting speed and power.",
                    "Add a Bumper Switch sensor to the claw to detect when it's holding an object."
                ]
            },
            proTips: {
                title: "Tips for Success",
                points: [
                    "Ensure all shafts are straight and spin freely before tightening screws to reduce friction.",
                    "Use the VEX IQ Pin Tool to easily insert and remove pins without damaging your fingers or the parts.",
                    "Keep your wires tidy using rubber bands or zip ties to prevent them from getting caught in the gears."
                ]
            }
        };
    }

    // Specific content for Sprint 2 Final Project
    if (sprint.sprint === 2) {
        content = {
            title: `Sprint 2: Final Project`,
            subtitle: "VEX IQ Treasure Hunt Challenge",
            description: "Program your VEX IQ Clawbot to autonomously detect and collect color-coded “treasures” using the Optical Sensor. This final challenge brings together all Sprint 2 programming concepts: variables, operators, loops, and conditionals.",
            stepByStep: [
                "<strong>Objective:</strong> Program your Clawbot to autonomously find and collect two red 'treasure' cubes while avoiding a blue 'obstacle' cube.",
                "<strong>Setup:</strong> Arrange the field with two red cubes and one blue cube as instructed by your teacher.",
                "<strong>Plan your Logic:</strong> In your engineering notebook, outline how you will use loops, conditionals, and the Optical Sensor. Think: 'If the sensor sees red, then close the claw and lift the arm.'",
                "<strong>Code your Solution:</strong> Write a VEXcode IQ project that makes the robot scan for cubes. Use a loop to drive forward and continuously check the sensor.",
                "<strong>Implement Conditionals:</strong> Use an 'if' statement to check the color detected by the Optical Sensor. If it's red, program the sequence to pick it up. What should it do if it sees blue?",
                "<strong>Navigate and Collect:</strong> Program the robot to drive to a 'Treasure Chest' zone to drop off the collected red cubes.",
                "<strong>Test and Debug:</strong> Run your program. Does it work as expected? Watch the robot's behavior closely and fix any bugs in your code. This is a key part of engineering!"
            ],
            levelUp: {
                title: "Optional Extensions",
                points: [
                    "Integrate the Distance Sensor for wall or obstacle avoidance.",
                    "Add TouchLED feedback (e.g., green for success, red for retry).",
                    "Use variables to count the treasures collected or record attempt data."
                ]
            },
            proTips: {
                title: "Tips for Success",
                points: [
                    "Clearly explain your logic to your partner before you start coding. This helps catch problems early.",
                    "Use Pair Programming! Take turns being the 'driver' (coding) and the 'navigator' (watching for errors).",
                    "Remember that testing and failing is a normal and important part of engineering. Don't get discouraged!"
                ]
            }
        };
    }

    // Specific content for Sprint 3 Final Project
    if (sprint.sprint === 3) {
        content = {
            title: `Sprint 3: Final Project`,
            subtitle: "VEX IQ Autonomous Rescue Mission",
            description: "Work in pairs to design and program an autonomous robot that completes a simulated rescue mission. The robot must use all four sensors—Optical, Distance, Bumper, and Inertial—to locate and retrieve a target object, avoid obstacles, and deliver it safely to a designated zone. This project integrates all previously learned programming concepts.",
            stepByStep: [
                "<strong>Gather Materials:</strong> Ensure you have a built Clawbot with Optical, Distance, Bumper, and Inertial sensors, along with the required field elements (cubes, tiles).",
                "<strong>Understand the Mission:</strong> Your robot must start autonomously, locate a red 'survivor' cube, avoid blue 'hazard' cubes, pick up the red cube, and deliver it to the 'safe zone'.",
                "<strong>Plan Your Code with MyBlocks:</strong> Before coding, plan your program structure in your Engineering Notebook. Use MyBlocks to organize your logic for tasks like `Search()`, `Navigate()`, `Retrieve()`, and `ReturnHome()`.",
                "<strong>Implement Sensor Logic:</strong> Use all four sensors. For example: Use the `Optical Sensor` to find the red cube, the `Distance Sensor` to approach it, the `Inertial Sensor` to make precise turns, and the `Bumper Sensor` to detect walls.",
                "<strong>Build the 'Search()' MyBlock:</strong> Create a function that makes the robot scan the field until it detects the red cube.",
                "<strong>Build the 'Retrieve()' MyBlock:</strong> Create a function that controls the arm and claw motors to grab and lift the cube once it's found.",
                "<strong>Build the 'ReturnHome()' MyBlock:</strong> Create a function that navigates the robot back to the starting safe zone, using sensors to avoid any obstacles in its path.",
                "<strong>Assemble the Main Program:</strong> Combine your MyBlocks in the main part of your program. Use variables to track mission status (e.g., 'hasCube').",
                "<strong>Test and Iterate:</strong> Run your mission! Use your Engineering Notebook to record what works and what doesn't. Debug your code and refine your robot's movements until it successfully completes the rescue."
            ],
            levelUp: {
                title: "Mission Enhancements",
                points: [
                    "Rescue multiple 'survivors': Can you program your robot to find and deliver both red cubes?",
                    "Add sound effects: Use the Brain's speaker to play a 'rescue complete' sound when the cube is delivered.",
                    "Optimize for speed: Refine your code to complete the mission as fast as possible. Time your runs and compete with other teams!"
                ]
            },
            proTips: {
                title: "Keys to a Successful Mission",
                points: [
                    "<strong>Use the Partner Coding System:</strong> Switch between 'Driver' and 'Navigator' roles every 30 minutes to ensure both partners are engaged and contributing.",
                    "<strong>Document Everything:</strong> Your Engineering Notebook is crucial. Sketch your ideas, write pseudocode, record test results, and reflect on your challenges.",
                    "<strong>Calibrate Your Sensors:</strong> Sensor readings can be affected by lighting. Test your sensors in the actual competition environment and adjust your code's threshold values if needed.",
                    "<strong>Start Simple:</strong> Get one part working perfectly before adding the next. For example, master finding the cube before you try to pick it up."
                ]
            }
        };
    }

    // Specific content for Sprint 4 Final Project
    if (sprint.sprint === 4) {
        content = {
            title: `Sprint 4: Final Project`,
            subtitle: "Robot Upgrade Challenge: Integration & Presentation",
            description: "Integrate your custom 3D-printed part onto your robot and demonstrate its functionality. This project combines mechanical design, problem-solving, and presentation skills.",
            stepByStep: [
                "<strong>Final Print:</strong> Complete the full print of your final, revised custom part.",
                "<strong>Integration:</strong> Carefully install your 3D-printed part onto your robot. Make sure it is secure and functions as intended.",
                "<strong>Demonstration:</strong> Prepare a demonstration that shows how your new part improves the robot's performance. Does it help the robot complete a task better, faster, or more reliably?",
                "<strong>Documentation:</strong> Complete your engineering notebook entry for this project. It should tell the story of your design: the initial problem, your design ideas, the prototyping process, your test results, and the final outcome.",
                "<strong>Presentation:</strong> Record a short video or prepare a live demo for the class. Clearly explain the problem you solved and how your custom part provided the solution."
            ],
            levelUp: {
                title: "Project Extensions",
                points: [
                    "Design and print a second, complementary part for your robot.",
                    "Create a full set of digital building instructions for your upgrade using screenshots from Tinkercad."
                ]
            },
            proTips: {
                title: "Presentation Tips",
                points: [
                    "A good presentation clearly states the problem, the solution, and the result.",
                    "Practice your demonstration several times to make sure it runs smoothly.",
                    "Be proud of your work! Even if it didn't turn out perfectly, you learned a lot in the process."
                ]
            }
        };
    }

    lessonContentData[projectTitle] = content;
});