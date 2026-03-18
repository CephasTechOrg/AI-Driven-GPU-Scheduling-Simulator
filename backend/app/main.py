from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.simulation.engine import SimulationEngine

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = SimulationEngine()
engine.start()


@app.get("/state")
def get_state():
    return engine.get_state()


@app.post("/mode/{mode}")
def set_mode(mode: str):
    if mode not in ["fifo", "smart"]:
        return {"error": "invalid mode"}

    engine.set_mode(mode)
    return {"message": f"mode set to {mode}"}


@app.post("/reset")
def reset():
    global engine
    engine.stop()
    engine = SimulationEngine()
    engine.start()
    return {"message": "simulation reset"}
