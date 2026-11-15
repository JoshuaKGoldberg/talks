---
theme: none
title: "Statically Detecting React App Bugs with TypeScript and ESLint"
aspectRatio: 16/9
canvasWidth: 960
colorSchema: light
fonts:
  provider: none
layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<img class="pptx-shape" src="/media/image1.jpeg" alt="Josh smiling " style="height:266px;left:580.8px;top:168.28px;width:266px">
<div class="pptx-shape pptx-text" style="height:262.12px;left:66px;top:168.28px;width:491.22px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">Open Source Maintainer</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">I focus on static analysis tooling around JavaScript &amp; TypeScript.</span></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Most notably, TypeScript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">ESLint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">.</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Author, Learning TypeScript (O’Reilly).</span></p></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">👋, I’m Josh</span></p></div>
</div>

<!--
Hi everyone! I’m Josh – I’m a full time independent open source maintainer. I focus on static analysis tooling around JavaScript & TypeScript – most notably, TypeScript-ESLint, the tooling that allows you to run ESLint on TypeScript code.
I’m also the author of the recent Learning TypeScript book, published by O’Reilly.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:84.82px;left:61.16px;top:227.59px;width:837.68px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:70px;line-height:84px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:70px">😡</span></p></div>
</div>

<!--
And React Day Berlin, I've got anger in me. I’ve got a lot of problems with the industry. And now you're going to hear about it.
As software developers, we've all resigned ourselves to the fact that some of our friends and family are never going to understand what we do. We don't like it, we disagree with their unwillingness to learn, but some people just cannot or will not understand computers.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:159.95px;left:150.3px;top:155.23px;width:659.41px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:42px">“We don’t know what types code is but we’re very proud of Josh and are sure it will be a lovely book.”</span></p></div>
<div class="pptx-shape pptx-text" style="height:41.2px;left:61.16px;top:16.51px;width:837.68px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">😡</span></p></div>
<div class="pptx-shape pptx-text" style="height:49.68px;left:150.3px;top:322.26px;width:659.41px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:right"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px">- Frances and Mark Goldberg</span></p></div>
<div v-click="1" class="pptx-group"><img class="pptx-shape" src="/media/image2.png" alt="" style="height:324px;left:365.25px;top:108px;width:229.5px"></div>
</div>

<!--
Here's an actual quote from my very loving parents about the Learning TypeScript book I wrote.
“We don’t know what types code is but we’re very proud of Josh and are sure it will be a lovely book.”
(Learning TypeScript! available on Amazon, O’Reilly, and various other retailers - buy it today! Rate it five stars!)
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:472.8px;font-family:'Regular Bold';font-size:20px;line-height:21.6px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">Releasing the Refactor</span></p></div>
<div class="pptx-shape pptx-text" style="height:65.43px;left:61.16px;top:237.28px;width:837.68px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:42px">Coding can be </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px">falsely intimidating</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:54px">.</span></p></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:-104.38px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Releasing the Refactor</span></p></div>
<div v-click="1" class="pptx-group"><div class="pptx-shape pptx-text" style="height:50.89px;left:37.39px;top:88.35px;transform:rotate(345deg);width:442.46px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFCCCC;font-family:'Regular Bold';font-size:42px">changing contexts</span></p></div></div>
<div v-click="2" class="pptx-group"><div class="pptx-shape pptx-text" style="height:50.89px;left:469px;top:400.76px;transform:rotate(15deg);width:442.46px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFCCCC;font-family:'Regular Bold';font-size:42px">bad explanations</span></p></div></div>
</div>

<!--
The issue is not that the concept of using a computer is unusually difficult on its own - it's that it’s falsely intimidating. Many people who aren’t tech capable find it hard to imagine using computers, let alone learning to code, and so are intimidated even more.
A big source of the problem is that many people grew up accustomed to computers being intimidating, difficult-to-use contraptions. And now we're yelling at them that they should know what a start menu is, to shoot us an email, to learn to code - what on earth!?
The problem is made worse because many developers do not excel at explaining technical topics. A nontechnical person can only suffer through so many annoyingly convoluted complex explanations or software engineering before they decide they're never going to understand it.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:117.54px;left:0px;top:164.58px;width:960px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:56px;line-height:67.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:56px">Static analysis</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:56px">(tooling that analyzes your code without running it)</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:85.71px;top:282.12px;width:788.57px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p v-click="1" style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">doesn’t have to be intimidating.</span></p></div>
</div>

