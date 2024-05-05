import Dropdown from "./components/Dropdown"
import YouTube, { YouTubeProps } from "react-youtube"
import Tooltip from "./components/Tooltip";

import { InfoIcon } from "./components/icons";

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
        <span className="flex flex-col text-3xl font-bold">CFOP vs Roux, Which is Better?</span>
        <span className="flex flex-col text-lg"> This is a submisson for the RHET 105 Genre Remix</span>
      </div>

      {/* Pre-reading info */}
      <div className="flex flex-col mt-[30px] mx-[300px] text-lg">
        <p>Before I begin, for people new to Rubik's Cubes or the speedcubing community, see this:</p>
        <div className="mx-230px]">
          <Dropdown text="Rubik's Cube Notation" desc="TLDR: The Rubik's Cube has 3 middle layers (each on the x, y and z axis), and 6 sides. There is a notation for each move, but the relevant ones used here are the 6 sides,  Front (F), Back (B), Up (U), Down (D), Left (L) and Right (R), and the middle layer axis denoted by M. Each move is a notation and represents a clockwise 90-degree turn on its respective face. 180-degree turns can also be represented by adding a 2 behind the notation, i.e. R2 means a 180-degree turn on the R face. Here's a short video to help you visualize this:" vid="./notation.mp4"/>
          <Dropdown text="Speedcubing Events" desc=" Although 3x3 is the most famous event in speedcubing, there are a lot more interesting events, such as the bigger cubes 4x4, 5x5, all the way to 7x7, other puzzles, such as the pyraminx, skewb, or square-1, and fun categories like one-handed solving, solving with feet, blindfolded solving, and Fewest Move Count, figuring out least amount of moves you can do to solve a scrambled cube." />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col my-[30px] mx-[300px] text-justify text-lg">
        <h1 className="text-2xl font-bold my-[10px]">The Rubiks Cube</h1>
        <p className="mb-[20px]">
          The Rubik's Cube is a puzzle invented by Erno Rubik in 1974, and since it's release, it has taken the world by storm, capturing the attention of puzzle enthusiasts for decades. With over 43 quintillion possible configurations, no two solves are ever the same. It has inspired millions of people to delve into developing various methods and algorithms to solve the cube. A subsection of these enthusiasts seek to further this dive of knowledge. These people are called speed-cubers. They are a group of people pushing the boundaries on how fast a Rubik's cube can be solved. Not only are they pushing for the optimization of the standard 3x3 puzzle, but also many other categories which you can find more information about <a href="https://www.worldcubeassociation.org/regulations/#article-9-events">here</a>.
        </p>
        <p className="mb-[20px]">
          Here is more information about these two methods:
        </p>
        <Dropdown text="CFOP" desc="CFOP. also sometimes called the Fridrich method, was created by Jessica Fridrich. CFOP is the evolution of the beginner layer by layer method, solving the first 2 layers simultaneously and the last layer with 2 algorithms. It is an acronym that stands for the 4 steps involved in solving the cube, Cross, First 2 Layers (F2l), Orientation of Last Layer (OLL) and Permutation of Last Layer (PLL)." />
        <Dropdown text="Roux" desc='Roux was invented by Gilles Roux, that takes a different approach to solving, being block building. In Roux, solvers first create two 2x3 "blocks" on either side of the cube, leaving the middle layer unsolved, which is then followed by solving the corners of the last layer disregarding the M slice (CMLL) and finally solving the last 6 edges (LSE).' />

        <div className="flex items-center justify-center">
          <YouTube className="flex m-5 mb-10 w-[40%]" videoId="gh8HX4itF_w" opts={opts} onReady={onPlayerReady}/>
          <YouTube className="flex m-5 mb-10 w-[40%]" videoId="wrANQio5eD8" opts={opts} onReady={onPlayerReady}/>
        </div>

        <h1 className="text-2xl font-bold my-[10px]">The Two Methods</h1>
        <p className="mb-[20px]">
          In speedcubing. 2 methods are commonly learned and used by competitive and begginer cubers alike, CFOP and Roux. Currently, top cubers such as Max Park, Leo Borneo, and Yiheng Wang, all use CFOP, but there are other cubers such as Kian Mansour and Sean Patrick Villanueva that have top times but use Roux. CFOP utilizes many R, U, D moves, which are considered to be more ergonomic and fast, but have a higher move count, while Roux utilizes the M slice more which results in a lower move count, but less ergonomic turns.
        </p>

        <p className="mb-[20px]">
          While both these methods have produced impressive solving times, CFOP dominates the speedcubing scene, making up around 90% of the community. This is due to it's more structured and algorithmic approach, leading to a much easier learning method in memorization, while Roux depends on a cuber's intuition, as it doesn't have as much algorithms as CFOP. Because of this dominance, we can't use rankings or statistics to determine which of the methods are better, as it makes for an unfair comparison. This short analysis explores how both CFOP and Roux methods are viable, depending on individual solver preferences and the underexplored nuances of each technique. This is what sparked my interest in this question, as a quick dive into the rabbit hole can narrow down which one of the two methods is more optimal.
        </p>

        <h1 className="flex items-center text-2xl font-bold my-[10px]">HUME&nbsp;
          <Tooltip
            width="500px"
            top="-550%"
            left="6px"
            content={
              <div className="flex flex-col items-center justify-center">
                <span className="font-medium text-center">The paper was taken from Pochman's diploma thesis which can be found <a href="https://www.stefan-pochmann.info/hume/">here</a>.</span>
              </div>
            }
            >
            <InfoIcon />
          </Tooltip>
        </h1>
        <p className="mb-[20px]">
          An interesting find, is a paper by&nbsp;
            <Tooltip 
              width="700px"
              top="-950%"
              left="70px"
              content={
                <div>
                  <h1 className="text-2xl font-bold my-[10px]">Fun Facts About Pochman:</h1>
                  <div className="ml-[40px]">
                    <li>First person to officially solve a 5x5 blindfolded!</li>
                    <li>First person to unofficially solve a Megaminx blindfolded (A megaminx is a docahedron shaped twisty puzzle, which means it has 12 sides!).</li>
                    <li>Popularized some PLL algorithms for CFOP, such as the N2 perm algorithm which I personally use.</li>
                    <li>He developed a blind solving method, aptly named the Pochman method, later evolving to a faster method called M2/R2, one of the most used techniques for beginners in blind-solving!</li>
                  </div>
                  <span className="flex items-center justify-center mt-5"><a href="https://www.speedsolving.com/wiki/index.php/Stefan_Pochmann">click here</a>&nbsp;to learn more about him!</span>
                </div>
              }>
              <span className="text-blue-500">
                  Stefan Pochman
              </span>
            </Tooltip>
            , a prominent member of the cubing community.  In this paper, he created an algorithm called the "Human Method Evaluator", or HUME. The program is like a virtual cube-solving assistant that analyzes human solving methods by simulating the solving process based on specific subgoals. It's here to help you find the best solving methods, give you some cool stats, and even generate sample solves for you to study. Plus, Pochman explores how HUME can be used for other puzzles. It's like a bridge between human and computer solving methods! Sadly, a working demo of this algorithm was not uploaded by him.
          </p>
          <p className="mb-[20px]">
          The ideas behind creating HUME and its potential is fascinating. His thesis delves deeper into the inner workings of the algorithm. A brief explanation is that it breaks down a solving method into "subgoals" which it then solves to reach different subgaals in each method, until the puzzle is solved. It's designed to be flexible and work with various twisty puzzles, and not just the classic 3x3 cube. He tested HUME by comparing two solving methods, CFOP and BlockF2L. BlockF2l is a variation of CFOP where instead of doing the cross first, a 2x2 block is built on a corner of the cube and then continues to a 3x2, and so on until the bottom layer is finished, which is preceded by OLL and PLL.  It has a similar approach to Roux, in where blockbuilding is one of it's main aspects, however, it doesn't have the freedom Roux has in its more flexible block-building technique. Although this is not a perfect comparison of CFOP vs Roux, it still arrives in a similar conclusion Kian did. BlockF2L needed fewer moves on average. But Pochmann notes that the ergonomics and finger-friendliness of algorithms also play a big role in speed, which is an area for future exploration.
          </p>

        <h1 className="flex items-center text-2xl font-bold my-[10px]">Kian Mansour&nbsp;
          <Tooltip
            width="500px"
            top="-550%"
            left="6px"
            content={
              <div className="flex flex-col items-center justify-center">
                <span className="font-medium text-center">The seminar was from Kian's Youtube channel which can be found <a href="https://www.youtube.com/watch?v=81XdAt5m1uc&t=1167s">here</a>.</span>
              </div>
            }
            >
            <InfoIcon />
          </Tooltip>
        </h1>
        <p className="mb-[20px]">
          <Tooltip 
            width="700px"
            top="-950%"
            left="70px"
            content={
              <div>
                <h1 className="text-2xl font-bold my-[10px]">Fun Facts About Kian:</h1>
                <div className="ml-[40px]">
                  <li>He is officially the second fastest Roux solver after achieving a 6.52 average at the Pickering Spring 2018 Competition.</li>
                  <li>Won the 3x3x3 One Handed North American Champion in 2022.</li>
                  <li>One of the main contributors for the Roux method in developing optimal algorithms for the different stages of Roux.</li>
                </div>
                <span className="flex items-center justify-center mt-5"><a href="https://sites.google.com/view/kianroux">click here</a>&nbsp;to learn more about him and the Roux method!</span>
              </div>
            }>
            <span className="text-blue-500">
                Kian Mansour
            </span>
          </Tooltip>
          &nbsp;also discussed this question in a seminar back in 2018. Leading the development of Roux, he offers a unique POV on the situation, having a much deeper insight than most cubers. He makes a compelling argument that most arguments for this topic are baseless and are not well-structured. For example, someone said, “Felix uses CFOP and has all the current 3x3 records”, which is really just a biased opinion at best. Therefore, he tries to provide a more quantitative conclusion by quantifying each step of the method and pitting them against each other, side by side. In both methods, based on his and other cuber's experience in order to find out, theoretically, which one of the methods are better.
        </p>
        <div className="flex items-center justify-center px-10 my-10">
          <table className="table-fixed border border-collapse">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2 text-center" colSpan={4}>Roux</th>
                <th className="border border-black px-4 py-2 text-center" colSpan={4}>CFOP</th>
              </tr>
              <tr>
                <th className="border border-black px-4 py-2 text-center">Step</th>
                <th className="border border-black px-4 py-2 text-center">Moves</th>
                <th className="border border-black px-4 py-2 text-center">TPS</th>
                <th className="border border-black px-4 py-2 text-center">Time</th>
                <th className="border border-black px-4 py-2 text-center">Step</th>
                <th className="border border-black px-4 py-2 text-center">Moves</th>
                <th className="border border-black px-4 py-2 text-center">TPS</th>
                <th className="border border-black px-4 py-2 text-center">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2 text-center">FB</td>
                <td className="border border-black px-4 py-2 text-center">7</td>
                <td className="border border-black px-4 py-2 text-center">9</td>
                <td className="border border-black px-4 py-2 text-center">0.8</td>
                <td className="border border-black px-4 py-2 text-center">X-Cross</td>
                <td className="border border-black px-4 py-2 text-center">8</td>
                <td className="border border-black px-4 py-2 text-center">10</td>
                <td className="border border-black px-4 py-2 text-center">0.8</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">SB</td>
                <td className="border border-black px-4 py-2 text-center">15</td>
                <td className="border border-black px-4 py-2 text-center">13</td>
                <td className="border border-black px-4 py-2 text-center">1.2</td>
                <td className="border border-black px-4 py-2 text-center">F2L</td>
                <td className="border border-black px-4 py-2 text-center">21</td>
                <td className="border border-black px-4 py-2 text-center">13</td>
                <td className="border border-black px-4 py-2 text-center">1.6</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">CMLL</td>
                <td className="border border-black px-4 py-2 text-center">11</td>
                <td className="border border-black px-4 py-2 text-center">13</td>
                <td className="border border-black px-4 py-2 text-center">0.8</td>
                <td className="border border-black px-4 py-2 text-center">OLL</td>
                <td className="border border-black px-4 py-2 text-center">11</td>
                <td className="border border-black px-4 py-2 text-center">13</td>
                <td className="border border-black px-4 py-2 text-center">0.8</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">LSE</td>
                <td className="border border-black px-4 py-2 text-center">13</td>
                <td className="border border-black px-4 py-2 text-center">11</td>
                <td className="border border-black px-4 py-2 text-center">1.2</td>
                <td className="border border-black px-4 py-2 text-center">PLL</td>
                <td className="border border-black px-4 py-2 text-center">15</td>
                <td className="border border-black px-4 py-2 text-center">15</td>
                <td className="border border-black px-4 py-2 text-center">1.0</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Total</td>
                <td className="border border-black px-4 py-2 text-center">46</td>
                <td className="border border-black px-4 py-2 text-center">11.5</td>
                <td className="border border-black px-4 py-2 text-center">4.0</td>
                <td className="border border-black px-4 py-2 text-center">Total</td>
                <td className="border border-black px-4 py-2 text-center">55</td>
                <td className="border border-black px-4 py-2 text-center">13</td>
                <td className="border border-black px-4 py-2 text-center">4.2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-[20px]">
          This table was something Kian came up with as the conclusion of his seminar. According to his assumptions about how we generally approach solving using these different methods, and that we have constant TPS (Turns per Second, a metric on how fast you can execute moves), Roux has an average time of 4.0 seconds, wile CFOP has an average time of 4.2 seconds. This is probably due to the generaly lower average move count and relatively high TPS that Roux has, that overshines the higher move count and TPS that CFOP has. However, he also states that this is inconclusive, as there are other things that the CFOP community has developed in order to circumvent this. One example is a massive 493 algorithm set called ZBLL, or Zborowski-Bruchem Last Layer, that aims to complete the Last Layer in 1 algorithm, which reduces the movecount for both OLL and PLL parts in CFOP to be from anywhere from 7 moves to 20 or so moves. 
        </p>

        <p className="mb-[20px]">
          Here's a video that shows how much of a difference ZBLL can make:
        </p>

        <div className="flex flex-col items-center my-[30px]">
          <video className="flex  w-[50%]" controls disablePictureInPicture>
            <source src="./zbll.mp4"/>
          </video>
        </div>


        <h1 className="flex items-center text-2xl font-bold my-[10px]">Conclusions</h1>
        <p className="mb-[20px]">
          
        </p>
      </div>

      <div className="flex flex-col my-[30px] mx-[300px] py-[100px] text-lg">
        <div className="flex border-t border-black"></div>
        <div className="flex justify-center text-xl">
          <span>The source code for this article <a href="https://github.com/hindra2/genre-remix.git">is available on GitHub</a>.</span>
        </div>
      </div>
    </div>
  )
}

export default App

