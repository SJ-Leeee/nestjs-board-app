import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }
}

// type Board = {
//   title: string;
//   text: string;
// };