<!--
In parallel, many software developers experience that same false intimidation around the subject of static analysis: tooling that analyzes your code without running it.
Tooling that for years many people thought was just in the purview of academics or hardcore language engineers, and when they tried to look at resources about them were turned away because many resources were academic or language-theoretical rather than introductory and practical.
No more! The static analysis landscape today -especially for modern TypeScript codebases- is much more approachable than it’s ever been. I think you will find that the concepts I'm going to show you today are very relevant and applicable for day-to-day work and you will perhaps even enjoy using them when you get back to coding.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:117.54px;left:0px;top:164.58px;width:960px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:56px;line-height:67.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:56px">Static analysis</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:56px">(tooling that analyzes your code without running it)</span></p></div>
<div class="pptx-shape pptx-text" style="height:58.16px;left:85.71px;top:282.12px;width:788.57px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">is awesome.</span></p></div>
</div>

<!--
There are a bunch of fantastic things you can do with static analysis - such from detecting unnecessary, unused code, ranging to finding likely application bugs - before a single line of app code is run.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-crop" style="height:176.49px;left:731.02px;top:320.01px;width:177.23px"><img src="/media/image3.png" alt="QR code linking to https://hi.joshuakgoldberg.com" style="height:185.64px;left:-6.34px;position:absolute;top:-3.72px;width:192.49px"></div>
<div class="pptx-shape pptx-crop" style="height:176.49px;left:54.06px;top:321.01px;width:177.23px"><img src="/media/image3.png" alt="QR code linking to https://hi.joshuakgoldberg.com" style="height:185.64px;left:-6.34px;position:absolute;top:-3.72px;width:192.49px"></div>
<div class="pptx-shape pptx-text" style="height:175.25px;left:120px;top:321.25px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:37.8px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Josh Goldberg</span></p></div>
<div class="pptx-shape pptx-text" style="height:320.01px;left:51.75px;top:0px;width:856.5px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:420.8px;font-family:'Regular Bold';font-size:60px;line-height:72px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Statically Detecting React App Bugs with TypeScript and </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">ESLint</span></p></div>
</div>

<!--
This is Statically Detecting React App Bugs with TypeScript and ESLint.
I’m going to show you how combining ESLint and TypeScript allows for detecting entire swathes of application bugs, in particular around broken asynchronous code - before your app mysteriously breaks only for some users.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:135.37px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:108px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">TypeScript 💙 </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">ESLint</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:270px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;line-height:37.8px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px">A match made in static analysis heaven.</span></p></div>
</div>

<!--
Let’s establish some context. Why do we want to level up ESLint rules with TypeScript?
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:253.45px;left:101.71px;top:143.27px;width:756.57px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px;font-weight:700">ESLint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700"> sees only the </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px;font-weight:700">raw syntax </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">of your code.</span></p><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:105px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px;font-weight:700">TypeScript </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px;font-weight:700">understands</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700"> what that code </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:35px;font-weight:700">means</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">.</span></p></div>
</div>

