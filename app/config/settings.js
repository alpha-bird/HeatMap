import envVars from 'react-native-config';

const env = envVars.STARTER_KIT_ENV || 'staging';

console.log(env);

export const config = {
    env : env,
}