---
theme: none
title: "Stories and Strategies from Converting to TypeScript"
aspectRatio: 16/9
canvasWidth: 960
colorSchema: light
fonts:
  provider: none
layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-crop" style="height:176.49px;left:731.02px;top:320.01px;width:177.23px"><img src="/media/image1.png" alt="" style="height:185.64px;left:-6.34px;position:absolute;top:-3.72px;width:192.49px"></div>
<div class="pptx-shape pptx-crop" style="height:176.49px;left:54.06px;top:321.01px;width:177.23px"><img src="/media/image1.png" alt="" style="height:185.64px;left:-6.34px;position:absolute;top:-3.72px;width:192.49px"></div>
<div class="pptx-shape pptx-text" style="height:321.25px;left:120px;top:0px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:352.8px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Stories </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">and</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px"> Strategies</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">from</span><br><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">Converting </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">to</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px"> TypeScript</span></p></div>
<div class="pptx-shape pptx-text" style="height:175.25px;left:120px;top:321.25px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:35px;font-weight:700;line-height:37.8px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:35px;font-weight:700">Josh Goldberg</span></p></div>
</div>

<!--
I’ll admit, the name is a little long. I didn’t think of the catchier “Converting Codecademy to TypeScript” until the conference folks had already locked in the title… ah well.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:529.06px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">I’m Josh </span><span style="color:#B3C6E7;font-family:'Regular Bold';font-size:44px">(hi!)</span></p></div>
<div class="pptx-shape pptx-text" style="height:138.25px;left:66px;top:143.75px;width:673.76px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:26px;line-height:28.08px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:26px">From upstate New York</span></p><p style="font-family:'Regular Bold';font-size:26px;line-height:28.08px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:26px">Frontend dev @ Codecademy; prev. Microsoft</span></p><p style="font-family:'Regular Bold';font-size:26px;line-height:28.08px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:26px">Cat dad</span></p></div>
<img class="pptx-shape" src="/media/image2.jpeg" alt="Happy cat getting its head scratched in front of a laptop with code on the screen." style="height:234.26px;left:315.62px;top:300.16px;width:312.34px">
<img class="pptx-shape" src="/media/image3.png" alt="My cat Luci laying on a carpet" style="height:215.17px;left:655.49px;top:262.78px;width:286.97px">
<div class="pptx-shape pptx-crop" style="height:215.23px;left:643.76px;top:25.33px;width:286.97px"><img src="/media/image4.jpeg" alt="Black cat sitting on a chair" style="height:253.59px;left:0px;position:absolute;top:-9.34px;width:338.12px"></div>
<div class="pptx-shape pptx-crop" style="height:221.9px;left:0px;top:306.34px;width:288.09px"><img src="/media/image5.png" alt="Black cat licking another black cat" style="height:221.9px;left:-60.46px;position:absolute;top:0px;width:404.69px"></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:130.37px;left:120px;top:204.81px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:29px;font-weight:700;line-height:52.2px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:29px;font-weight:700">Slide notes, alt texts, and attributions:</span></p><p style="font-family:'Regular Bold';font-size:23px;font-weight:700;line-height:41.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:23px;font-weight:700">joshuakgoldberg.com</span></p></div>
</div>

<!--
You can follow along at home with the slide notes linked on my site, joshuakgoldberg.com. This presentation includes many looped animated images; if those are distracting for you, I’d recommend viewing in parallel with the PowerPoint viewer online so you can pause them.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Agenda</span></p></div>
<div class="pptx-shape pptx-text" style="height:200.34px;left:328.96px;top:207.77px;width:345.67px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><ol><li v-click="1" style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:decimal;margin-left:40.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Context</span></li><li v-click="2" style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:decimal;margin-left:40.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Making Decisions</span></li><li v-click="3" style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:decimal;margin-left:40.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Knowledge Sharing</span></li><li v-click="4" style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:decimal;margin-left:40.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Technical Details</span></li><li v-click="5" style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:decimal;margin-left:40.5px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Learnings</span></li></ol></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Context</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Where were we before TypeScript?</span></p></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:126px;left:66.13px;top:36px;width:309.62px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:48px;line-height:51.84px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:48px">Codecademy </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:39px">circa early 2019</span></p></div>
<div class="pptx-shape pptx-text" style="height:244.84px;left:66.13px;top:217.29px;width:309.62px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Main frontend app consisting of ~2,000 files of React + Redux.</span></p><p style="font-size:21px;line-height:22.68px;margin-top:10px"><br></p><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">A few dozen more files in a separate design system implementation.</span></p><p style="font-size:21px;line-height:22.68px;margin-top:10px"><br></p><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Most team members had only vaguely heard of TypeScript.</span></p></div>
<div class="pptx-shape pptx-crop" style="height:383px;left:408.13px;top:78.5px;width:551.87px"><img src="/media/image6.png" alt="" style="height:383px;left:0px;position:absolute;top:0px;width:620.75px"></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:266.02px;left:289.91px;top:136.99px;width:380.18px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">~20 engineers total</span></p><p style="font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><br></p><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Minimal prior TypeScript experience</span></p><p style="font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><br></p><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:21px">Ongoing feature &amp; bugfix work</span></p><p style="font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><br></p><p style="font-family:'Regular Bold';font-size:21px;line-height:22.68px;margin-top:10px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:21px">How did we do it?</span></p></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Making Decisions</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">How do you know what to do?</span></p></div>
</div>

