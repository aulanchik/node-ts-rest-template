import dotenv from 'dotenv';
dotenv.config();

/**
 * Retrieves the value of an environment variable with the given name. If the variable is not found,
 * it returns the provided default value.
 *
 * @param {string} name - The name of the environment variable to retrieve.
 * @param {string | number} defaultValue - The default value to return if the environment variable is not found.
 * @return {string} - The value of the environment variable, or the default value if not found.
 */
const getEnvVar = (name: string, defaultValue: string | number): string => {
  const value = process.env[name];
  const parsedValue = defaultValue.toString();
  return value || parsedValue;
};

export default getEnvVar;
