import { Maze, NQueen, Sudoku } from "../../entities";

export abstract class AlgorithmRepository {
    abstract getNQueen(numberQueens: number): Promise<NQueen>;
    abstract getSudoku(sudoku: Sudoku): Promise<Sudoku>;
    abstract getSudokuGenerator(): Promise<Sudoku>;
    abstract getMaze(maze: number[][]): Promise<Maze>;
}