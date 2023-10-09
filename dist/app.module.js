"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_guard_1 = require("./auth/auth.guard");
const auth_module_1 = require("./auth/auth.module");
const chapter_entity_1 = require("./chapter/chapter.entity");
const chapter_module_1 = require("./chapter/chapter.module");
const excercise_entity_1 = require("./excercise/excercise.entity");
const excercise_module_1 = require("./excercise/excercise.module");
const file_entity_1 = require("./file/file.entity");
const file_module_1 = require("./file/file.module");
const topic_entity_1 = require("./topic/topic.entity");
const topic_module_1 = require("./topic/topic.module");
const user_chapter_module_1 = require("./user-chapter/user-chapter.module");
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
const variable_entity_1 = require("./variable/variable.entity");
const variable_module_1 = require("./variable/variable.module");
const user_chapter_entity_1 = require("./user-chapter/user-chapter.entity");
const exercise_variable_entity_1 = require("./exercise-variable/exercise_variable.entity");
const exercise_variable_module_1 = require("./exercise-variable/exercise_variable.module");
const user_topic_entity_1 = require("./user-topic/user_topic.entity");
const user_topic_module_1 = require("./user-topic/user_topic.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const post_module_1 = require("./post/post.module");
const post_entity_1 = require("./post/post.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'frontend'),
                exclude: ['/api*'],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '103.79.143.150',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'hoctienganh',
                entities: [
                    topic_entity_1.TopicEntity,
                    variable_entity_1.VariableEntity,
                    chapter_entity_1.ChapterEntity,
                    exercise_variable_entity_1.ExcerciseVariableEntity,
                    excercise_entity_1.ExcerciseEntity,
                    user_entity_1.UserEntity,
                    file_entity_1.FileEntity,
                    user_topic_entity_1.UserTopic,
                    user_chapter_entity_1.UserChapterEntity,
                    post_entity_1.PostEntity,
                ],
                synchronize: true,
            }),
            topic_module_1.TopicModule,
            variable_module_1.VariableModule,
            excercise_module_1.ExcerciseModule,
            chapter_module_1.ChapterModule,
            exercise_variable_module_1.ExerciseVariableModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            file_module_1.FileModule,
            user_topic_module_1.UserTopicModule,
            user_chapter_module_1.UserChapterModule,
            post_module_1.PostModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map