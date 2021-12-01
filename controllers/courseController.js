const Course = require('../models/courseModel');

const getCourseInfo = async (req, res) => {
  const { courseNumber } = req.query;

  try {
    const course = await Course.findOne({ courseNumber });
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllCourses = async (_, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const nukeCourse = async (req, res) => {
  try {
    await Course.deleteMany({});
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const insertAllCourses = async (req, res) => {
  let allCourses = [
    {
      courseNumber  : 'COMP SCI 200',
      info          : {
        courseName  : 'Programming I',
        description :
          'Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics. These topics include: problem abstraction and decomposition, the edit-compile-run cycle, using variables of primitive and more complex data types, conditional and loop-based flow control, basic testing and debugging techniques, how to define and call functions (methods), and IO processing techniques. Also teaches and reinforces good programming practices including the use of a consistent style, and meaningful documentation. Intended for students who have no prior programming experience. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Quantitative Reasoning (QR)' ]
    },
    {
      courseNumber  : 'COMP SCI 202',
      info          : {
        courseName  : 'Introduction to Computation',
        description :
          'An introduction to the principles that form the foundation of computer science. Suitable for students with a general background who wish to study the key principles of computer science rather than just computer programming. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1216'
      },
      prerequisites : [ 'MATH 141', 'MATH 118', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 220',
      info          : {
        courseName  : 'Data Programming I',
        description :
          'Introduction to Data Science programming using Python.  No previous programming experience required.  Emphasis on analyzing real datasets in a variety of forms and visual communication. Recommended for Data Science majors and other majors. Enroll Info: None',
        credits     : '4',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 301', 'Quantitative Reasoning (QR)' ]
    },
    {
      courseNumber  : 'COMP SCI 240',
      info          : {
        courseName  : 'Introduction to Discrete Mathematics',
        description :
          'Basic concepts of logic, sets, partial order and other relations, and functions. Basic concepts of mathematics (definitions, proofs, sets, functions, and relations) with a focus on discrete structures: integers, bits, strings, trees, and graphs.  Propositional logic, Boolean algebra, and predicate logic. Mathematical induction and recursion. Invariants and algorithmic correctness. Recurrences and asymptotic growth analysis. Fundamentals of counting. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'MATH 217' ]
    },
    {
      courseNumber  : 'COMP SCI 250',
      info          : {
        courseName  : 'Digital Society: The Impact of Computers and Computer Technology',
        description :
          'Introduction to computers in the digital society; social changes they influence, and choices they present. Topics include: digital divide, role of computers in improving quality of life, electronic voting and governance, digital intellectual property rights, privacy, computers and the environment. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1122'
      },
      prerequisites : []
    },
    {
      courseNumber  : 'COMP SCI 252',
      info          : {
        courseName  : 'Introduction to Computer Engineering',
        description :
          'Logic components built with transistors, rudimentary Boolean algebra, basic combinational logic design, basic synchronous sequential logic design, basic computer organization and design, introductory machine- and assembly-language programming. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : []
    },
    {
      courseNumber  : 'COMP SCI 270',
      info          : {
        courseName  : 'Fundamentals of Human-Computer Interaction',
        description :
          'User-centered software design including principles and methods for understanding user needs, designing and prototyping interface solutions, and evaluating their usability covered through lectures and hands-on in-class activities.  Meets with COMP SCI 570. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1184'
      },
      prerequisites : [ 'COMP SCI 570' ]
    },
    {
      courseNumber  : 'COMP SCI 298',
      info          : {
        courseName  : 'Directed Study in Computer Science',
        description : 'Undergraduate directed study in computer sciences. Enroll Info: None',
        credits     : '1-3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 300',
      info          : {
        courseName  : 'Programming II',
        description :
          'Introduction to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, and exception handling to solve challenging real world problems. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types (List,Stack,Queue,PriorityQueue(Heap),Binary Search Tree); generic interfaces (parametric polymorphism); how to design and write test methods and classes; array based vs. linked node implementations; introduction to complexity analysis; recursion. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [
        'COMP SCI 200',
        'Capstone Certificate',
        'COMP SCI 252',
        'COMP SCI 367',
        'E C E 252'
      ]
    },
    {
      courseNumber  : 'COMP SCI 301',
      info          : {
        courseName  : 'Introduction to Data Programming',
        description :
          'Instruction and experience in the use of a programming language for beginners. Program design; development of good programming style. No previous computing experience required. Recommended for non-CS and undecided majors. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1202'
      },
      prerequisites : [ 'Quantitative Reasoning (QR)' ]
    },
    {
      courseNumber  : 'COMP SCI 304',
      info          : {
        courseName  : 'WES-CS Group Meeting',
        description :
          'Small group meetings for Wisconsin Emerging Scholars - Computer Science (WES-CS) students. Meets in small groups to work together on problems related to the COMP SCI 200 course material. For information about WES-CS membership, contact the computer sciences department. Enroll Info: None',
        credits     : '0-1',
        lastTaught  : '1222'
      },
      prerequisites : []
    },
    {
      courseNumber  : 'COMP SCI 310',
      info          : {
        courseName  : 'Problem Solving Using Computers',
        description :
          'Gives students an introduction to computer and analytical skills to use in their subsequent course work and professional development. Discusses several methods of using computers to solve problems, including elementary programming techniques, symbolic manipulation languages, and software packages. Techniques will be illustrated using sample problems drawn from elementary engineering. Emphasis is on introduction of algorithms with the use of specific tools to illustrate the methods. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Capstone Certificate', 'MATH 222' ]
    },
    {
      courseNumber  : 'COMP SCI 319',
      info          : {
        courseName  : 'Data Science Programming I for Research',
        description :
          'Introduction to Data Science programming using Python. In addition to a survey of programming basics (control flow and data structures), web scraping, database queries, and tabular analysis will be introduced. Projects will emphasize analyzing real datasets in a variety of forms and visual communication using plotting tools. Similar to COMP SCI 220 but the pedagogical style of the projects will be adapted to graduate students in fields other than computer science and data science. No previous programming experience required. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 320',
      info          : {
        courseName  : 'Data Programming II',
        description :
          'Intermediate approach to Data Science programming using Python.  Experience with basic tabular analysis in Python is assumed.  Learn to implement data structures (e.g., graphs) to efficiently represent datasets.  Software-engineering tools such as version control and Python virtual environments will be introduced, with an emphasis on reproducibility of analysis.  Tracing and A/B testing will be introduced as techniques for generating meaningful datasets.  Introduces basic classification, clustering, optimization, and simulation techniques.  Plotting and visual communication will be emphasized throughout the course.  Recommended for Data Science majors and other majors. Enroll Info: None',
        credits     : '4',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 301', 'COMP SCI 220' ]
    },
    {
      courseNumber  : 'COMP SCI 352',
      info          : {
        courseName  : 'Digital System Fundamentals',
        description :
          'Logic components, Boolean algebra, combinational logic analysis and synthesis, synchronous and asynchronous sequential logic analysis and design, digital subsystems, computer organization and design. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Quantitative Reasoning (QR)', 'E C E 252', 'COMP SCI 252' ]
    },
    {
      courseNumber  : 'COMP SCI 354',
      info          : {
        courseName  : 'Machine Organization and Programming',
        description :
          'An introduction to fundamental structures of computer systems and the C programming language with a focus on the low-level interrelationships and impacts on performance. Topics include the virtual address space and virtual memory, the heap and dynamic memory management, the memory hierarchy and caching, assembly language and the stack, communication and interrupts/signals, compiling and assemblers/linkers. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate', 'E C E 252', 'COMP SCI 252', 'COMP SCI 302' ]
    },
    {
      courseNumber  : 'COMP SCI 368',
      info          : {
        courseName  : 'Learning a Programming Language',
        description :
          'For students interested in learning a particular programming language. Focuses on a specific language offered at one of three levels: beginner, intermediate, and advanced. Students may repeat the course if the topic title is different. Enroll Info: None',
        credits     : '1',
        lastTaught  : '1114'
      },
      prerequisites : []
    },
    {
      courseNumber  : 'COMP SCI 369',
      info          : {
        courseName  : 'Web Programming',
        description :
          'Covers web application development end-to-end: languages and frameworks for client- and server-side programming, database access, and other topics. Involves hands-on programming assignments. Students attain a thorough understanding of and experience with writing web applications using tools popular in industry. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1144'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 371',
      info          : {
        courseName  : 'Technology of Computer-Based Business Systems',
        description :
          'Overview of computers, their attendant technology, and the implications of this technology for large-scale, computer-based information systems. Topics include hardware, system software, program development, files and data communications. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'COMP SCI 301' ]
    },
    {
      courseNumber  : 'COMP SCI 400',
      info          : {
        courseName  : 'Programming III',
        description :
          'The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed. This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students learn about industry standards for code development. Students will design and implement a medium size project with a more advanced user-interface design, such as a web or mobile application with a GUI and event- driven implementation; use of version-control software. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 300', 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 402',
      info          : {
        courseName  : 'Introducing Computer Science to K-12 Students',
        description :
          'Work in teams to lead Computer Science clubs and workshops for K-12 students at sites in the Madison area. Design and lead activities to help K-12 students learn computational thinking and computer programming. Enroll Info: None',
        credits     : '2',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 200' ]
    },
    {
      courseNumber  : 'COMP SCI 403',
      info          : {
        courseName  : 'Internship Course in Comp Sci and Data Science',
        description :
          'Enables students with outside internships to earn academic credit connected to their work experience related to the Computer Sciences or Data Science programs. Enroll Info: None',
        credits     : '1',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 407',
      info          : {
        courseName  : 'Foundations of Mobile Systems and Applications',
        description :
          'Design and implementation of applications, systems, and services for mobile platforms with (i) constraints, such as limited processing, memory, energy, interfaces, variable bandwidth, and high mobility, and (ii) features, such as touchscreens, cameras, electronic compasses, GPS, and accelerometers. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 412',
      info          : {
        courseName  : 'Introduction to Numerical Methods',
        description :
          'Interpolation, solution of linear and nonlinear systems of equations, approximate integration and differentiation, numerical solution of ordinary differential equations, Data fitting (such as least squares) by polynomials and splines. Knowledge of matrix algebra recommended, such as MATH 340. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [
        'COMP SCI 200',
        'Capstone Certificate',
        'COMP SCI 240',
        'MATH 240',
        'MATH 234'
      ]
    },
    {
      courseNumber  : 'COMP SCI 425',
      info          : {
        courseName  : 'Introduction to Combinatorial Optimization',
        description :
          'Focuses on optimization problems over discrete structures, such as shortest paths, spanning trees, flows, matchings, and the traveling salesman problem. We will investigate structural properties of these problems, and we will study both exact methods for their solution, and approximation algorithms. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'MATH 320' ]
    },
    {
      courseNumber  : 'COMP SCI 435',
      info          : {
        courseName  : 'Introduction to Cryptography',
        description :
          'Cryptography is the art and science of transmitting digital information in a secure manner. Provides an introduction to its technical aspects. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'MATH 320' ]
    },
    {
      courseNumber  : 'COMP SCI 471',
      info          : {
        courseName  : 'Introduction to Computational Statistics',
        description :
          'Classical statistical procedures arise where closed-form mathematical expressions are available for various inference summaries (e.g. linear regression; analysis of variance). A major emphasis of modern statistics is the development of inference principles in cases where both more complex data structures are involved and where more elaborate computations are required. Topics from numerical linear algebra, optimization, Monte Carlo (including Markov chain Monte Carlo), and graph theory are developed, especially as they relate to statistical inference (e.g., bootstrapping, permutation, Bayesian inference, EM algorithm, multivariate analysis). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'STAT 310', 'STAT 333', 'MATH 310' ]
    },
    {
      courseNumber  : 'COMP SCI 475',
      info          : {
        courseName  : 'Introduction to Combinatorics',
        description :
          'Problems of enumeration, distribution, and arrangement. Inclusion-exclusion principle. Generating functions and linear recurrence relations. Combinatorial identities. Graph coloring problems. Finite designs. Systems of distinct representatives and matching problems in graphs. Potential applications in the social, biological, and physical sciences. Puzzles. Problem solving. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'MATH 320' ]
    },
    {
      courseNumber  : 'COMP SCI 502',
      info          : {
        courseName  : 'Theory and Practice in Computer Science Education',
        description :
          'Computer science educational pedagogy and general teaching practices. Practical experience gained through tutoring students. Knowledge of object-oriented programming required. Enroll Info: None',
        credits     : '1',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 302' ]
    },
    {
      courseNumber  : 'COMP SCI 506',
      info          : {
        courseName  : 'Software Engineering',
        description :
          'Ideas and techniques for designing, developing, and modifying large software systems. Topics include software engineering processes; requirements and specifications; project team organization and management; software architectures; design patterns; testing and debugging; and cost and quality metrics and estimation. Students will work in large teams on a substantial programming project. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [
        'Capstone Certificate',
        'COMP SCI 400',
        'COMP SCI 407',
        'E C E 552',
        'COMP SCI 552'
      ]
    },
    {
      courseNumber  : 'COMP SCI 513',
      info          : {
        courseName  : 'Numerical Linear Algebra',
        description :
          'Direct and iterative solution of linear and nonlinear systems and of eigenproblems. LU and symmetric LU factorization. Complexity, stability, and conditioning. Nonlinear systems. Iterative methods for linear systems. QR-factorization and least squares. Eigenproblems: local and global methods. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'COMP SCI 200', 'MATH 340' ]
    },
    {
      courseNumber  : 'COMP SCI 514',
      info          : {
        courseName  : 'Numerical Analysis',
        description :
          'Polynomial forms, divided differences. Polynomial interpolation. Polynomial approximation: uniform approximation and Chebyshev polynomials, least-squares approximation and orthogonal polynomials. Numerical differentiation and integration. Splines, B-splines and spline approximation. Numerical methods for solving initial and boundary value problems for ordinary differential equations. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'MATH 320', 'COMP SCI 200', 'MATH 322' ]
    },
    {
      courseNumber  : 'COMP SCI 518',
      info          : {
        courseName  : 'Wearable Technology',
        description :
          'Gives students hands-on experience in building wearable computing platforms. Designed for students who have a background in textiles and apparel design, computer science, engineering or media arts. By the completion of the course students will have fundamental knowledge of electronic circuitry, programming, and "maker skills". Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Sophomore standing' ]
    },
    {
      courseNumber  : 'COMP SCI 520',
      info          : {
        courseName  : 'Introduction to Theory of Computing',
        description :
          'Basics about the notion, capabilities, and limitations of computation: elements of finite automata and regular languages, computability theory, and computational complexity theory. Additional topics include context-free grammars and languages, and complexity-theoretic cryptography. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [
        'MATH 475',
        'COMP SCI 475',
        'Capstone Certificate',
        'COMP SCI 240',
        'COMP SCI 400',
        'MATH 240',
        'STAT 475'
      ]
    },
    {
      courseNumber  : 'COMP SCI 524',
      info          : {
        courseName  : 'Introduction to Optimization',
        description :
          'Introduction to mathematical optimization from a modeling and solution perspective. Formulation of applications as discrete and continuous optimization problems and equilibrium models. Survey and appropriate usage of basic algorithms, data and software tools, including modeling languages and subroutine libraries. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'MATH 320', 'COMP SCI 200' ]
    },
    {
      courseNumber  : 'COMP SCI 525',
      info          : {
        courseName  : 'Linear Optimization',
        description :
          'Introduces optimization problems whose constraints are expressed by linear inequalities. Develops geometric and algebraic insights into the structure of the problem, with an emphasis on formal proofs. Presents the theory behind the simplex method, the main algorithm used to solve linear optimization problems. Explores duality theory and theorems of the alternatives. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'MATH 320' ]
    },
    {
      courseNumber  : 'COMP SCI 526',
      info          : {
        courseName  : 'Advanced Linear Programming',
        description :
          'Review of linear programming. Polynomial time methods for linear programming. Quadratic programs and linear complementarity problems and related solution techniques. Solution sets and their continuity properties. Error bounds for linear inequalities and programs. Parallel algorithms for linear and quadratic programs. Enroll Info: None',
        credits     : '3-4',
        lastTaught  : '1204'
      },
      prerequisites : [ 'COMP SCI 200', 'COMP SCI/I S', 'MATH 525', 'STAT 525' ]
    },
    {
      courseNumber  : 'COMP SCI 532',
      info          : {
        courseName  : 'Matrix Methods in Machine Learning',
        description :
          'Introduction to machine learning that focuses on matrix methods and features real-world applications ranging from classification and clustering to denoising and data analysis. Mathematical topics include: linear equations, regression, regularization, the singular value decomposition, and iterative algorithms. Machine learning topics include: the lasso, support vector machines, kernel methods, clustering, dictionary learning, neural networks, and deep learning. Previous exposure to numerical computing (e.g. Matlab, Python, Julia, R) required. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 200', 'MATH 276' ]
    },
    {
      courseNumber  : 'COMP SCI 533',
      info          : {
        courseName  : 'Image Processing',
        description :
          'Mathematical representation of continuous and digital images; models of image degradation; picture enhancement, restoration, segmentation, and coding; pattern recognition, tomography. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1202'
      },
      prerequisites : [ 'MATH 340' ]
    },
    {
      courseNumber  : 'COMP SCI 534',
      info          : {
        courseName  : 'Computational Photography',
        description :
          'Study of sensing and computational techniques that enhance or extend the capabilities of digital photography by using methods from computer vision and computer graphics to create new visual representations. Algorithms for analyzing, improving, manipulating, combining, and synthesizing images. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1192'
      },
      prerequisites : [ 'Capstone Certificate', 'MATH 217', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 536',
      info          : {
        courseName  : 'Introduction to Programming Languages and Compilers',
        description :
          'Introduction to the theory and practice of compiler design. Comparison of features of several programming languages and their implications for implementation techniques. Several programming projects required. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'E C E 354', 'COMP SCI 400', 'Capstone Certificate', 'COMP SCI 354' ]
    },
    {
      courseNumber  : 'COMP SCI 537',
      info          : {
        courseName  : 'Introduction to Operating Systems',
        description :
          'Input-output hardware, interrupt handling, properties of magnetic tapes, discs and drums, associative memories and virtual address translation techniques. Batch processing, time sharing and real-time systems, scheduling resource allocation, modular software systems, performance measurement and system evaluation. Enroll Info: None',
        credits     : '4',
        lastTaught  : '1222'
      },
      prerequisites : [ 'E C E 354', 'COMP SCI 400', 'Capstone Certificate', 'COMP SCI 354' ]
    },
    {
      courseNumber  : 'COMP SCI 538',
      info          : {
        courseName  : 'Introduction to the Theory and Design of Programming Languages',
        description :
          'Design and theory of programming languages: procedural, object-oriented, functional and logic paradigms. Serial and concurrent programming. Execution models and formal specification techniques. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'E C E 354', 'COMP SCI 400', 'Capstone Certificate', 'COMP SCI 354' ]
    },
    {
      courseNumber  : 'COMP SCI 539',
      info          : {
        courseName  : 'Introduction to Artificial Neural Network and Fuzzy Systems',
        description :
          'Theory and applications of artificial neural networks and fuzzy logic: multi-layer perceptron, self-organization map, radial basis network, Hopfield network, recurrent network, fuzzy set theory, fuzzy logic control, adaptive fuzzy neural network, genetic algorithm, and evolution computing. Applications to control, pattern recognition, nonlinear system modeling, speech and image processing. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'COMP SCI 200' ]
    },
    {
      courseNumber  : 'COMP SCI 540',
      info          : {
        courseName  : 'Introduction to Artificial Intelligence',
        description :
          'Principles of knowledge-based search techniques, automatic deduction, knowledge representation using predicate logic, machine learning, probabilistic reasoning. Applications in tasks such as problem solving, data mining, game playing, natural language understanding, computer vision, speech recognition, and robotics. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate', 'MATH 211', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 542',
      info          : {
        courseName  : 'Introduction to Software Security',
        description :
          'Teaches the security considerations that occur during all steps of the software development life cycle: methodologies for designing secure software, programming using secure programming techniques, in-depth vulnerability assessment methodologies, static and dynamic analysis tools for evaluating software security, and system defenses reducing security threats.  Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 320' ]
    },
    {
      courseNumber  : 'COMP SCI 545',
      info          : {
        courseName  : 'Natural Language and Computing',
        description :
          'The course covers basic techniques and tools in natural language processing: generative grammars, parsing, dictionary construction, semantic networks, generation of text from a knowledge base, natural language interfacing, and machine translation. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1152'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 536' ]
    },
    {
      courseNumber  : 'COMP SCI 547',
      info          : {
        courseName  : 'Computer Systems Modeling Fundamentals',
        description :
          'An introduction to basic tools and applications for modeling and analysis of computer systems. Fundamentals of network flow graphs, graph models of computation and stochastic models of computer system performance. Network delay analysis and capacity planning, reachability analysis for deadlock detection in distributed systems, Markov Chains, elementary queueing theory, basic concepts of queueing network models and associated analyses. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1124'
      },
      prerequisites : [ 'E C E 354', 'Capstone Certificate', 'COMP SCI 354', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 552',
      info          : {
        courseName  : 'Introduction to Computer Architecture',
        description :
          'The design of computer systems and components. Processor design, instruction set design, and addressing; control structures and microprogramming; memory management, caches, and memory hierarchies; and interrupts and I/O structures.  E C E 551 or knowledge of Verilog is recommended. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'E C E 354', 'COMP SCI 352', 'E C E 352', 'COMP SCI 354' ]
    },
    {
      courseNumber  : 'COMP SCI 558',
      info          : {
        courseName  : 'Introduction to Computational Geometry',
        description :
          'Introduction to fundamental geometric computations and algorithms, and their use for solving engineering and scientific problems. Computer representations of simple geometric objects and paradigms for algorithm design. Applications from areas of engineering analysis, design and manufacturing, biology, statistics, and other sciences. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1184'
      },
      prerequisites : [ 'COMP SCI 400' ]
    },
    {
      courseNumber  : 'COMP SCI 559',
      info          : {
        courseName  : 'Computer Graphics',
        description :
          'Survey of computer graphics. Image representation, formation, presentation, composition and manipulation. Modeling, transformation, and display of geometric objects in two and three dimensions. Representation of curves and surfaces. Rendering, animation, multi-media and visualization. Fluency with vector mathematics (e.g., from MATH 234 or a linear algebra class) is recommended. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 400', 'Capstone Certificate', 'MATH 276' ]
    },
    {
      courseNumber  : 'COMP SCI 561',
      info          : {
        courseName  : 'Probability and Information Theory in Machine Learning',
        description :
          'Probabilistic tools for machine learning and analysis of real-world datasets.  Mathematical topics include Bayesian probability and statistics, random vectors, categorical random variables, entropy, mutual information, and source coding.  Machine Learning topics include Bayes classification, Naive Bayes, generative modeling, decision trees and random forests, maximum likelihood estimation, principal component analysis, stochastic gradient methods, empirical risk minimization, entropy minimization, dimensionality reduction with random projections, and variational autoencoders. Previous exposure to numerical computing (e.g. Matlab, Python, Julia, R) required. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [
        'MATH 320',
        'STAT/M E',
        'MATH 309',
        'E C E M E',
        'STAT 311',
        'Capstone Certificate',
        'MATH 531',
        'COMP SCI M E',
        'STAT 309'
      ]
    },
    {
      courseNumber  : 'COMP SCI 564',
      info          : {
        courseName  : 'Database Management Systems: Design and Implementation',
        description :
          'What a database management system is; different data models currently used to structure the logical view of the database: relational, hierarchical, and network. Hands-on experience with relational and network-based database systems. Implementation techniques for database systems. File organization, query processing, concurrency control, rollback and recovery, integrity and consistency, and view implementation. Enroll Info: None',
        credits     : '4',
        lastTaught  : '1222'
      },
      prerequisites : [ 'E C E 354', 'COMP SCI 400', 'Capstone Certificate', 'COMP SCI 354' ]
    },
    {
      courseNumber  : 'COMP SCI 567',
      info          : {
        courseName  : 'Medical Image Analysis',
        description :
          'Present introductory medical image processing and analysis techniques. Topics include medical imaging formats, segmentation, registration, image quantification, classification.  Strongly encourage Matlab experience, such as COMP SCI 310 or 368-Matlab. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'STAT 511', 'STAT 571', 'STAT 324', 'MATH 340' ]
    },
    {
      courseNumber  : 'COMP SCI 570',
      info          : {
        courseName  : 'Introduction to Human-Computer Interaction',
        description :
          'User-centered software design; (1) principles of and methods for understanding user needs, designing and prototyping interface solutions, and evaluating their usability, (2) their applications in designing web-based, mobile,and embodied interfaces through month long group projects.  Meets with Comp Sci 270. Enroll Info: None',
        credits     : '4',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 270', 'COMP SCI 200' ]
    },
    {
      courseNumber  : 'COMP SCI 571',
      info          : {
        courseName  : 'Building User Interfaces',
        description :
          'Introduces software development of user interfaces (UIs).  Build competence in implementing UIs using state-of-the-art (1) UI paradigms, such as event-driven interfaces, direct-manipulation interfaces, and dialogue-based interaction; (2) methods for capturing, interpreting, and responding to different forms of user input and states, including pointing, text entry, speech, touch, gestures, user activity, context, and physiological states; and (3) platform-specific UI development APIs, frameworks, and toolkits for multiple platforms including web/mobile/desktop interfaces, natural user interfaces, and voice user interfaces. Learn about the fundamental concepts, technologies, algorithms, and methods in building user interfaces, implement UIs using of state-of-the-art UI development tools, and build a UI development portfolio. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 400' ]
    },
    {
      courseNumber  : 'COMP SCI 576',
      info          : {
        courseName  : 'Introduction to Bioinformatics',
        description :
          'Algorithms for computational problems in molecular biology. The course will study algorithms for problems such as: genome sequencing and mapping, pairwise and multiple sequence alignment, modeling sequence classes and features, phylogenetic tree construction, and gene-expression data analysis. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 577',
      info          : {
        courseName  : 'Introduction to Algorithms',
        description :
          'Basic paradigms for the design and analysis of efficient algorithms: greed, divide-and-conquer, dynamic programming, reductions, and the use of randomness. Computational intractability including typical NP-complete problems and ways to deal with them. Enroll Info: None',
        credits     : '4',
        lastTaught  : '1222'
      },
      prerequisites : [
        'MATH 475',
        'COMP SCI 475',
        'Capstone Certificate',
        'COMP SCI 240',
        'COMP SCI 400',
        'MATH 240',
        'STAT 475'
      ]
    },
    {
      courseNumber  : 'COMP SCI 578',
      info          : {
        courseName  : 'Contest-Level Programming',
        description :
          'Training in computer programming for competitions: assessing the coding difficulty and complexity of computational problems, recognizing the applicability of known algorithms, fast coding and testing, team work. COMP SCI 577 is suggested but not required. Enroll Info: None',
        credits     : '1',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 367' ]
    },
    {
      courseNumber  : 'COMP SCI 579',
      info          : {
        courseName  : 'Virtual Reality',
        description :
          'Introduces students to the field of virtual reality and focuses on creating immersive, interactive virtual experiences. Survey topics include historical perspectives on virtual reality technology, computer graphics and 3D modeling, human perception and psychology, human computer interaction and user interface design. This course is designed for students with backgrounds in Computer Science, Engineering, Art, Architecture and Design. Students will work in interdisciplinary teams on projects, culminating in a final event that will be showcased to the public. While not an official uisite, the class will be technologically motivated; therefore students should be comfortable learning new software. The class will utilize publicly available game design software which provides tools and services for the creation of interactive content. While not necessary, students may find it helpful to have taken classes in programming and computer graphics (such COMP SCI 559: Computer Graphics) or in 3D modeling (such as ART 429: 3D Digital Studio I or DS 242: Visual Communication II). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1216'
      },
      prerequisites : [ 'Sophomore standing' ]
    },
    {
      courseNumber  : 'COMP SCI 611',
      info          : {
        courseName  : 'User Experience Design 1',
        description :
          'Introduction to the user experience design including key stages of the design process, design ethics, and the methods and tools involved at each stage of design.  Conduct formative research on clients, users, use contexts and tasks. Gain experience with user research methodologies and learn to create intermediate design tools such as personas. Develop and present a design proposal for a chosen project.  Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 612',
      info          : {
        courseName  : 'User Experience Design 2',
        description :
          'Advanced study of UX design. Introduces processes of ideation, key concepts of visual design, conceptual and interaction design, low and high-resolution prototyping of design techniques. Applications include drafting designs based on user models and initial testing of prototypes. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 613',
      info          : {
        courseName  : 'User Experience Design 3',
        description :
          'Conduct formal evaluations of the user experience (UX) or usability of a digital system. Gain familiarity with the evaluation and research process including key stages, tasks for each stage, common data collection and analysis methods, and common tools employed in the field. Gain experience with a variety of UX evaluation approaches. Collect pilot data and develop a proposal for further UX testing. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1216'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 614',
      info          : {
        courseName  : 'User Experience Design Capstone',
        description :
          'Applies a design studio critique approach to produce a learning environment of collaborative and interdisciplinary peer critique and learning, in addition to provide expert feedback and suggestions. Students will present and defend the latest iteration of the user experience design project they developed in earlier courses while learning about the professions associated with digital user experience design. Enroll Info: None',
        credits     : '1',
        lastTaught  : '1196'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 635',
      info          : {
        courseName  : 'Tools and Environments for Optimization',
        description :
          'Formulation and modeling of applications from computer sciences, operations research, business, science and engineering involving optimization and equilibrium models. Survey and appropriate usage of software tools for solving such problems, including modeling language use, automatic differentiation, subroutine libraries and web-based optimization tools and environments. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1154'
      },
      prerequisites : [ 'MATH 320', 'COMP SCI 200', 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 638',
      info          : {
        courseName  : 'WES-CS 300',
        description :
          'Selected topics in computing. Each offering of the course will cover a topic selected by the instructor and may cover one or more topics from all of computer science. Enroll Info: None',
        credits     : '1-4',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate', 'COMP SCI 200' ]
    },
    {
      courseNumber  : 'COMP SCI 639',
      info          : {
        courseName  : 'Applied Cryptography',
        description :
          'Selected topics in computing. Each offering of the course will cover a topic selected by the instructor. Offerings of this course will provide sufficient depth into their subject to count as electives to meet CS Major requirements. Enroll Info: None',
        credits     : '3-4',
        lastTaught  : '1194'
      },
      prerequisites : []
    },
    {
      courseNumber  : 'COMP SCI 640',
      info          : {
        courseName  : 'Introduction to Computer Networks',
        description :
          'Architecture of computer networks and network protocols, protocol layering, reliable transmission, congestion control, flow control, naming and addressing, unicast and multicast routing, network security, network performance widely used protocols such as Ethernet, wireless LANs, IP, TCP, and HTTP. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 642',
      info          : {
        courseName  : 'Introduction to Information Security',
        description :
          'Senior level undergraduate course covering various topics on information security. Covers a wide range of topics, such as cryptographic primitives, security protocols, system security, and emerging topics.  Elementary knowledge of mathematical logic and discrete probability theory needed, such as COMP SCI/MATH 240. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 679',
      info          : {
        courseName  : 'Computer Game Technology',
        description :
          'Survey of software technology important to computer games and other forms of interactive technology. Real-time image generation, managing complex geometric models, creating virtual characters, simulating physical phenomenon, networking technology for distributed virtual environments. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1132'
      },
      prerequisites : [ 'Capstone Certificate' ]
    },
    {
      courseNumber  : 'COMP SCI 681',
      info          : {
        courseName  : 'Senior Honors Thesis',
        description :
          'Individual study for seniors completing theses for honors in the Computer Sciences major as arranged with a faculty member. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 682',
      info          : {
        courseName  : 'Senior Honors Thesis',
        description :
          'Individual study for seniors completing theses for honors in the Computer Sciences major as arranged with a faculty member. Continuation of COMP SCI 681 Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 691',
      info          : {
        courseName  : 'Senior Thesis',
        description :
          'Individual study for seniors completing theses as arranged with a faculty member. Enroll Info: None',
        credits     : '2-3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 692',
      info          : {
        courseName  : 'Senior Thesis',
        description :
          'Individual study for seniors completing theses as arranged with a faculty member, continuation of COMP SCI 691 Enroll Info: None',
        credits     : '2-3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 698',
      info          : {
        courseName  : 'Directed Study',
        description :
          'Directed study projects for juniors and seniors as arranged with a faculty member. Enroll Info: None',
        credits     : '1-6',
        lastTaught  : '1194'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 699',
      info          : {
        courseName  : 'Directed Study',
        description :
          'Directed study projects for juniors and seniors as arranged with a faculty member. Enroll Info: None',
        credits     : '1-6',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 701',
      info          : {
        courseName  : 'Construction of Compilers',
        description :
          'Principles of the design and implementation of programming languages. Topics include: Principles of compilation, static program analysis, compilation methods to support profiling, and code-generation methods. Knowledge of programming languages and compiler design strongly encouraged, such as COMP SCI 536. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 702',
      info          : {
        courseName  : 'Graduate Cooperative Education',
        description :
          'A full-time cooperative experience (10 or 5 week option) in computer science in a commercial, government, or nonprofit setting, usually in the form of an internship. The work will be monitored by a graduate advisor from the faculty of the Department of Computer Sciences.  Enroll Info: 10 week option for 2 credits, 5 week option for 1 credit.',
        credits     : '1-2',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 703',
      info          : {
        courseName  : 'Advanced Topics in Programming Languages and Compilers',
        description :
          'Formal methods for program verification. Model-checking techniques; linear temporal logic; computational tree logic; logic/automata connection; bisimulations; probabilistic model-checking. Special topics include: program synthesis, verification of synthesis and privacy properties. Knowledge of programming languages and compiler design strongly encouraged, such as COMP SCI 536. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1202'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 704',
      info          : {
        courseName  : 'Principles of Programming Languages',
        description :
          'Introduction to principles of advanced programming languages and programming-language theory. Topics include: lambda-calculus, functional languages, polymorphic functions, type inference, structural induction, lazy evaluation, operational semantics, denotational semantics, and axiomatic semantics. Students are strongly encouraged to have knowledge of programming languages, such as from COMP SCI 536. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 706',
      info          : {
        courseName  : 'Analysis of Software Artifacts',
        description :
          'Advanced course covering various analysis techniques used in software engineering. Covers techniques for analyzing various software artifacts. Some of the topics that will be covered are: model checking, testing, program analysis, requirements analysis, and safety analysis. Students are strongly encouraged to have knowledge of programming languages and compiler design, such as COMP SCI 536, and a basic knowledge of mathematical logic. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1182'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 707',
      info          : {
        courseName  : 'Mobile and Wireless Networking',
        description :
          'Design and implementation of protocols, systems, and applications for mobile and wireless networking, particularly at the media access control, network, transport, and application layers. Focus is on the unique problems and challenges presented by the properties of wireless transmission, various device constraints such as limited battery power, and node mobility. Knower of computer networking is strongly encouraged, such as from COMP SCI 640 or E C E 537. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 710',
      info          : {
        courseName  : 'Computational Complexity',
        description :
          'Study of the capabilities and limitations of efficient computation. Relationships between models representing capabilities such as parallelism, randomness, quantum effects, and non-uniformity; and models based on the notions of nondeterminism, alternation, and counting, which capture the complexity of important problems.  Knowledge of the theory of computation is strongly encouraged, such as COMP SCI 520. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 714',
      info          : {
        courseName  : 'Methods of Computational Mathematics I',
        description :
          'Development of finite difference methods for hyperbolic, parabolic and elliptic partial differential equations. Analysis of accuracy and stability of difference schemes. Direct and iterative methods for solving linear systems. Introduction to finite volume methods. Applications from science and engineering. Enroll Info: Students are strongly encouraged to have programming skills (e.g. COMP SCI 200) and some undergraduate numerical analysis (e.g. MATH 514 or COMP SCI 412), analysis and differential equations (e.g. MATH 322 and MATH 521) and linear algebra (e.g. MATH 341).',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 715',
      info          : {
        courseName  : 'Methods of Computational Mathematics II',
        description :
          'Introduction to spectral methods (Fourier, Chebyshev, Fast Fourier Transform), finite element methods (Galerkin methods, energy estimates and error analysis), and mesh-free methods (Monte-Carlo, smoothed-particle hydrodynamics) for solving partial differential equations. Applications from science and engineering. Applications from science and engineering. Enroll Info: Students are strongly encouraged to have programming skills (e.g. COMP SCI 200), undergraduate numerical analysis (e.g. MATH 514 or COMP SCI 412), analysis (MATH 322 and math 521) and linear algebra (e.g. MATH 341 or equiv.)',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 719',
      info          : {
        courseName  : 'Stochastic Programming',
        description :
          'Stochastic programming is concerned with decision making in the presence of uncertainty, where the eventual outcome depends on a future random event. Topics include modeling uncertainty in optimization problems, risk measures, stochastic programming algorithms, approximation and sampling methods, and applications.  Students are strongly encouraged to have knowledge of linear programming (e.g., COMP SCI/I SY E/MATH 525) and probability and statistics (e.g., MATH 431). Knowledge of integer optimization (COMP SCI/I SY E/MATH 728) is helpful, but not required. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 723',
      info          : {
        courseName  : 'Dynamic Programming and Associated Topics',
        description :
          'General and special techniques of dynamic programming developed by means of examples. Shortest-path algorithms. Deterministic equipment replacement models. Resource allocation problem. Traveling-salesman problem. Knapsack problem. Analysis of inventory systems. General stochastic formulations. Markovian decision processes.  Students are strongly encouraged to have knowledge of mathematical optimization (e.g., COMP SCI 525, I SY E 623, COMP SCI 726), knowledge of analysis (e.g., MATH 431 or 521) and programming ability (e.g., COMP SCI 200 or 301) Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 726',
      info          : {
        courseName  : 'Nonlinear Optimization I',
        description :
          'Theory and algorithms for nonlinear optimization, focusing on unconstrained optimization. Line-search and trust-region methods; quasi-Newton methods; conjugate-gradient and limited-memory methods for large-scale problems; derivative-free optimization; algorithms for least-squares problems and nonlinear equations; gradient projection algorithms for bound-constrained problems; and simple penalty methods for nonlinearly constrained optimization. Enroll Info: Students are strongly encouraged to have knowledge of linear algebra and familiarity with basic mathematical analysis.',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 727',
      info          : {
        courseName  : 'Convex Analysis',
        description :
          'Convex sets in finite-dimensional spaces: relative interiors, separation, set operations. Convex functions: conjugacy, subdifferentials and directional derivations, functional operations, Fenchel-Rockafellar duality. Applications to operations research and related areas.  Students taking this course are strongly encouraged to have had a course in basic analysis (e.g. MATH 521) and a course in linear algebra (e.g., MATH 340). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 728',
      info          : {
        courseName  : 'Integer Optimization',
        description :
          'Introduces optimization problems over integers, and surveys the theory behind the algorithms used in state-of-the-art methods for solving such problems. Special attention is given to the polyhedral formulations of these problems, and to their algebraic and geometric properties. Applicability of Integer Optimization is highlighted with applications in combinatorial optimization. Key topics include: formulations, relaxations, polyhedral theory, cutting planes, decomposition, enumeration.  Students are strongly encouraged to have knowledge of Linear Programming  (e.g., COMP SCI/I SY E/MATH 525), including algorithms, duality and polyhedral theory. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 730',
      info          : {
        courseName  : 'Nonlinear Optimization II',
        description :
          'Theory and algorithms for nonlinearly constrained optimization. Relevant geometric concepts, including tangent and normal cones, theorems of the alternative, and separation results. Constraint qualifications. Geometric and algebraic expression of first-order optimality conditions. Second-order optimality conditions. Duality. Nonlinear  programming algorithms: merit functions and filters; interior-point, augmented Lagrangian, and sequential quadratic programming algorithms. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'STAT 726', 'COMP SCI/I S', 'MATH 726' ]
    },
    {
      courseNumber  : 'COMP SCI 731',
      info          : {
        courseName  : 'Advanced Artificial Intelligence',
        description :
          'Learning and hypothesis formation; knowledge acquisition; deductive and inductive inference systems; reasoning techniques involving time, nonmonotonic reasoning, spatial reasoning, truth maintenance systems; planning strategies. Enroll Info: Comp Sci 540 or cons inst',
        credits     : '3',
        lastTaught  : '1114'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 733',
      info          : {
        courseName  : 'Computational Methods for Large Sparse Systems',
        description :
          'Algorithms and theory for large scale systems in engineering and science, with emphasis on sparse matrices and iterative methods. Students are strongly encouraged to have knowledge of data structures (e.g., COMP SCI 367 or COMP SCI 300), numerical analysis (e.g., COMP SCI 412, E C E 334), and linear and matrix algebra (e.g., MATH 340). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1132'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 736',
      info          : {
        courseName  : 'Advanced Operating Systems',
        description :
          'Advanced topics in operating systems, including process communication, resource allocation, multiprocess and network operating systems, kernel philosophies, fault-tolerant systems, virtual machines, high-level language systems, verifiability and proof techniques. Enroll Info: Comp Sci 537 or cons inst',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 739',
      info          : {
        courseName  : 'Distributed Systems',
        description :
          'Basic concepts; distributed programming; distributed file systems; atomic actions; fault tolerance, transactions, program and data replication, recovery; distributed machine architectures; security and authentication; load balancing and process migration; distributed debugging; distributed performance measurement; distributed simulation techniques; distributed applications; correctness considerations and proof systems. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'COMP SCI 736' ]
    },
    {
      courseNumber  : 'COMP SCI 740',
      info          : {
        courseName  : 'Advanced Computer Networks',
        description :
          'Advanced topics in computer communications networks: congestion and flow control; routing; rate-based protocols; high speed interfaces and technologies: metropolitan area networks; fast packet switching technologies; advanced applications; network services: name service, authentication, resource location.  Students are strongly encouraged to have knowledge of computer network design and protocols (e.g., COMP SCI 640) Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 744',
      info          : {
        courseName  : 'Big Data Systems',
        description :
          'Issues in the design and implementation of big data processing systems, including: an overview of cluster architecture, key design goals (flexibility, performance and fault tolerance), popular execution frameworks, basic abstractions, and applications (e.g., batch analytics, stream processing, graph processing, and machine learning). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 747',
      info          : {
        courseName  : 'Advanced Computer Systems Analysis Techniques',
        description :
          'A survey of advanced analytical modeling techniques for performance analysis of computer systems. Techniques covered include discrete-parameter (embedded) Markov Chains, M/G/1 queues, stochastic Petri nets, queueing networks, renewal theory, and sample path analysis. Application areas include high performance computer architectures, databases, and operating system resource allocation policies.  Students are strongly encouraged to have knowledge of computer system modeling (e.g., COMP SCI 547) Enroll Info: None',
        credits     : '3',
        lastTaught  : '1114'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 750',
      info          : {
        courseName  : 'Real-time Computing Systems',
        description :
          'Introduction to the unique issues in the design and analysis of computer systems for real-time applications. Hardware and software support for guaranteeing timeliness with and without failures. Resource management, time-constrained communication, scheduling and imprecise computations, real-time kernels and case studies.  Students are strongly encouraged to have knowledge of computer architecture (e.g., COMP SCI/E C E 552) and operating system functions (e.g., COMP SCI 537) Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 752',
      info          : {
        courseName  : 'Advanced Computer Architecture I',
        description :
          'Processor design, computer arithmetic, pipelining, multi-operation processors, vector processors, control units, precise interrupts, main memory, cache memories, instruction set design, stack machines, busses and I/O, protection and security.  Students are strongly encouraged to have knowledge of computer architecture (e.g., COMP SCI/E C E 552). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 755',
      info          : {
        courseName  : 'VLSI Systems Design',
        description :
          'Overview of MOS devices and circuits; introduction to integrated circuit fabrication; topological design of data flow and control; interactive graphics layout; circuit simulation; system timing; organizational and architectural considerations; alternative implementation approaches; design project. E C E 555 or equivalent experience is strongly recommended. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1184'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 756',
      info          : {
        courseName  : 'Computer-Aided Design for VLSI',
        description :
          'Broad introduction to computer-aided design tools for VLSI, emphasizing implementation algorithms and data structures. Topics covered: design styles, layout editors, symbolic compaction, module generators, placement and routing, automatic synthesis, design-rule checking, circuit extraction, simulation and verification.  Students are strongly encourage to have programming skills and to  have taken a course in Digital System Fundamentals such as E C E 352. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 757',
      info          : {
        courseName  : 'Advanced Computer Architecture II',
        description :
          'Parallel algorithms, principles of parallelism detection and vectorizing compilers, interconnection networks, SIMD/MIMD machines, processor synchronization, data coherence, multis, dataflow machines, special purpose processors.  Students are strongly encouraged to have knowledge of computer architecture (e.g., COMP SCI/E C E 552). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 758',
      info          : {
        courseName  : 'Advanced Topics in Computer Architecture',
        description :
          'Advanced topics in computer architecture that explore the implications to architecture of forthcoming evolutionary and revolutionary changes in application demands, software paradigms, and hardware implementation technologies.  Students are strongly encouraged to have knowledge of computer architecture (e.g., COMP SCI/E C E 552). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 759',
      info          : {
        courseName  : 'High Performance Computing for Applications in Engineering',
        description :
          'An overview of hardware and software solutions that enable the use of advanced computing in tackling computationally intensive Engineering problems. Hands-on learning promoted through programming assignments that leverage emerging hardware architectures and use parallel computing programming languages. Students are strongly encourage to have completed COMP SCI 367 or COMP SCI 400 or to have equivalent experience. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 760',
      info          : {
        courseName  : 'Machine Learning',
        description :
          'Computational approaches to learning: including inductive inference, explanation-based learning, analogical learning, connectionism, and formal models. What it means to learn. Algorithms for learning. Comparison and evaluation of learning algorithms. Cognitive modeling and relevant psychological results.  Students are strongly encouraged to have knowledge of introductory artificial intelligence (e.g., COMP SCI 540). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 761',
      info          : {
        courseName  : 'Mathematical Foundations of Machine Learning',
        description :
          'Mathematical foundations of machine learning theory and algorithms. Probabilistic, algebraic, and geometric models and representations of data, mathematical analysis of state-of-the-art learning algorithms and optimization methods, and applications of machine learning. Students should have taken a course in statistics and a course in linear algebra (e.g., STAT 302 and MATH 341). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 762',
      info          : {
        courseName  : 'Advanced Deep Learning',
        description :
          'Explore methods and applications of deep learning. Covers cutting-edge topics, including neural architecture design, robustness and reliability of deep learning, learning with less supervision, lifelong machine learning, deep generative modeling, theoretical understanding of deep learning, and interpretable deep learning.  Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 760' ]
    },
    {
      courseNumber  : 'COMP SCI 763',
      info          : {
        courseName  : 'Security and Privacy for Data Science',
        description :
          'Security and privacy concerns in data science. Three core subjects will be considered: Differential privacy and algorithmic fairness; Adversarial machine learning; and Applied cryptography, especially with applications to machine learning. In addition, a selection of more advanced topics will be covered. Possible examples include additional notions of privacy, language-based security, robust optimization. Enroll Info: A firm grasp of probability/statistics (MATH/STAT 431) is recommended. Previous exposure to at least one of cryptography (COMP SCI 435), security (COMP SCI 642), and modern machine learning (COMP SCI 539 or 540) is also recommended.',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 764',
      info          : {
        courseName  : 'Topics in Database Management Systems',
        description :
          'Implementation of database management systems, the impact of new technology on database management systems, back-end database computers, distributed database management systems, concurrency control, and query execution in both distributed and centralized systems, implementation of multiple user views, roll-back and recovery mechanisms, database translation. Students are strongly encouraged to have knowledge of database design (e.g., COMP SCI 564). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 765',
      info          : {
        courseName  : 'Data Visualization',
        description :
          'Principles of the visual presentation of data. Survey of Information Visualization, Scientific Visualization, and Visual Analytics. Design and evaluation of visualizations and interactive exploration tools. Introduction to relevant foundations in visual design, human perception, and data analysis. Encodings, layout and interaction. Approaches to large data sets. Visualization of complex data types such as scalar fields, graphs, sets, texts, and multi-variate data. Use of 2D, 3D and motion in data presentations. Implementation issues. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 766',
      info          : {
        courseName  : 'Computer Vision',
        description :
          'Fundamentals of image analysis and computer vision; image acquisition and geometry; image enhancement; recovery of physical scene characteristics; shape-from techniques; segmentation and perceptual organization; representation and description of two-dimensional objects; shape analysis; texture analysis; goal-directed and model-based systems; parallel algorithms and special-purpose architectures. Students are strongly encouraged to have basic proficiency in calculus and linear algebra, such as MATH 340, and basic programming such as COMP SCI 300 or COMP SCI 367. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 767',
      info          : {
        courseName  : 'Computational Methods for Medical Image Analysis',
        description :
          'Study of computational techniques that facilitate automated analysis, manipulation, denoising, and improvement of large-scale and high resolution medical images. Design and implementation of methods from computer Vision and Machine Learning to efficiently process such image data to answer biologically and clinically meaningful scientific questions. Students are strongly encouraged to have programming skills and basic proficiency in calculus and linear algebra, such as MATH 340. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1172'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 769',
      info          : {
        courseName  : 'Advanced Natural Language Processing',
        description :
          'Develop algorithms and mathematical models for natural language processing tasks, including text categorization, information retrieval, speech recognition, machine translation, and information extraction. Focus is on the state-of-the-art computational techniques as they are applied to natural language tasks.  Students are strongly encouraged to have knowledge of introductory artificial intelligence (e.g., COMP SCI 540). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1134'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 770',
      info          : {
        courseName  : 'Human-Computer Interaction',
        description :
          'Principles of human-computer interaction (HCI); human subjects research methods and procedures, qualitative and quantitative data analysis; and semester-long research project situated in critical domains of HCI, including applications in ubiquitous, affective, assistive, social, and embodied computing. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 775',
      info          : {
        courseName  : 'Computational Network Biology',
        description :
          'Introduces networks as a powerful representation in many real-world domains including biology and biomedicine. Encompasses theory and applications of networks, also referred to as graphs, to study complex systems such as living organisms. Surveys the current literature on computational, graph-theoretic approaches that use network algorithms for biological modeling, analysis, interpretation, and discovery. Enables hands-on experience in network biology by implementing computational projects. Enroll Info: None',
        credits     : '3',
        lastTaught  : ''
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 776',
      info          : {
        courseName  : 'Advanced Bioinformatics',
        description :
          'Advanced course covering computational problems in molecular biology. The course will study algorithms for problems such as: modeling sequence classes and features, phylogenetic tree construction, gene-expression data analysis, protein and RNA structure prediction, and whole-genome analysis and comparisons. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 777',
      info          : {
        courseName  : 'Computer Animation',
        description :
          'Survey of technical issues in the creation of moving and dynamic computer imagery. Principles of animation. Manual motion specification and keyframing. Procedural and simulation-based motion synthesis. Motion capture processing, editing and use. Animation systems. Modeling, rendering and video issues relating to animation. Image-based animation methods and warping. Applications of animation such as games and virtual environments. Basic introduction to artistic issues in animation, such as cinematography. Special effects for film and video.  Students are strongly encouraged to have knowledge of computer graphics (e.g., COMP SCI 559) Enroll Info: None',
        credits     : '3',
        lastTaught  : '1134'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 782',
      info          : {
        courseName  : 'Advanced Computer Security and Privacy',
        description :
          'Security and privacy issues in software, networks, and hardware systems. Security vulnerabilities, privacy threats, threats modeling, and mitigation strategies. Privacy issues related to user interaction with devices, online systems, and networks. In addition, a selection of more advanced topics will be covered. Possible examples include applied cryptography in the context of systems, security and privacy policies, user authentication, and cyber-physical systems. Builds on prior experiences with one or more of the following: networking, security, modern machine learning, embedded systems, and mobile computing. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 784',
      info          : {
        courseName  : 'Foundations of Data Management',
        description :
          'Foundational concepts in databases and data management. The first part of the course discusses topics on query languages (conjunctive queries, Datalog), their expressivity and complexity of evaluation. The second part studies advanced topics in modern data management, including data streams, massive parallelism, provenance, uncertain data management and privacy. There are no specific course prerequisites. It is strongly encouraged that the students are familiar with databases and relational algebra (COMP SCI 564 or equivalent). Knowledge of algorithms, complexity theory and probability will also be helpful. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 787',
      info          : {
        courseName  : 'Advanced Algorithms',
        description :
          'Advanced paradigms for the design and analysis of efficient algorithms, including the use of randomness, linear programming, and semi-definite programming. Applications to data structures, approximating NP-hard optimization problems, learning, on-line and distributed problems.  Students are strongly encouraged to have introductory knowledge of algorithms (e.g., COMP SCI 577) Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 790',
      info          : {
        courseName  : "Master's Thesis",
        description : "Enroll Info: Grad st; Master's candidates only",
        credits     : '1-9',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 799',
      info          : {
        courseName  : "Master's Research",
        description : 'Enroll Info: None',
        credits     : '1-9',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 809',
      info          : {
        courseName  : 'Mathematical Techniques in the Analysis of Algorithms',
        description :
          'Techniques for quantitative analysis of algorithms. Charging arguments, amortization, probabilistic methods. Adversary and information lower bounds. Use of methods from combinatorics, complex analysis, and asymptotics in obtaining precise analyses of quicksort, chained hashing, and other algorithms.  Students are strongly encouraged to have knowledge of algorithms (e.g., COMP SCI 577) or applied math analysis (e.g., MATH 321) and theory of probability (e.g., MATH 431). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1192'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 812',
      info          : {
        courseName  : 'Arithmetic Algorithms',
        description :
          'Survey of algorithms and design paradigms for exact arithmetic, as used in public-key cryptography, computer algebra, and pseudo-random number generation. Topics include primality testing, factorization of integers and polynomials, discrete logarithms, and (optionally) elliptic curves and integer lattices.  Students are strongly encourage to have knowledge of basic abstract algebra (e.g., MATH 541), and intermediate programming ability (e.g., COMP SCI 367 or COMP SCI 300). Enroll Info: None',
        credits     : '3',
        lastTaught  : '1204'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 837',
      info          : {
        courseName  : 'Topics in Numerical Analysis',
        description :
          'Advanced topics in numerical analysis relevant to current research at UW. Each offering of the course will cover a topic selected by the instructor. Topics vary and may include fluid dynamics, computational methods, mathematical biology and others. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1122'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 838',
      info          : {
        courseName  : 'Lrng Basd Methds in Comp Visio',
        description :
          'Advanced topics of special interest to students in various areas of Computer Science. Each offering of the course will cover a topic selected by the instructor. Credit varies by offering - check with the department to determine how an offering counts toward degree requirements. Enroll Info: None',
        credits     : '1-3',
        lastTaught  : '1202'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 839',
      info          : {
        courseName  : 'Adv Comp Security & Privacy',
        description : 'Topics selected from advanced areas. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 841',
      info          : {
        courseName  : 'Computational Cognitive Science',
        description :
          'Studies the biological and computational basis of intelligence, by combining methods from cognitive science, artificial intelligence, machine learning, computational biology, and cognitive neuroscience. Requires ability to program. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1212'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 861',
      info          : {
        courseName  : 'Theoretical Foundations of Machine Learning',
        description :
          'Advanced mathematical theory and methods of machine learning. Statistical learning theory, Vapnik-Chevronenkis Theory, model selection, high-dimensional models, nonparametric methods, probabilistic analysis, optimization, learning paradigms. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1222'
      },
      prerequisites : [ 'COMP SCI 761', 'E C E 761' ]
    },
    {
      courseNumber  : 'COMP SCI 880',
      info          : {
        courseName  : 'Advanced Learning Theory',
        description :
          'Advanced topics in algorithms, complexity, and cryptography. The exact topic varies. Enroll Info: None',
        credits     : '3',
        lastTaught  : '1214'
      },
      prerequisites : [ 'Graduate/professional standing' ]
    },
    {
      courseNumber  : 'COMP SCI 899',
      info          : {
        courseName  : 'Pre-Dissertator Research',
        description :
          "Independent research supervised by a faculty member for students who have completed a master's degree but have not reached dissertator status. Enroll Info: None",
        credits     : '1-9',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 900',
      info          : {
        courseName  : 'Advanced Seminar in Computer Science',
        description :
          'Seminar on recent research on various aspects of computer science. Enroll Info: None',
        credits     : '0-1',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 915',
      info          : {
        courseName  : 'Computation and Informatics in Biology and Medicine',
        description :
          'Participants and outside speakers will discuss current research in computation and informatics in biology and medicine. This seminar is required of all CIBM program trainees. Enroll Info: None',
        credits     : '1',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 990',
      info          : {
        courseName  : 'Dissertation',
        description :
          'Advanced level mentored reading and research for students with dissertator status. Enroll Info: None',
        credits     : '1-6',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    },
    {
      courseNumber  : 'COMP SCI 999',
      info          : {
        courseName  : 'Dissertator Research',
        description :
          'Advanced level mentored reading and research for dissertators. Enroll Info: None',
        credits     : '1-6',
        lastTaught  : '1222'
      },
      prerequisites : [ 'Consent of instructor' ]
    }
  ];
  try {
    await Course.insertMany(allCourses);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { getCourseInfo, getAllCourses, nukeCourse, insertAllCourses };
