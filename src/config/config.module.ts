import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { configuration } from './configuration';

const SetupConfig = ConfigModule.forRoot({ 
  envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
  load: [configuration] 
});
  
const SetupThrottler = ThrottlerModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => [
    {
      ttl: config.get<number>('THROTTLE_TTL'),
      limit: config.get<number>('THROTTLE_LIMIT'),
    },
  ],
});

export {SetupConfig , SetupThrottler }
