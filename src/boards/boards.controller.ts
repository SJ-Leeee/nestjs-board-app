import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './board-status.enum';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Get(':id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch(':id')
  upadetBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardService.updateBoardById(id, status);
  }

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }
}

// @Get()
// getAllBoards(): Board[] {
//   return this.boardService.getAllBoards();
// }

// @Get(':id')
// getBoardById(@Param('id') id: string): Board {
//   return this.boardService.getBoardById(id);
// }

// @Post()
// @UsePipes(ValidationPipe)
// createBoard(@Body() createBoardDto: CreateBoardDto): Board {
//   return this.boardService.createBoard(createBoardDto);
// }

// @Delete(':id')
// deleteBoard(@Param('id') id: string): void {
//   this.boardService.deleteBoard(id);
// }

// @Patch(':id/status')
// // 파이프를 여기서 쓸수도있다.
// updateBoardStatus(
//   @Param('id') id: string, // 파라미터에 파이프를 달 수도있다.
//   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
// ): Board {
//   return this.boardService.updateBoard(id, status);
// }
