import Dropdown from "./components/Dropdown"
import YouTube, { YouTubeProps } from "react-youtube"

function App() {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    width: '1024',
    height: '276',
  };

  return (
    <div className="flex flex-col h-screen pt-[50px]">
      {/* Title */}
      <div className="flex flex-col items-center">
        <span className="flex flex-col text-3xl">CFOP vs Roux, Which is Better?</span>
        <span className="flex flex-col text-lg"> This is a submisson for the RHET 105 Genre Remix</span>
      </div>

      {/* Pre-reading info */}
      <div className="flex flex-col mt-[30px] mx-[300px] text-lg">
        <p>Before I begin, for people new to Rubik's Cubes, see this:</p>
        <div className="mx-230px]">
          <Dropdown text="Rubik's Cube Notation" desc="TLDR: The Rubik's Cube has 3 middle layers (each on the x, y and z axis), and 6 sides. There is a notation for each move, but the relevant ones used here are the 6 sides,  Front (F), Back (B), Up (U), Down (D), Left (L) and Right (R), and the middle layer axis denoted by M. Each move is a notation and represents a clockwise 90-degree turn on its respective face. 180-degree turns can also be represented by adding a 2 behind the notation, i.e. R2 means a 180-degree turn on the R face." img="./notation.png"/>
          <Dropdown text="CFOP" desc="CFOP. also sometimes called the Fridrich method, was created by Jessica Fridrich. CFOP is the evolution of the beginner layer by layer method, solving the first 2 layers simultaneously and the last layer with 2 algorithms. It is an acronym that stands for the 4 steps involved in solving the cube, Cross, First 2 Layers (F2l), Orientation of Last Layer (OLL) and Permutation of Last Layer (PLL)." />
          <Dropdown text="Roux" desc='Roux was invented by Gilles Roux, that takes a different approach to solving, being block building. In Roux, solvers first create two 2x3 "blocks" on either side of the cube, leaving the middle layer unsolved, which is then followed by solving the corners of the last layer disregarding the M slice (CMLL) and finally solving the last 6 edges (LSE).' />
          <Dropdown text="Speedcubing Events" desc=" Although 3x3 is the most famous event in speedcubing, there are a lot more interesting events, such as the bigger cubes 4x4, 5x5, all the way to 7x7, other puzzles, such as the pyraminx, skewb, or square-1, and fun categories like one-handed solving, solving with feet, blindfolded solving, and Fewest Move Count, figuring out least amount of moves you can do to solve a scrambled cube." />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col my-[30px] mx-[300px] text-justify text-lg">
        <p className="mb-[20px]">
          The Rubik's Cube is a puzzle invented by Erno Rubik in 1974, and since it's release, it has taken the world by storm, capturing the attention of puzzle enthusiasts for decades. With over 43 quintillion possible configurations, no two solves are ever the same. It has inspired millions of people to delve into developing various methods and algorithms to solve the cube. A subsection of these enthusiasts seek to further this dive of knowledge. These people are called speed-cubers. They are a group of people pushing the boundaries on how fast a Rubik's cube can be solved. Not only are they pushing for the optimization of the standard 3x3 puzzle, but also many other categories which you can find more information about <a href="https://www.worldcubeassociation.org/regulations/#article-9-events">here</a>
        .</p>

        <div className="flex items-center justify-center">
          <YouTube className="flex m-5 mb-10 w-[40%]" videoId="gh8HX4itF_w" opts={opts} onReady={onPlayerReady}/>
          <YouTube className="flex m-5 mb-10 w-[40%]" videoId="wrANQio5eD8" opts={opts} onReady={onPlayerReady}/>
        </div>

        <p className="mb-[20px]">
          In speedcubing. 2 methods are commonly learned and used by competitive and begginer cubers alike, CFOP and Roux. Currently, top cubers such as Max Park, Leo Borneo, and Yiheng Wang, all use CFOP, but there are other cubers such as Kian Mansour and Sean Patrick Villanueva that have top times but use Roux. CFOP utilizes many R, U, D moves, which are considered to be more ergonomic and fast, but have a higher move count, while Roux utilizes the M slice more which results in a lower move count, but less ergonomic turns.
        </p>

        <p className="mb-[20px]">
          While both these methods have produced impressive solving times, CFOP dominates the speedcubing scene, making up around 90% of the community. This is due to it's more structured and algorithmic approach, leading to a much easier learning method in memorization, while Roux depends on a cuber's intuition, as it doesn't have as much algorithms as CFOP. Because of this dominance, we can't use rankings or statistics to determine which of the methods are better, as it makes for an unfair comparison. This short analysis explores how both CFOP and Roux methods are viable, depending on individual solver preferences and the underexplored nuances of each technique. This is what sparked my interest in this question, as a quick dive into the rabbit hole can narrow down which one of the two methods is more optimal.
        </p>

        <p className="mb-[20px]">
          An interesting find, is a paper by Stefan Pochman, a prominent member of the cubing community. He developed a blind solving method, aptly named the Pochman method, later evolving to a faster method called M2/R2. In this paper, he created an algorithm called the "Human Method Evaluator", or HUME. The program is like a virtual cube-solving assistant that analyzes human solving methods by simulating the solving process based on specific subgoals. It's here to help you find the best solving methods, give you some cool stats, and even generate sample solves for you to study. Plus, Pochman explores how HUME can be used for other puzzles. It's like a bridge between human and computer solving methods! Sadly, a working demo of this algorithm.
        </p>
      </div>
      
      <div className="flex flex-col my-[30px] mx-[300px] py-[100px] text-lg">
        <div className="flex border-t border-black"></div>
        <div className="flex justify-center">
          <span>The source code for this article <a href="https://github.com/hindra2/genre-remix.git">is available on GitHub</a>.</span>
        </div>
      </div>
    </div>
  )
}

export default App

