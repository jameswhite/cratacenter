---
layout: page
title: "cratacenter 1.0"
date: 2020-09-03 09:00:00 -0500
---

<p>I just wanted to write down some of the things that led to the cratacenter. My co-workers and I worked out of co-working spaces from Aug 2014 - Sept 2020. We had some virtual private servers out on the internet we used to run some of our infrastructure but had an idea to run more. I bought some refurbished mac minis and put VMware ESXi on them and attached them to some storage on an 12U rack next to my desk.</p> <br>
<a href="/images/2020-09-03-version-a.jpeg"><img src="/images/2020-09-03-version-a.jpeg" width="25%" height="25%"></a>

<p>I then bought some shelves and <a href="https://www.thingiverse.com/thing:97256"> 3D printed some vertical stands </a> for the mac minis.</p><br>
<a href="/images/2020-09-03-version-b.jpeg"><img src="/images/2020-09-03-version-b.jpeg" width="25%" height="25%"></a>

<p>As money permitted, I'd add a node to the cluster</p><br>
<a href="/images/2020-09-03-version-c.jpeg"><img src="/images/2020-09-03-version-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-version-c1.jpeg"><img src="/images/2020-09-03-version-c1.jpeg" width="25%" height="25%"></a>

<p>The mac minis were limited to 16GB of RAM and that became a problem so we found some <a href="https://www.amazon.com/gp/product/B01K1JVM0Q/">Supermicro E2000-8D Servers</a> that were a similar form factor to replace them.</p><br>
<a href="/images/2020-09-03-supermicro-a.jpeg"><img src="/images/2020-09-03-supermicro-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-supermicro-b.jpeg"><img src="/images/2020-09-03-supermicro-b.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-supermicro-c.jpeg"><img src="/images/2020-09-03-supermicro-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-supermicro-d.jpeg"><img src="/images/2020-09-03-supermicro-d.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-supermicro-e.jpeg"><img src="/images/2020-09-03-supermicro-e.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-supermicro-f.jpeg"><img src="/images/2020-09-03-supermicro-f.jpeg" width="25%" height="25%"></a>
<video width="200" height="150" name="Supermicro" controls="controls">
  <!--  ffmpeg -i 2020-09-03-supermicro-g.mov -vcodec h264 -acodec mp2 2020-09-03-supermicro-g.mp4 -->
  <source src="/images/2020-09-03-supermicro-g.mp4" type="video/mp4">
</video>
<br>

<p>I wanted to see if we could get some redundant firewalls going so I got two <a href="http://www.soekris.com/products/net6501-1.html">net-6501s</a> with <a href="http://www.soekris.com/products/lan1841-1.html">lan1841</a> boards from <a href="http://www.soekris.com/">Soekris Engineering</a> and put them together in an OpenBSD CARP configuration.</p><br>
<a href="/images/2020-09-03-soekris-a.jpeg"><img src="/images/2020-09-03-soekris-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-soekris-b.jpeg"><img src="/images/2020-09-03-soekris-b.jpeg" width="25%" height="25%"></a>

<p>One problem with this is that when we moved co-working spaces, it was a real hassle to un-plug everythingand get it re-cabled.</p><br>
<nobr>
<a href="/images/2020-09-03-thebikeshed-a.jpeg"><img src="/images/2020-09-03-thebikeshed-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-thebikeshed-b.jpeg"><img src="/images/2020-09-03-thebikeshed-b.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-thebikeshed-c.jpeg"><img src="/images/2020-09-03-thebikeshed-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-thebikeshed-d.jpeg"><img src="/images/2020-09-03-thebikeshed-d.jpeg" width="25%" height="25%"></a>
</nobr><br>

<p>Meanwhile, I took the old hardware to my apartment and started a second build-out (for lack of a better term) there.</p><br>
<a href="/images/2020-09-03-cumberland-a.jpeg"><img src="/images/2020-09-03-cumberland-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cumberland-b.jpeg"><img src="/images/2020-09-03-cumberland-b.jpeg" width="25%" height="25%"></a>

<p>Eventually I moved it into cubby holes. This was the first proto-cratacenter.</p>
<a href="/images/2020-09-03-cumberland-c.jpeg"><img src="/images/2020-09-03-cumberland-c.jpeg" width="25%" height="25%"></a>

<p>But then we had the idea about making it portable. I got a couple <a href="https://www.amazon.com/gp/product/B073V58TQY/">medium sized crates</a> and put the UPS and NAS in one, the routers and servers in the other</p><br>
<nobr>
<a href="/images/2020-09-03-cratacenter-1-a.jpeg"><img src="/images/2020-09-03-cratacenter-1-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cratacenter-1-b.jpeg"><img src="/images/2020-09-03-cratacenter-1-b.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cratacenter-1-c.jpeg"><img src="/images/2020-09-03-cratacenter-1-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cratacenter-1-d.jpeg"><img src="/images/2020-09-03-cratacenter-1-d.jpeg" width="25%" height="25%"></a>
</nobr><br>

<p>I didn't like the need for the second crate. While it was portable, it was difficult to move around. So I ordered two <a href="https://www.amazon.com/gp/product/B078Z45DJY">large crates</a>. The second crate works as a lid, and as a dolly (as it has <a href="https://www.amazon.com/gp/product/B073V256K9">casters</a>, but they fit in the other crate when using as a lid.) And everything is self contained. Only one power cable and one (or two, for redundancy) uplink cables leave the crate.</p><br>
<a href="/images/2020-09-03-cratacenter-1-e.jpeg"><img src="/images/2020-09-03-cratacenter-1-e.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cratacenter-1-f.jpeg"><img src="/images/2020-09-03-cratacenter-1-f.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cratacenter-1-g.jpeg"><img src="/images/2020-09-03-cratacenter-1-g.jpeg" width="25%" height="25%"></a>

<p>This made for a super-portable setup that could just get rolled to the garage, tossed in a trunk and relocated.</p><br>
<a href="/images/2020-09-03-cratacenter-1-h.jpeg"><img src="/images/2020-09-03-cratacenter-1-h.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-03-cratacenter-1-i.jpeg"><img src="/images/2020-09-03-cratacenter-1-i.jpeg" width="25%" height="25%"></a>
