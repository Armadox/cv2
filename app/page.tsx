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
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">name</span> = <span className="text-orange-300">&quot;Adrian Dan&quot;</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">phoneNumber</span> = <span className="text-orange-300">&quot;+43-660-183-2293&quot;</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">languege</span> = <span className="text-orange-300">&quot;English, German & Romanian&quot;</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">gitHubAccount</span> = <a href="https://github.com/Armadox" className='underline text-blue-600 hover:text-blue-500'>https://github.com/Armadox</a>;</div>
            <br/>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">bestSkills</span> = <span className="text-orange-300">&quot;HTML, CSS, Javascript (React& NextJS)&quot;</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">basicSkills</span> = <span className="text-orange-300">&quot;Prisma, Git, GraphQL, C, C#, jQuery, Python, Microsoft Office &quot;</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">databases</span> = <span className="text-orange-300">&quot;MySQL, LinQ, MongoDB &quot;</span>;</div>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">otherSkills</span> = <span className="text-orange-300">&quot;Implementing online components, OOP, SEO, API’s, Blender 3D&quot;</span>;</div>
            <br/>
            <div className='text-green-700'>&#47;&#47; Hello, ladies and gentlemen!</div>
            <div className='text-green-700'>&#47;&#47; My name is Adrian Dan and I am a self-taught web developer.</div>
            <br/>
            <div className='text-green-700'>&#47;&#47; My goal is to help you create some kickass websites that we can be both proud of!</div>
            <br/>
            <div><span className="text-blue-200">console</span>.<span className="text-yellow-100">log</span><span className='text-pink-500'>(</span><span className="text-orange-300">&quot;FEEL FREE TO REACH OUT!&quot;</span><span className='text-pink-500'>)</span>;</div>
            <br/>
            <div className='text-pink-500'>return(<span className="text-blue-500">null</span>)</div>
          </div>
        }/>
        <div id='_Experience'></div>
        <Content headline='Experience' text={
          <div className='ml-4'>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">workExperience1</span> = &#123;
              <br/><span className="text-pink-500 ml-5">duration</span> : <span className="text-orange-300">&quot;May 2023-Current&quot;</span>,<br/>
              <span className="text-pink-500 ml-5">workedAt</span> : <span className="text-orange-300">&quot;gym-and-more.at&quot;</span>,<br/>
              <span className="text-pink-500 ml-5">position</span> : <span className="text-orange-300">&quot;Full-Stack developer&quot;</span>,<br/>
              <div className="ml-5">
              <span className="text-pink-500">feats</span> : <span className="text-pink-500">[</span>
                <span className="text-orange-300">&quot;Developed gym-and-more.at, an online e-shop specialized in selling supplements&quot;</span>,<br/> 
                <span className="text-orange-300">&quot;Utilized server-side rendering and dynamically loaded client components to optimize website performance, resulting in Google PageSpeed scores from 95 to 100 on desktop and on mobile. &quot;</span>,<br/>
                <span className="text-orange-300">&quot;Developed a fully functional and secure admin panel, equipped with the ability to create, delete, update (CRUD) products and manage orders through API’s. &quot;</span>,<br/>
                <span className="text-pink-500">]</span><br/>
              </div>
              &#125;;
            </div>



            <br/>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">workExperience2</span> = &#123;
              <br/><span className="text-pink-500 ml-5">duration</span> : <span className="text-orange-300">&quot;March-October 2023&quot;</span>,<br/>
              <span className="text-pink-500 ml-5">workedAt</span> : <span className="text-orange-300">&quot;retreatpartner.de&quot;</span>,<br/>
              <span className="text-pink-500 ml-5">position</span> : <span className="text-orange-300">&quot;Front-End developer intern&quot;</span>,<br/>
              <div className="ml-5">
              <span className="text-pink-500">feats</span> : <span className="text-pink-500">[</span>
                <span className="text-orange-300">&quot;Worked within a dynamic team of front-end and back-end developers.&quot;</span>,<br/> 
                <span className="text-orange-300">&quot;Utilized NextJS and Tailwind to develop and optimize front-end interfaces to effectively showcase content and ensure an ideal user experience.&quot;</span>,<br/>
                <span className="text-orange-300">&quot;Worked on our GraphQL front-end code to optimize the exchange of data between client and server.&quot;</span>,<br/>
                <span className="text-pink-500">]</span><br/>
              </div>
              &#125;;
            </div>



            <br/>
            <div><span className="text-blue-500">const</span> <span className="text-blue-200">workExperience3</span> = &#123;
              <br/><span className="text-pink-500 ml-5">duration</span> : <span className="text-orange-300">&quot;September 2022-February 2023 &quot;</span>,<br/>
              <span className="text-pink-500 ml-5">workedAt</span> : <span className="text-orange-300">&quot;DAN.MINIMARKT RU S.R.L&quot;</span>,<br/>
              <span className="text-pink-500 ml-5">position</span> : <span className="text-orange-300">&quot;WordPress developer&quot;</span>,<br/>
              <div className="ml-5">
              <span className="text-pink-500">feats</span> : <span className="text-pink-500">[</span>
                <span className="text-orange-300">&quot;Developed a fully dynamic CMS WordPress website with a fully functioning custom theme, that I achieved by changing WordPress Php files and installing SASS (css extension) for enhanced styling.&quot;</span>,<br/> 
                <span className="text-orange-300">&quot;Landed our site around 100 of website views per day by following good SEO practices.&quot;</span>,<br/>
                <span className="text-orange-300">&quot;Started selling products during the first week our site went live, by promoting our shop on Meta and investing into advertisement.&quot;</span>,<br/>
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
            <span className="text-pink-500">title</span> : <span className="text-orange-300">&quot;NextJS E-Shop website&quot;</span>,<br/>
            <span className="text-pink-500">description</span> : <span className="text-pink-500">[</span>
              <span className="text-orange-300">&quot;Fully functioning admin panel with CRUD.&quot;</span>,<br/> 
              <span className="text-orange-300">&quot;Fast working website built using NextJS, Prisma, MongoDB.&quot;</span>,<br/>
              <span className="text-orange-300">&quot;Responsive and dynamic layout and design.&quot;</span>,<br/>
              <span className="text-pink-500">]</span><br/>
            </div>
            &#125;;
          </div>



          <br/>
          <div><span className="text-blue-500">const</span> <span className="text-blue-200">project2</span> = &#123;
            <div className="ml-5">
            <span className="text-pink-500">title</span> : <span className="text-orange-300">&quot;WordPress website with custom theme&quot;</span>,<br/>
            <span className="text-pink-500">description</span> : <span className="text-pink-500">[</span>
              <span className="text-orange-300">&quot;Dynamic Wordpress&#47;WooCommerce website that was built with Wordpress and has it's own self made theme.&quot;</span>,<br/> 
              <span className="text-orange-300">&quot;The custom theme was built by reverse engineering and editing Wordpress php files.&quot;</span>,<br/>
              <span className="text-orange-300">&quot;Website was built by mainly using Php, Javascript, jQuery, Bootstrap-5 and CSS.&quot;</span>,<br/>
              <span className="text-orange-300">&quot;Functional AJAX cart that updates every time you add something in the cart.&quot;</span>,<br/>
              <span className="text-orange-300">&quot;Project took around 2 weeks.&quot;</span>,<br/>
              <span className="text-pink-500">]</span><br/>
            </div>
            &#125;;
          </div>



          <br/>
          <div><span className="text-blue-500">const</span> <span className="text-blue-200">project3</span> = &#123;
            <div className="ml-5">
            <span className="text-pink-500">title</span> : <span className="text-orange-300">&quot;Test assignment from ScandiWeb&quot;</span>,<br/>
            <span className="text-pink-500">description</span> : <span className="text-pink-500">[</span>
              <span className="text-orange-300">&quot;Built while following OOP principles (+meaningful classes that extend each other).&quot;</span>,<br/> 
              <span className="text-orange-300">&quot;Web app containing two pages (Product list, Adding product page). &quot;</span>,<br/>
              <span className="text-orange-300">&quot;Frontend uses React, backend uses Php, MySQL and it was designed with Sass.
                                                  Website was built using Php, MySQL, Sass, Bootstrap-5, Javascript, React 
                                                  (Uses React Browser Routing) and dotenv.&quot;</span>,<br/>
              <span className="text-orange-300">&quot;Project took around 2 weeks while studying React and JSON.&quot;</span>,<br/>
              <span className="text-orange-300">&quot;Passed the test with 12&#47;12 :D .&quot;</span>,<br/>
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
