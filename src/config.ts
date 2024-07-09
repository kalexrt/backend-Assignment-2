import dotenv from "dotenv";
dotenv.config();
const defaultPort = 3000;
const config ={
    port:process.env.PORT?process.env.PORT:defaultPort
};
export default config;