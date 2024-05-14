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


@router.get("/blogs/add", response_class=HTMLResponse)
async def get_blog_add(request: Request):
    return templates.TemplateResponse("blog_add.html", {
        "request": request
    })


@router.get("/blogs/{blog_id}", response_class=HTMLResponse)
async def get_blog_by_id(request: Request, blog_id: str):
    blog = await Blogs.get(blog_id)
    return templates.TemplateResponse("blog_detail.html", {
        "request": request,
        "blog": blog
    })


@router.get("/about", response_class=HTMLResponse)
async def get_about(request: Request):
    return templates.TemplateResponse("about.html", {
        "request": request
    })