<!--
Before any major architectural change happens, it must be *discussed*.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">When There’s A Will, There’s a Way</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:413.22px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;line-height:38.4px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px">Any architectural shift should have the informed support of its constituents.</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Talk amongst your engineers to see what they view as your biggest issues.</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Run ideas by people you have rapport with and can get feedback from first. Then expand as you gain consensus.</span></p></div>
<img class="pptx-shape" src="/media/image7.gif" alt="Spoiled girl from Charlie and the Chocolate Factory saying &quot;Don't care how I want it now&quot;" style="height:257.25px;left:510px;top:149.53px;width:360px">
</div>

<!--
I think a lot of people –especially those who are new to a team- make the mistake of immediately jumping to proposals and trying to push an agenda. That’s a mistake. You want to soak in the experiences of your fellow engineers before trying to tell them to change themselves.
Don’t get me wrong, I’m not trying to devalue coming into a team with a fresh perspective – that’s commendable, and teams should be open to it! But fresh perspectives are much more likely to succeed if you can convince those around you of their validity.
“Don’t care how I want it now”: https://giphy.com/gifs/willy-wonka-and-the-chocolate-factory-dont-care-veruca-salt-vO8F4fYQd39h6
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<img class="pptx-shape" src="/media/image8.gif" alt="A picture containing text, birthday, colorful, decorated  Description automatically generated" style="height:270px;left:240px;top:135px;width:480px">
</div>

<!--
Getting your fellow engineers excited about a switch is key to its success. You want them to feel it in their bones: “This is awesome! I totally want to spend time on it! It’s going to make our code and my life so much better!”
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(255,255,255)">
<img class="pptx-shape" src="/media/image9.png" alt="“Bug Acquisition Funnel” showing the flow of process development as reducing bugs, with “Static Analysis” circled." style="height:540px;left:11px;top:0px;width:938px">
</div>

<!--
My favorite image from our evangelism phase was in the very beginning, where we advertised the “Bug Acquisition Funnel” as an idea of how bugs are removed through the development process. Preventing bugs and improving website stability was one of the big team ambitions at the beginning of 2019, and we maneuvered TypeScript into those plans nicely.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Knowledge Sharing</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Ramping up the team</span></p></div>
</div>

<!--
As you expand your influencing of an idea, and especially once the team commits to it, you’ll need to help any peers not already familiar with it learn the new paradigm.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66.13px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Spreading Consensus</span></p></div>
<div class="pptx-shape pptx-text" style="height:64.87px;left:66.13px;top:132.38px;width:406.12px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;font-weight:700;line-height:34.56px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px;font-weight:700">Area Experts</span></p></div>
<div class="pptx-shape pptx-text" style="height:290.13px;left:66.13px;top:197.25px;width:406.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Someone who is already very familiar with the technology</span></p><ul><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Clues the team in on best practice and guides the implementation details</span></li><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Saves the team from itself</span></li></ul><p style="font-size:18px;line-height:19.44px;margin-top:10px"><br><span style="font-size:18px;text-decoration:line-through">Recommend: at least 2</span></p></div>
<div class="pptx-shape pptx-text" style="height:64.87px;left:486px;top:132.38px;width:408.13px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;font-weight:700;line-height:34.56px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px;font-weight:700">Cheerleaders</span></p></div>
<div class="pptx-shape pptx-text" style="height:290.13px;left:486px;top:197.25px;width:408.13px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Someone with less experience but who is excited nonetheless</span></p><ul><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Acts as a guinea pig</span></li><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Helps foster grassroots support amongst peers</span></li></ul><p style="font-size:18px;line-height:19.44px;margin-top:10px"><br><span style="font-size:18px;text-decoration:line-through">Recommend: at least 1 per affected team/area</span></p></div>
</div>

