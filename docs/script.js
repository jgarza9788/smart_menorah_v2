rand = function (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };
  
  // this will animate the flames randomly 
  function checkDate(overrideDate) 
  {
  
      const currDate = new Date();
  
      var thisDate;
  
      if (overrideDate == null)
      {
          thisDate = (currDate.getFullYear() * 10000) + ( (currDate.getMonth()+1)*100 ) + (currDate.getDate()) ;
      }
      else
      {
          console.log('date was overrided');
          thisDate = overrideDate;
      }
      
  
      // thisDate = 20231214
      console.log(thisDate);
  
      // //for testing
      
      document.getElementById('0').classList.add('active');
      document.getElementById('1').classList.add('active');
      document.getElementById('2').classList.add('active');
      document.getElementById('3').classList.add('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.add('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      
  
  
      document.getElementById('text').textContent = '✡️🕎 Happy Hannukah ✡️🕎';
  
      if (thisDate < 20231207)
      {
          document.getElementById('text').textContent  = 'It is not Hannukah Yet';
      }
  
      if (thisDate > 20231214)
      {
          document.getElementById('text').textContent  = 'Hannukah is Over';
  
          document.getElementById('0').classList.remove('active');
          document.getElementById('1').classList.remove('active');
          document.getElementById('2').classList.remove('active');
          document.getElementById('3').classList.remove('active');
          document.getElementById('4').classList.remove('active');
          document.getElementById('5').classList.remove('active');
          document.getElementById('6').classList.remove('active');
          document.getElementById('7').classList.remove('active');
          document.getElementById('8').classList.remove('active');
      }
  
      if (thisDate == 20231207)
      {
      console.log('day 1 of hannukah');
  
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.remove('active');
      document.getElementById('2').classList.remove('active');
      document.getElementById('3').classList.remove('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.remove('active');
      document.getElementById('6').classList.remove('active');
      document.getElementById('7').classList.remove('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231208)
      {
      console.log('day 2 of hannukah');
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.remove('active');
      document.getElementById('2').classList.remove('active');
      document.getElementById('3').classList.remove('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.remove('active');
      document.getElementById('6').classList.remove('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231209)
      {
      console.log('day 3 of hannukah');
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.remove('active');
      document.getElementById('2').classList.remove('active');
      document.getElementById('3').classList.remove('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.remove('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231210)
      {
      console.log('day 4 of hannukah');
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.remove('active');
      document.getElementById('2').classList.remove('active');
      document.getElementById('3').classList.remove('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.add('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231211)
      {
      console.log('day 5 of hannukah');
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.remove('active');
      document.getElementById('2').classList.remove('active');
      document.getElementById('3').classList.add('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.add('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231212)
      {
      console.log('day 6 of hannukah');
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.remove('active');
      document.getElementById('2').classList.add('active');
      document.getElementById('3').classList.add('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.add('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231213)
      {
      console.log('day 7 of hannukah');
      document.getElementById('0').classList.remove('active');
      document.getElementById('1').classList.add('active');
      document.getElementById('2').classList.add('active');
      document.getElementById('3').classList.add('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.add('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
      if (thisDate == 20231214)
      {
      console.log('day 8 of hannukah');
      document.getElementById('0').classList.add('active');
      document.getElementById('1').classList.add('active');
      document.getElementById('2').classList.add('active');
      document.getElementById('3').classList.add('active');
      document.getElementById('4').classList.add('active');
      document.getElementById('5').classList.add('active');
      document.getElementById('6').classList.add('active');
      document.getElementById('7').classList.add('active');
      document.getElementById('8').classList.add('active');
      }
  
  }
  
  checkDate();
  setInterval(checkDate, 60000);
  
  
  function getColorAtPercentage(gradientColors, percentage) {
    // Sort gradient stops by position
    gradientColors.sort((a, b) => a.position - b.position);
  
    // Find the two gradient stops that surround the specified percentage
    let lowerStop, upperStop;
    for (const stop of gradientColors) {
      if (stop.position <= percentage) {
        lowerStop = stop;
      } else {
        upperStop = stop;
        break;
      }
    }
  
    // If no upper stop was found, use the last stop in the array
    if (!upperStop) {
      upperStop = gradientColors[gradientColors.length - 1];
    }
  
    // Interpolate the color between the two stops
    const t = (percentage - lowerStop.position) / (upperStop.position - lowerStop.position);
    const r = Math.round(lowerStop.color[0] + t * (upperStop.color[0] - lowerStop.color[0]));
    const g = Math.round(lowerStop.color[1] + t * (upperStop.color[1] - lowerStop.color[1]));
    const b = Math.round(lowerStop.color[2] + t * (upperStop.color[2] - lowerStop.color[2]));
  
    // Convert RGB values to a hex string
    const hexColor = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
  
    return hexColor;
  }
  
  function updateBackground()
  {
    const currDate = new Date();
    const percent = (currDate.getHours()/24.0)  + ((currDate.getMinutes()/60.0)/100.0);
    console.log(percent);
    
    const gradientColors = [
      { position: 0, color: [0, 0, 50] },       // Midnight (dark blue)
      { position: 0.25, color: [0, 0, 150] },    // Early morning (medium blue)
      { position: 0.5, color: [255, 255, 200] }, // Noon (bright yellow)
      { position: 0.75, color: [0, 0, 150] },  // Evening (orange)
      { position: 1, color: [0, 0, 50] },        // Night (dark blue)
    ];
  
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = getColorAtPercentage(gradientColors,percent);
    // console.log(getColorAtPercentage(gradientColors,percent));
  }
  
  // updateBackground();
  // setInterval(updateBackground, 60000);
  
  
  // Function to initialize flames for all canvases with the 'flame' class
  function doTheFlames() {
    const flameCanvases = document.querySelectorAll('.active .flame');
    flameCanvases.forEach(canvas => {
      const ctx = canvas.getContext('2d');
  
      // Set canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const maxParticles = 100;
      const particles = [];
  
      class Particle {
        
        reset(){
          this.x = canvas.width / 2;
          this.y = canvas.height / 2;
          
          this.x += rand(-5,5);
          this.y += rand(-5,5);
          // this.speed = 2;
          // this.velocityX = this.speed * (Math.random() - 0.5);
          // this.velocityY = this.speed * (Math.random() - 0.5);
          // this.size = Math.random() * 7 + 3;
          
          this.startRadius = rand(75, 100);
          // this.startRadius = rand(100, 150);
          this.radius = this.startRadius;
          // // this.x = cw/2 + (rand(0, 6) - 3);
          // // this.y = 250;      
          this.vx = 0;
          this.vy = 0;
          this.randomness= 1000;
          // // this.hue = rand(globalTick - hueRange, globalTick + hueRange);
          this.startHue = 10;
          this.endHue = 50;
          this.hue = this.startHue;
          this.saturation = 100; //rand(90, 100);
          this.lightness = rand(50, 80);
          this.startAlpha = rand(1, 10) / 100;
          this.alpha = this.startAlpha;
          this.decayRate = 0.175;  
          this.startLife = 7;
          this.life = this.startLife;
          this.lineWidth = rand(1, 7);
        }
        
        
        constructor() {
  //         this.x = canvas.width / 2;
  //         this.y = canvas.height / 2;
  //         this.speed = 2;
  //         this.velocityX = this.speed * (Math.random() - 0.5);
  //         this.velocityY = this.speed * (Math.random() - 0.5);
  //         this.size = Math.random() * 7 + 3;
          
  //         this.startRadius = rand(1, 25);
  //         this.radius = this.startRadius;
  //         // // this.x = cw/2 + (rand(0, 6) - 3);
  //         // // this.y = 250;      
  //         this.vx = 0;
  //         this.vy = 0;
  //         // // this.hue = rand(globalTick - hueRange, globalTick + hueRange);
  //         this.hue= 25;
  //         this.saturation = rand(50, 100);
  //         this.lightness = rand(20, 70);
  //         this.startAlpha = rand(1, 10) / 100;
  //         this.alpha = this.startAlpha;
  //         this.decayRate = 0.25;  
  //         this.startLife = 7;
  //         this.life = this.startLife;
  //         this.lineWidth = rand(1, 3);
          
          this.reset();
        }
        
  
  
        update() {
          this.vx += (rand(0, this.randomness) - (this.randomness/2.0)) / 1000;
          // this.vy -= this.life/50;  
          this.vy -= this.life*0.1;  
          this.x += this.vx;
          this.y += this.vy;  
          this.alpha = this.startAlpha * (this.life / this.startLife);
          this.radius = this.startRadius * (this.life / this.startLife);
          this.life -= this.decayRate;  
          
          var r = 1.0 - (this.life / this.startLife)
          this.hue = this.startHue + ( (this.endHue - this.startHue) *r);
          
          if(
            this.x < -this.radius ||
            this.y < -this.radius ||
            this.life <= this.decayRate
          ){
            this.reset();  
          } 
        }
  
        draw() {
          // ctx.beginPath();
          // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          // ctx.fillStyle = 'white';
          // ctx.fill();
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = ctx.strokeStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, '+this.alpha+')';
          ctx.lineWidth = this.lineWidth;
          ctx.fill();
          ctx.stroke();
        }
      }
  
      function createParticles() {
        setInterval(() => {
          // console.log(particles.length);
          // console.log(maxParticles);
          
          if (particles.length < maxParticles)
            {
              const particle = new Particle();
              particles.push(particle);            
            }
        }, 10);
      }
  
      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        particles.forEach((particle, index) => {
          particle.update();
          particle.draw();
  
          if (particle.size <= 0.2) 
          {
            particles.splice(index, 1);
          }
        });
      }
  
      createParticles();
      animate();
    });
  }
  
  
  
  // Call the function to initialize flames for all canvases with the 'flame' class
  doTheFlames();
  
  
  
  // function allfunctions(){
  //     console.log('date checked');
  
  //     checkDate(20231207);
  //     // doTheFlames().animate();
  // }   
  
  // // Run the function every minute (60,000 milliseconds)
  // // setInterval(allfunctions, 60000);
  // setInterval(allfunctions, 1);
  
  
  