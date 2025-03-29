# 📝 Documentación del Sistema Médico - SIS-MEDIC

## 📌 Descripción del Proyecto

Sistema integral de gestión médica que permite:
- Registro de pacientes y médicos
- Programación de citas
- Gestión de historiales médicos
- Autenticación de usuarios

## 🛠 Tecnologías Utilizadas

### Backend
| Tecnología | Versión | Uso |
|------------|---------|-----|
| Node.js | 18.x | Entorno de ejecución |
| Express | 4.x | Framework web |
| Sequelize | 6.x | ORM para PostgreSQL |
| PostgreSQL | 13.x | Base de datos |
| Docker | 20.x | Contenedorización |

### Frontend
| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.x | Biblioteca UI |
| React Bootstrap | 2.x | Componentes UI |
| Axios | 1.x | Cliente HTTP |

## 🚀 Instalación y Configuración

### Requisitos previos
- Docker y Docker Compose instalados
- Node.js 18.x o superior

### Pasos para iniciar el proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/sis-medic.git
cd sis-medic
```

2. **Configurar variables de entorno**
Crear archivo `.env` en la raíz del proyecto:
```ini
# PostgreSQL
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
POSTGRES_DB=clinica_db

# Backend
DB_HOST=db
DB_PORT=5432
JWT_SECRET=mi_secreto_jwt
```

3. **Iniciar los contenedores**
```bash
docker-compose up --build
```

## 🏗 Estructura del Proyecto

```
sis-medic/
├── backend/
│   ├── src/
│   │   ├── config/       # Configuración de DB
│   │   ├── controllers/  # Lógica de endpoints
│   │   ├── models/       # Modelos de Sequelize
│   │   ├── routes/       # Definición de rutas
│   │   ├── middlewares/  # Middlewares de autenticación
│   │   └── app.js        # Punto de entrada
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Vistas principales
│   │   └── App.js        # Componente raíz
│   └── package.json
└── docker-compose.yml    # Configuración de servicios
```

## 🔍 Endpoints Principales (Backend)

### Autenticación
- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/login` - Inicio de sesión

### Médicos
- `GET /api/medicos` - Listar todos los médicos
- `POST /api/medicos` - Crear nuevo médico

### Pacientes
- `GET /api/pacientes` - Listar pacientes
- `POST /api/pacientes` - Registrar nuevo paciente

### Citas
- `GET /api/citas` - Obtener citas programadas
- `POST /api/citas` - Agendar nueva cita

## 🐳 Configuración Docker

El sistema utiliza tres servicios principales:

1. **PostgreSQL**: Contenedor de base de datos
   - Puerto: 5432
   - Volumen persistente para datos

2. **Backend**: Servidor Node.js
   - Puerto: 5000
   - Depende de PostgreSQL

3. **Frontend**: Aplicación React
   - Puerto: 3000
   - Depende del backend

## 🔄 Flujo de Trabajo

1. **Desarrollo**:
```bash
# Iniciar solo la base de datos
docker-compose up db

# Desarrollar frontend localmente
cd frontend && npm start
```

2. **Producción**:
```bash
# Construir e iniciar todos los servicios
docker-compose up --build -d
```

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

## ✉️ Contacto

Para soporte o contribuciones:
- Email: contacto@sis-medic.com
- Issues: [GitHub Issues](https://github.com/tu-usuario/sis-medic/issues)

---

*Documentación actualizada: ${new Date().toLocaleDateString()}*