<!--
I try to identify two archetypes of people on the team who can push the new shift.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Internal Presentations</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:524px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;line-height:38.4px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px">You can’t introduce anything to a team until there’s a talk.</span></p><p style="font-size:32px;line-height:38.4px"><br></p><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">We held two “brown bags” (~60mins):</span></p><ul><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">Static Analysis in JavaScript</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">: general intro to the concept: more about Prettier and </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">ESLint </span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">TypeScript!</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">: dedicated to TypeScript and focused on introducing the features we’d need</span></li></ul><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">We also regularly participated in the team’s existing “lightning talks” (~5mins) series.</span></p></div>
<img class="pptx-shape" src="/media/image10.gif" alt="A picture containing person, wall, indoor, mirror  Description automatically generated" style="height:291px;left:641.25px;top:169.56px;width:252.75px">
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Pairing! Pairing! Pairing!</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:370px;top:143.75px;width:524px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;line-height:38.4px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px">Nobody learns anything until they’re forced to do it.</span></p><p style="font-size:32px;line-height:38.4px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">I scheduled </span><span style="color:#C8D7FA;font-family:'Arial';font-size:24px;font-weight:700">&gt;</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">=1 pairing session with every frontend-focused member of the team to switch off converting their team’s code to TypeScript.</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Primary purposes: evangelism &amp; teaching.</span></p><p style="font-size:24px;line-height:28.8px"><br></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Scalability: 3/10</span></p><p style="font-family:'Regular Bold';font-size:24px;line-height:28.8px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Effectiveness: 11/10</span></p></div>
<img class="pptx-shape" src="/media/image11.png" alt="Uncle Sam propaganda poster with the caption “I want you to learn TypeScript”" style="height:342.63px;left:66px;top:143.75px;width:256.01px">
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Technical Details</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">What code changes did we make?</span></p></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66.13px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">As Few As Possible!</span></p></div>
<div class="pptx-shape pptx-text" style="height:64.87px;left:66.13px;top:132.38px;width:406.12px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;font-weight:700;line-height:34.56px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px;font-weight:700">.</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px;font-weight:700">ts</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px;font-weight:700">(x) files</span></p></div>
<div class="pptx-shape pptx-text" style="height:290.13px;left:66.13px;top:197.25px;width:406.12px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">We started off only converting a few files, to make sure the system worked.</span></p><ul><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Minimal disruption in the initial pull request</span></li><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">No need to suddenly change engineers’ work routine without ramping them into it</span></li></ul></div>
<div class="pptx-shape pptx-text" style="height:64.87px;left:486px;top:132.38px;width:408.13px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:32px;font-weight:700;line-height:34.56px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:32px;font-weight:700">Integrations</span></p></div>
<div class="pptx-shape pptx-text" style="height:290.13px;left:486px;top:197.25px;width:408.13px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Everything we used already had a basic TypeScript inclusion:</span></p><ul><li style="font-family:'Regular Bold';font-size:12px;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px">Babel: </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:20px;font-weight:700">@babel/preset-typescript</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:5px;color:#C8D7FA;list-style-type:'• ';margin-left:54px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Jest and Webpack: that ☝</span></li><li style="font-family:'Regular Bold';font-size:12px;font-weight:700;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px;font-weight:700">ESLint</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px;font-weight:700">: </span><span style="color:#C8D7FA;font-family:'Consolas';font-size:24px;font-weight:700">typescript-</span><span style="color:#C8D7FA;font-family:'Consolas';font-size:24px;font-weight:700">eslint</span></li><li style="font-family:'Regular Bold';font-size:12px;font-weight:700;line-height:12.96px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:12px;font-weight:700">Prettier: built-in!</span></li></ul></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Side-By-Side Usage</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:408px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">We prioritized ease of adoption, followed by code maintenance.</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">allowJs</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">/</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">checkJs</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">: off</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:5px;color:#C8D7FA;list-style-type:'• ';margin-left:54px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">No need to disrupt engineers with messages for legacy code</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">noImplicitAny</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">: off 😢</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:5px;color:#C8D7FA;list-style-type:'• ';margin-left:54px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Too time consuming &amp; difficult in a mixed </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">js</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">/</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">ts</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px"> codebase</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">strictNullChecks</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">: on 🥰</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:5px;color:#C8D7FA;list-style-type:'• ';margin-left:54px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">Useful, and not very expensive</span></li></ul></div>
<img class="pptx-shape" src="/media/image12.gif" alt="Beautiful Squidward spinning in motion" style="height:214.5px;left:546px;top:143.75px;width:288px">
</div>

