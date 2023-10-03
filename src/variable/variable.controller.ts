import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateVariableDto } from './dto/create-variable.dto';
import { UpdateVariableDto } from './dto/update-variable.dto';
import { VariableService } from './variable.service';
import { CheckTenVariableInterceptor } from './interceptors/check-ten-variable.interceptor';

@Controller('variable')
@ApiTags('variable')
export class VariableController {
  constructor(private readonly variableService: VariableService) {}

  @Post()
  @UseInterceptors(CheckTenVariableInterceptor)
  create(@Body() createVariableDto: CreateVariableDto) {
    return this.variableService.create(createVariableDto);
  }

  @Get()
  findAll() {
    return this.variableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variableService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVariableDto: UpdateVariableDto,
  ) {
    return this.variableService.update(+id, updateVariableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variableService.remove(+id);
  }

  @Get('total-variable-in-chapter/:chapterId')
  totalVariableInChapter(@Param('chapterId') chapterId: number) {
    return this.variableService.countTotalVariableInChapter(chapterId);
  }

  @Get('get-four-variable-quiz/:id')
  getFourVariableQuiz(@Param('id') id: string) {
    return this.variableService.getFourVariableQuiz(+id);
  }
}
