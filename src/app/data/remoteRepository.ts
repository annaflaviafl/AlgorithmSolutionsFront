import { Maze, NQueen, Sudoku } from "../domain/entities";
import { AlgorithmRepository } from "../domain/services/protocols/algorithmRepository";

class RemoteRepository extends AlgorithmRepository {
    async getNQueen(numberQueens: number): Promise<NQueen> {
        const response = await fetch(`http://localhost:3000/nqueen/${numberQueens}`);
        const data = await response.json();

        return this.toEntityNQueen(data);
    }

    async getSudokuGenerator(): Promise<Sudoku> {
        const response = await fetch(`http://localhost:3000/sudokuGenerator`);
        const data = await response.json();

        return this.toEntitySudokuGenerator(data);
    }

    async getSudoku(board: Sudoku): Promise<Sudoku> {
        const array = JSON.stringify(board.array);
        const response = await fetch(`http://localhost:3000/sudoku/${array}`);
        const data = await response.json();

        return this.toEntitySudoku(data);
    }

    async getMaze(maze: number[][]): Promise<Maze> {
        const array = JSON.stringify(maze);
        const response = await fetch(`http://localhost:3000/maze/${array}`);
        const data = await response.json();

        if (data.solution === false) {
            throw new Error('Não foi possível solucionar o labirinto');
        }

        return this.toEntityMaze(data);
    }

    private toEntityNQueen(data: any): NQueen {
        return {
            array: data.solution,
        }
    }

    private toEntitySudokuGenerator(data: any): Sudoku {
        return {
            array: data.generator.mat,
        }
    }

    private toEntitySudoku(data: any): Sudoku {
        return {
            array: data.solver.grid,
        }
    }

    private toEntityMaze(data: any): Maze {
        return {
            array: data.solution,
        }
    }
};

export default RemoteRepository;