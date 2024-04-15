import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from './components/navbar'
import Content from './components/content'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const categories = ["_About_Me", "_Experience", "_Projects"];
  return (
    <main className="bg-backgroundColor text-sm">
      <Navbar categories={categories}/>
      <div className="p-6 flex flex-col items-center gap-4">
        <div id='_About_Me'></div>
        <Content headline='AboutMe' text={
          <div className='ml-4'>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">name</span> = <span className="text-orange-300">"Adrian Dan"</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">phoneNumber</span> = <span className="text-orange-300">"+43-660-183-2293"</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">languege</span> = <span className="text-orange-300">"English, German & Romanian"</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">gitHubAccount</span> = <a href="https://github.com/Armadox" className='underline text-blue-600 hover:text-blue-500'>https://github.com/Armadox</a>;</div>
            <br/>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">bestSkills</span> = <span className="text-orange-300">"HTML, CSS, Javascript (React& NextJS)"</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">basicSkills</span> = <span className="text-orange-300">"Prisma, Git, GraphQL, C, C#, jQuery, Python, Microsoft Office "</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">databases</span> = <span className="text-orange-300">"MySQL, LinQ, MongoDB "</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">otherSkills</span> = <span className="text-orange-300">"Implementing online components, OOP, SEO, API’s, Blender 3D"</span>;</div>
            <br/>
            <div className='text-green-700'>// Hello, ladies and gentlemen!</div>
            <div className='text-green-700'>// My name is Adrian Dan and I am a self-taught web developer.</div>
            <br/>
            <div className='text-green-700'>// My goal is to help you create some kickass websites that we can be both proud of!</div>
            <br/>
            <div><span className="text-blue-200">console</span>.<span className="text-yellow-100">log</span><span className='text-pink-500'>(</span><span className="text-orange-300">"FEEL FREE TO REACH OUT!"</span><span className='text-pink-500'>)</span>;</div>
            <br/>
            <div className='text-pink-500'>return(<span className="text-blue-500">null</span>)</div>
          </div>
        }/>
        <div id='_Experience'></div>
        <Content headline='Experience' text={
          <div className='ml-4'>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">workExperience1</span> = &#123;
              <br/><span className="text-pink-500 ml-5">duration</span> : <span className="text-orange-300">"May 2023-Current"</span>,<br/>
              <span className="text-pink-500 ml-5">workedAt</span> : <span className="text-orange-300">"gym-and-more.at"</span>,<br/>
              <span className="text-pink-500 ml-5">position</span> : <span className="text-orange-300">"Full-Stack developer"</span>,<br/>
              <div className="ml-5">
              <span className="text-pink-500">feats</span> : <span className="text-pink-500">[</span>
                <span className="text-orange-300">"Developed gym-and-more.at, an online e-shop specialized in selling supplements"</span>,<br/> 
                <span className="text-orange-300">"Utilized server-side rendering and dynamically loaded client components to optimize website performance, resulting in Google PageSpeed scores from 95 to 100 on desktop and on mobile. "</span>,<br/>
                <span className="text-orange-300">"Developed a fully functional and secure admin panel, equipped with the ability to create, delete, update (CRUD) products and manage orders through API’s. "</span>,<br/>
                <span className="text-pink-500">]</span><br/>
              </div>
              &#125;;
            </div>



            <br/>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">workExperience2</span> = &#123;
              <br/><span className="text-pink-500 ml-5">duration</span> : <span className="text-orange-300">"March-October 2023"</span>,<br/>
              <span className="text-pink-500 ml-5">workedAt</span> : <span className="text-orange-300">"retreatpartner.de"</span>,<br/>
              <span className="text-pink-500 ml-5">position</span> : <span className="text-orange-300">"Front-End developer intern"</span>,<br/>
              <div className="ml-5">
              <span className="text-pink-500">feats</span> : <span className="text-pink-500">[</span>
                <span className="text-orange-300">"Worked within a dynamic team of front-end and back-end developers."</span>,<br/> 
                <span className="text-orange-300">"Utilized NextJS and Tailwind to develop and optimize front-end interfaces to effectively showcase content and ensure an ideal user experience."</span>,<br/>
                <span className="text-orange-300">"Worked on our GraphQL front-end code to optimize the exchange of data between client and server."</span>,<br/>
                <span className="text-pink-500">]</span><br/>
              </div>
              &#125;;
            </div>



            <br/>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">workExperience3</span> = &#123;
              <br/><span className="text-pink-500 ml-5">duration</span> : <span className="text-orange-300">"September 2022-February 2023 "</span>,<br/>
              <span className="text-pink-500 ml-5">workedAt</span> : <span className="text-orange-300">"DAN.MINIMARKT RU S.R.L"</span>,<br/>
              <span className="text-pink-500 ml-5">position</span> : <span className="text-orange-300">"WordPress developer"</span>,<br/>
              <div className="ml-5">
              <span className="text-pink-500">feats</span> : <span className="text-pink-500">[</span>
                <span className="text-orange-300">"Developed a fully dynamic CMS WordPress website with a fully functioning custom theme, that I achieved by changing WordPress Php files and installing SASS (css extension) for enhanced styling."</span>,<br/> 
                <span className="text-orange-300">"Landed our site around 100 of website views per day by following good SEO practices."</span>,<br/>
                <span className="text-orange-300">"Started selling products during the first week our site went live, by promoting our shop on Meta and investing into advertisement."</span>,<br/>
                <span className="text-pink-500">]</span><br/>
              </div>
              &#125;;
            </div>
            <br/>
            <div className='text-pink-500'>return(<span className="text-blue-500">null</span>)</div>
          </div>
        }/>


        <div id='_Projects'></div>
        <Content headline='Projects' text={
          <div className='ml-4'>
          <div><span className="text-blue-500">const</span> <span className="text-blue-200">project1</span> = &#123;
            <div className="ml-5">
            <span className="text-pink-500">title</span> : <span className="text-orange-300">"NextJS E-Shop website"</span>,<br/>
            <span className="text-pink-500">description</span> : <span className="text-pink-500">[</span>
              <span className="text-orange-300">"Fully functioning admin panel with CRUD."</span>,<br/> 
              <span className="text-orange-300">"Fast working website built using NextJS, Prisma, MongoDB."</span>,<br/>
              <span className="text-orange-300">"Responsive and dynamic layout and design."</span>,<br/>
              <span className="text-pink-500">]</span><br/>
            </div>
            &#125;;
          </div>



          <br/>
          <div><span className="text-blue-500">const</span> <span className="text-blue-200">project2</span> = &#123;
            <div className="ml-5">
            <span className="text-pink-500">title</span> : <span className="text-orange-300">"WordPress website with custom theme"</span>,<br/>
            <span className="text-pink-500">description</span> : <span className="text-pink-500">[</span>
              <span className="text-orange-300">"Dynamic Wordpress/WooCommerce website that was built with Wordpress and has it's own self made theme."</span>,<br/> 
              <span className="text-orange-300">"The custom theme was built by reverse engineering and editing Wordpress php files."</span>,<br/>
              <span className="text-orange-300">"Website was built by mainly using Php, Javascript, jQuery, Bootstrap-5 and CSS."</span>,<br/>
              <span className="text-orange-300">"Functional AJAX cart that updates every time you add something in the cart."</span>,<br/>
              <span className="text-orange-300">"Project took around 2 weeks."</span>,<br/>
              <span className="text-pink-500">]</span><br/>
            </div>
            &#125;;
          </div>



          <br/>
          <div><span className="text-blue-500">const</span> <span className="text-blue-200">project3</span> = &#123;
            <div className="ml-5">
            <span className="text-pink-500">title</span> : <span className="text-orange-300">"Test assignment from ScandiWeb"</span>,<br/>
            <span className="text-pink-500">description</span> : <span className="text-pink-500">[</span>
              <span className="text-orange-300">"Built while following OOP principles (+meaningful classes that extend each other)."</span>,<br/> 
              <span className="text-orange-300">"Web app containing two pages (Product list, Adding product page). "</span>,<br/>
              <span className="text-orange-300">"Frontend uses React, backend uses Php, MySQL and it was designed with Sass.
                                                  Website was built using Php, MySQL, Sass, Bootstrap-5, Javascript, React 
                                                  (Uses React Browser Routing) and dotenv."</span>,<br/>
              <span className="text-orange-300">"Project took around 2 weeks while studying React and JSON."</span>,<br/>
              <span className="text-orange-300">"Passed the test with 12/12 :D ."</span>,<br/>
              <span className="text-pink-500">]</span><br/>
            </div>
            &#125;;
          </div>
          <br/>
          <div className='text-pink-500'>return(<span className="text-blue-500">null</span>)</div>
        </div>
        }/>
      </div>
    </main>
  )
}
