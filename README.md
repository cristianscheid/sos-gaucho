# SOS Gaucho

## Project Status

Development is currently on hold due to time constraints. When development was paused, core features such as user management and story submission were being implemented. Additional features and improvements will follow when development resumes.

## Description

SOS Gaucho is a platform designed to connect people affected by natural disasters in Rio Grande do Sul, Brazil, with volunteers offering assistance. Affected individuals can share their stories, detailing how they were impacted, along with images and information about the help they need (e.g., manual labor, transportation). Built with Spring Boot as a RESTful API for the backend, and Angular with Bootstrap for the frontend, the platform serves as a bridge between those in need and those offering help.

## Features

- User signup and login
- Profile viewing, editing, and deletion
- Ability to create, edit, and delete personal stories with descriptions, images, and additional details
- Dynamic feed to explore and browse stories
- Secure routes with JWT-based authentication and authorization

## Built With

![Java][java-badge]
![Spring Boot][springboot-badge]
![PostgreSQL][postgresql-badge]

![TypeScript][typescript-badge]
![Angular][angular-badge]
![Bootstrap][bootstrap-badge]

## Contributors

This project is being developed collaboratively. Thanks to the following contributors for their dedication and support:

[![Arthur Bastos Fanck](https://github.com/abfanck.png?size=20)](https://github.com/abfanck)
<a href="https://github.com/abfanck" target="_blank">
<img src="https://img.shields.io/badge/Arthur%20Bastos%20Fanck-GitHub?color=gray&logo=github&logoColor=white">
</a><br>

[![Cristian Scheid](https://github.com/cristianscheid.png?size=20)](https://github.com/cristianscheid)
<a href="https://github.com/cristianscheid" target="_blank">
<img src="https://img.shields.io/badge/Cristian%20Scheid-GitHub?color=gray&logo=github&logoColor=white">
</a><br>

[![Mauricio Ribeiro Xavier](https://github.com/mauriciorx.png?size=20)](https://github.com/mauriciorx)
<a href="https://github.com/mauriciorx" target="_blank">
<img src="https://img.shields.io/badge/Mauricio%20Ribeiro%20Xavier-GitHub?color=gray&logo=github&logoColor=white">
</a>

<!-- Badges for 'Built With' section -->

[java-badge]: https://img.shields.io/badge/Java-21-gray?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxwYXRoIGQ9Ik0yOC4xODggMGMyLjc1IDYuMzYzLTkuODU5IDEwLjI5My0xMS4wMzEgMTUuNTk0LTEuMDc0IDQuODcxIDcuNDkyIDEwLjUzMSA3LjUgMTAuNTMxLTEuMzAxLTIuMDE2LTIuMjU4LTMuNjc2LTMuNTYyLTYuODEyQzE4Ljg4NyAxNC4wMDggMzQuNTM1IDkuMjA3IDI4LjE4OCAwem04LjM3NSA4LjgxM3MtMTEuMDYyLjcxMS0xMS42MjUgNy43ODFjLS4yNSAzLjE0OCAyLjkxIDQuODA1IDMgNy4wOTQuMDc0IDEuODcxLTEuODc1IDMuNDM4LTEuODc1IDMuNDM4czMuNTQ3LS42NzYgNC42NTYtMy41MzFjMS4yMy0zLjE2OC0yLjM5OC01LjMwOS0yLjAzMS03Ljg0NC4zNTItMi40MjYgNy44NzUtNi45MzcgNy44NzUtNi45Mzd6TTE5LjE4OCAyNS4xNTZzLTEwLjEyNS0uMTQ1LTEwLjEyNSAyLjcxOWMwIDIuOTkyIDEzLjI1NCAzLjIxNSAyMi43MTkgMS4zNzUgMCAwIDIuNTE2LTEuNzMgMy4xODgtMi4zNzUtNi4yMDMgMS4yNjYtMjAuMzQ0IDEuNDA2LTIwLjM0NC4zMTMgMC0xLjAwOCA0LjU2My0yLjAzMSA0LjU2My0yLjAzMXptMTkuNDY5IDBjLS45OTIuMDc4LTIuMDYyLjQ2MS0zLjAzMSAxLjE1NiAyLjI4MS0uNDkyIDQuMjE5LjkyMiA0LjIxOSAyLjUzMSAwIDMuNjI1LTUuMjUgNy4wMzEtNS4yNSA3LjAzMXM4LjEyNS0uOTIyIDguMTI1LTYuODc1YzAtMi43MDMtMS44NzktNC4wMTYtNC4wNjItMy44NDR6TTE2Ljc1IDMwLjcxOWMtMS41NTUgMC0zLjg3NSAxLjIxOS0zLjg3NSAyLjM3NSAwIDIuMzI0IDExLjY4OCA0LjExMyAyMC4zNDQuNzE5bC0zLTEuODQ0Yy01Ljg2NyAxLjg3OS0xNi42NzIgMS4yNjYtMTMuNDY5LTEuMjV6bTEuNDM4IDUuMjE5Yy0yLjEyOSAwLTMuNTMxIDEuMjg1LTMuNTMxIDIuMjUgMCAyLjk4NCAxMi43MTUgMy4yODUgMTcuNzUuMjVsLTMuMTg3LTIuMDMxYy0zLjc2MiAxLjU5LTEzLjIwMyAxLjgzMi0xMS4wMzEtLjQ2OXptLTcuMDk0IDIuNjg4Yy0zLjQ2OS0uMDctNS43MTkgMS40ODgtNS43MTkgMi43ODEgMCA2Ljg3NSAzNS41IDYuNTU5IDM1LjUtLjQ2OSAwLTEuMTY4LTEuMzQ4LTEuNzM0LTEuODQ0LTIgMi45MDIgNi43MTktMjkuMDYyIDYuMTg0LTI5LjA2MiAyLjIxOSAwLS45MDIgMi4zNTItMS43NjYgNC41MzEtMS4zNDRsLTEuODQ0LTEuMDYyYy0uNTQzLS4wODItMS4wNjYtLjExMy0xLjU2Mi0uMTI1em0zMy41MzEgNC42MjVjLTUuMzk4IDUuMTE3LTE5LjA3OCA2Ljk3My0zMi44NDQgMy44MTMgMTMuNzYyIDUuNjMzIDMyLjc3NyAyLjQ3MyAzMi44NDQtMy44MTJ6IiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+
[springboot-badge]: https://img.shields.io/badge/Spring%20Boot-3.3-gray?style=for-the-badge&logo=springboot&logoColor=white
[postgresql-badge]: https://img.shields.io/badge/PostgreSQL-Latest-gray?style=for-the-badge&logo=postgresql&logoColor=white
[typescript-badge]: https://img.shields.io/badge/TypeScript-5.4-gray?style=for-the-badge&logo=typescript&logoColor=white
[angular-badge]: https://img.shields.io/badge/Angular-17.3-gray?style=for-the-badge&logo=angular&logoColor=white
[bootstrap-badge]: https://img.shields.io/badge/Bootstrap-5.3-gray?style=for-the-badge&logo=bootstrap&logoColor=white
