import { Redis } from "ioredis";
require("dotenv").config();

//create a redis client
export function redisDb(){
const redisClient = () => {
  console.log("process.env.REDIS_URL", process.env.REDIS_URL);
  if (process.env.REDIS_URL) {
    console.log("redis has been connected");
    return process.env.REDIS_URL;
  }
  throw new Error("Redis connection failed");
};

 const redis = new Redis(redisClient());
 return redis
}


