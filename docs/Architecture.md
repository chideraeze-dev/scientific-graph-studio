
# Scientific Graph Studio Architecture


## System Overview

Scientific Graph Studio uses a full-stack architecture:

Frontend:
- React
- TypeScript
- Tailwind CSS

Backend:
- FastAPI
- Python

Visualization:
- Plotly

---

# Frontend Responsibilities

The frontend handles:

- User interface.
- Data entry.
- Graph settings.
- User interaction.

Folder:

frontend/src/


---

# Backend Responsibilities

The backend handles:

- Data processing.
- Statistical calculations.
- Future scientific analysis.

Folder:

backend/app/


---

# Data Flow

User enters experimental data.

↓

Frontend stores data.

↓

Backend processes calculations.

↓

Visualization displays scientific graph.

↓

User exports final graph.