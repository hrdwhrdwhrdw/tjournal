import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@User() userId: number, @Body() dto: CreatePostDto) {
    return this.postService.create(dto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    userId: number,
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto
  ) {
    return this.postService.update(+id, updatePostDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(userId: number, @Param('id') id: string) {
    return this.postService.remove(+id, userId);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get('user/:id')
  findAllById(@Param('id') id: string) {
    return this.postService.findAllById(+id);
  }

  @Get('/popular')
  getPopularPosts() {
    return this.postService.popular();
  }

  @Get('/search')
  searchPosts(@Query() dto: SearchPostDto) {
    return this.postService.search(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }
}
