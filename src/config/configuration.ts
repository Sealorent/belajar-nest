import { JwtModule } from "@nestjs/jwt";


export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3001,
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    }
});


export const jwtConfig = () => JwtModule.register({
  global: true,
  secret: process.env.JWT_SECRET || 'secretKey',
  signOptions: { expiresIn: '60s' },
});


