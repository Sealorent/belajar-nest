import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { Users } from '../../database/user-service/entities/Users';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let userService: UserService;

  const mockSignIn = {
    email: 'dev@languagecenter.id',
    password: 'devlcbisa88',
    token_fcm: 'fr07KOE5SyWMJAwqnI5o1w:APA91bEehyCq1c95oLZEMTpBf8MFl7A99YME3WxCU5tg75QXAraIbJD4RF7tyYl-btleBrQPyqG-4KhFJCkZwiq08QCfEYfvgKTYcp7QMrdVnhYWrib6cJxHzmjDn--xh_RaEm1Sgs49'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, ConfigService, JwtService, UserService],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('signIn', () => {
    it('should return signIn success', async () => {
      // Create a spy for the signInOfficer method
      jest.spyOn(userService, 'signInOfficer').mockResolvedValue({ success: true });

      const result = await authController.signIn(mockSignIn);

      // Verify that signInOfficer was called with the expected parameters
      expect(userService.signInOfficer).toHaveBeenCalledWith(mockSignIn);

      // Verify the result
      expect(result).toEqual({
        success: true,
      });
    });
  });
});
