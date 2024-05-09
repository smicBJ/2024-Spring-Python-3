from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from models.blog import Blogs

router = APIRouter(prefix="", tags=["Home"])
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def get_index(request: Request):
    blogs = await Blogs.find().to_list()
    return templates.TemplateResponse("index.html", {
        "request": request,
        "blogs": blogs
    })