<!--
Because ESLint only sees the raw syntax of your code. It can check for rudimentary issues such as unused variables or violations of naming conventions, but it doesn’t have a deep understanding of your code.
TypeScript, on the other hand, understands what your code means. It knows what types things are, which can power your lint rules to make much more informed decisions.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">🤔</span></p></div></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Is This Safe?</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:219.35px;top:143.75px;width:521.3px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#569CD6;font-family:'Menlo';font-size:18px">function </span><span style="color:#DCDCAA;font-family:'Menlo';font-size:18px">MyButton</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">(&#123; </span><span style="color:#9CDCFE;font-family:'Menlo';font-size:18px">action</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">, </span><span style="color:#9CDCFE;font-family:'Menlo';font-size:18px">children</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px"> &#125;) &#123;</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#569CD6;font-family:'Menlo';font-size:18px">    const </span><span style="color:#DCDCAA;font-family:'Menlo';font-size:18px">onClick</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px"> = </span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">async</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px"> () </span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">=&gt;</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px"> &#123;</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#9CDCFE;font-family:'Menlo';font-size:18px">        console</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:18px">log</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">(</span><span style="color:#CE9178;font-family:'Menlo';font-size:18px">"Starting..."</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">);</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#C586C0;font-family:'Menlo';font-size:18px">        await </span><span style="color:#DCDCAA;font-family:'Menlo';font-size:18px">action</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">();</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#9CDCFE;font-family:'Menlo';font-size:18px">        console</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">.</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:18px">log</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">(</span><span style="color:#CE9178;font-family:'Menlo';font-size:18px">"Done."</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">);</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">    &#125;;</span></p><p style="font-size:20px;line-height:24px"><br><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">    return</span><span style="color:#C586C0;font-family:'Menlo';font-size:18px"> (</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#808080;font-family:'Menlo';font-size:18px">         &lt;</span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">button </span><span style="color:#9CDCFE;font-family:'Menlo';font-size:18px">onClick</span><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">=</span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">&#123;</span><span style="color:#DCDCAA;font-family:'Menlo';font-size:18px">onClick</span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">&#125;</span><span style="color:#808080;font-family:'Menlo';font-size:18px">&gt;</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#569CD6;font-family:'Menlo';font-size:18px">            &#123;</span><span style="color:#9CDCFE;font-family:'Menlo';font-size:18px">children</span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">&#125;</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#808080;font-family:'Menlo';font-size:18px">        &lt;/</span><span style="color:#569CD6;font-family:'Menlo';font-size:18px">button</span><span style="color:#808080;font-family:'Menlo';font-size:18px">&gt;</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">    );</span></p><p style="font-family:'Menlo';font-size:18px;line-height:21.6px"><span style="color:#D4D4D4;font-family:'Menlo';font-size:18px">&#125;</span></p></div>
<div v-click="1" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:87.15px;top:207.72px;transform:rotate(347.84deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="5" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:689.82px;top:64.23px;transform:rotate(30.81deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="4" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:182.58px;top:65.21px;transform:rotate(12.25deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="3" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:651.85px;top:325.74px;transform:rotate(345.93deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="9" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:49.31px;top:418.91px;transform:rotate(24.79deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="2" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:838.73px;top:418.91px;transform:rotate(77.33deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="7" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:-12.33px;top:21.79px;transform:rotate(166.46deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="10" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:860.22px;top:121.93px;transform:rotate(205.98deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="8" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:467.65px;top:425.37px;transform:rotate(288.22deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
<div v-click="6" class="pptx-group"><div class="pptx-shape pptx-text" style="height:92.09px;left:802.59px;top:245.34px;transform:rotate(234.9deg);width:110.55px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:70px;line-height:84px;text-align:center"><span style="color:#none;font-size:70px">🤔</span></p></div></div>
</div>

<!--
I’ll give you an example of where TypeScript really shines. I present to you an example MyButton component, trimmed down to show just its action and children props. That action prop is meant to be used for a function that’s called between two console logs.
Let’s play one of my favorite programming games: “is this safe?”
At first glance, the code looks like it should be fine. Presumably action is an asynchronous function that’s always passed in as a prop. Nothing in this component alone would indicate to us that there are any issues.
But! Without TypeScript’s knowledge we have no way of linting about a plethora of potential pitfalls:
Maybe action isn’t always provided
Maybe if action is provided it’s a non-async function, so it’s wasteful to convert its flow to a Promise
Maybe action is meant to take in arguments
Maybe we want to explicitly handle rejected Promises
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Type Checking!</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:408px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">TypeScript parses your full project to understand potential object types.</span></p><p style="font-size:28px;line-height:30.24px;margin-top:10px"><br></p><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">These types are available as an API for </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">ESLint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px"> rules via the </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">eslint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px"> plugin.</span></p></div>
<img class="pptx-shape" src="/media/image4.gif" alt="A person wearing a garment  Description automatically generated with low confidence" style="height:342.62px;left:518.69px;top:143.75px;width:342.62px">
</div>

<!--
However, because TypeScript has a “type system” understanding of the objects in your code, and can infer their possible values from how they’re created, it would, in fact, know whether the code is safe.
TypeScript’s type system is an incredibly powerful tool for static analysis, and because it’s programmatically available via APIs, we can use it to level up our lint rules.
Goku: https://giphy.com/gifs/super-saiyan-UBB6f0hKhlShy
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:123.6px;left:201.52px;top:208.2px;width:556.97px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">&#123;</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "parser"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: </span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">/parser"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "plugins"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: [</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">]</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">&#125;</span></p></div>
<div class="pptx-shape pptx-text" style="height:31.5px;left:5.09px;top:38.19px;width:949.82px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:20px;font-weight:700;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">npm </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">i </span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">@typescript-</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">/parser @typescript-</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">/</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">-plugin </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">--save-dev</span></p></div>
</div>

<!--
If you're already running ESLint on your TypeScript code, it's likely you've done something like this slide's config changes.
First you installed the @typescript-eslint/parser package, which allows ESLint to read in TypeScript syntax, and you installed the @typescript-eslint/eslint-plugin package, which adds lint rules tailored to TypeScript code.
Then in your ESLint config, you told ESLint to parse code with our parser, and loaded in the list of added lint rules by enabling the @typescript-eslint plugin.
If all this is new to you, then fun fact: this is how you get ESLint to run on TypeScript code!
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:239.92px;left:187.45px;top:150.04px;width:585.1px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">&#123;</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "extends"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: [</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#CE9178;font-family:'Consolas';font-size:24px">    "</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint:recommended</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#CE9178;font-family:'Consolas';font-size:24px">    "plugin:@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">/recommended"</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">  ],</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "parser"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: </span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">/parser"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "plugins"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: [</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">]</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">&#125;</span></p></div>
<div class="pptx-shape pptx-text" style="height:31.5px;left:5.09px;top:38.19px;width:949.82px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:20px;font-weight:700;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">npm </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">i </span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">@typescript-</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">/parser @typescript-</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">/</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">-plugin </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">--save-dev</span></p></div>
</div>

<!--
For most projects, we do recommend using our recommended rule sets – they enable a good set of unopionated rules that are applicable to almost all projects.
You can extend from the core Eslint set of recommended rules, then add our recommended rules on top of them.
Note that we don’t include type checked rules (rules that use the full power of TypeScript’s type checker) in the base recommended rule configs, because asking TypeScript for type information takes longer.
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:356.25px;left:14.9px;top:91.88px;width:930.21px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">&#123;</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "extends"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: [</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#CE9178;font-family:'Consolas';font-size:24px">      "</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint:recommended</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#CE9178;font-family:'Consolas';font-size:24px">      "plugin:@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">/recommended"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#CE9178;font-family:'Consolas';font-size:24px">      "plugin:@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">/recommended-requiring-type-checking"</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">  ],</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "parser"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: </span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">/parser"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">parserOptions</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: &#123;</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">      "project"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: </span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"./</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">tsconfig.json</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">  &#125;,</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:24px">  "plugins"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">: [</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"@typescript-</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">eslint</span><span style="color:#CE9178;font-family:'Consolas';font-size:24px">"</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">]</span></p><p style="font-family:'Consolas';font-size:24px;line-height:28.8px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:24px">&#125;</span></p></div>
<div class="pptx-shape pptx-text" style="height:31.5px;left:5.09px;top:38.19px;width:949.82px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:20px;font-weight:700;line-height:24px;text-align:center"><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">npm </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">i </span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">@typescript-</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">/parser @typescript-</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">/</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">eslint</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:20px;font-weight:700">-plugin </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">--save-dev</span></p></div>
</div>

<!--
Those rules are enabled in our recommended-requiring-type-checking config. And in order to use them, we ask that you specify parserOptions.project as a path to your TSConfig.
All right, I’m done showing you config shenanigans. Let’s look at a demo!
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:195.09px;left:61.16px;top:172.46px;width:837.68px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:42px">github.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:42px">/</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">JoshuaKGoldberg</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:42px">/</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:42px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">eslint</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">-react-demo</span></p><p style="font-size:42px;line-height:50.4px;text-align:center"><br></p><p style="font-family:'Regular Bold';font-size:35px;line-height:42px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px">typescript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px">eslint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px">-react-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px">demo.vercel.app</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:21.6px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">@typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:20px">eslint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">/</span></p></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Consolas';font-size:49px;font-weight:700;line-height:52.92px"><span style="color:#FFFFFF;font-family:'Consolas';font-size:49px;font-weight:700">await-</span><span style="color:#FFFFFF;font-family:'Consolas';font-size:49px;font-weight:700">thenable</span></p></div>
<div class="pptx-shape pptx-text" style="height:31.73px;left:66px;top:24.27px;width:239.45px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:15px;line-height:16.2px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">@typescript-</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">eslint</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">/</span></p></div>
<div class="pptx-shape pptx-text" style="height:295.2px;left:66px;top:191.17px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">eslint.io</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">/rules/await-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">thenable</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">“If the </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:28px;font-weight:700">await</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px"> keyword is used on a value that is not a </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:28px;font-weight:700">Thenable</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">, the value is directly resolved immediately. While doing so is valid JavaScript, it is often a programmer error."</span><br></p><p style="font-size:28px;line-height:33.6px;margin-top:10px"><br></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:21.6px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">@typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:20px">eslint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">/</span></p></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Consolas';font-size:49px;font-weight:700;line-height:52.92px"><span style="color:#FFFFFF;font-family:'Consolas';font-size:49px;font-weight:700">no-floating-promises</span></p></div>
<div class="pptx-shape pptx-text" style="height:31.73px;left:66px;top:24.27px;width:239.45px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:15px;line-height:16.2px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">@typescript-</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">eslint</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">/</span></p></div>
<div class="pptx-shape pptx-text" style="height:209.38px;left:66px;top:191.17px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">eslint.io</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">/rules/no-floating-promises</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">“A "floating" Promise is one that is created without any code set up to handle any errors it might throw. Floating Promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections, and more.”</span></p></div>
<img class="pptx-shape" src="/media/image5.gif" alt="Pennywise the clown from IT creepily poking its head out above a dark pool of water" style="height:147.18px;left:11.64px;top:388.55px;width:209.41px">
</div>

<!--
Pennywise the Clown: https://giphy.com/gifs/it-movie-scary-clown-pennywise-the-3ov9k9kmfD1b80NJ2o
-->

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:31.5px;left:0px;top:486.38px;width:960px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:20px;line-height:21.6px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">@typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:20px">eslint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">/</span></p></div>
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Consolas';font-size:49px;font-weight:700;line-height:52.92px"><span style="color:#FFFFFF;font-family:'Consolas';font-size:49px;font-weight:700">no-misused-promises</span></p></div>
<div class="pptx-shape pptx-text" style="height:31.73px;left:66px;top:24.27px;width:239.45px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:15px;line-height:16.2px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">@typescript-</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">eslint</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:15px">/</span></p></div>
<div class="pptx-shape pptx-text" style="height:198.21px;left:66px;top:191.17px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">eslint.io</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">/rules/no-misused-promises</span></p><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">“This rule forbids providing Promises to logical locations such as if statements in places where the TypeScript compiler allows them but they are not handled </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">properly.”</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:50.89px;left:61.16px;top:244.55px;width:837.68px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:42px;line-height:50.4px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:42px">Fin</span></p></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Resources</span></p></div>
<div class="pptx-shape pptx-text" style="height:159.7px;left:80.69px;top:210.46px;width:798.62px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#FFFFFF;list-style-type:'• ';margin-left:40.5px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">eslint.org</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#FFFFFF;list-style-type:'• ';margin-left:40.5px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">eslint.io</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:40.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">github.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">/</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">JoshuaKGoldberg</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">/</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">typescript-</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">eslint</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">-react-demo</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:76.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">typescript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">eslint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">-react-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">demo.vercel.app</span></li></ul></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Support Me 💙</span></p></div>
<div class="pptx-group" data-shape="3"><div class="pptx-shape pptx-text" style="height:191.6px;left:429.35px;top:205.26px;width:372.33px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">learningtypescript.com</span><br><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">github.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">/</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">sponsors/</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">JoshuaKGoldberg</span></p></div><img class="pptx-shape" src="/media/image2.png" alt="" style="height:324px;left:172.62px;top:145.13px;width:229.5px"></div>
</div>

---

layout: none
transition: { name: fade, duration: 350 }
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Support Us 💜</span></p></div>
<div class="pptx-group" data-shape="8"><div class="pptx-shape pptx-text" style="height:191.6px;left:480px;top:205.39px;width:321.71px;justify-content:center;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:42px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">typescript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">eslint.io</span></p><p style="font-size:28px;font-weight:700;line-height:33.6px;margin-top:32.4px"><br><span style="font-size:28px;font-weight:700">open-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">collective.com</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">/</span><br><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:32px;font-weight:700">typescript-</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:32px;font-weight:700">eslint</span></p></div><img class="pptx-shape" src="/media/image6.png" alt="" style="height:268.64px;left:153.08px;top:176.04px;width:268.64px"></div>
</div>

---

layout: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:263.25px;left:120px;top:138.38px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:49px;font-weight:700;line-height:88.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px;font-weight:700">Thank you</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px;font-weight:700">!</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:49px;font-weight:700">💖</span></p></div>
</div>

<!--
Either way, thank you for watching, and thanks very much to the conference organizers for setting this up! Again, you can reach me on Twitter at JoshuaKGoldberg.
Enjoy the rest of the conference! Bye!
-->
