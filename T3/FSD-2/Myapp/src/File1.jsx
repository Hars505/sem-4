import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function File1() {
  return "Hello World!! ";
}
/**
 How to Write a File
 1> First Alphabet of name of file Should be Capital
          Wrong => return(<h1>Hello<h1/>
                          <p> doo NOON </p>)
          Correct => return(<div>
                              <h1>Hello<h1/>
                              <p> doo NOON </p>
                            </div>)

  2> Perfect Way Fragment tag <>,</>
           Perfect => return(<>
                              <h1>Hello<h1/>
                              <p> doo NOON </p>
                            </>)
  3> Close all Tags 
          <img src="sfvds" />
          <input name=" ssv " />
  4> use Camelcase Attributes 
          wrong => <h1 class="title">
          correct => <h1 className="title">
  5> Style in JSX 
          <h1 style={{ color:"red"}}> Hello </h1>
  6> Passing Values / expressions in JSX
          const name = "Kavan"
          <h1>{name}</h1>
  7> JSX comments {/stars JSX Comments stars/}
 */
 export default File1;