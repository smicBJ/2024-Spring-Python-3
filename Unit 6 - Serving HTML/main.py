from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uvicorn

app = FastAPI()
templates = Jinja2Templates(directory="templates")

DATA = [
    "Hudson",
    "Nolan",
    "Richard"
]


@app.get("/", response_class=HTMLResponse)
async def get_index(request: Request):
    student = DATA[1]
    return templates.TemplateResponse("index.html", {
        "request": request,
        "student": student
    })

app.mount("/static", StaticFiles(directory="static"), name="static")

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", reload=True)
