'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserController = void 0;
const common_1 = require('@nestjs/common');
const update_user_dto_1 = require('./dto/update-user.dto');
const user_service_1 = require('./user.service');
const jwt_auth_guard_1 = require('../auth/guards/jwt-auth.guard');
const search_user_dto_1 = require('./dto/search-user.dto');
const platform_express_1 = require('@nestjs/platform-express');
const multer_1 = require('multer');
const path_1 = require('path');
const rxjs_1 = require('rxjs');
let UserController = class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  findAll() {
    return this.userService.findAll();
  }
  getProfile(req) {
    return this.userService.findById(+req.user.id);
  }
  update(req, updateUserDto) {
    return this.userService.update(+req.user.id, updateUserDto);
  }
  upload(req, updateUserDto, file) {
    return (0, rxjs_1.of)({ imagePath: file.path });
  }
  search(dto) {
    return this.userService.search(dto);
  }
  findOne(id) {
    return this.userService.findById(+id);
  }
};
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'findAll',
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Request)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'getProfile',
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object, update_user_dto_1.UpdateUserDto]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'update',
  null
);
__decorate(
  [
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)(
      (0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
          destination: './uploads',
          filename: (req, file, cb) => {
            const randomName = Array(32)
              .fill(null)
              .map(() => Math.round(Math.random() * 16).toString(16))
              .join('');
            cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
          },
        }),
      })
    ),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      Object,
      update_user_dto_1.UpdateUserDto,
      Object,
    ]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'upload',
  null
);
__decorate(
  [
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [search_user_dto_1.SearchUserDto]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'search',
  null
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'findOne',
  null
);
UserController = __decorate(
  [
    (0, common_1.Controller)('users'),
    __metadata('design:paramtypes', [user_service_1.UserService]),
  ],
  UserController
);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
