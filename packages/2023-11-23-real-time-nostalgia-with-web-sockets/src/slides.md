---
theme: none
title: "Real Time Nostalgia with Web Sockets"
aspectRatio: 16/9
canvasWidth: 960
colorSchema: light
fonts:
  provider: none
layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-crop" style="height:176.49px;left:731.02px;top:320.01px;width:177.23px"><img src="/media/image1.png" alt="QR code linking to https://hi.joshuakgoldberg.com" style="height:185.64px;left:-6.34px;position:absolute;top:-3.72px;width:192.49px"></div>
<div class="pptx-shape pptx-crop" style="height:176.49px;left:54.06px;top:321.01px;width:177.23px"><img src="/media/image1.png" alt="QR code linking to https://hi.joshuakgoldberg.com" style="height:185.64px;left:-6.34px;position:absolute;top:-3.72px;width:192.49px"></div>
<div class="pptx-shape pptx-text" style="height:320.01px;left:120px;top:0px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:352.8px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Real Time Nostalgia</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">with Web Sockets</span></p></div>
<div class="pptx-shape pptx-text" style="height:175.25px;left:120px;top:321.25px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:37.8px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Josh Goldberg</span></p></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:80.64px;left:353.42px;top:229.68px;width:253.15px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;font-weight:700;line-height:58.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:49px;font-weight:700">nostalgia</span></p></div>
</div>

<!--
I want to start this talk today with an emotion: nostalgia. The yearning for a better time.It's natural for humans to fall back on nostalgia when we're going through a tough time. We contrast with how things are bad today verses the "good old times". We don't remember what problems we had then, but we didn't have what's troubling us now.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<img class="pptx-shape" src="/media/image2.jpeg" alt="Promotional banner for Super Mario Bros. Deluxe. The left half is a regular sized Mario swimming; the right side is a large size Luigi playing the Bu minigame" style="height:202.43px;left:179.14px;top:24.43px;width:404.87px">
<img class="pptx-shape" src="/media/image3.png" alt="Purple GameBoy Color" style="height:366.78px;left:-52.43px;top:208.97px;width:366.78px">
<div class="pptx-shape pptx-crop" style="height:431.22px;left:645.65px;top:75.91px;width:304.05px"><img src="/media/image4.jpeg" alt="Photograph of a photograph: a teenage / middle school me smiling with a cute green parakeet on my shoulder" style="height:540px;left:0px;position:absolute;top:-75.91px;width:304.05px"></div>
<img class="pptx-shape" src="/media/image5.png" alt="Mad Men still image of Don Draper showing a bunch of suits an ad men a presentation on a slide wheel" style="height:172.31px;left:288.51px;top:270px;width:258.46px">
</div>

<!--
I grew up playing old video games, like super Mario bros and pokemon. When I'm going through a sad time I fall back to them.
I love this quote from Don Draper in Mad Men about the feeling: “Nostalgia - its delicate, but potent. … in Greek nostalgia literally means “the pain from an old wound.” It’s a twinge in your heart far more powerful than memory alone... It lets us travel the way a child travels - around and around, and back home again, to a place where we know are loved.”
“Super Mario Bros. Deluxe”: https://www.nintendo.es/Juegos/Game-Boy-Color/Super-Mario-Bros-Deluxe-266219.html
“GameBoy Color, Grape”: https://www.amazon.com/Game-Boy-Color-Grape/dp/B00002ST5L
“Nostalgia”: https://ew.com/tv/2017/07/19/mad-men-don-draper-best-pitches/
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<img class="pptx-shape" src="/media/image6.jpg" alt="A living room with Christmas lights, a video game poster, and a painting" style="height:344.59px;left:174px;top:97.7px;width:612px">
</div>

<!--
Back in 2012 I was struggling with computer science in university. It felt like most of my classmates were months or years ahead. I wasn't confident I could make it as a software developer. I missed the days when the biggest problems I'd faced in my evenings were training up my Blastoise to defeat the elite four, not reversing a singly linked list in C++.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<img class="pptx-shape" src="/media/image7.png" alt="Screenshot of joshuakgoldberg.com/FullScreenMario/Source, showing the FullScreenMario first world" style="height:672.56px;left:-36px;top:-25.59px;width:1032px">
</div>

