import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOption = [BoardStatus.public, BoardStatus.private];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.lowerCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException();
    }
    return value;
  }

  private isStatusValid(value: any): boolean {
    const index = this.StatusOption.indexOf(value);
    return index !== -1;
  }
}
