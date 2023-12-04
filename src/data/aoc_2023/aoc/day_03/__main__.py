from collections import defaultdict

from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)
from dataclasses import dataclass
from typing import List, Optional
import re
import math


INPUT_FILENAME = "aoc/day_03/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_03/EXAMPLE_01.txt"
WEIRD_EXAMPLE = "aoc/day_03/WEIRD_EXAMPLE.txt"



@dataclass
class Number:
    value: int
    start: int
    end: int
    row: int


@dataclass
class Point:
    row: int
    pos: int

    def __str__(self):
        return str(self.row) + "-" + str(self.pos)


@dataclass
class Symbol:
    value: str
    point: Point
    numbers: List[Number]
    ratio: Optional[int] = 0

    def __str__(self):
        return str(self.value) + ": " + str(self.point)


NON_SYMBOL_CHARS = "0123456789."


def check_if_has_adjacent_symbol(number: Number, lines):
    start = max(number.start - 1, 0)
    end = min(number.end + 1, len(lines[number.row]))

    for i in range(-1, 2):
        row = number.row + i
        if row > -1 and row < len(lines):
            chars = lines[row][start:end]
            if any(c not in NON_SYMBOL_CHARS for c in chars):
                return True
    return False


def get_adjecent_gear_symbols(number: Number, lines, symbols: List[Symbol]):
    start = max(number.start - 1, 0)
    end = min(number.end + 1, len(lines[number.row]))

    for i in range(-1, 2):
        row = number.row + i
        if row > -1 and row < len(lines):
            chars = lines[row][start:end]
            for i_char, c in enumerate(chars):
                if c == "*":
                    point = Point(row=row, pos=i_char + start)
                    if str(point) in symbols:
                        symbols[str(point)].numbers.append(number)
                    else:
                        symbol = Symbol(
                            value="*",
                            point=point,
                            numbers=[number],
                        )
                        symbols[str(point)] = symbol

    return symbols


def get_numbers_for_line(line: str, row: int) -> List[Number]:
    numbers = []
    number_matches = list(re.finditer("\d+", line))
    for number_match in number_matches:
        numbers.append(
            Number(
                value=int(number_match.group()),
                start=number_match.regs[0][0],
                end=number_match.regs[0][1],
                row=row,
            )
        )
    return numbers


@time_it
def solve_part_1():
    print("Day 03 - Part 1")
    lines = read_input_lines(INPUT_FILENAME, strip_whitespace=True)
    part_numbers = []
    for i, line in enumerate(lines):
        numbers = get_numbers_for_line(line, i)
        if numbers is not None:
            for number in numbers:
                has_adj_symbol = check_if_has_adjacent_symbol(number, lines)
                if has_adj_symbol:
                    part_numbers.append(int(number.value))

    print(f"The sum of all parts numbers is {sum(part_numbers)}")




@time_it
def solve_part_2():
    print("Day 03 - Part 2")
    lines = read_input_lines(INPUT_FILENAME, strip_whitespace=True)
    part_numbers = []

    symbols = {}

    for i, line in enumerate(lines):
        numbers = get_numbers_for_line(line, i)
        if numbers is not None:
            for number in numbers:
                get_adjecent_gear_symbols(number, lines, symbols)

    gear_symbols = [symbol for symbol in symbols.values() if len(symbol.numbers) > 1]

    for gear_symbol in gear_symbols:
        gear_symbol.ratio = math.prod(number.value for number in gear_symbol.numbers)

    print(f"The sum of all ratios is {sum(gear_symbol.ratio for gear_symbol in gear_symbols)}")


if __name__ == "__main__":
    # solve_part_1()
    solve_part_2()
