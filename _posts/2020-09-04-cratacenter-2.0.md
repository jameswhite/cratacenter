---
layout: page
title: "cratacenter 2.0"
date: 2020-09-04 11:00:00 -0500
---

<p>If something is worth doing, it's worth over-doing, right? So we're burning down <a href="http://www.thebikeshed.io/">the bikeshed</a> and now we've got this extra hardware lying around. So maybe we can cratacenter it all up. The milk crates were nice, but something more durable that requires fewer zip ties would be cool. Someone, probably jokingly, pointed us to the <a href="https://www.amazon.com/gp/product/B0002BG4S4">Gator Cases Lightweight Rolling Rack Case with Retractable Tow Handle and Recessed Wheels; 10U</a> It's a 10U rack, but with roller wheels and a handle.</p><br>
<a href="/images/2020-09-04-gator.jpg"><img src="/images/2020-09-04-gator.jpg" width="25%" height="25%"></a>

<p>Only having 10U means we had to make some decisions about what could be redundant and what couldn't. You don't really want to run this without a UPS, so we budgeted 2U on a <a href="https://www.amazon.com/dp/B000DZRY9C/">Tripp Lite SMART1500LCD 1500VA Smart UPS Battery</a>
</p><br>
<a href="/images/2020-09-04-tripplite.jpeg"><img src="/images/2020-09-04-tripplite.jpeg" width="25%" height="25%"></a>

<p>We couldn't fit any of the old NASes we had in to a rack, not without burning 4U and adding a shelf, so we went with the <a href="https://www.amazon.com/dp/B07G9ZJFKD">Synology 2U 8-Bay NAS RackStation (RS1219+)</a> with <a href="https://www.amazon.com/dp/B07D3MWMNZ/">Western Digital 8TB WD Red NAS Internal Hard Drive - 5400 RPM</a> Eight 8TB drives in a RAID 6 configuration grants us about 44TB of useful space, allowing for a two-drive failure before data loss occurs.</p><br>
<a href="/images/2020-09-04-rackstation.jpeg"><img src="/images/2020-09-04-rackstation.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-wdred.jpeg"><img src="/images/2020-09-04-wdred.jpeg" width="10%" height="10%"></a>

<p>We already had the <a href="https://www.amazon.com/dp/B01K1JVM0Q">Supermicro SuperServer E200-8D - Mini-1U</a>boxes, but needed to add the <a href="https://www.amazon.com/dp/B071RPR6SR">SuperMicro CSE-E200 RACKMOUNT KIT for SYS-E200-8D MCP-290-10110-0B</a> in order to make them rack mountable. I typically like no fewer than four nodes in an ESX cluster, so I can have a node offline but still have some redundancy, but I had to roll that back to three because of the space constraints.</p><br>
<a href="/images/2020-09-04-supermicro.jpeg"><img src="/images/2020-09-04-supermicro.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rackmountkit.jpeg"><img src="/images/2020-09-04-rackmountkit.jpeg" width="25%" height="25%"></a>


<p>I originally looked at the <a href="https://www.amazon.com/dp/B00OJZVBXC">Ubiquiti UniFi Switch - 48 Ports Managed (US-48-500W)</a>but managing things with a cloudkey isn't what I was trying to do here. There were also some interesting side-effects to putting two cloudkeys on the same subnet, as we had lab in the bikeshed, and now the cratacenter. the seemed to be fighting for control so I had to abandon that pretty quickly. I settled on two <a href="https://www.amazon.com/gp/product/B00LV8YY34">Ubiquiti EdgeSwitch ES-48-500W Managed PoE, Gigabit Switches</a> instead, as they could be managed with the command line and not forget everthing on a reboot.</p><br>
<a href="/images/2020-09-04-unifi.jpeg"><img src="/images/2020-09-04-unifi.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-edgeswitch.jpeg"><img src="/images/2020-09-04-edgeswitch.jpeg" width="25%" height="25%"></a>


<p>Adding the redundant switches leaves us with only 1U left in the Gator case, and I don't like the idea of non-redundant hardware for the firewalls. Even the <a href="2020/09/03/cratacenter-1.0/index.html">Cratacenter 1.0</a> had redundant OpenBSD boxes in the form of <a href="http://www.soekris.com/products/net5501-1.html">Dual net5501s from Soekris Engineering</a>. To add insult to injury, Soekris Engineering <a href="http://www.soekris.com/index.html">suspended operations in the US</a> in April 2017. So I needed both a replacement hardware that can run OpenBSD, and a way to fit two of them into a 1U space. While I labbed it out. I just used two old Soekris Net6501s in 1U cases and only used a single switch.</p><br>
<a href="/images/2020-09-04-crate-a.jpeg"><img src="/images/2020-09-04-crate-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-crate-b.jpeg"><img src="/images/2020-09-04-crate-b.jpeg" width="25%" height="25%"></a>


<p>The 1U rack mount kits had a caddy for the power supply. I used a <a href="https://kano.me/us">Kano kit with montior</a> as a deployment node to load operating systems and configure switches. There will be more on that later.</p><br>
<nobr>
<a href="/images/2020-09-04-crate-c.jpeg"><img src="/images/2020-09-04-crate-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-crate-d.jpeg"><img src="/images/2020-09-04-crate-d.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-crate-e.jpeg"><img src="/images/2020-09-04-crate-e.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-crate-f.jpeg"><img src="/images/2020-09-04-crate-f.jpeg" width="25%" height="25%"></a>
</nobr><br>


<p>Now it was ready to roll to the bikeshed so we could leverage the power of VMware storage vmotion to migrate the data from the <a href="https://www.amazon.com/gp/product/B00P3RPMEO">Synology Disk Station 8-Bay Network Attached Storage (DS1815+)</a> and into the RS1219+, and then to evacuate an ESX node one at a time and move it into the crate. More on that in a later post.</p><br>
<nobr>
<a href="/images/2020-09-04-migrate-a.jpeg"><img src="/images/2020-09-04-migrate-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-migrate-b.jpeg"><img src="/images/2020-09-04-migrate-b.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-migrate-c.jpeg"><img src="/images/2020-09-04-migrate-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-migrate-d.jpeg"><img src="/images/2020-09-04-migrate-d.jpeg" width="25%" height="25%"></a>
</nobr><br>

<p>With the maximum of 3 nodes moved, and all of the bikshed infrastructure migrated to the crate, I let it run for a week to see if any problems shook out.</p><br>
<a href="/images/2020-09-04-migrate-e.jpeg"><img src="/images/2020-09-04-migrate-e.jpeg" width="25%" height="25%"></a>

<p>Then it was moving day. The rolley wheels on the crate work fine, but I was moving other things out of the bikeshed as well, so I just threw the crate into the little red wagon.</p><br>
<nobr>
<a href="/images/2020-09-04-movingday-a.jpeg"><img src="/images/2020-09-04-movingday-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-movingday-b.jpeg"><img src="/images/2020-09-04-movingday-b.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-movingday-c.jpeg"><img src="/images/2020-09-04-movingday-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-movingday-d.jpeg"><img src="/images/2020-09-04-movingday-d.jpeg" width="25%" height="25%"></a>
</nobr><br>