<!--
A key feature of our conversion that helped it be successful was not disrupting the flow for engineers who weren’t ready for it – instead, we gradually increased TypeScript over time until it became second nature.
“Beautiful Squidward”: https://giphy.com/gifs/spongebob-squarepants-funny-dancing-vB5jiVv1Tr2tW
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Dedicated PRs </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Over Time</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:480px;top:143.75px;width:408px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Most changes were in dedicated “Convert &#123;X&#125; to TypeScript” PRs</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Allowed us to target specific areas with shared types.</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Made it clear which engineers to loop in for pairing &amp; review</span></li></ul><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Any new or confusing syntax was explained with PR comments.</span></p></div>
<img class="pptx-shape" src="/media/image13.png" alt="Screenshot of a &quot;Converted libs/[A-L] to TypeScript&quot; pull request on GitHub" style="height:277.34px;left:36.48px;top:153.99px;width:399.14px">
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(255,255,255)">
<img class="pptx-shape" src="/media/image14.png" alt="Visualized chart of 0–100% conversion progress, by file extension percentage, starting in April at and ending in December" style="height:488.75px;left:0px;top:25.63px;width:960px">
</div>

<!--
Technical conversion work on our main codebase commenced on April 2nd, 2019: a day after our April 1st LOLCODE course launched. The conversion took us until we merged the last commit at 5pm on Tuesday, December 17th: 259 days since the technical effort began in earnest.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">TypeStat</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:408px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">I wrote a tool to automatically apply obvious conversions </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">en</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px"> masse when possible.</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">E.g. creating component prop interfaces from </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">propTypes</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Many hours of time investment, but many hours of time saved. Probably worth it.</span></li></ul><p style="font-size:28px;line-height:30.24px;margin-top:10px"><br></p><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Early stage, but promising!</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:509.89px;top:143.75px;width:735.05px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:16px;font-weight:700;line-height:19.2px;margin-top:6px"><span style="color:#FFFFFF;font-family:'Consolas';font-size:16px;font-weight:700">$ </span><span style="color:#FFFFFF;font-family:'Consolas';font-size:16px;font-weight:700">npx </span><span style="color:#FFFFFF;font-family:'Consolas';font-size:16px;font-weight:700">typestat</span><span style="color:#FFFFFF;font-family:'Consolas';font-size:16px;font-weight:700"> --config ./</span><span style="color:#FFFFFF;font-family:'Consolas';font-size:16px;font-weight:700">typestat.json</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Preparing language services to visit files...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Prepared language services for 7 files...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/apple.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/banana.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/cherry.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/dragonfruit.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/elderberry.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/fig.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/index.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Completed 21 mutations across 7 files in 1 wave.</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Preparing language services to visit files...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Prepared language services for 7 files...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/apple.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/banana.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/cherry.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/dragonfruit.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/elderberry.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/fig.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Checking C:/Code/typestat-example/src/index.ts...</span></p><p style="font-family:'Consolas';font-size:16px;line-height:19.2px;margin-top:6px"><span style="color:#D0CECE;font-family:'Consolas';font-size:16px">Done! </span></p></div>
</div>

