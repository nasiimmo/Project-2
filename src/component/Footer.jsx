import LinkedIn from '../images/icons8-linkedin-50.png'
import Github from '../images/Footer_github-new.png'



export default function Footer(){
  return (
    <footer id="footer">
        Made by Nasiim & Husaam &copy; Global Goods {new Date().getFullYear()}
        <div className='socials'>
        <a href='https://github.com/nasiimmo' className="github-link"><img src={Github} /> </a>
        <a href='https://www.linkedin.com/in/nasiim-nuur-59b31b261/' className="linkedIn-link"><img src={LinkedIn} /> </a>
        </div>
      </footer>
  )
} 
  
