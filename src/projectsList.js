export const projects = [
    // {
    //     title: "Shakespeare Visualization",
    //     tags: ["Javascript", "d3", "Node"],
    //     repo: "bard-display",

    //     previewImageUrl: "http://placekitten.com/500/500",
    //     previewVideoUrl: "www.google.com",
    //     description: "This is a project to visualize text from Shakespeare plays. My goal was to blah blah blah and then maybe this who knows."
    // },
    // {
    //     title: "Phyllotaxis",
    //     tags: ["SVG", "python", "html canvas"],

    //     previewImageUrl: "http://placekitten.com/500/500",
    //     previewVideoUrl: "www.google.com",
    //     description: "This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project."
    // },

    // {
    //     title: "Hue-changing screensaver",
    //     tags: ["WebGL", "Vue", "React", "GSAP"],

    //     previewImageUrl: "http://placekitten.com/500/500",
    //     previewVideoUrl: "www.google.com",
    //     description: "This is a project too!"
    // },
    {
        title: "Shakespeare Text Visualization",
        repo: "bard",
        description: "A visual explorer of the text of Shakespeare's plays. User can navigate between plays, scenes and characters, and view interactions between characters and number of lines per character.",
        tags: ["d3", "Vue", "Node.js"]
    },
    {
        title: "Fourier Transformations",
        repo: "fourier-canvas",
        description: `Creating an animation of a crucial step in the Fourier transformation to deepen my mathematical understanding of it.
        The main insight that drives the Fourier transformation is that any signal can be decomposed into a set of simple sinusoidal elements. 
        In this animation, we're starting with the sinusoidal elements (depicted as a series of circular orbits) and then tracing out the signal that they generate.`,
        tags: ["canvas"]
    },
    {
        title: "Triangle Centers",
        repo: "orthocenters",
        tags: ["canvas"],
        description: "Users can change the triangle by dragging its vertices, changing its incircle and circumcircle (whose centers are the intersection points of the triangle's angle bisectors and orthogonal bisectors, respectively)."
    },
    {
        title: "Game of Life",
        repo: "game-of-life-quick",
        tags: ["canvas"],
        description: "A quick implementation of Conway's Game of Life."
    },
    {
        title: "Minesweeper",
        repo: "Minesweeper",
        tags: ["canvas"],
        description: "Building the classic game to practice designing algorithms and building user interfaces."
    },
    {
        title: "Cellular Automata",
        repo: "cellular-automata",
        tags: ["canvas"],
        description: "I was enticed to begin playing with cellular automata by the fact that they can generate the Sierpinski triangle. I look forward to exploring more patterns that might emerge from rules even simpler than those that underpin Conway's Game of Life."
    },
    {
        title: "Maze Generation",
        repo: "maze-generator",
        tags: ["canvas"],
        description: "Implementing a maze generator with a recursive backtracking algorithm. This was a really fun exercise: I learned a lot about recursion."
    },
    {
        title: "Sonic Boom Animation",
        repo: "sonic-boom-animation",
        tags: ["canvas"],
        description: "Animating sound waves as they emanate from moving objects to illustrate both sonic booms and the Doppler Effect."
    },
    {
        title: "Irrational Angles",
        repo: "irrational-angles",
        tags: ["canvas"],
        description: "Exploring the patterns that emerge from altering the angle at which leaves spawn."
    },
    {
        title: "Recamán's Sequence",
        repo: "recaman-sequence-visualization",
        tags: ["canvas"],
        description: "I learned about this sequence and wanted to code a visualization."
    },
    {
        title: "Logarithmic Spiral",
        repo: "logarithmic-spiral",
        tags: ["canvas"],
        description: "Illustrating the property of the logarithmic spiral that the angle between the radial line and the tangent is constant."
    },
    {
        title: "Cardioid Animation",
        repo: "Cardioid-animation",
        tags: ["canvas"],
        description: "The idea for this animation came from Mathologer's video: https://www.youtube.com/watch?v=qhbuKbxJsk8. The logic comes from there, but the code is my own."
    },
    {
        title: "Perlin Noise Vector Fields",
        repo: "vector-fields",
        tags: ["canvas"],
        description: "Building a vector field that objects in the world will obey. Using Perlin noise to determine the direction of each vector. Hopefully I will scale it up to 3 dimensions, ultimately modeling snowfall under lamplight."
    }


    // [ ] TODO: Add links to descs
    // [ ] TODO: add videos
    // [ ] TODO: and update videos in  the readmes
    // [ ] TODO: take new screenshots that  avoid white side space 
    // ^ Actually maybe this drops out, since just will use still from video/gif
    // [ ] TODO: Add "tags" for all projects
    // [ ] TODO: Add more projects

    // (*) phyllotaxis
    // (*) screensaver  -- check slack!
    // (*) sorting
    // more shakespeare dash
    // hyperbolas
    // 2048
    // attraction
    // sierpinski

    // linear regression census
    // 3d game of life
    // (*) circle inversions
    // circle recursions
    // simple ripple
    // prime number gaps
    // chemical elements
    // snake
    // parabolic shooter

    // (*) React poems
];