<!--
Honestly, I could give a full-length conference talk on TypeStat alone – but that’s not the target of this talk and we don’t have the time.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Automated Type Additions</span></p></div>
<div class="pptx-shape pptx-text" style="height:367.5px;left:79.64px;top:143.75px;width:408px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-size:12px;line-height:17.28px"><br></p><p style="font-size:12px;line-height:17.28px"><br></p><p style="font-size:12px;line-height:17.28px"><br></p><p style="font-size:12px;line-height:17.28px"><br></p><p style="font-size:12px;line-height:17.28px"><br></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#C586C0;font-family:'Consolas';font-size:12px">export </span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">const </span><span style="color:#4FC1FF;font-family:'Consolas';font-size:12px">MyComponent</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> = (&#123;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">  count</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">,</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">  text</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">,</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">&#125;) </span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">=&gt;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> &#123;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#C586C0;font-family:'Consolas';font-size:12px">  return</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> (</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#808080;font-family:'Consolas';font-size:12px">    &lt;</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">div</span><span style="color:#808080;font-family:'Consolas';font-size:12px">&gt;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#569CD6;font-family:'Consolas';font-size:12px">      &#123;</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">text</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">&#125;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> (</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">&#123;</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">count</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> || </span><span style="color:#B5CEA8;font-family:'Consolas';font-size:12px">0</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">&#125;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">)</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#808080;font-family:'Consolas';font-size:12px">    &lt;/</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">div</span><span style="color:#808080;font-family:'Consolas';font-size:12px">&gt;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">  );</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">&#125;;</span></p><p style="font-size:12px;line-height:17.28px"><br></p><p style="font-size:12px;font-weight:700;line-height:17.28px"><br><span style="font-size:12px;font-weight:700;text-decoration:line-through">MyComponent</span><span style="color:#4FC1FF;font-family:'Consolas';font-size:12px;font-weight:700">.</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">propTypes</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700"> = &#123;</span></p><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">  count: </span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">PropTypes</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">number</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">,</span></p><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">  text: </span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">PropTypes</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">string</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">isRequired</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">,</span></p><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">&#125;;</span></p></div>
<div class="pptx-shape pptx-text" style="height:367.5px;left:499.64px;top:143.75px;width:394.36px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#C586C0;font-family:'Consolas';font-size:12px;font-weight:700">export </span><span style="color:#569CD6;font-family:'Consolas';font-size:12px;font-weight:700">type </span><span style="color:#4EC9B0;font-family:'Consolas';font-size:12px;font-weight:700">MyComponentProps</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700"> = &#123;</span></p><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">  count</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">?: </span><span style="color:#4EC9B0;font-family:'Consolas';font-size:12px;font-weight:700">number</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">;</span></p><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px;font-weight:700">  text</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">: </span><span style="color:#4EC9B0;font-family:'Consolas';font-size:12px;font-weight:700">string</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">;</span></p><p style="font-family:'Consolas';font-size:12px;font-weight:700;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px;font-weight:700">&#125;;</span></p><p style="font-size:12px;line-height:17.28px"><br><span style="font-size:12px;text-decoration:line-through">export </span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">const </span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">MyComponent</span><span style="color:#4FC1FF;font-family:'Consolas';font-size:12px">: </span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">React</span><span style="color:#4EC9B0;font-family:'Consolas';font-size:12px">.</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">FC</span><span style="color:#4EC9B0;font-family:'Consolas';font-size:12px">&lt;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">MyComponentProps</span><span style="color:#4EC9B0;font-family:'Consolas';font-size:12px">&gt; = (&#123;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">  count</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">,</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">  text</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">,</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">&#125;) </span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">=&gt;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> &#123;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#C586C0;font-family:'Consolas';font-size:12px">  return</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> (</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#808080;font-family:'Consolas';font-size:12px">    &lt;</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">div</span><span style="color:#808080;font-family:'Consolas';font-size:12px">&gt;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#569CD6;font-family:'Consolas';font-size:12px">      &#123;</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">text</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">&#125;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> (</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">&#123;</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">count</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> || </span><span style="color:#B5CEA8;font-family:'Consolas';font-size:12px">0</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">&#125;</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">)</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#808080;font-family:'Consolas';font-size:12px">    &lt;/</span><span style="color:#569CD6;font-family:'Consolas';font-size:12px">div</span><span style="color:#808080;font-family:'Consolas';font-size:12px">&gt;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">  );</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">&#125;;</span></p><p style="font-size:12px;line-height:17.28px"><br><span style="font-size:12px;text-decoration:line-through">// </span><span style="color:#6A9955;font-family:'Consolas';font-size:12px">Todo</span><span style="color:#6A9955;font-family:'Consolas';font-size:12px">: delete after conversions are done...</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#4FC1FF;font-family:'Consolas';font-size:12px">MyComponent</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">propTypes</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px"> = &#123;</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">  count: </span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">PropTypes</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">number</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">,</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">  text: </span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">PropTypes</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">string</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">.</span><span style="color:#9CDCFE;font-family:'Consolas';font-size:12px">isRequired</span><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">,</span></p><p style="font-family:'Consolas';font-size:12px;line-height:17.28px"><span style="color:#D4D4D4;font-family:'Consolas';font-size:12px">&#125;;</span></p><p style="font-size:12px;line-height:17.28px"><br></p></div>
<svg class="pptx-shape" xmlns="http://www.w3.org/2000/svg" viewBox="314.15 187.93 189.67 282.62" style="height:282.62px;left:314.15px;top:187.93px;width:189.67px"><defs><marker id="ah-s22-3-t" viewBox="0 0 10 10" refX="10" refY="5" orient="auto-start-reverse" markerWidth="5" markerHeight="5"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(200,215,250)" /></marker></defs><line x1="346" y1="437" x2="471" y2="219" stroke="rgb(200,215,250)" stroke-width="6" marker-end="url(#ah-s22-3-t)" /></svg>
</div>

<!--
On the left, we can read a typical React function component that declares its propTypes with the prop-types package.
You could write a script that parses a source file’s text to see what each component’s prop types are and outputs a corresponding TypeScript type system entity for those types. That’s one of the features I ended up adding to TypeStat.
Components that don’t declare their own propTypes, or have inaccurate propTypes declarations, are a good bit trickier but still doable. You’d need to use the TypeScript type checker to find all uses of that component, see what types all the props are in each use, and combine that information… Doable (and implemented in TypeStat), but a good bit trickier.
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:224.62px;left:65.5px;top:134.63px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:60px;line-height:64.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:60px">Learnings</span></p></div>
<div class="pptx-shape pptx-text" style="height:118.12px;left:65.5px;top:361.38px;width:828px;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:24px;line-height:25.92px;margin-top:10px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">There are no bugs in code, only happy little accidents.</span></p></div>
</div>

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Automate Whenever Possible</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:452px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-bottom:12px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">TypeStat</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px"> was a life saver. We relied on it for the majority of our changes.</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Our ideal was using </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">TypeStat</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px"> for most changes, then touching them up by hand.</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Why do things yourself when you can write a script to do it for you?</span></li></ul></div>
<img class="pptx-shape" src="/media/image15.gif" alt="Assembly line of chocolates loop" style="height:202.5px;left:534px;top:143.75px;width:360px">
</div>

<!--
“Food Vintage”: https://giphy.com/gifs/usnationalarchives-chocolate-candy-factory-nQ4INexHqOX4oO8Mcp
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Have One True Way</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:409.33px;top:143.75px;width:484.67px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-bottom:12px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">People will repeatedly ask the right way of doing things if it’s not clear.</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Should we use interface or type?</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">How do you declare React props?</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">What does ~this~ error mean?</span></li></ul><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:30px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Know the common questions. Answer them with samples and a </span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">styleguide</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">.</span></p></div>
<img class="pptx-shape" src="/media/image16.gif" alt="Math equations of a confused face" style="height:202.75px;left:49.67px;top:149.25px;width:317.35px">
</div>

<!--
“Confused Thinking”: https://giphy.com/gifs/math-lady-meme-WRQBXSCnEFJIuxktnw
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Don’t Convert And Change</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:452px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-bottom:12px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">The only bugs we caused were from trying to change JavaScript code while converting it to TypeScript.</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">If a pull requests changes any behavior, it’s much less safe</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-bottom:12px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Code changes are hard to review if the diff is very large</span></li></ul><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-bottom:12px;margin-top:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Resist the urge. Save it for later.</span></p></div>
<img class="pptx-shape" src="/media/image17.gif" alt="Tracy Jordan saying no repeatedly" style="height:335.08px;left:546.85px;top:143.75px;width:347.15px">
</div>

<!--
A key feature of our conversion that helped it be successful was not disrupting the flow for engineers who weren’t ready for it – instead, we gradually increased TypeScript over time until it became second nature.
“Beautiful Squidward”: https://giphy.com/gifs/spongebob-squarepants-funny-dancing-vB5jiVv1Tr2tW
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Consolas';font-size:44px;font-weight:700;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Consolas';font-size:44px;font-weight:700">Any</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px"> Casts Are Fine As A Last Resort</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:409.33px;top:143.75px;width:484.67px;justify-content:flex-end;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-bottom:12px;margin-top:10px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Redux is great with TypeScript. Complicated integrations are not.</span></p><ul><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">Every extension seems to define its own version of Action. Most of them are incompatible with each other.</span></li><li style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:18px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">It took us months of updates to get on the same Redux </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px">typings</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px"> version.</span></li></ul><p style="font-family:'Regular Bold';font-size:28px;line-height:30.24px;margin-top:30px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Solution: </span><span style="color:#FFFFFF;font-family:'Consolas';font-size:28px;font-weight:700">any</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px"> casts. Lots of </span><span style="color:#FFFFFF;font-family:'Consolas';font-size:28px;font-weight:700">any</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px"> casts.</span></p></div>
<img class="pptx-shape" src="/media/image18.gif" alt="Video game Mace Windu starting off calm then screaming with wide eyes and a shaking head" style="height:234px;left:66px;top:153px;width:280.5px">
</div>

<!--
“Angry Star Wars”: https://giphy.com/gifs/LTpmRMNSmZgIw
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Celebrate Your Victories</span></p></div>
<img class="pptx-shape" src="/media/image19.jpeg" alt="Custom cake printed with the 100 emoji next to the TypeScript logo" style="height:342.63px;left:223.56px;top:143.75px;width:512.89px">
</div>

<!--
It’s important to make the team feel good when it accomplishes something. Treat yourself! We spent very little budget on this office cake (back when we were in the office), but it helped signify to the team that we’d done something commendable and should feel proud of ourselves.
Ironically, I think the flavor of the cake was vanilla…
-->

---

layout: none
transition: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:104.38px;left:66px;top:28.75px;width:828px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="padding-left:-0.2px;font-family:'Regular Bold';font-size:44px;line-height:47.52px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:44px">Resources</span></p></div>
<div class="pptx-shape pptx-text" style="height:342.63px;left:66px;top:143.75px;width:535.21px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">TypeScript</span></p><ul><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">typescriptlang.org</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#C8D7FA;list-style-type:'• ';margin-left:18px"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:24px">codecademy.com/learn/learn-typescript</span></li><li style="font-size:24px;line-height:28.8px;list-style-type:'• ';margin-left:18px"><br></li></ul><p style="font-family:'Regular Bold';font-size:28px;line-height:33.6px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:28px">Integrations</span></p><ul><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">Babel: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">babeljs.io/docs/</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">en</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">/babel-preset-typescript</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">ESLint</span><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">typescript-eslint.io</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">Jest: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">jestjs.io/docs/</span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">getting-started#using-typescript</span></li><li style="font-family:'Regular Bold';font-size:24px;line-height:28.8px;color:#FFFFFF;list-style-type:'• ';margin-left:18px"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:24px">Webpack: </span><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:20px">webpack.js.org/guides/typescript/</span></li></ul></div>
<img class="pptx-shape" src="/media/image20.gif" alt="A picture containing person, person  Description automatically generated" style="height:157.16px;left:601.21px;top:146.52px;width:301.41px">
</div>

<!--
“Ben Stiller Knowledge”: https://giphy.com/gifs/knowledge-TI32JwHmWQEi4
-->

---

layout: none
---

<div class="pptx" style="background-color:rgb(7,14,21)">
<div class="pptx-shape pptx-text" style="height:201.91px;left:120px;top:169.04px;width:720px;justify-content:center;padding-bottom:3.6px;padding-left:7.2px;padding-right:7.2px;padding-top:3.6px"><p style="font-family:'Regular Bold';font-size:66px;font-weight:700;line-height:118.8px;text-align:center"><span style="color:#FFFFFF;font-family:'Regular Bold';font-size:66px;font-weight:700">Thank you!</span></p><p style="font-family:'Regular Bold';font-size:28px;font-weight:700;line-height:50.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">@JoshuaKGoldberg // joshuakgoldberg.com</span></p><p style="font-family:'Regular Bold';font-size:28px;font-weight:700;line-height:50.4px;text-align:center"><span style="color:#C8D7FA;font-family:'Regular Bold';font-size:28px;font-weight:700">💎🙌🚀🌕</span></p></div>
</div>

<!--
Thanks very much to the conference organizers for setting this and other events up despite the COVID-19 restrictions. You rock! Again, you can reach me on Twitter at JoshuaKGoldberg.
-->
