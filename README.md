<div align="center">
  <h1>Sistem Aduan Asrama IKM Besut</h1>
  <p><strong>From a reported hostel problem to a visible status.</strong></p>
  <p><a href="https://sistemaduanasrama.syahmiaof.my">Live website</a> · <a href="https://syahmiaof.my/projects">Portfolio</a></p>
</div>

![Portal E-Aduan Asrama homepage](https://raw.githubusercontent.com/syahmiaof/syahmiaof/main/public/images/sistem-aduan.webp)

## Overview

A cloud-hosted hostel complaint workflow for students and wardens. Students can submit a report and check its status; wardens receive and manage complaint information through the administrative flow.

~~~text
Student report → Firestore record → Telegram notification → Warden review → Status update
~~~

## Features

- Submit hostel damage or facility complaints.
- Track a complaint using the student's identifier.
- Warden administration entry point.
- Firebase persistence and hosting.
- Telegram Bot notifications.
- Dashboard charts and dark mode.
- Progressive Web App support.

## Stack

| Area | Technology |
|---|---|
| Interface | HTML, CSS, JavaScript |
| Cloud | Firebase Hosting, Firestore, Firebase Auth |
| Notifications | Telegram Bot API |
| Visualisation | Chart.js |

## Local setup

Configure Firebase using a local environment or deployment-safe configuration, then serve the frontend using your preferred local web server. Telegram bot tokens must remain outside the public repository.

## Status

Working student project. The public repository documents the application workflow; operational availability, institutional adoption and notification delivery are not independently guaranteed.

## Builder

Muhammad Syahmi — Diploma Teknologi Komputer (Cloud Computing), IKM Besut.  
[Portfolio](https://syahmiaof.my) · [Email](mailto:syahmiaof123@gmail.com)
