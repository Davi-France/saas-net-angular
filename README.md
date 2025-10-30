# 🧠 Recruiter Manager – SaaS de Gerenciamento de Vagas

Sistema completo para gerenciamento de vagas e autenticação de usuários, desenvolvido com **.NET 8 (C#)** no backend e **Angular 18** no frontend.  
O projeto permite **login, registro de usuários, criação e listagem de vagas (jobs)**, com autenticação via **JWT**.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Backend (.NET)
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server / MySQL
- JWT Authentication
- CORS habilitado para o frontend

### 💻 Frontend (Angular)
- Angular 18 (Standalone Components)
- TypeScript
- RxJS
- Angular Router
- HttpClientModule
- CSS puro

---

## 📁 Estrutura do Projeto

/saas-net-angular
│
├── RecruiterManager.Api/ # Backend .NET
│ ├── Controllers/
│ ├── Models/
│ ├── Data/
│ ├── Program.cs
│ └── RecruiterManager.Api.csproj
│
├── recruiter-manager-frontend/ # Frontend Angular
│ ├── src/app/
│ │ ├── pages/
│ │ │ ├── login/
│ │ │ ├── jobs/
│ │ │ ├── job-create/
│ │ │ └── dashboard/
│ │ └── services/
│ └── angular.json
│
└── README.md

💡 Futuras Melhorias


Painel administrativo para gerenciamento de usuários

Filtros e busca avançada nas vagas

Deploy automatizado (Vercel + Render)
