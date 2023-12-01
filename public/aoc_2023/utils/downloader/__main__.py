import click
import requests
import browser_cookie3
from bs4 import BeautifulSoup

YEAR = "2023"


def save_to_file(text, filename):
    with open(filename, "w") as f:
        f.write(text)


def leading_zero(number):
    return "{:02d}".format(number)


def download_puzzle(day):
    input_url = f"https://adventofcode.com/{YEAR}/day/{day}"
    cookies = browser_cookie3.chrome(domain_name='adventofcode.com')
    r = requests.get(input_url, cookies=cookies)
    r.raise_for_status()
    soup = BeautifulSoup(r.content, 'html.parser')
    puzzle = soup.find(class_="day-desc").text
    save_to_file(puzzle, f"aoc/day_{leading_zero(day)}/PUZZLE.md")
    return puzzle


def download_examples(day):
    input_url = f"https://adventofcode.com/{YEAR}/day/{day}"
    cookies = browser_cookie3.chrome(domain_name='adventofcode.com')
    r = requests.get(input_url, cookies=cookies)
    r.raise_for_status()
    soup = BeautifulSoup(r.content, 'html.parser')
    examples = soup.find_all("pre")
    for i, example in enumerate(examples):
        save_to_file(example.text, f"aoc/day_{leading_zero(day)}/EXAMPLE_{leading_zero(i+1)}.txt")
    return examples


def download_input(day):
    input_url = f"https://adventofcode.com/{YEAR}/day/{day}/input"
    cookies = browser_cookie3.chrome(domain_name='adventofcode.com')
    r = requests.get(input_url, cookies=cookies)
    r.raise_for_status()
    # print(r.text)
    save_to_file(r.text, f"aoc/day_{leading_zero(day)}/INPUT.txt")
    return r.text


def download_puzzle_html(day):
    input_url = f"https://adventofcode.com/{YEAR}/day/{day}"
    cookies = browser_cookie3.chrome(domain_name='adventofcode.com')
    r = requests.get(input_url, cookies=cookies)
    r.raise_for_status()
    soup = BeautifulSoup(r.content, 'html.parser')
    puzzles = soup.find_all(class_="day-desc")
    puzzles_str = [str(puzzle) for puzzle in puzzles]
    puzzle_html = "\n<p></p>\n".join(puzzles_str)
    save_to_file(puzzle_html, f"aoc/day_{leading_zero(day)}/PUZZLE.html")
    return puzzle_html


@click.command()
@click.argument("day", type=int)
def download_all(day):
    if not day:
        raise ValueError("Missing day input")

    print(f"Downloading Day {day}")

    download_input(day)
    download_puzzle(day)
    download_examples(day)
    download_puzzle_html(day)
    print(f"Download complete!")


if __name__ == "__main__":
    download_all()