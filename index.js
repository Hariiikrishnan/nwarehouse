const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');  // Animate hamburger to X
    navLinks.classList.toggle('active');   // Show/hide links
});

// Add active class to clicked nav link
const links = navLinks.querySelectorAll('a');
console.log(links);
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active from all links
        links.forEach(l => l.classList.remove('active'));

        // Add active to the clicked one
        link.classList.add('active');
        
        // (Optional) close the menu after clicking a link
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});






let observer = new IntersectionObserver(updates => {
  updates.forEach(update => {
    // console.log(update)
      if (update.isIntersecting) {
          update.target.classList.add('visible');
      }
      //  else {
      //     update.target.classList.remove('visible');
      // }
  });
}, { threshold: [0.25,0.5] });

var element8 = document.querySelectorAll(".element");

element8.forEach(element =>{
  observer.observe(element);
})


const dynamicImage = document.getElementById('dynamicImage');
  const dynamicContent = document.getElementById('dynamicContent');

  const contentData = {
    features: {
      img: "images/features.png",
      html: `
        <h3>Our Features</h3>
        <ul>
          <li> On-board Vin - 12V power adapter</li>
<li> On-board USB Type B interface (Used for the board power supply and USB communication)</li>
<li> On-board Power indicators for LED, Vin, 5V, VBus, 3.3V</li>
<li> On-board reset button and Switch Interface</li>
<li> On-board 3.3V and 5V Regulator</li>
<li> CMOS Battery Holder</li>
<li> All GPIO are led out and the names of the pins are clearly Indicated</li>
<li> After soldering the headers, directly plug the board with any type of Analog and Digital sensor interface.</li>
<li> On-board 0.96” OLED Interface</li>
<li> ESD Protection</li>
<li> Reverse Polarity Protection</li>
        </ul>
      `
    },
    tech: {
      img: "images/techspec.png",
      html: `
        <h3>Technical Specifications</h3>
        <ul>
          Core: ARM Cortex-M3, 32-bit RISC
<li>Operating Frequency: Up to 72 MHz</li>
<li>Flash Memory: 64 KB.  SRAM: 20 KB.</li>
<li>Real-Time Clock (RTC): Integrated low-power calendar RTC for time and date tracking. </li>
<li>Package: LQFP48. </li>
<li>GPIO: 37 I/O pins.</li>
<li> Timers: 7 total, including: </li>
<ul>

	<li>Two 16-bit advanced-control timers (TIM1 and TIM8) with PWM and dead-time generation. </li>
	<li>Four 16-bit general-purpose timers (TIM2, TIM3, TIM4, TIM5). </li>
	<li>One 24-bit SysTick timer.</li>
</ul>  
<li>Analog-to-Digital Converters (ADCs): </li>
<ul>
 <li> 2 ADCs (12-bit resolution). </li>
<li>	16 channels total. </li>
  </ul> 
<li>Digital Interfaces: </li>
 <ul> 
	 <li>I²C: 2 interfaces.  </li>
	 <li>SPI: 2 interfaces.  </li>
	 <li>USART: 3 interfaces.  </li>
	 <li>USB 2.0 Full Speed.  </li>
	 <li>CAN 2.0B.
   </ul> 
<li>Power Supply Voltage: 2.0V to 3.6V. </li>
<li>Operating Temperature: –40 to +85 °C. </li>
<li>Debugging: </li>
<li>Serial Wire Debug (SWD) interface</li>
        </ul>
      `
    },
    pinout:{
      img:"images/pinout.png",
      html:`
      <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; text-align: left;">
  <caption style="font-weight: bold; text-align: center; margin-bottom: 10px;">Pin Type and Function Table</caption>
  <thead style="background-color: #f2f2f2;">
    <tr>
      <th style="width: 20%;">Type</th>
      <th style="width: 30%;">Pin Name</th>
      <th style="width: 50%;">Function</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><strong>Power</strong></td>
      <td>3.3 Volts</td>
      <td>Operational Output Voltage</td>
    </tr>
    <tr>
      <td>5 Volts</td>
      <td>Power Supply from USB or 5V external source pin</td>
    </tr>
    <tr>
      <td>GND</td>
      <td>Ground Pin</td>
    </tr>
    <tr>
      <td><strong>Analog Pins</strong></td>
      <td>PA0–PA7, PB0-PB1</td>
      <td>10, 12-bit resolution ADC pins</td>
    </tr>
    <tr>
      <td><strong>I/O Pins</strong></td>
      <td>PA0–PA15, PB0–PB15, PC13–PC15</td>
      <td>37 General Purpose I/O pins</td>
    </tr>
    <tr>
      <td><strong>External Interrupts</strong></td>
      <td>PA0–PA15, PB0–PB15, PC13–PC15</td>
      <td>Interrupt pins</td>
    </tr>
    <tr>
      <td><strong>PWM</strong></td>
      <td>PA0–PA3, PA6–PA10, PB0–PB1, PB6–PB9</td>
      <td>15 Pulse-width Modulation pins</td>
    </tr>
    <tr>
      <td><strong>Serial Communication (UART)</strong></td>
      <td>TX1, RX1, TX2, RX2, TX3, RX3, RTS, CTS</td>
      <td>USART pins</td>
    </tr>
    <tr>
      <td><strong>SPI</strong></td>
      <td>MISO0, MOSI0, SCK0, MISO1, MOSI1, SCK1, CS0</td>
      <td>2 Serial Peripheral Interface pins</td>
    </tr>
    <tr>
      <td><strong>CAN</strong></td>
      <td>CAN0TX, CAN0RX</td>
      <td>Controller Area Network Bus pins</td>
    </tr>
    <tr>
      <td><strong>I2C</strong></td>
      <td>SCL1, SCL2, SDA1, SD2</td>
      <td>Inter-Integrated Circuit Serial Data and Clock pins</td>
    </tr>
  </tbody>
</table>

      `,
    },
    pinconfig: {
      img: "images/pinconfig.png",
      html: `
        <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; text-align: center;display:flex;flex-direction:column;align-items:center">
  <caption style="font-weight: bold; margin-bottom: 8px;">Header Pin Configuration</caption>
  <thead style="background-color: #f2f2f2;">
    <tr>
      <th colspan="3">Left Header Pin</th>
      <th colspan="3">Right Header Pin</th>
    </tr>
    <tr>
      <th>Pin </th>
      <th>Connected to</th>
      <th></th>
      <th>Pin </th>
      <th>Connected to</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>VBAT</td><td></td><td>1</td><td>+3.3V rail</td><td></td></tr>
    <tr><td>2</td><td>PC13</td><td></td><td>2</td><td>Ground plane</td><td></td></tr>
    <tr><td>3</td><td>PC14</td><td></td><td>3</td><td>+5V rail</td><td></td></tr>
    <tr><td>4</td><td>PC15</td><td></td><td>4</td><td>PB9</td><td></td></tr>
    <tr><td>5</td><td>PA0</td><td></td><td>5</td><td>PB8</td><td></td></tr>
    <tr><td>6</td><td>PA1</td><td></td><td>6</td><td>PB7</td><td></td></tr>
    <tr><td>7</td><td>PA2</td><td></td><td>7</td><td>PB6</td><td></td></tr>
    <tr><td>8</td><td>PA3</td><td></td><td>8</td><td>PB5</td><td></td></tr>
    <tr><td>9</td><td>PA4</td><td></td><td>9</td><td>PB4</td><td></td></tr>
    <tr><td>10</td><td>PA5</td><td></td><td>10</td><td>PB3</td><td></td></tr>
    <tr><td>11</td><td>PA6</td><td></td><td>11</td><td>PA15</td><td></td></tr>
    <tr><td>12</td><td>PA7</td><td></td><td>12</td><td>PA12</td><td></td></tr>
    <tr><td>13</td><td>PB0</td><td></td><td>13</td><td>PA11</td><td></td></tr>
    <tr><td>14</td><td>PB1</td><td></td><td>14</td><td>PA10</td><td></td></tr>
    <tr><td>15</td><td>PB10</td><td></td><td>15</td><td>PA9</td><td></td></tr>
    <tr><td>16</td><td>PB11</td><td></td><td>16</td><td>PA8</td><td></td></tr>
    <tr><td>17</td><td>NRST</td><td></td><td>17</td><td>PB15</td><td></td></tr>
    <tr><td>18</td><td>+3.3V rail</td><td></td><td>18</td><td>PB14</td><td></td></tr>
    <tr><td>19</td><td>Ground plane</td><td></td><td>19</td><td>PB13</td><td></td></tr>
    <tr><td>20</td><td>Ground plane</td><td></td><td>20</td><td>PB12</td><td></td></tr>
  </tbody>
</table>

      `
    }
  };

  function animateChange(key) {
    dynamicImage.classList.remove('active');
    dynamicContent.classList.remove('active');

    setTimeout(() => {
      dynamicImage.src = contentData[key].img;
      dynamicContent.innerHTML = contentData[key].html;

      setTimeout(() => {
        dynamicImage.classList.add('active');
        dynamicContent.classList.add('active');
      }, 50);
    }, 300);
  }

  // Event listeners for hover
  document.querySelectorAll('#navbar-section nav a').forEach(link => {
    link.addEventListener('mouseenter', e => {
      const key = e.target.dataset.content;
      animateChange(key);
    });
  });

  // Load 'features' section initially
  window.addEventListener('DOMContentLoaded', () => {
    animateChange('features');
  });


  let currentScale = 1;
const SCALE_STEP = 0.1;
const MAX_SCALE = 2;
const MIN_SCALE = 1; // minimum 1x zoom

// Zoom In/Out buttons
document.getElementById('zoomIn').addEventListener('click', () => {
  if (currentScale < MAX_SCALE) currentScale += SCALE_STEP;
  dynamicImage.style.transform = `scale(${currentScale})`;
});

document.getElementById('zoomOut').addEventListener('click', () => {
  if (currentScale > MIN_SCALE) currentScale -= SCALE_STEP;
  dynamicImage.style.transform = `scale(${currentScale})`;
});

// Mouse move effect
dynamicImage.addEventListener('mousemove', (e) => {
  const rect = dynamicImage.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  dynamicImage.style.transformOrigin = `${x}% ${y}%`;
  dynamicImage.style.transform = `scale(${currentScale})`;
});

// Reset transform-origin when mouse leaves
dynamicImage.addEventListener('mouseleave', () => {
  dynamicImage.style.transformOrigin = 'center center';
});