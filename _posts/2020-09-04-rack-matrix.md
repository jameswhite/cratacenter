---
layout: page
title: "rack-matrix"
date: 2020-09-04 11:00:00 -0500
---

<p>Doing some looking around on the internet for a replacement for the Soekris net-6501, I came across the <a href="https://pcengines.ch/apu4c4.htm">PC Engines APU4</a>. It has 4 gigabit ethernet ports, dual serial consoles, one with a DB-9 interface like the net-6501. So I bought one and installed OpenBSD on it and it took the same configurations I had on the net-6501 with almost no modifications. It seemed like a good fit</p><br>
<a href="/images/2020-09-04-apu4-a.jpeg"><img src="/images/2020-09-04-apu4-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-apu4-b.jpeg"><img src="/images/2020-09-04-apu4-b.jpeg" width="25%" height="25%"></a>

<p>There was still the problem of: "How do I get two of them into a single 1U enclosure?" Enter <a href="https://www.rack-matrix.com/en/">rack-matrix.com</a> out of France. They have <a href="https://www.rack-matrix.com/en/products/racks.html">customizable racks</a> with left-hand-side/right-hand-side <a href="https://www.rack-matrix.com/en/products/racks/mounting-kits.html">mounting kits</a>. The case has universal mounting screw locations, and then you can get device specific mounting kits for each side that the APU4 will bolt down to. They even have custom face plates for where the ethernet and serial ports are.</p><br>
<a href="/images/2020-09-04-rack-matrix.jpeg"><img src="/images/2020-09-04-rack-matrix.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-left.jpeg"><img src="/images/2020-09-04-rack-matrix-left.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-right.jpeg"><img src="/images/2020-09-04-rack-matrix-right.jpeg" width="25%" height="25%"></a>


<p>The APU4 board does need a small piece soldered onto it to make it compatible with the power supplies that ship with the rack-matrix cases.</p><br>
<a href="/images/2020-09-04-apu4-c.png"><img src="/images/2020-09-04-apu4-c.png" width="25%" height="25%"></a>


<p>The LHS/RHS mounting kits bolt in to the pre-drilled holes in the case. And the redundant power supplies have pre-drilled holes in the case as well.</p><br>
<nobr>
<a href="/images/2020-09-04-rack-matrix-a.jpeg"><img src="/images/2020-09-04-rack-matrix-a.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-b.jpeg"><img src="/images/2020-09-04-rack-matrix-b.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-c.jpeg"><img src="/images/2020-09-04-rack-matrix-c.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-d.jpeg"><img src="/images/2020-09-04-rack-matrix-d.jpeg" width="25%" height="25%"></a>
</nobr><br>


<p>The APU4s come with heat spreaders, that get stuck to the case and to the CPU and they recommend that the APU4 not be run for any use other than a lab bench without them. The heat spreaders conduct the heat from the CPU down to the aluminum case of the rack-matrtix. The whole case becomes a heat sync.</p><br>
<nobr>
<a href="/images/2020-09-04-rack-matrix-e.jpeg"><img src="/images/2020-09-04-rack-matrix-e.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-f.jpeg"><img src="/images/2020-09-04-rack-matrix-f.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-g.jpeg"><img src="/images/2020-09-04-rack-matrix-g.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-h.jpeg"><img src="/images/2020-09-04-rack-matrix-h.jpeg" width="25%" height="25%"></a>
</nobr><br>
<nobr>
<a href="/images/2020-09-04-rack-matrix-i.jpeg"><img src="/images/2020-09-04-rack-matrix-i.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-j.jpeg"><img src="/images/2020-09-04-rack-matrix-j.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-k.jpeg"><img src="/images/2020-09-04-rack-matrix-k.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-l.jpeg"><img src="/images/2020-09-04-rack-matrix-l.jpeg" width="25%" height="25%"></a>
</nobr><br>
<nobr>
<a href="/images/2020-09-04-rack-matrix-m.jpeg"><img src="/images/2020-09-04-rack-matrix-m.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-n.jpeg"><img src="/images/2020-09-04-rack-matrix-n.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-o.jpeg"><img src="/images/2020-09-04-rack-matrix-o.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-p.jpeg"><img src="/images/2020-09-04-rack-matrix-p.jpeg" width="25%" height="25%"></a>
</nobr><br>

<p>Install the disks and the optional <a href="https://store.rack-matrix.com/en/accessories/74-gigabit-ethernet-internal-connection-kit-for-apu.html">Gigabit Ethernet Internal Connection Kit for APU</a> to allow us to have a pfsync interface between the nodes without wasting an external ethernet port. along with optional <a href="https://store.rack-matrix.com/en/accessories/13-kit-fan-20mm-for-rackmatrix.html">fans</a> to help move some heat around</p><br>
<a href="/images/2020-09-04-rack-matrix-r.jpeg"><img src="/images/2020-09-04-rack-matrix-r.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-s.jpeg"><img src="/images/2020-09-04-rack-matrix-s.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-t.jpeg"><img src="/images/2020-09-04-rack-matrix-t.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-u.jpeg"><img src="/images/2020-09-04-rack-matrix-u.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-v.jpeg"><img src="/images/2020-09-04-rack-matrix-v.jpeg" width="25%" height="25%"></a>
<a href="/images/2020-09-04-rack-matrix-w.jpeg"><img src="/images/2020-09-04-rack-matrix-w.jpeg" width="25%" height="25%"></a>

<p>Put the blue lid on and then mounted it in the rack. Redundant firewalls, redundant, switches. There is the small matter that it *will* require down-time if an APU4 should fail. But it won't be unsheduled downtime.</p><br>
<a href="/images/2020-09-04-rack-matrix-q.jpeg"><img src="/images/2020-09-04-rack-matrix-q.jpeg" width="25%" height="25%"></a>
