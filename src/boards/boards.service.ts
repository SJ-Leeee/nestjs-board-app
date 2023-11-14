import { Injectable } from '@nestjs/common';
import { Board } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const board: Board = {
      id: uuid(),
      ...createBoardDto,
      status: 'PUBLIC',
    };

    this.boards.push(board);
    return board;
  }
}
