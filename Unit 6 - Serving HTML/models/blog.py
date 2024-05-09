from datetime import datetime, timezone
from typing import Optional
from pydantic import BaseModel
from beanie import Document, Indexed


class Blogs(Document):
    title: Indexed(str, unique=True)
    description: str
    body: str
    author: str
    created_on: datetime
    image_link: Optional[str] = None

    class Settings:
        name = "blogs"
