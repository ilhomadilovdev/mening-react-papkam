import React, { Component } from 'react'

export default class App extends Component {
  users = [
    {
      img: './images/Rectangle 26.png',
      text: 'Brouchers'

    },
    {
      img: './images/Rectangle 27.png',
      text: 'Flyers'

    },
    {
      img: './images/Rectangle 28.png',
      text: 'Package inserts'

    },
    {
      img: './images/Rectangle 30.png',
      text: 'Newspaper inserts'

    },
    {
      img: './images/Rectangle 29.png',
      text: 'Letters'

    },
    {
      img: './images/Rectangle 31.png',
      text: 'Reply cards'

    },
    {
      img: './images/Rectangle 32.png',
      text: 'Direct mail inserts'

    },
    {
      img: './images/Rectangle 48.png',
      text: 'Brouchers'

    },
  ]




  render() {
    return (
      <div className='salom' >
        <div className='navbar_' >
          <div className='printing' >Printing Club</div>
          <ul>
            <li className='class1' >Home</li>
            <li className='class2' >Our story</li>
            <li className='class3' >Apply now</li>
          </ul>
          <div className='button-1' ><button>Get quote</button></div>
        </div>

        <div className='we-help' >
          <div className='content_text' >
            <div className='good' >
              We help you look
              good on paper
            </div>
            <div className='Quality' >Quality your customers can feel</div>
            <div className='button-1' ><button>Get quote</button></div>


            <div className='over' >Over 1,546,000 pieces of mail printed last year</div>
          </div>
          <img src='./images/rasm.png' alt='' />
        </div>

        <div className='americans' >
          <img src='./images/rasm2.png' alt='' />

          <div className='content_text2' >
            <div className='belivier' >
              70% of Americans believe
              physical mail  is more personal
              than the internet.*
            </div>
            <div className='bel' >
              In the age of digital advertising it is easy to overlook print.
              Don’t make this mistake. Over fifty six percent of people
              say that receiving mail is a pleasure.  Most people look
              forward to checking their mailbox everyday.
            </div>
            <div className='ctn-text' >
              <div className='ctn-email' >
                <button>Email</button>
                <div className='seconds' >17 seconds</div>
              </div>
              <div className='direct-email' >
                <button>Direct mail</button>
                <div className='days' >17 days</div>
              </div>
            </div>
          </div>
        </div>


        <div className='print' >Print that delivers</div>
        <div className='print_map' >
          <div className='row' >
            {this.users.map((item, index) => (
              <div className='col-xl-3 mt-2' key={index} >
                <div className='card my-3' >
                  <img src={item.img} alt='' />
                  <div className='text' >{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className='see' >
          <div className='fff' >
            <button>See all</button>
            <img src='./images/Arrow 1.png' alt='' />
          </div>
        </div>



        <div className='cut' >
          <img src='./images/Rectangle 50.png' alt='' />

          <div className='text_9' >
            <div className='through' >
              Cut through the boise and go
              straight to the Mailbox.
            </div>
            <div className='thr' >
              Let’s get your message directly into the hands of your
              customers, a place where they will actually see it.
              <br />
              <br />
              Speak to one of our great team members today.
            </div>
            <div className='button-1' ><button>Get quote</button></div>
          </div>
        </div>



        <ul id='list' >
          <li >Home</li>
          <li>Our story</li>
          <li>Apply now</li>
          <li>Contact us</li>

        </ul>


        <div className='icons' >
          <img src='./images/instagram (4) 1.svg' alt='' />
          <img src='./images/facebook (1) 1.png' alt='' />
          <img src='./images/telegram (3) 1.png' alt='' />
        </div>


        <div className='street' >
          902 W.Main Street Teutopokis, Il 62467
          217.857.3153</div>


      </div>
    )
  }
}
