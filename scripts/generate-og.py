#!/usr/bin/env python3
"""Regenerate 1200x630 Open Graph images into public/."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = Path(__file__).resolve().parent / "fonts"
PUBLIC = ROOT / "public"

paper = (246, 243, 238)
ink = (28, 25, 23)
stone = (92, 86, 78)
accent = (63, 74, 60)
line = (216, 210, 200)


def render(path: Path, role: str) -> None:
    img = Image.new("RGB", (1200, 630), paper)
    d = ImageDraw.Draw(img)
    news_lg = ImageFont.truetype(str(FONTS / "Newsreader-500.ttf"), 92)
    news_md = ImageFont.truetype(str(FONTS / "Newsreader-400.ttf"), 36)
    inter = ImageFont.truetype(str(FONTS / "Inter-400.ttf"), 26)
    x = 88
    d.rectangle([x, 86, x + 64, 90], fill=accent)
    d.text((x, 130), "Alvaro Vasconcelos", font=news_lg, fill=ink)
    name_box = d.textbbox((x, 130), "Alvaro Vasconcelos", font=news_lg)
    y = name_box[3] + 22
    d.text((x, y), role, font=news_md, fill=accent)
    role_box = d.textbbox((x, y), role, font=news_md)
    y = role_box[3] + 48
    d.rectangle([x, y, 1200 - x, y + 1], fill=line)
    d.text((x, 630 - 88 - 28), "alvsconcelos.dev", font=inter, fill=stone)
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path}")


if __name__ == "__main__":
    render(PUBLIC / "og-en.png", "Engineering Manager at Housecall Pro")
    render(PUBLIC / "og-pt.png", "Engineering Manager na Housecall Pro")
