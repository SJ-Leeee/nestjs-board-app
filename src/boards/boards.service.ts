import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { stat } from 'fs';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException('아이디가 없다');
    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('없는 아이디입니다.');
    }
    return;
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async updateBoardById(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }
}

// getAllBoards(): Board[] {
//   return this.boards;
// }
// createBoard(createBoardDto: CreateBoardDto): Board {
//   const board: Board = {
//     id: uuid(),
//     ...createBoardDto,
//     status: BoardStatus.public,
//   };
//   this.boards.push(board);
//   return board;
// }
// deleteBoard(id: string): void {
//   const found = this.getBoardById(id);
//   this.boards = this.boards.filter((board) => board.id !== found.id);
// }
// updateBoard(id: string, status: BoardStatus): Board {
//   const board = this.getBoardById(id);
//   board.status = status;
//   return board;
// }