<!--
My nostalgia for a simpler time was what inspired me to write my first real personal project. I wanted to recapture that feeling of playing an 8 bit game (and show to potential employers that yes, I can code). The project was called FullScreenMario, and it was a full remake of the original super Mario bros. It has the original 32 levels, random map generation, a level editor, and mods. Plus, I wanted to make it as easy as possible for people to play this game. I wanted as few "barriers to entry", things that get in the way, before any new user would start playing in their browser.
So what platform should I write this game on?Of course, the web!
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:414.41px;left:54.67px;top:62.8px;width:850.67px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#569CD6;font-family:'Menlo';font-size:24px">const </span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">canvas </span><span style="color:#D4D4D4;font-family:'Menlo';font-size:24px">= </span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">document</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:24px">createElement</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">(</span><span style="color:#CE9178;font-family:'Menlo';font-size:24px">"canvas"</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">);</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#569CD6;font-family:'Menlo';font-size:24px">const </span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">context </span><span style="color:#D4D4D4;font-family:'Menlo';font-size:24px">= </span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">canvas</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:24px">getContext</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">(</span><span style="color:#CE9178;font-family:'Menlo';font-size:24px">"2d"</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">);</span></p><p style="font-size:24px;line-height:28.8px;margin-top:27.2px"><br><span style="font-size:24px;text-decoration:line-through">const </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">actors </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">=</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:24px"> [ </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">/* ... */ </span><span style="color:#6A9955;font-family:'Menlo';font-size:24px">];</span></p><p style="font-size:24px;line-height:28.8px;margin-top:27.2px"><br><span style="font-size:24px;text-decoration:line-through">setInterval</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:24px">(() </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">=&gt;</span><span style="color:#569CD6;font-family:'Menlo';font-size:24px"> &#123;</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">    context</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">fillStyle </span><span style="color:#D4D4D4;font-family:'Menlo';font-size:24px">= </span><span style="color:#CE9178;font-family:'Menlo';font-size:24px">"#5C94FC"</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">;</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">    context</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:24px">fillRect</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">(</span><span style="color:#B5CEA8;font-family:'Menlo';font-size:24px">0</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">, </span><span style="color:#B5CEA8;font-family:'Menlo';font-size:24px">0</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">, </span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">innerWidth</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">, </span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">innerHeight</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">);</span></p><p style="font-size:24px;line-height:28.8px;margin-top:27.2px"><br><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">    for</span><span style="color:#C586C0;font-family:'Menlo';font-size:24px"> (</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">const </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">actor </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">of </span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">actors</span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">) &#123;</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">        actor</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:24px">move</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">();</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">        context</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:24px">drawImage</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">(</span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">actor</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">image</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">, </span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">actor</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">x</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">, </span><span style="color:#4FC1FF;font-family:'Menlo';font-size:24px">actor</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">.</span><span style="color:#9CDCFE;font-family:'Menlo';font-size:24px">y</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">);</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">    &#125;</span></p><p style="font-family:'Menlo';font-size:24px;line-height:28.8px"><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">&#125;, </span><span style="color:#B5CEA8;font-family:'Menlo';font-size:24px">16</span><span style="color:#CCCCCC;font-family:'Menlo';font-size:24px">);</span></p></div>
</div>

<!--
The web exposes a ton of wonderful APIs that we can use to craft incredible experiences. FullScreenMario utilized the then-relative-new “canvas” API, which allows for drawing arbitrary pixels onto a canvas in the page. These dozen lines of code show the core of any video game.
-->

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:72.7px;left:61.16px;top:233.65px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:64.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">The web is great.</span></p></div>
</div>

<!--
That’s awesome. The web is great.
FullScreenMario took advantage of two fantastic properties of browser web apps. These properties allow us to create rich interactive experiences like never before in human technology.
-->

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:225.38px;left:61.16px;top:157.31px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:64.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">Browsers </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">enable “</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">safe</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">” execution of </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">arbitrary code</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px"> on user machines within </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">seconds</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">.</span></p></div>
</div>

<!--
First: web apps allow a rich experience by just clicking a link or typing in a URL. Talk about removing barriers to entry: can you imagine now the days back when if you wanted to install software off the internet you'd have to visit a website, click through menus, download an executable, and walk through an installer? Awful!
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:72.7px;left:61.16px;top:233.65px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:64.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">hi.joshuakgoldberg.com</span></p></div>
</div>

<!--
The web is so good at reducing barriers to entry that we had to scale back a bit in browsers for the sake of users. You used to be able to play audio immediately upon visiting a webpage! I used that in FullScreenMario to tap into nostalgia asap by immediately playing the classic Mario theme. Nowadays you have to get user input before playing audio on a new webpage.You can see a demo on https://hi.joshuakgoldberg.com
Know that if you keep visiting that webpage and clicking Enter, your browser will eventually recognize the webpage as audio-trusted and be able to auto play. Excellent!
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<img class="pptx-shape" src="/media/image8.jpg" alt="Screenshot of fullscreenmario.com in an old Chrome. Instead of the video game, it contains an excerpt from the Nintendo DMCA notice.   See this on the wayback machine from November 2013" style="height:540px;left:0px;top:0px;width:960px">
</div>

