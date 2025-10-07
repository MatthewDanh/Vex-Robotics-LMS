import { Lesson } from './types';

export const curriculum: Lesson[] = [
    // Pacing Guide Lessons
    {
        title: "Drive Forward & Reverse",
        level: "Beginner",
        description: "Students will explore robot behaviors and create a project to drive the Autopilot robot forward and in reverse using VEXcode IQ Blocks.",
        concepts: ["Robot Behaviors", "Basic Movements"],
        type: 'Lesson'
    },
    {
        title: "Turning",
        level: "Beginner",
        description: "Students will explore robot behaviors and create a project for the Autopilot robot to turn using VEXcode IQ Blocks.",
        concepts: ["Robot Behaviors", "Basic Movements"],
        type: 'Lesson'
    },
    {
        title: "Tug of War",
        level: "Beginner",
        description: "Students will explore how mechanical advantage and center of mass affect the BaseBot's ability to pull objects, and design the best robot for the game of Tug of War.",
        concepts: ["Center of mass", "Mechanical advantage", "Gear ratios"],
        type: 'Lesson'
    },
    {
        title: "Team Freeze Tag",
        level: "Beginner",
        description: "Students will drive the BaseBot using the IQ Controller, choose wheels, and add sensors to their robot to compete in the Team Freeze Tag competition.",
        concepts: ["Controller", "Touch LED", "Bumper Switch", "Driving strategy"],
        type: 'Lesson'
    },
    {
        title: "Changing Velocity",
        level: "Beginner",
        description: "Students will explore changing the velocity of the Autopilot robot while creating projects that drive the robot forward, move it in reverse, and turn the robot using VEXcode IQ Blocks.",
        concepts: ["Robot Behaviors", "Basic Movements"],
        type: 'Lesson'
    },
    {
        title: "Loop, There It Is",
        level: "Beginner",
        description: "Students are asked to complete several mini-challenges to experiment with using loops within their projects. This information will be used later in the 'Groove Machine Challenge,' where students will program robot movements to repeat.",
        concepts: ["Loops"],
        type: 'Lesson'
    },
    {
        title: "Speedy Delivery",
        level: "Intermediate",
        description: "Students are asked to navigate a warehouse by programming the Claw and Arm of a Clawbot to grab and move packages to a loading dock for delivery.",
        concepts: ["Programming Specificity", "Navigating to a Location"],
        type: 'Lesson'
    },
    {
        title: "Testbed",
        level: "Intermediate",
        description: "Students will build a Testbed to investigate how the VEX IQ Sensors work and compete in the Sense It Challenge!",
        concepts: ["Sensors & Loops"],
        type: 'Lesson'
    },
    {
        title: "To Do, Or Not To Do",
        level: "Intermediate",
        description: "Students will explore conditional statements and how button presses can provide input for a program to decide if a conditional is true or false.",
        concepts: ["Conditionals & Loops"],
        type: 'Lesson'
    },
    {
        title: "Vision Sensor",
        level: "Intermediate",
        description: "Students are asked to build and utilize an Autopilot robot that will detect objects using the Vision Sensor. Students will engage in configuring, tuning, and programming the Vision Sensor.",
        concepts: ["Sensors & Loops"],
        type: 'Lesson'
    },
    // New Activities
    {
        title: "Wheel Turns",
        level: 'Beginner',
        description: "Use your VEX IQ wheels and a ruler to measure how far a wheel travels each time it turns, and learn about circumference.",
        concepts: ["Measurement", "Circumference", "Diameter", "Pi"],
        type: 'Activity'
    },
    {
        title: "Wheel It! (Compound Machine)",
        level: 'Intermediate',
        description: "Design and build a Wheelbarrow, a compound machine that incorporates more than one simple machine.",
        concepts: ["Compound Machines", "Lever", "Wheel and Axle", "Design Process"],
        type: 'Activity'
    },
    {
        title: "Wheel and Axle Lunar Rover",
        level: 'Intermediate',
        description: "Design and build a Lunar Rover that will need to have an axle and wheel to drive on the moon.",
        concepts: ["Design Process", "Wheel and Axle", "Robotics Design"],
        type: 'Activity'
    },
    {
        title: "VEX Teasers",
        level: 'Beginner',
        description: "Use your VEX IQ pieces to solve some spatial reasoning brain teasers.",
        concepts: ["Spatial Reasoning", "Problem Solving", "Logic"],
        type: 'Activity'
    },
    {
        title: "Turn Around",
        level: 'Beginner',
        description: "Learn about the BaseBot's heading to push cubes!",
        concepts: ["Robot Heading", "Degrees", "Turning", "Programming"],
        type: 'Activity'
    },
    {
        title: "Triple Transfer",
        level: 'Beginner',
        description: "Learn how to efficiently move three blocks to a new location with your Clawbot.",
        concepts: ["Driving Skills", "Object Manipulation", "Efficiency"],
        type: 'Activity'
    },
    {
        title: "Tread Art",
        level: 'Beginner',
        description: "Use your VEX IQ wheels to create a piece of abstract art!",
        concepts: ["Creativity", "Robotics in Art", "Mechanical Design"],
        type: 'Activity'
    },
    {
        title: "Traffic Signals",
        level: 'Intermediate',
        description: "Create a program that uses the Optical Sensor to react to different colored cards, simulating a traffic signal.",
        concepts: ["Optical Sensor", "Conditional Logic", "Programming", "Color Sensing"],
        type: 'Activity'
    },
    {
        title: "To the Left, To the Right",
        level: 'Beginner',
        description: "Code the BaseBot to turn left and right using basic programming blocks.",
        concepts: ["Basic Movements", "Turning", "Programming"],
        type: 'Activity'
    },
    {
        title: "The Claw!",
        level: 'Intermediate',
        description: "Use your Clawbot to strategically remove VEX pieces from a pile.",
        concepts: ["Clawbot", "Object Manipulation", "Programming", "Strategy"],
        type: 'Activity'
    },
    {
        title: "Tallest Tower Challenge",
        level: 'Beginner',
        description: "Build the tallest freestanding tower than your partner using the same 10 pieces.",
        concepts: ["Engineering Design", "Structure", "Stability", "Center of Gravity"],
        type: 'Activity'
    },
    {
        title: "Stop and Go",
        level: 'Beginner',
        description: "Code the BaseBot to travel to different locations and stop precisely.",
        concepts: ["Programming", "Measurement", "Autonomous Control"],
        type: 'Activity'
    },
    {
        title: "Square Dance",
        level: 'Beginner',
        description: "Code the BaseBot to drive in a square using turns and forward movements.",
        concepts: ["Loops", "Programming", "Geometry", "Repetition"],
        type: 'Activity'
    },
    {
        title: "Spin Your Wheels",
        level: 'Intermediate',
        description: "Calculate how fast your wheel spins using measurements from a VEXcode IQ Project.",
        concepts: ["RPM", "Velocity", "Measurement", "Data Collection"],
        type: 'Activity'
    },
    {
        title: "Signs",
        level: 'Beginner',
        description: "Using pins, standoffs, and connectors design and build a free-standing sign from your VEX IQ Kit.",
        concepts: ["Structural Design", "VEX Parts", "Building"],
        type: 'Activity'
    },
    {
        title: "Secret Code",
        level: 'Intermediate',
        description: "Create a VEXcode IQ project that uses your robot's controller and the Touch LED Sensor to flash out a coded message.",
        concepts: ["Controller", "Touch LED", "Programming", "Communication"],
        type: 'Activity'
    },
    {
        title: "Scavenger Hunt",
        level: 'Beginner',
        description: "Use the Interactive Parts Poster to learn more about your VEX IQ Kit and find all the pieces described.",
        concepts: ["VEX Parts", "Identification", "Observation"],
        type: 'Activity'
    },
    {
        title: "Sammy Rescue",
        level: 'Intermediate',
        description: "Use your design skills and a pulley to create a contraption to rescue Sammy!",
        concepts: ["Simple Machines", "Pulleys", "Design Process", "Problem Solving"],
        type: 'Activity'
    },
    {
        title: "Rubber Band Car",
        level: 'Intermediate',
        description: "Design and build a car powered only by a single rubber band.",
        concepts: ["Potential Energy", "Kinetic Energy", "Engineering Design", "Constraints"],
        type: 'Activity'
    },
    {
        title: "Ramp Racers",
        level: 'Beginner',
        description: "Modify the wheel on your VEX IQ Inclined Plane and race a friend to test the effects of adding weight.",
        concepts: ["Inclined Plane", "Gravity", "Weight", "Friction"],
        type: 'Activity'
    },
    {
        title: "Pitch Pointillism",
        level: 'Beginner',
        description: "Use your VEX IQ Pitch Shafts to create a piece of original art with pointillism.",
        concepts: ["Creativity", "Robotics in Art", "VEX Parts"],
        type: 'Activity'
    },
    {
        title: "Pinball Wizard",
        level: 'Intermediate',
        description: "Create a pinball game that includes simple machines like a lever and inclined plane using VEX IQ parts!",
        concepts: ["Simple Machines", "Game Design", "Lever", "Inclined Plane"],
        type: 'Activity'
    },
    {
        title: "Pendulum Time!",
        level: 'Beginner',
        description: "Explore how a Pendulum works by making changes to it and observing how it affects its swing.",
        concepts: ["Pendulum", "Period", "Length", "Gravity"],
        type: 'Activity'
    },
    {
        title: "Navigate the Maze with Driver Control",
        level: 'Beginner',
        description: "Drive your BaseBot using the Controller to solve a cube maze!",
        concepts: ["Driver Control", "Maze Solving", "Spatial Awareness"],
        type: 'Activity'
    },
    {
        title: "Navigate the Maze - Autonomous",
        level: 'Intermediate',
        description: "Code your robot to solve a cube maze autonomously!",
        concepts: ["Autonomous Navigation", "Programming", "Algorithms", "Maze Solving"],
        type: 'Activity'
    },
    {
        title: "Navigate the Maze (Bumper Switch)",
        level: 'Intermediate',
        description: "Use the Bumper Switch to detect walls and navigate through a cube maze.",
        concepts: ["Bumper Switch", "Sensors", "Event-based Programming", "Maze Solving"],
        type: 'Activity'
    },
    {
        title: "Marker Maze",
        level: 'Intermediate',
        description: "Program your BaseBot to turn at the correct angle to avoid knocking over markers in a maze.",
        concepts: ["Precise Turning", "Autonomous Control", "Angles", "Programming"],
        type: 'Activity'
    },
    {
        title: "Magic Movement",
        level: 'Beginner',
        description: "Use the Distance Sensor to magically move your BaseBot without touching it.",
        concepts: ["Distance Sensor", "Proximity Sensing", "Programming"],
        type: 'Activity'
    },
    {
        title: "It's All Relative",
        level: 'Intermediate',
        description: "Use multiplication to reduce a scale model and program your robot to trace it.",
        concepts: ["Scale Factor", "Proportions", "Programming", "Geometry"],
        type: 'Activity'
    },
    {
        title: "How Big Are Your Teeth?",
        level: 'Beginner',
        description: "Calculate the pitch of your gears and sprockets by measuring their diameter and counting teeth.",
        concepts: ["Gears", "Sprockets", "Pitch", "Measurement"],
        type: 'Activity'
    },
    {
        title: "Hang Out",
        level: 'Intermediate',
        description: "Build a device that hangs out the largest distance off your desk, exploring concepts of balance and center of mass.",
        concepts: ["Center of Mass", "Balance", "Cantilever", "Structural Engineering"],
        type: 'Activity'
    },
    {
        title: "Golf Course Mower",
        level: 'Intermediate',
        description: "Code your BaseBot to drive over an entire golf course, while avoiding the sandpits!",
        concepts: ["Path Planning", "Autonomous Navigation", "Programming Logic"],
        type: 'Activity'
    },
    {
        title: "Get in Shape",
        level: 'Beginner',
        description: "Use VEX IQ connectors to build various shapes like rails, triangles, rectangles, and cubes.",
        concepts: ["Geometric Shapes", "Building Techniques", "VEX Parts"],
        type: 'Activity'
    },
    {
        title: "Get a Grip",
        level: 'Beginner',
        description: "Test the grip of your different VEX IQ tires by creating a ramp and measuring how high it can go before sliding.",
        concepts: ["Friction", "Tires", "Grip", "Experimentation"],
        type: 'Activity'
    },
    {
        title: "Forward, Lift, Reverse",
        level: 'Beginner',
        description: "Use the Driver Control Program to move the Simple Clawbot and determine which direction is faster for moving an object.",
        concepts: ["Driver Control", "Clawbot", "Efficiency", "Testing"],
        type: 'Activity'
    },
    {
        title: "Follow the Light",
        level: 'Intermediate',
        description: "Drive your robot using a flashlight and the Optical Sensor.",
        concepts: ["Optical Sensor", "Light Sensing", "Programming", "Robotic Control"],
        type: 'Activity'
    },
    {
        title: "Driver Configurations",
        level: 'Beginner',
        description: "Test your robot driving skills with four different driving configurations: Left Arcade, Right Arcade, Split Arcade, and Tank Drive.",
        concepts: ["Driver Control", "Control Schemes", "Robotics"],
        type: 'Activity'
    },
    {
        title: "Drive Forward and Reverse (Autonomous)",
        level: 'Beginner',
        description: "Autonomously move your robot forward and backwards using programming blocks.",
        concepts: ["Autonomous Movement", "Programming Basics"],
        type: 'Activity'
    },
    {
        title: "Defend the Castle",
        level: 'Beginner',
        description: "Drive your Clawbot to build a wall with cubes and defend your castle!",
        concepts: ["Driver Control", "Building", "Strategy", "Clawbot"],
        type: 'Activity'
    },
    {
        title: "Decision Maker",
        level: 'Intermediate',
        description: "Use Operator blocks in VEXcode IQ to make decisions based on sensor inputs.",
        concepts: ["Conditional Logic", "Operator Blocks", "Sensors", "Programming"],
        type: 'Activity'
    },
    {
        title: "Cube Pusher",
        level: 'Intermediate',
        description: "Code the BaseBot to use the Optical Sensor to detect a line and push cubes out of a square.",
        concepts: ["Line Following", "Optical Sensor", "Autonomous Control", "Programming"],
        type: 'Activity'
    },
    {
        title: "Cube Crasher Challenge",
        level: 'Beginner',
        description: "Code the BaseBot to knock down a stack of cubes.",
        concepts: ["Programming", "Robotic Control", "Force"],
        type: 'Activity'
    },
    {
        title: "Covered Maze Box",
        level: 'Intermediate',
        description: "Design and build a covered maze that a marble can move through, so the player can't see the course.",
        concepts: ["Maze Design", "Problem Solving", "3D Design"],
        type: 'Activity'
    },
    {
        title: "Color Sensing",
        level: 'Intermediate',
        description: "Use the Optical Sensor to travel from cube to cube based on their color.",
        concepts: ["Color Sensing", "Optical Sensor", "Programming", "Autonomous Navigation"],
        type: 'Activity'
    },
    {
        title: "Code a Code!",
        level: 'Beginner',
        description: "Send a secret message using the Touch LED by assigning flashes to alphabet letters.",
        concepts: ["Touch LED", "Binary Communication", "Programming", "Creativity"],
        type: 'Activity'
    },
    {
        title: "Can You Name That Part?",
        level: 'Beginner',
        description: "Play a game with a classmate to learn the names and categories of VEX IQ parts.",
        concepts: ["VEX Parts", "Identification", "Teamwork"],
        type: 'Activity'
    },
    {
        title: "Build It, Make It, Engineer It",
        level: 'Intermediate',
        description: "Build a house with VEX IQ pieces that can withstand a windstorm.",
        concepts: ["Structural Engineering", "Design Process", "Testing", "Stability"],
        type: 'Activity'
    },
    {
        title: "Build a Wagon",
        level: 'Beginner',
        description: "Create an addition to the BaseBot to carry an IQ Cube up an inclined plane.",
        concepts: ["Mechanical Design", "Inclined Plane", "Traction"],
        type: 'Activity'
    },
    {
        title: "Block Party",
        level: 'Beginner',
        description: "Move three cubes to a new location using the Controller as fast as you can.",
        concepts: ["Driver Control", "Speed", "Efficiency", "Object Manipulation"],
        type: 'Activity'
    },
    {
        title: "Basketball Drills",
        level: 'Intermediate',
        description: "Use My Blocks to pass parameters and organize your code in VEXcode IQ to complete a series of movements.",
        concepts: ["Functions", "Parameters", "Code Organization", "Programming"],
        type: 'Activity'
    },
    {
        title: "BaseBot Driver",
        level: 'Intermediate',
        description: "Navigate a city maze using the Controller, then program the robot to navigate it autonomously.",
        concepts: ["Driver Control", "Autonomous Navigation", "Comparison", "Maze Solving"],
        type: 'Activity'
    },
    {
        title: "At a Distance",
        level: 'Beginner',
        description: "Use the Distance Sensor to avoid cubes while driving.",
        concepts: ["Distance Sensor", "Obstacle Avoidance", "Programming"],
        type: 'Activity'
    },
    {
        title: "Advanced Scavenger Hunt",
        level: 'Intermediate',
        description: "Use the Interactive Parts Poster and your Kit to learn how pieces work together by creating small assemblies.",
        concepts: ["Mechanical Assemblies", "VEX Parts", "Functionality", "Problem Solving"],
        type: 'Activity'
    },
    {
        title: "1..2..3.. Green Light",
        level: 'Intermediate',
        description: "Create a VEXcode IQ project to control the robot's behavior using the colored light from the Touch LED Sensor, like the game 'Red Light, Green Light'.",
        concepts: ["Sensors", "Control Logic", "Programming", "Touch LED", "Optical Sensor"],
        type: 'Activity'
    }
];
