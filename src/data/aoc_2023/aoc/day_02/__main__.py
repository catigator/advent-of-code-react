from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_lines_strip_newline,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)
from dataclasses import dataclass
from typing import List, Dict



INPUT_FILENAME = "aoc/day_02/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_02/EXAMPLE_01.txt"

TOTALS = {
    "red": 12,
    "green": 13,
    "blue": 14,
}


@dataclass
class ColorShow:
    number: int
    color: str
    game: int


@dataclass
class Game:
    id: int
    color_shows: List[ColorShow]


def get_color_shows(line):
    split_line = line.split(": ")
    game = int(split_line[0][5:])
    shows_str = split_line[1].split("; ")

    color_shows: List[ColorShow] = []

    for show_str in shows_str:
        split_show = show_str.split(", ")
        for tuple_str in split_show:
            split_tuple_str = tuple_str.split(" ")
            number = int(split_tuple_str[0])
            color = split_tuple_str[1]
            color_shows.append(ColorShow(number=number, color=color, game=game))

    return color_shows


def get_game(line) -> Game:
    color_shows = get_color_shows(line)
    game = Game(color_shows=color_shows, id=color_shows[0].game)
    return game


def is_possible(color_show: ColorShow):
    return color_show.number <= TOTALS[color_show.color]


def is_game_possible(game: Game):
    for color_show in game.color_shows:
        if not is_possible(color_show):
            return False

    return True


def get_fewest_colors_possible_for_game(game: Game) -> Dict[str, int]:
    fewest_colors = {
        "red": 0,
        "green": 0,
        "blue": 0,
    }
    for color_show in game.color_shows:
        if color_show.number > fewest_colors[color_show.color]:
            fewest_colors[color_show.color] = color_show.number

    return fewest_colors


def get_power(colors: Dict[str, int]):
    power = colors["red"] * colors["green"] * colors["blue"]
    return power


@time_it
def solve_part_1():
    lines = read_input_lines_strip_newline(INPUT_FILENAME)
    game_ids = []
    for line in lines:
        game = get_game(line)
        if is_game_possible(game):
            game_ids.append(game.id)
    print("Day 02 - Part 1")
    print(f"The sums of IDs of successful games is {sum(game_ids)}")


@time_it
def solve_part_2():
    print("Day 02 - Part 2")

    lines = read_input_lines_strip_newline(INPUT_FILENAME)
    power_sums = []

    for line in lines:
        game = get_game(line)
        fewest_colors = get_fewest_colors_possible_for_game(game)
        power = get_power(fewest_colors)
        power_sums.append(power)

    print(f"The sums of all powers is {sum(power_sums)}")


if __name__ == "__main__":
    solve_part_1()
    solve_part_2()
