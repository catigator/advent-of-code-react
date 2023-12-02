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
from typing import List


INPUT_FILENAME = "aoc/day_02/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_02/EXAMPLE_01.txt"

TOTALS = {
    "red": 12,
    "green": 13,
    "blue": 14,
}


@dataclass
class ColorNumberTuple:
    number: int
    color: str
    game: int


@dataclass
class Game:
    id: int
    color_number_tuples: List[ColorNumberTuple]


def get_color_number_tuples(line):
    split_line = line.split(": ")
    game = int(split_line[0][5:])
    shows_str = split_line[1].split("; ")

    color_number_tuples: List[ColorNumberTuple] = []

    for show_str in shows_str:
        split_show = show_str.split(", ")
        for tuple_str in split_show:
            split_tuple_str = tuple_str.split(" ")
            number = int(split_tuple_str[0])
            color = split_tuple_str[1]
            color_number_tuples.append(ColorNumberTuple(number=number, color=color, game=game))

    return color_number_tuples


def get_game(line) -> Game:
    color_number_tuples = get_color_number_tuples(line)
    game = Game(color_number_tuples=color_number_tuples, id=color_number_tuples[0].game)
    return game


def is_possible(cnp: ColorNumberTuple):
    return cnp.number <= TOTALS[cnp.color]


def is_game_possible(game: Game):
    for tup in game.color_number_tuples:
        if not is_possible(tup):
            return False

    return True


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


if __name__ == "__main__":
    solve_part_1()
    # solve_part_2()