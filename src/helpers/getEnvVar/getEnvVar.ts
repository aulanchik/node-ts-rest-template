import dotenv from 'dotenv';
dotenv.config();

/**
 * Retrieves the value of an environment variable with the specified name. If the variable is not set, the default value is returned.
 *
 * @param {string} name - The name of the environment variable.
 * @param {string | number} defaultValue - The default value to be returned if the variable is not set.
 * @return {string | number} - The value of the environment variable or the default value if the variable is not set.
 */
const getEnvVar = (name: string, defaultValue: string | number): string | number => {
  const value = process.env[name];
  return value || defaultValue;
};

export default getEnvVar;
