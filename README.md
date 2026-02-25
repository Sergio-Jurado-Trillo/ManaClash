# ⚔️ ManaClash

> Plataforma web para la gestión competitiva de torneos de Commander.

ManaClash es una aplicación web diseñada para organizar torneos de Commander de forma estructurada, automática y competitiva.  
Permite generar mesas dinámicamente, calcular clasificaciones en tiempo real y gestionar una final Top 4 basada en rendimiento.

---

## 🧙 ¿Qué es ManaClash?

ManaClash nace con el objetivo de simplificar la organización de torneos multijugador mediante:

- Creación de torneos
- Registro de jugadores
- Generación automática de mesas de 4 jugadores
- Sistema de puntuación configurable
- Clasificación dinámica por ranking
- Final automática con el Top 4

La aplicación está pensada para eventos locales, ligas recurrentes o torneos competitivos.

---

## 🏗️ Arquitectura del Proyecto

ManaClash sigue una arquitectura cliente-servidor:

### 🔹 Frontend
- React
- TypeScript
- Vite

Responsable de:
- Interfaz de usuario
- Visualización de mesas
- Clasificación en tiempo real
- Gestión de resultados

### 🔹 Backend
- Node.js
- NestJS
- TypeScript
- Prisma ORM

Responsable de:
- Lógica de emparejamientos
- Sistema de ranking
- Gestión de rondas
- Integridad de datos

### 🗃 Base de Datos
- PostgreSQL

---

## ⚙️ Funcionamiento del Sistema de Torneo

1. Se crea un torneo.
2. Se registran los jugadores.
3. Se genera la primera ronda (mesas de 4 jugadores).
4. Se introducen los resultados.
5. El sistema recalcula automáticamente la clasificación.
6. En cada nueva ronda:
   - Los 4 con más puntos juegan juntos.
   - Los siguientes 4 también.
   - Y así sucesivamente.
7. En la ronda final se genera una única mesa con el Top 4.

---

## 🧠 Filosofía Técnica

- Toda la lógica crítica vive en el backend.
- El frontend es una capa de visualización.
- Arquitectura modular y escalable.
- Tipado fuerte con TypeScript para evitar errores.
- Diseño preparado para crecer (estadísticas, ELO, historial, etc.).

---

## 🚀 Roadmap

### 🔹 Fase 1 – MVP
- [ ] Crear torneo
- [ ] Añadir jugadores
- [ ] Generar rondas automáticas
- [ ] Introducir resultados
- [ ] Clasificación dinámica
- [ ] Final Top 4

### 🔹 Fase 2
- [ ] Autenticación de usuarios
- [ ] Historial de torneos
- [ ] Prevención básica de emparejamientos repetidos

### 🔹 Fase 3
- [ ] Estadísticas avanzadas
- [ ] Sistema de ranking global
- [ ] Exportación de resultados
- [ ] Panel de administración

---

## 📌 Estado del Proyecto

En desarrollo 🚧

---

## 🤝 Contribuciones

Este proyecto es privado.  
Cualquier colaboración, modificación o distribución debe ser **autorizada expresamente por el autor**.  
Si quieres contribuir, contacta con el autor en [sergiojurado973@gmail.com] para recibir autorización.

---

## 📜 Licencia y Confidencialidad

ManaClash es software propietario. Todos los derechos reservados.  
Se aplica la licencia contenida en el archivo [`LICENSE`](./LICENSE).  

**Resumen:**
- Solo personas autorizadas por el autor pueden usar o modificar el software.
- Todo acceso al código fuente o documentación debe considerarse confidencial.
- Queda estrictamente prohibida cualquier distribución, modificación o uso no autorizado.

---

## ⚡ Visión

ManaClash aspira a convertirse en una herramienta moderna, clara y competitiva para la comunidad de torneos multijugador.

Que el mejor estratega domine la mesa.

