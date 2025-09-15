import './styles/App.scss'
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react'
import { glassOscillation, lateralEntry, verticalEntry } from './logic/animations' 
import { goticInfo, tropicalInfo, fantasyInfo, cyberpunkInfo } from './logic/infoDrinks';
import { goticTexts, tropicalTexts, fantasyTexts, cyberpunkTexts } from './logic/infoDrinks';

function App() {

  const [ currentDrink, setCurrentDrink] = useState(goticInfo);
  const [ currentText, setCurrentText ] = useState(goticTexts)

  const glassAnimated = useRef(null)

  const firstPhraseRef = useRef(null)
  const secondPhraseRef = useRef(null)
  const thirdPhraseRef = useRef(null)

  const firstLateralPhrase = useRef(null)
  const secondPhrase = useRef(null)

  const navbar = useRef(null)
  const buttonsContainer = useRef(null)


  function playAnimations () {
    glassOscillation(glassAnimated.current)

    lateralEntry(firstPhraseRef.current, -250, 0.5)
    lateralEntry(secondPhraseRef.current, -450, 0.5)
    lateralEntry(thirdPhraseRef.current, -450, 0.5)

    lateralEntry(firstLateralPhrase.current, 450, 0.5)
    lateralEntry(secondPhrase.current, 450, 0.5)

    verticalEntry(navbar.current, -100, 0.5)
    verticalEntry(buttonsContainer.current, 300, 0.5)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      glassOscillation(glassAnimated.current);
      lateralEntry(firstPhraseRef.current, -250, 0.5);
      lateralEntry(secondPhraseRef.current, -450, 0.5);
      lateralEntry(thirdPhraseRef.current, -450, 0.5);
      lateralEntry(firstLateralPhrase.current, 450, 0.5);
      lateralEntry(secondPhrase.current, 450, 0.5);
      verticalEntry(navbar.current, -100, 0.5);
      verticalEntry(buttonsContainer.current, 300, 0.5);
    });

    return () => ctx.revert();
  }, []);

  function changeDrink (drinkUpdate) {
    switch (drinkUpdate) {
      case 'gotic' :
        setCurrentDrink(goticInfo)
        setCurrentText(goticTexts)
        playAnimations()
      break

      case 'tropical' :
        setCurrentDrink(tropicalInfo)
        setCurrentText(tropicalTexts)
        playAnimations()
      break
        
      case 'fantasy' :
        setCurrentDrink(fantasyInfo)
        setCurrentText(fantasyTexts)
        playAnimations()
      break
        
      case 'cyberpunk' :
        setCurrentDrink(cyberpunkInfo)
        setCurrentText(cyberpunkTexts)
        playAnimations()
      break

      default: 
        setCurrentDrink(goticInfo)
        setCurrentText(goticTexts)
        playAnimations()
      break
    }
  }

  return (
    <div className={`principal-container ${currentDrink.container}`}>


      <nav ref={navbar} className="navbar-container navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ${currentDrink.togglerNav}`}>
              <li className="my-2">
                <a className={currentDrink.navs} href="#">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a className={currentDrink.navs} href="#">
                  About
                </a>
              </li>
              <li className="my-2">
                <a className={currentDrink.navs} href="#">
                  Contact
                </a>
              </li>
              <li className="my-2">
                <a className={currentDrink.navs} href="#">
                  Work with us
                </a>
              </li>
              <li className="my-2">
                <a className={currentDrink.navs} href="#">
                  Find us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='first-phrase-container'>
        <p ref={firstPhraseRef} className={currentDrink.firstPhrase}>{currentText.firstPhrase}</p>
      </div>

      <div className={`slogan-container ${currentDrink.sloganContainer}`}>
        <p ref={secondPhraseRef} className={currentDrink.secondPhrase}>{currentText.secondPhrase}</p>
        <p ref={thirdPhraseRef} className={currentDrink.thirdPhrase}>{currentText.thirdPhrase}</p>
      </div>

      <div ref={buttonsContainer} className='buttons-container'>
        <button className={currentDrink.firstButton}>See More</button>
        <button className={currentDrink.secondButton}>Get Drink</button>
      </div>

      <div className='drinks-container'>
        <div>
          <img onClick={() => changeDrink('gotic')} className={currentDrink.goticMiniatureImage} src="./gotic-drink.png" alt="" />
        </div>
        <div>
          <img onClick={() => changeDrink('tropical')} className={currentDrink.tropicalMiniatureImage} src="./tropical-drink.png" alt="" />
        </div>
        <div>
          <img onClick={() => changeDrink('fantasy')} className={currentDrink.fantasyMiniatureImage} src="./fantasy-drink.png" alt="" />
        </div>
        <div>
          <img onClick={() => changeDrink('cyberpunk')} className={currentDrink.cyberpunkMiniatureImage} src="./cyberpunk-drink.png" alt="" />
        </div>
      </div>

      <div className='image-container'>
        <img ref={glassAnimated} className={currentDrink.principalImage} src={currentDrink.routeImage} alt="" />
      </div>

      <div className={` drink-name-container ${currentDrink.lateralTextContainer}`}>
        <p ref={firstLateralPhrase} className={currentDrink.firstLateralPhrase}>{currentText.firstLateralPhrase}</p>
        <p ref={secondPhrase} className={currentDrink.secondLateralPhrase}>{currentText.secondLateralPhrase}</p>
      </div>

      <div className={currentDrink.divGradient}></div>
    </div>
  )
}

export default App
