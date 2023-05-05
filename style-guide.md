# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Soft orange: hsl(35, 77%, 62%)
- Soft red: hsl(5, 85%, 63%)

### Neutral

Off-white: hsl(36, 100%, 99%)
Grayish blue: hsl(233, 8%, 79%)
Dark grayish blue: hsl(236, 13%, 42%)
Very dark blue: hsl(240, 100%, 5%)

## Typography

### Body Copy

- Font size (paragraph): 15px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 700, 800

<!-- 
body {
  background-color: hsl(36, 100%, 99%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
main{
    padding: 2rem 9rem;
}
.nav{
      display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  padding-top: 2rem;
}
span{
    padding-left: 2rem;
}
.mainBody{
  display: flex;
width: 100%;
 
}
.bigMainBody{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;    
  flex: 2;

}
.bigImgDesk, .bigImgMob{
    width: 100%;
    padding-bottom: 1.9rem;
}
.new{
  display: flex;
  justify-content: space-evenly;
  align-items: left;
  flex-direction: column;
  flex: 1;
  background-color: hsl(240, 100%, 5%);
  margin-left: 2.5rem;
}
.blackBox{
    /* padding: .7rem .5rem; */
}
.textbigMainBody{
  display: flex;
  justify-content: center;
  align-items: center;
    width: 100%;
margin-top: 2rem;
}
.textbigMainBodyh1{
  display: flex;
flex: 1;
font-size: 1.7rem;
padding-right: 3rem;
/* line-height: 3rem; */
}
.textbigMainBodyh1div{
    flex:1;
}
.textbigMainBodyh1div h1{

    margin-bottom: 0px;

}
.textbigMainBodyh1div p{
    line-height: 1.7rem;
}
.smalltext{
  display: flex;
flex-direction: column;
      flex: 1;
      justify-content: space-between;
}
.button{
      display: flex;

      flex: 1;
}
.smalltextp{
      display: flex;
      flex: 1;
      padding-bottom: 3rem;
}
.smalltextp p, .textbigMainBodyh1 h1{
    margin-top: 0;
    margin-bottom: 0;
}
.bigImgMob{
    display: none;
}
.littleBody{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
}
.beige{
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 100%;  
  flex: 1;
  
}
.beigeSub{
    /* flex: 1; */
}

.beigeText{
padding-left: 2rem;
padding-right: 2rem;

}    


.beige h2, .beige p, .beige h4{
    margin: 0;
}

.smallImg img{
    width: 6rem;
}
h1, h2, h3, h4, p, span{
    font-family: 'Inter', sans-serif;
}
span, .smalltext p, .beigeText p{
    color:  hsl(236, 13%, 42%);
}
.beigeText h2{
    color: hsl(233, 8%, 79%);
    font-size: 2rem;
}
.beigeText p{
        font-size: .9rem;

}
button{
    background-color: hsl(5, 85%, 63%);
    color: white;
    border: 0;
    width: 50%;
    height: 2.8rem;
        font-family: 'Inter', sans-serif;
letter-spacing: .25rem;
}
.new h2{
    color:  hsl(35, 77%, 62%);
    padding-top:.3rem;
      padding: 0 1.3rem;

}
.new h3, .new p{
    color: white;
          padding: 0 1.3rem;

}
.new h2{
font-size: 2.1em;
margin: 0;
}
.new h3{
    font-size: 1rem;

}
.new p{
        font-size: .9rem;

}

.bottomBorder{
    /* border-bottom: 1px solid white;
    position: relative; */
}

.bottomBorder:after{
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto 0 auto; /* This will center the border. */
    width: calc( - 2.6rem); /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 1px solid white; /* This creates the border. Replace black with whatever color you want. */

} -->



<!-- 
  <body>
        <main>
            <div class="body">
                <div class="nav">
                    <img src="./assets/images/logo.svg" alt="">
                    <div class="navText">
                        <span>Home</span>
                        <span>New</span>
                        <span>Popular</span>
                        <span>Trending</span>
                        <span>Categories</span>
                    </div>
                </div>
                <div class="mainBody">
                    <div class="bigMainBody">
                        <img class="bigImgDesk" src="./assets/images/image-web-3-desktop.jpg" alt="">
                        <img class="bigImgMob" src="./assets/images/image-web-3-mobile.jpg" alt="">
                        <div class="textbigMainBody">
                            <div class="textbigMainBodyh1 textbigMainBodyh1div">
                                <h1>The Bright Future of Web 3.0?</h1>
                            </div>
                            <div class="smalltext textbigMainBodyh1div">
                                <div class="smalltextp">
                                    <p>We dive into the next evolution of the web that
                                        claims to out the nower of the nattorms back
                                        into the hands of the people. But is it really
                                        fulfilling its promise?</p>
                                </div>
                                <div class="button"><button>READ MORE</button></div>

                            </div>
                        </div>
                    </div>

                    <div class="new">
                        <h2>New</h2>
                        <div class="blackBox bottomBorder">
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p bottomBorder>Will hydrogen-fueled cars ever catch up
                                to EVs?</p>
                        </div>
                        <div class="blackBox bottomBorder">
                            <h3>The Downsides of Al Artistry</h3>
                            <p bottomBorder>What are the possible adverse effects of
                                on-demand Al image generation!</p>
                        </div>
                        <div class="blackBox ">
                            <h3>Is VC Funding Drying Up?</h3>
                            <p>Private funding by VC firms is down 50%
                                YOY. We take a look at what that means</p>
                        </div>
                    </div>
                </div>
                <div class="littleBody">
                    <div class="beige beige1">
                        <div class="smallImg beigeSub"><img src="./assets/images/image-retro-pcs.jpg" alt=""></div>
                        <div class="beigeText beigeSub">
                            <h2>01</h2>
                            <h4>Reviving Retro PCs</h4>
                            <p>What happens when old PCs
                                are given modern upgrades?</p>
                        </div>
                    </div>
                    <div class="beige beige2">
                        <div class="smallImg beigeSub"><img src="./assets/images/image-top-laptops.jpg" alt=""></div>
                        <div class="beigeText beigeSub">
                            <h2>02</h2>
                            <h4>Top 10 Laptops of 2022</h4>
                            <p>Our best nicks for various
                                needs and budgets.</p>
                        </div>
                    </div>
                    <div class="beige beige3">
                        <div class="smallImg beigeSub"><img src="./assets/images/image-gaming-growth.jpg" alt=""></div>
                        <div class="beigeText beigeSub">
                            <h2>03</h2>
                            <h4>The Growth of Gaming</h4>
                            <p>How the pandemic has sparked
                                fresh opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <script src="./News Homepage Main.js"></script>
    </body> -->