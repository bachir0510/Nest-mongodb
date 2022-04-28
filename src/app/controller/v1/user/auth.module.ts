// import { Module } from "@nestjs/common";
// import { MongooseModule } from "@nestjs/mongoose";
// import { User, UserSchema } from "src/domain/schemas/user.schema";
// import { LoginAuth, RegisterAuth } from "src/domain/use_cases";
// import { AuthController } from "./auth.contollor";
// import {JwtModule} from "@nestjs/jwt"
// import { jwtConstanst } from "../../constantes";


// @Module({
//     imports:[
//         MongooseModule.forFeature([
//             {
//                 name: User.name,
//                 schema: UserSchema
//             }
//         ]),
//         JwtModule.register({
//             secret:jwtConstanst.secret,
//             signOptions: { expiresIn: '60m' },
//           }), 
//     ],
//     controllers:[AuthController],
//     providers:[LoginAuth,RegisterAuth]
// })
// export class AuthModule {}