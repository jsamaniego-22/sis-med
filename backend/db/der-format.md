erDiagram
    usuarios {
        int id PK
        varchar email UNIQUE
        varchar password
        varchar role
        timestamp created_at
        timestamp updated_at
    }
    pacientes {
        int id PK
        int usuario_id FK
        varchar nombre
        varchar cedula UNIQUE
        date fecha_nacimiento
        timestamp created_at
    }
    medicos {
        int id PK
        int usuario_id FK
        varchar nombre
        varchar especialidad
        varchar cedula_profesional UNIQUE
        timestamp created_at
    }
    citas {
        int id PK
        int paciente_id FK
        int medico_id FK
        date fecha
        time hora
        varchar estado
        text motivo
        timestamp created_at
    }
    historial_citas {
        int id PK
        int cita_id FK
        text diagnostico
        text tratamiento
        text notas
        timestamp created_at
    }

    usuarios ||--o{ pacientes: "has"
    usuarios ||--o{ medicos: "has"
    pacientes ||--o{ citas: "books"
    medicos ||--o{ citas: "conducts"
    citas ||--|{ historial_citas: "records"
