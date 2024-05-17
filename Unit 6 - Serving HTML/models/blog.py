from datetime import datetime, timezone
from typing import Optional
from fastapi import Request
from pydantic import BaseModel
from beanie import Document, Indexed


class Blogs(Document):
    title: Indexed(str, unique=True)
    description: str
    body: str
    author: str
    created_on: datetime = datetime.now(tz=timezone.utc)
    image_link: Optional[str] = None

    class Settings:
        name = "blogs"


class BlogForm:

    def __init__(self, request: Request):
        self.request: Request = request
        self.form_data = None

    async def create_form_data(self):
        form = await self.request.form()
        form_dictionary = {}
        for key, value in form.items():
            print(f"Key: {key}, Value: {value} ")
            form_dictionary[key] = value
        self.form_data = form_dictionary
