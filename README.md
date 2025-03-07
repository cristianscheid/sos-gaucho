# SOS Gaucho

## Project Status

Currently under active development, with core features such as user management and story submission being implemented. Additional features and improvements will follow in the upcoming months.

## Description

SOS Gaucho is a platform designed to connect people affected by natural disasters in Rio Grande do Sul, Brazil, with volunteers offering assistance. Affected individuals can share their stories, detailing how they were impacted, along with images and information about the help they need (e.g., manual labor, transportation). Built with Spring Boot as a RESTful API for the backend, and Angular with Bootstrap for the frontend, the platform serves as a bridge between those in need and those offering help.

## Features

- User signup and login
- Profile viewing, editing, and deletion
- Ability to create, edit, and delete personal stories with descriptions, images, and additional details
- Dynamic feed to explore and browse stories
- Secure routes with JWT-based authentication and authorization

## Built With

![Java][java-img-shield]
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3-gray?logo=springboot&style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-gray?logo=postgresql&style=for-the-badge)

![TypeScript](https://img.shields.io/badge/TypeScript-5.4-gray?logo=typescript&style=for-the-badge)
![Angular](https://img.shields.io/badge/Angular-17.3-gray?logo=angular&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-gray?logo=bootstrap&style=for-the-badge)

## Contributors

This project is being developed collaboratively. We would like to acknowledge and thank the following contributors for their dedication and support:

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

<!-- Custom image shield for the Built With section -->

[java-img-shield]: https://img.shields.io/badge/Java-21-gray?logo=data:image/png;base64,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&style=for-the-badge
