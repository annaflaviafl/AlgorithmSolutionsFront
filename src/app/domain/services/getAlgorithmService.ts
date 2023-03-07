import { Maze, NQueen, Sudoku } from "../entities";
import { AlgorithmRepository } from "./protocols/algorithmRepository";

class GetAlgorithmService {
    constructor(private readonly repo: AlgorithmRepository) { }

    async nQueen(numberQueens: number): Promise<NQueen> {
        const result = await this.repo.getNQueen(numberQueens);
        return result;
    }

    async sudokuGenerator(): Promise<Sudoku> {
        const result = await this.repo.getSudokuGenerator();
        return result;
    }

    async sudokuSolver(sudoku: Sudoku): Promise<Sudoku> {
        const result = await this.repo.getSudoku(sudoku);
        return result;
    }

    async mazeSolver(maze: number[][]): Promise<Maze> {
        const result = await this.repo.getMaze(maze);
        return result;
    }

}

export default GetAlgorithmService;