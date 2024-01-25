from collections import defaultdict

from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)


INPUT_FILENAME = "aoc/day_07/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_07/EXAMPLE_01.txt"

STRENGTHS = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

POINTS = {
    "Five of a kind": 7,
    "Four of a kind": 6,
    "Full House": 5,
    "Three of a kind": 4,
    "Two pair": 3,
    "One pair": 2,
    "High card": 1,

}


def get_points(hand: str):
    return POINTS[hand]


def evaluate_hand(cards):
    card_dict = defaultdict(int)
    hand = ""

    for c in cards:
        card_dict[c] += 1

    if 5 in card_dict.values():
        hand = "Five of a kind"
    elif 4 in card_dict.values():
        hand = "Four of a kind"
    elif (3 in card_dict.values() and 3 in card_dict.values()):
        hand = "Full house"
    elif 3 in card_dict.values():
        hand = "Three of a kind"





@time_it
def solve_part_1():
    print("Day 07 - Part 1")
    lines = read_input_lines(EXAMPLE_FILENAME)
    for line in lines:
        split_line = line.split()
        cards = split_line[0]
        bid = int(split_line[1])



@time_it
def solve_part_2():
    print("Day 07 - Part 2")


if __name__ == "__main__":
    solve_part_1()
    # solve_part_2()