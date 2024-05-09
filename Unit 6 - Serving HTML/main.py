from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uvicorn

from dependencies.database import connect_to_mongodb

app = FastAPI(lifespan=connect_to_mongodb)
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def get_index(request: Request):
    return templates.TemplateResponse("index.html", {
        "request": request
    })

app.mount("/static", StaticFiles(directory="static"), name="static")

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", reload=True)