<!--
That ease of access, that lack of barriers to entry, is what allowed FullScreenMario to go viral. I tracked 2.68 million unique visitors before Nintendo shut it down with a legal takedown.
FullScreenMario was a pinnacle for me, personally and professionally. I went from being a Cs and Ds student to getting a Cease and Desist from Nintendo (ha). It was how I learned the hard way many of the software design skills I use to this day. For me, it's a microcosm of how technology evolves: we have an idea or a need, we iterate on different solutions, and eventually we get it working.
-->

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:72.7px;left:61.16px;top:233.65px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:64.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">The web is getting better.</span></p></div>
</div>

<!--
That iterative learn-the-hard-way approach is the second amazing property of the web. It's constantly improving at a rate never-before-seen in the history of technology. Never before have so many features from so many companies been worked on simultaneously for a single platform! We live in a golden era of platform innovation.Software ideas that would have taken teams of developers months to prototype a decade ago can be done in a weekend hackathon today.
-->

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-group" data-shape="2"><img class="pptx-shape" src="/media/image9.jpeg" alt="" style="height:169.38px;left:69.68px;top:68.14px;width:233.54px"><svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="61.68 60.14 249.54 185.38" style="height:185.38px;left:61.68px;top:60.14px;width:249.54px"><g transform="translate(69,68) translate(-69,-68)"><rect x="69" y="68" width="233" height="169" fill="url(#grad-s12-1)" stroke="none" /></g></svg><div class="pptx-shape pptx-text" style="height:169.38px;left:69.68px;top:68.14px;width:233.54px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">3D Gaming</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">🎮</span></p></div></div>
<div class="pptx-group" data-shape="3"><img class="pptx-shape" src="/media/image10.png" alt="" style="height:157.15px;left:333.26px;top:104.95px;width:246.03px"><svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="325.26 97.38 262.03 172.72" style="height:172.72px;left:325.26px;top:97.38px;width:262.03px"><g transform="translate(333,104) translate(-333,-104)"><rect x="333" y="105" width="246" height="156" fill="url(#grad-s12-1001)" stroke="none" /></g></svg><div class="pptx-shape pptx-text" style="height:156.72px;left:333.26px;top:105.38px;width:246.03px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Dev Environments</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">👩‍💻</span></p></div></div>
<div class="pptx-group" data-shape="21"><div class="pptx-shape pptx-crop" style="height:193.78px;left:618.57px;top:46.23px;width:271.82px"><img src="/media/image11.jpeg" alt="Let the Games Begin: A New Way to Experience Entertainment on Mobile -  About Netflix" style="height:193.78px;left:0px;position:absolute;top:0px;width:344.5px"></div><div class="pptx-shape pptx-text" style="height:193.07px;left:618.83px;top:46.94px;width:271.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Video Streaming</span></p><p style="font-size:28px;line-height:33.6px;text-align:center"><span style="color:#none;font-size:28px">🍿</span></p></div></div>
<div class="pptx-group" data-shape="4"><img class="pptx-shape" src="/media/image12.jpeg" alt="" style="height:175.54px;left:138.6px;top:281.55px;width:264.5px"><svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="130.6 273.55 280.5 191.54" style="height:191.54px;left:130.6px;top:273.55px;width:280.5px"><g transform="translate(138,281) translate(-138,-281)"><rect x="138" y="281" width="264" height="175" fill="url(#grad-s12-3001)" stroke="none" /></g></svg><div class="pptx-shape pptx-text" style="height:175.54px;left:138.6px;top:281.55px;width:264.5px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Crypto Mining</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">💩</span></p></div></div>
<div class="pptx-group" data-shape="5"><img class="pptx-shape" src="/media/image13.jpeg" alt="" style="height:193.07px;left:508.22px;top:280.85px;width:289.61px"><svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="500.22 273.55 305.61 208.21" style="height:208.21px;left:500.22px;top:273.55px;width:305.61px"><g transform="translate(508,280) translate(-508,-280)"><rect x="508" y="281" width="289" height="192" fill="url(#grad-s12-4001)" stroke="none" /></g></svg><div class="pptx-shape pptx-text" style="height:192.21px;left:508.22px;top:281.55px;width:289.61px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Graphics Processing</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">🎨</span></p></div></div>
</div>

<!--
Think of all the ridiculous apps folks have put in the browser: 3d game engines, full development environments, rich 1080p video streaming, crypto mining (ugh), graphics processing with Photoshop itself… mind-blowing.
“Computer monkeys”: https://www.facebook.com/Computer-Monkeys-120544314715405/
“Photoshop on the web”: https://www.theverge.com/2021/10/26/22738125/adobe-photoshop-illustrator-web-announced
-->

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Demo?!</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Realtime audio &amp; video, at a conference? What could go wrong!?</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:66.64px;left:61.16px;top:236.68px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:49px">bit.ly</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:49px">/</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">wey </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">wey2023</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:55.74px;left:61.16px;top:226.3px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:40px;line-height:48px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:40px">shoutout Sonny &amp; </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:40px">codedex.io</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Tech Specs</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Assembling our ragtag group of APIs</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:66.64px;left:16.6px;top:125.13px;width:200.64px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Aframe</span></p></div></div>
<div class="pptx-shape pptx-text" style="height:84.66px;left:28.01px;top:368.96px;width:255.48px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:44.1px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Next.js</span></p><p style="font-family:'Regular Bold';font-size:35px;line-height:31.5px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px">(React)</span></p></div>
<div v-click="2" class="pptx-group"><div class="pptx-shape pptx-text" style="height:66.64px;left:330.35px;top:205.72px;width:229.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Socket.io</span></p></div></div>
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:197.7px;top:167.53px;transform:rotate(15deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
<div v-click="2" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:197.7px;top:303.16px;transform:rotate(315deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:6.09px;top:256px;transform:rotate(270deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:97.8px;left:656.92px;top:74.38px;width:253.36px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:44.1px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Networked</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Aframe</span></p></div></div>
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:526.88px;top:166.78px;transform:rotate(330deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
<div v-click="2" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:493.88px;top:319.36px;transform:rotate(60deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
<div v-click="1" class="pptx-group"><div class="pptx-shape pptx-text" style="height:66.64px;left:587.92px;top:400.3px;width:112.23px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Koa</span></p></div></div>
<div v-click="3" class="pptx-group"><div class="pptx-shape pptx-text" style="height:66.64px;left:761.25px;top:313.82px;width:185.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">ts</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">-node</span></p></div></div>
<div v-click="3" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:675.64px;top:391.12px;transform:rotate(345deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:32.72px;left:791.19px;top:225.19px;transform:rotate(75deg);width:176.95px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">💙 TypeScript💙</span></p></div></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">The Web Hurts</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Pain is … weakness leaving the ecosystem?</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div v-click="1" class="pptx-group"><div class="pptx-shape pptx-text" style="height:83.61px;left:113.77px;top:288.07px;transform:rotate(45deg);width:179.64px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px;white-space:pre"><p style="font-size:63px;line-height:75.6px"><span style="color:#C8D7FA;font-size:63px">--😡--</span></p></div></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:26.16px;top:205.39px;width:200.64px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">React</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:218.04px;top:401.08px;width:195.58px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Aframe</span></p></div>
<div v-click="2" class="pptx-group"><div class="pptx-shape pptx-text" style="height:83.61px;left:175.6px;top:119.79px;transform:rotate(330deg);width:179.64px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px;white-space:pre"><p style="font-size:63px;line-height:75.6px"><span style="color:#C8D7FA;font-size:63px">--😡--</span></p></div></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:342.27px;top:72.28px;width:301.31px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Web Sockets</span></p></div>
<div v-click="3" class="pptx-group"><div class="pptx-shape pptx-text" style="height:83.61px;left:612.93px;top:141.77px;transform:rotate(45deg);width:179.64px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px;white-space:pre"><p style="font-size:63px;line-height:75.6px"><span style="color:#C8D7FA;font-size:63px">--😡--</span></p></div></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:746.97px;top:246.58px;width:169.42px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Next.js</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:416.88px;top:207.16px;width:195.24px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">WebVR</span></p></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:66.64px;left:416.88px;top:260.71px;width:195.24px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">WebXR</span></p></div></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape" style="border-top:10px solid rgb(192,0,0);height:0px;left:535.68px;top:236.64px;width:57.6px"></div></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:49.68px;left:383.76px;top:278.1px;width:59.04px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'+mn-cs';font-size:35px;line-height:42px"><span style="color:#none;font-family:'+mn-cs';font-size:35px">✨</span></p></div></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:49.68px;left:584.55px;top:255.06px;width:59.04px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'+mn-cs';font-size:35px;line-height:42px"><span style="color:#none;font-family:'+mn-cs';font-size:35px">✨</span></p></div></div>
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:58.16px;left:587.92px;top:306.65px;transform:rotate(345deg);width:72.73px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px;white-space:pre"><p style="font-size:42px;line-height:50.4px"><span style="color:#none;font-size:42px">😡</span></p></div></div>
</div>

---

layout: none
transition: { name: view-transition, duration: 500 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:152.68px;left:61.16px;top:193.66px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:64.8px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">The </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">faster</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px"> a platform is </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">growing</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">,</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">the more </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">painful</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px"> it is to use.</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:124.49px;left:61.16px;top:270px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:51.84px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">The more </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">painful </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">a platform’s growth, the </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">faster</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px"> it is </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">improving</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">.</span></p></div>
<div class="pptx-shape pptx-text" style="height:124.49px;left:61.16px;top:117.32px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:54px;line-height:51.84px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">The </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">faster</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px"> a platform is </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">growing</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">,</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">the more </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">painful</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px"> it is to use.</span></p></div>
<div v-click="1" class="pptx-group"><div class="pptx-shape pptx-text" style="height:65.43px;left:420px;top:382.73px;width:120px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:48px;line-height:57.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">(</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">ish</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">)</span></p></div></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">ES2015</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:-3.25px;top:240.92px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">JavaScript</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:292.39px;top:144.64px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">Babel</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:604.67px;top:143.8px;width:320.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">ESBuild</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">/SWC</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:292.39px;top:350.08px;width:295.33px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">CoffeeScript</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:617.23px;top:347.24px;width:295.33px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">TypeScript</span></p></div>
<div class="pptx-shape pptx-text" style="height:49.68px;left:301.84px;top:245.16px;width:153.53px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">ES2015</span></p></div>
<div class="pptx-shape pptx-text" style="height:41.2px;left:455.37px;top:249.09px;width:132.35px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">ES2016</span></p></div>
<div class="pptx-shape pptx-text" style="height:32.72px;left:587.72px;top:253.33px;width:86.96px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">ES2017</span></p></div>
<div class="pptx-shape pptx-text" style="height:28.48px;left:685.48px;top:255.45px;width:79.41px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:17px;line-height:20.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:17px">ES2018</span></p></div>
<div class="pptx-shape pptx-text" style="height:24.23px;left:768.13px;top:257.57px;width:66.28px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:14px;line-height:16.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:14px">ES2019</span></p></div>
<div class="pptx-shape pptx-text" style="height:82.88px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">JavaScript</span></p></div>
<div class="pptx-shape pptx-text" style="height:21.45px;left:834.41px;top:258.96px;width:62.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:11px;line-height:13.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:11px">ES2020</span></p></div>
<div class="pptx-shape pptx-text" style="height:19.15px;left:891.12px;top:260.11px;width:47.34px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:9px;line-height:10.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:9px">ES2020</span></p></div>
<div class="pptx-shape pptx-text" style="height:17.45px;left:936.33px;top:260.96px;width:47.34px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:8px;line-height:9.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:8px">ES2021</span></p></div>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="215.09 237.52 128.91 64" style="height:64px;left:215.09px;top:237.52px;width:128.91px"><defs><marker id="ah-s22-14-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="247" y1="269" x2="311" y2="269" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s22-14-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="209.63 142.07 185.64 142.71" style="height:142.71px;left:209.63px;top:142.07px;width:185.64px"><defs><marker id="ah-s22-15-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="241" y1="252" x2="362" y2="174" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s22-15-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="212.55 258.29 131.45 152.88" style="height:152.88px;left:212.55px;top:258.29px;width:131.45px"><defs><marker id="ah-s22-16-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="244" y1="290" x2="311" y2="378" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s22-16-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="542.98 347.17 143.69 64" style="height:64px;left:542.98px;top:347.17px;width:143.69px"><defs><marker id="ah-s22-17-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="574" y1="379" x2="653" y2="379" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s22-17-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="463.3 140.88 199.91 64" style="height:64px;left:463.3px;top:140.88px;width:199.91px"><defs><marker id="ah-s22-18-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="495" y1="172" x2="630" y2="172" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s22-18-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="420.96 248.32 70.79 40" style="height:40px;left:420.96px;top:248.32px;width:70.79px"><defs><marker id="ah-s22-19-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="440" y1="268" x2="470" y2="268" stroke="rgb(200,215,250)" stroke-width="3" marker-end="url(#ah-s22-19-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="552.21 248.32 61.76 40" style="height:40px;left:552.21px;top:248.32px;width:61.76px"><defs><marker id="ah-s22-20-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="572" y1="268" x2="593" y2="268" stroke="rgb(200,215,250)" stroke-width="3" marker-end="url(#ah-s22-20-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="649.8 249.52 61.76 40" style="height:40px;left:649.8px;top:249.52px;width:61.76px"><defs><marker id="ah-s22-21-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="669" y1="269" x2="690" y2="269" stroke="rgb(200,215,250)" stroke-width="3" marker-end="url(#ah-s22-21-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="740.41 252.89 49.95 33.6" style="height:33.6px;left:740.41px;top:252.89px;width:49.95px"><defs><marker id="ah-s22-22-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="757" y1="269" x2="773" y2="269" stroke="rgb(200,215,250)" stroke-width="2.2" marker-end="url(#ah-s22-22-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="813.02 255.8 44.35 28" style="height:28px;left:813.02px;top:255.8px;width:44.35px"><defs><marker id="ah-s22-23-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="827" y1="269" x2="843" y2="269" stroke="rgb(200,215,250)" stroke-width="1.5" marker-end="url(#ah-s22-23-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="875.02 257.52 33.63 24" style="height:24px;left:875.02px;top:257.52px;width:33.63px"><defs><marker id="ah-s22-24-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="3" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="887" y1="269" x2="896" y2="269" stroke="rgb(200,215,250)" stroke-width="1" marker-end="url(#ah-s22-24-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="922.55 257.52 33.63 24" style="height:24px;left:922.55px;top:257.52px;width:33.63px"><defs><marker id="ah-s22-25-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="3" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="934" y1="269" x2="943" y2="269" stroke="rgb(200,215,250)" stroke-width="1" marker-end="url(#ah-s22-25-t)" /></svg>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:66.64px;left:26.89px;top:236.68px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Express</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:343.22px;top:236.68px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Koa</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:651.31px;top:236.26px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Fastify</span></p></div>
<div class="pptx-shape pptx-text" style="height:82.88px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Server Frameworks</span></p></div>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="245.63 238 195.18 64" style="height:64px;left:245.63px;top:238px;width:195.18px"><defs><marker id="ah-s23-4-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="277" y1="270" x2="408" y2="270" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s23-4-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="519.19 238 195.18 64" style="height:64px;left:519.19px;top:238px;width:195.18px"><defs><marker id="ah-s23-5-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="551" y1="270" x2="682" y2="270" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s23-5-t)" /></svg>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:66.64px;left:73.02px;top:236.68px;width:181.31px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">On-Site</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:343.22px;top:236.68px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Cloud</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:651.31px;top:236.68px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Edge</span></p></div>
<div class="pptx-shape pptx-text" style="height:82.88px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Server Locations</span></p></div>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="245.63 238 178.92 64" style="height:64px;left:245.63px;top:238px;width:178.92px"><defs><marker id="ah-s24-4-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="277" y1="270" x2="391" y2="270" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s24-4-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="545.19 238 195.18 64" style="height:64px;left:545.19px;top:238px;width:195.18px"><defs><marker id="ah-s24-5-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="577" y1="270" x2="708" y2="270" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s24-5-t)" /></svg>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:126.02px;left:26.89px;top:206.99px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Edge</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">ish</span></p></div>
<div class="pptx-shape pptx-text" style="height:185.39px;left:343.22px;top:177.3px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Cloudflare</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Durable Objects</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:651.31px;top:236.68px;width:273.56px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">PartyKit</span></p></div>
<div class="pptx-shape pptx-text" style="height:82.88px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Web Socket Layers</span></p></div>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="209.33 238 165.89 64" style="height:64px;left:209.33px;top:238px;width:165.89px"><defs><marker id="ah-s25-4-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="241" y1="269" x2="342" y2="269" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s25-4-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="570 238 137.19 64" style="height:64px;left:570px;top:238px;width:137.19px"><defs><marker id="ah-s25-5-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="601" y1="269" x2="674" y2="269" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s25-5-t)" /></svg>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:185.39px;left:61.14px;top:177.3px;width:205.05px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Create</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">React</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">App</span></p></div>
<div class="pptx-shape pptx-text" style="height:109.05px;left:389.64px;top:205.82px;width:180.71px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Next.js </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">(Pages)</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:646.67px;top:114.35px;width:219.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Astro</span></p></div>
<div class="pptx-shape pptx-text" style="height:66.64px;left:646.67px;top:236.68px;width:219.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Remix</span></p></div>
<div class="pptx-shape pptx-text" style="height:109.05px;left:646.67px;top:359px;width:219.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;line-height:58.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">Next.js</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">(App Router)</span></p></div>
<div class="pptx-shape pptx-text" style="height:82.88px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">React Frameworks</span></p></div>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="234.2 238 178.92 64" style="height:64px;left:234.2px;top:238px;width:178.92px"><defs><marker id="ah-s26-6-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="266" y1="270" x2="380" y2="270" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s26-6-t)" /></svg>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="545.19 238 133.48 64" style="height:64px;left:545.19px;top:238px;width:133.48px"><defs><marker id="ah-s26-7-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="577" y1="270" x2="646" y2="270" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s26-7-t)" /></svg>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Hope for the Future</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Or: justification for our failed experiments…</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div v-click="3" class="pptx-group"><div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">TypeScript</span></p></div></div>
<div class="pptx-group" data-shape="50"><div class="pptx-shape pptx-text" style="height:49.68px;left:28.68px;top:433.48px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:right"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">Primitives</span></p></div><div class="pptx-shape pptx-text" style="height:49.68px;left:28.68px;top:305.64px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:right"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">Glue</span></p></div><div class="pptx-shape pptx-text" style="height:49.68px;left:28.68px;top:177.8px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:right"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">Scale</span></p></div></div>
<div class="pptx-group" data-shape="12"><div class="pptx-shape pptx-text" style="height:49.68px;left:257.04px;top:56.84px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">Frontend</span></p></div><div class="pptx-shape pptx-text" style="height:49.68px;left:480px;top:56.84px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">Backend</span></p></div><div class="pptx-shape pptx-text" style="height:49.68px;left:702.96px;top:56.84px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">Building</span></p></div></div>
<div v-click="1" class="pptx-group"><div class="pptx-group" data-shape="5"><div class="pptx-shape pptx-text" style="height:32.72px;left:321.33px;top:434.66px;width:141.24px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Components</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:253.88px;top:424.19px;width:76.69px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Hooks</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:283.74px;top:458.71px;width:98.99px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Context</span></p></div></div></div>
<div v-click="2" class="pptx-group"><div class="pptx-group" data-shape="6"><div class="pptx-shape pptx-text" style="height:32.72px;left:519.6px;top:425.63px;width:152.41px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Relational Data</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:471.75px;top:453.25px;width:110.73px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Endpoints</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:571.77px;top:457.57px;width:100.24px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Caching</span></p></div></div></div>
<div v-click="3" class="pptx-group"><div class="pptx-group" data-shape="7"><div class="pptx-shape pptx-text" style="height:32.72px;left:718.66px;top:426.32px;width:152.41px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">TypeScript</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:696.42px;top:457.14px;width:108.24px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Packages</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:795.18px;top:455.96px;width:98.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">ES20??</span></p></div></div></div>
<div v-click="7" class="pptx-group"><div class="pptx-group" data-shape="4"><div class="pptx-shape pptx-text" style="height:32.72px;left:688.07px;top:305.64px;width:157.74px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">ISR/SSR/SSG</span></p></div><div class="pptx-shape pptx-text" style="height:32.72px;left:742.4px;top:334.43px;width:157.74px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Edge Functions</span></p></div></div></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:79.37px;left:266.02px;top:307.7px;width:166.48px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Site Frameworks</span></p><p style="font-family:'Regular Bold';font-size:17px;line-height:20.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">(Astro, </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">Next.js</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">)</span></p></div></div>
<div v-click="6" class="pptx-group"><div class="pptx-group" data-shape="51"><div class="pptx-shape pptx-text" style="height:32.72px;left:597.44px;top:298.74px;width:71.79px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">ORMs</span></p></div><div class="pptx-shape pptx-text" style="height:53.92px;left:474.31px;top:311.96px;width:152.51px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">API Layers</span></p><p style="font-family:'Regular Bold';font-size:17px;line-height:20.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">(</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">GraphQL</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">, </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">tRPC</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">)</span></p></div></div></div>
<div v-click="8" class="pptx-group"><div class="pptx-shape pptx-text" style="height:53.92px;left:718.56px;top:175.78px;width:152.51px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Edge Deploys</span></p><p style="font-family:'Regular Bold';font-size:17px;line-height:20.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">(Netlify, </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">Vercel</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">)</span></p></div></div>
<div v-click="10" class="pptx-group"><div class="pptx-shape pptx-text" style="height:53.92px;left:299.73px;top:175.68px;width:184.44px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Site Generators?</span></p><p style="font-family:'Regular Bold';font-size:17px;line-height:20.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">(???)</span></p></div></div>
<div v-click="9" class="pptx-group"><div class="pptx-shape pptx-text" style="height:53.92px;left:463.61px;top:175.68px;width:232.81px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:25.2px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Backend Frameworks</span></p><p style="font-family:'Regular Bold';font-size:17px;line-height:20.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">(</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">Fastify</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:17px">, Nest, ???)</span></p></div></div>
<div v-click="11" class="pptx-group"><svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="241.88 349.62 451.5 97.54" style="height:97.54px;left:241.88px;top:349.62px;width:451.5px"><path d="M253 379.3L582.2 379.3L582.2 361L680 397.5L582.2 434L582.2 415.8L253 415.8Z" fill="rgb(47,84,149)" stroke="rgb(68,114,196)" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" /></svg><div class="pptx-shape pptx-text" style="height:73.54px;left:253.88px;top:361.62px;width:427.5px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:18px;line-height:21.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:18px">Trend: Cleaner, More Expressive Stacks</span></p></div></div>
<div v-click="12" class="pptx-group"><svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="420.5 215.71 451.5 97.54" style="height:97.54px;left:420.5px;top:215.71px;width:451.5px"><path d="M432 245.3L761.2 245.3L761.2 227L859 263.5L761.2 300L761.2 281.8L432 281.8Z" fill="rgb(47,84,149)" stroke="rgb(68,114,196)" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" /></svg><div class="pptx-shape pptx-text" style="height:73.54px;left:432.5px;top:227.71px;width:427.5px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:18px;line-height:21.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:18px">Trend: Cleaner, More Expressive Deploys</span></p></div></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Decade Predictions</span></p></div>
<img class="pptx-shape" src="/media/image14.png" alt="&quot;Fuller Stack&quot; Photoshop of a Fuller House promo picture" style="height:270.01px;left:585.9px;top:166.32px;width:259.06px">
<div class="pptx-group" data-shape="6"><div class="pptx-shape pptx-crop" style="height:268.81px;left:115.03px;top:166.32px;width:259.06px"><img src="/media/image15.jpeg" alt="2001: A Space Odyssey – 5 Ways The Opening Scene Is Perfect (&amp;amp; 5 The Ending  Is)" style="height:268.81px;left:-130.33px;position:absolute;top:0px;width:538.19px"></div><div class="pptx-shape pptx-text" style="height:46.33px;left:115.03px;top:388.8px;width:259.06px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Futura Bk';font-size:23px;line-height:24.84px;text-align:center"><span style="color:#FFFFFF;font-family:'Futura Bk';font-size:23px">Better Primitives</span></p></div></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Fin</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">What have we talked about today?</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Closing Thoughts</span></p></div>
<div class="pptx-shape pptx-text" style="height:244.77px;left:93.33px;top:169.83px;width:773.33px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p v-click="1" style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">It’s natural to miss the better, simpler days.</span></p><p style="font-size:28px;line-height:33.6px;text-align:center"><br></p><p v-click="2" style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Don’t forget the problems from those days.</span></p><p style="font-size:28px;line-height:33.6px;text-align:center"><br></p><p v-click="3" style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">We’re all building and learning better over time.</span></p><p style="font-size:28px;line-height:33.6px;text-align:center"><br></p><p v-click="4" style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">What was difficult 10 years ago may be much less so today.</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:300.74px;left:207.92px;top:133.13px;width:660.8px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">TypeScript</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">typescriptlang.org</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">React</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">reactjs.dev</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Next.js</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">nextjs.org</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Aframe</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">aframe.io</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Networked </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Aframe</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">github.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">/networked-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">aframe</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Socket.io</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">socket.io</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:42px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Koa</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">koajs.com</span></p></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Related Technical Resources</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">About Me</span></p></div>
<img class="pptx-shape" src="/media/image16.jpeg" alt="Josh smiling " style="height:266px;left:580.8px;top:168.28px;width:266px">
<div class="pptx-shape pptx-text" style="height:262.12px;left:66px;top:168.28px;width:491.22px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">Open Source Developer</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">I focus on static analysis tooling around JavaScript &amp; TypeScript.</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Author, Learning TypeScript (O’Reilly).</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Previously </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Codecademy</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">, after Microsoft. Now a consultant and maintainer.</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 700 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">Support Me 💙</span></p></div>
<div class="pptx-group" data-shape="3"><div class="pptx-shape pptx-text" style="height:191.6px;left:429.35px;top:205.26px;width:372.33px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">learningtypescript.com</span><br><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">github.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">/</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">sponsors/</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">JoshuaKGoldberg</span></p></div><img class="pptx-shape" src="/media/image17.png" alt="" style="height:324px;left:172.62px;top:145.13px;width:229.5px"></div>
<div class="pptx-shape pptx-text" style="height:116.06px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Support Me 💙</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 250 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:191.6px;left:480px;top:174.2px;width:321.71px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">typescript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">eslint.io</span></p><p style="font-size:28px;font-weight:700;line-height:33.6px;margin-top:32.4px"><br><span style="font-size:28px;font-weight:700">open-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">collective.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">/</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:32px;font-weight:700">typescript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:32px;font-weight:700">eslint</span></p></div>
<img class="pptx-shape" src="/media/image19.svg" alt="typescript-eslint logo" style="height:282.9px;left:153.08px;top:144.85px;width:282.9px">
<div class="pptx-shape pptx-text" style="height:116.06px;left:0px;top:0px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Support Us 💜</span></p></div>
</div>

---

layout: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:263.25px;left:120px;top:138.38px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;font-weight:700;line-height:88.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px;font-weight:700">Thank you</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px;font-weight:700">!</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px;font-weight:700">💖</span></p></div>
</div>

<!--
Thanks very much to the Wey Wey Web organizers for setting this up! Again, you can reach me online on most platforms as JoshuaKGoldberg.
Enjoy the rest of the conference!
-->
